<template>
	<!-- 字典管理 -->
	<div class="page-container">
		<!--工具栏-->
		<div class="toolbar" style="display: flex;margin-bottom: 10px">
			<el-input size="mini" v-model="filters.name" placeholder="请输入搜索条件" style="width: 200px;margin-right: 10px"></el-input>
			<el-button type="primary" size="mini" @click="findTreeData(true)">查询</el-button>
			<el-button type="primary" size="mini" plain @click="handleAdd">新增</el-button>
		</div>

		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" stripe size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="userName" label="登陆账号"></el-table-column>
			<el-table-column prop="name" label="用户昵称"></el-table-column>
			<el-table-column label="用户类型">
				<template slot-scope="scope">
					{{ ['监理单位','施工单位','劳务分包商','施工队'][scope.row.userType] }}
				</template>
			</el-table-column>
			<!-- 分配角色 -->
			<el-table-column label="角色">
				<template slot-scope="scope">
					<el-button size="mini" type="text" @click="allocation(scope.row)" circle icon="fa fa-edit">
						{{ scope.row.roleName||'暂无'}}
					</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="companyName" label="归属公司">
				<template slot-scope="scope">
					<el-tooltip class="item" :content="scope.row.companyName" placement="bottom" effect="light">
						<span class="name">{{ scope.row.companyName}}</span>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column prop="phone" label="手机"></el-table-column>
			<el-table-column prop="mobile" label="电话"></el-table-column>
			<!-- 排序 -->
			<el-table-column prop="sort" sortable label="排序"></el-table-column>
			<!-- 操作 -->
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-switch @change="changeStatus(scope.row)" :value="scope.row.status == 0 ? true : false" active-color="#13ce66"
					           inactive-color="#ff4949"></el-switch>
				</template>
			</el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right" width="185" label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
					<span style="color:999999">&nbsp;|&nbsp; </span>
					<el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="margin-top:30px;float: right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo" hide-on-single-page
		              hide-on-single-page :page-sizes="page.limits" :page-size="page.limit" layout="total, sizes, prev, pager, next, jumper" :total="page.totalNumber"></el-pagination>

		<!--分配角色-->
		<el-dialog title="分配角色" width="600px" :visible.sync="dialogVisible1"
		           :close-on-click-modal="false">
			<el-select v-model="roleId" placeholder="请选择" @change="changeStatusData">
				<el-option v-for="item in allocationArr" :key="item.id" :label="item.name" :value="item.id">
				</el-option>
			</el-select>
			<span slot="footer" class="dialog-footer">
               <el-button size="small" @click="dialogVisible1 = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitAllocation">确认</el-button>
            </span>
		</el-dialog>

		<!-- 新增修改界面 -->
		<el-dialog :title="show == 'add' ? '新增' : '修改'" width="500px" :visible.sync="dialogVisible"
		           :close-on-click-modal="false">
			<el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="submitForm()"
			         label-width="80px" size="small" style="text-align:left;">
				<!--头像-->
				<el-form-item label="头像">
					<Lavatar @avatar="avatar" :avatar="dataForm.avatar"></Lavatar>
				</el-form-item>
				<!-- 登录账号 -->
				<el-form-item label="登录账号">
					<el-input v-if="show == 'add'" v-model="dataForm.userName" placeholder="登录账号"></el-input>
					<el-input v-if="show == 'put'" v-model="dataForm.userName" disabled></el-input>
				</el-form-item>
				<!-- 城市 -->
				<el-form-item label="城市">
					<Lcity @city="city"></Lcity>
				</el-form-item>
				<!-- 公司归属 -->
				<el-form-item label="公司归属">
					<el-cascader :options="popupTreeData" @change="handleChange"
					             :props="{label: 'name', children: 'children', value: 'aaa' }"
					             :show-all-levels="false"></el-cascader>
					<el-tooltip class="item" effect="dark" content="没有所属公司，先创建公司" placement="top-start">
						<el-button type="primary" @click="companyChange" plain>创建公司</el-button>
					</el-tooltip>
				</el-form-item>
				<!-- 类型选择 -->
				<el-form-item label="类型选择">
					<el-select v-model="dataForm.userType" placeholder="请选择">
						<el-option value="0" label="监理单位"></el-option>
						<el-option value="1" label="施工单位"></el-option>
						<el-option value="2" label="劳务分包商"></el-option>
						<el-option value="3" label="施工队"></el-option>
					</el-select>
				</el-form-item>
				<!-- 菜单类型 -->
				<el-form-item label="用户状态" prop="type">
					<el-radio-group v-model="dataForm.status">
						<el-radio label="0">启用</el-radio>
						<el-radio label="1">禁用</el-radio>
					</el-radio-group>
				</el-form-item>
				<!-- 排序编号 -->
				<el-form-item label="排序编号">
					<el-input-number v-model="dataForm.sort" controls-position="right" :min="0"
					                 label="排序编号"></el-input-number>
				</el-form-item>
				<!-- 登录信息 -->
				<el-form-item label="登录邮箱">
					<el-input v-model="dataForm.email" placeholder="邮箱"></el-input>
				</el-form-item>
				<el-form-item label="电话">
					<el-input v-model="dataForm.mobile" placeholder="角色名称"></el-input>
				</el-form-item>
				<el-form-item label="手机">
					<el-input v-model="dataForm.phone" placeholder="角色名称"></el-input>
				</el-form-item>
				<!--账号信息-->
				<el-form-item label="昵称">
					<el-input v-model="dataForm.name" placeholder="角色名称"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">{{ $t('action.cancel') }}</el-button>
                <el-button size="small" v-if="show == 'put'" type="primary" @click="submitForm(show)">修改</el-button>
                <el-button size="small" v-if="show == 'add'" type="primary" @click="submitForm(show)">新增</el-button>
            </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				filters: {
					name: '',
					email: '',
					phone: '',
					username: ''
				},
				value: true,
				list: [],
				popupTreeData: [],
				dialogVisible: false,
				dialogVisible1: false,
				allocationArr: [],
				roleId: '',
				id:'',
				dataForm: {
					avatar: "",
					city: "",
					province: "",
					companyCode: "",
					companyId: "",
					email: "",
					mobile: "",
					name: "",
					phone: "",
					sort: 0,
					status: "",
					userName: "",
					userType: ""
				},
				show: 'add',
				page: {
					limits: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
					limit: 12,
					pageNo: 1,
					pageSize: 10,
					totalNumber: 0
				},
				dataRule: {
					name: [
						{
							required: true,
							message: '名称不能为空',
							trigger: 'blur'
						}
					]
				}
			};
		},
		mounted() {
			this.findTreeData();
			this.company()
		},
		methods: {
			//公司列表
			company() {
				this.$api.company.findAllCompanyList().then(res => {
					res.data.forEach(val => {
						val.aaa = [val.code, val.id]
					})
					let newData = this.$tool.tree(res.data)
					this.popupTreeData = newData
				})
			},
			//选择公司
			handleChange(arr) {
				const company = arr[arr.length - 1]
				this.dataForm.companyId = company[1]
				this.dataForm.companyCode = company[0]
			},
			//分配角色
			allocation(item) {
				this.$api.authority.findAll().then(res => {
					this.allocationArr = res.data
				})
				this.id = item.id
				this.dialogVisible1 = true;
			},
			changeStatusData(roleId){
				this.roleId = roleId
			},
			//提交分配
			submitAllocation() {
				this.$api.user.editUserRole({
					id: this.id ,
					roleId: this.roleId
				}).then(res => {
					this.$message({message: res.msg, type: 'success'})
					this.findTreeData();
					this.dialogVisible1 = false;
				})
			},
			//获取头像
			avatar(avatar) {
				this.dataForm.avatar = avatar
			},
			city(city) {
				this.dataForm.province = city[1]
				this.dataForm.city = city[2]
			},
			//创建公司
			companyChange() {
				this.$router.push({path: '/company'})
			},
			//改变状态
			changeStatus(e) {
				let data = {
					userId: e.id
				}
				data.status = e.status == '0' ? '1' : '0'
				this.$api.user.updateStatus(data).then(res => {
					if (res.code == 200) {
						this.findTreeData();
					}
				})
			},
			//改变页数
			handleSizeChange(limit) {
				this.page.limit = limit;
				this.findTreeData();
			},
			handleCurrentChange(pageNo) {
				this.page.pageNo = pageNo;
				this.findTreeData()
			},
			// 获取数据
			findTreeData(type) {
				this.loading = true;
				let params = type ? {
					limit: this.page.limit,
					pageNo: this.page.pageNo,
					...this.filters
				} : {
					limit: this.page.limit,
					pageNo: this.page.pageNo,
				}
				this.$api.user.list(params).then(res => {
					this.list = res.data.resultList
					this.page.totalNumber = res.data.totalNumber
					this.loading = false;
				});
			},
			// 显示新增界面
			handleAdd() {
				this.show = 'add'
				this.dataForm = {
					avatar: "",
					city: "",
					province: "",
					companyCode: "",
					companyId: "",
					email: "",
					mobile: "",
					name: "",
					phone: "",
					sort: 0,
					status: "",
					userName: "",
					userType: ""
				}
				this.dialogVisible = true;
			},
			// 菜单树选中
			handleTreeSelectChange(data, node) {
				this.dataForm.parentId = data.id;
				this.dataForm.parentName = data.name;
			},
			// 显示编辑界面
			handleEdit(row) {
				this.show = 'put'
				Object.assign(this.dataForm, row);
				this.dialogVisible = true;
			},
			// 删除
			handleDelete({id}) {
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$api.user.userDelete(id).then(res => {
						this.findTreeData();
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			},
			// 表单提交
			submitForm(type) {
				const api = type == 'put' ? 'update' : 'save';
				const dataForm = this.dataForm
				if (type == 'put') {
					delete dataForm.userName
				}
				this.$refs['dataForm'].validate(valid => {
					if (valid) {
						this.editLoading = true;
						this.$api.user[api](dataForm).then(res => {
							this.editLoading = false;
							if (res.code == 200) {
								this.$message({message: '操作成功', type: 'success'});
								this.$refs['dataForm'].resetFields();
								this.dialogVisible = false;
							} else {
								this.$message({message: res.msg, type: 'error'});
							}
							this.findTreeData();
						});
					}
				});
			}
		}
	};
</script>

<style>
	.name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
		cursor: pointer;
	}
</style>
