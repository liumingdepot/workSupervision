<template>
	<!-- 字典管理 -->
	<div class="page-container">
		<!--工具栏-->
		<div class="toolbar" style="display: flex;margin-bottom: 20px">
			<el-input size="small" v-model="search" placeholder="名称" style="width: 200px;margin-right: 20px"></el-input>
			<el-button type="primary" size="mini" @click="searchData">查询</el-button>
			<el-button type="primary" size="mini" plain @click="handleAdd">新增</el-button>
		</div>

		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" size="mini" style="width: 100%;" :header-cell-style="$store.state.project.headerName"
		          v-loading="loading" element-loading-text="$t('action.loading')" stripe>
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column prop="userName" label="登陆账号"></el-table-column>
			<el-table-column prop="name" label="用户昵称"></el-table-column>
			<el-table-column prop="email" label="邮箱"></el-table-column>
			<el-table-column prop="mobile" label="电话"></el-table-column>
			<el-table-column prop="sort" sortable label="排序"></el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-switch @change="changeStatus(scope.row)" :value="scope.row.status == 0 ? true : false" active-color="#08D59C" inactive-color="#b5b5b5">
					</el-switch>
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
		<el-pagination class="pagination" small @current-change="handleCurrentChange" :current-page="page.pageNo" :page-sizes="page.limits"
		            hide-on-single-page   :page-size="page.limit" layout="total, prev, pager, next, jumper" :total="page.totalNumber"/>

		<!-- 新增修改界面 -->
		<el-dialog :title="show == 'add' ? '新增' : '修改'" width="500px" :visible.sync="dialogVisible" :close-on-click-modal="false">
			<el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="submitForm()" label-width="80px" size="small"
			         style="text-align:left;">
				<!--账号信息-->
				<el-form-item label="昵称">
					<el-input v-model="dataForm.name" placeholder="角色名称"></el-input>
				</el-form-item>
				<!-- 登录账号 -->
				<el-form-item label="登录账号">
					<el-input v-if="show == 'add'" v-model="dataForm.userName" placeholder="登录账号"></el-input>
					<el-input v-if="show == 'put'" v-model="dataForm.userName" disabled></el-input>
				</el-form-item>
				<!-- 登录信息 -->
				<el-form-item label="登录邮箱">
					<el-input v-model="dataForm.email" placeholder="邮箱"></el-input>
				</el-form-item>
				<el-form-item label="职位">
					<el-input v-model="dataForm.position" placeholder="职位"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="dataForm.password1" placeholder="登录密码"></el-input>
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
					<el-input-number v-model="dataForm.sort" controls-position="right" :min="0" label="排序编号"></el-input-number>
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
				search: '',
				value: true,
				list: [],
				popupTreeData: [],
				dialogVisible: false,
				dialogVisible1: false,
				allocationArr: [],
				allocationData: '',
				dataForm: {
					companyId: "",
					email: "",
					mobile: "",
					name: "",
					sort: 0,
					userName: "",
					userType: "",
					position: ""
				},
				show: 'add',
				page: {
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
		},
		methods: {
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
			async searchData() {
				const params = {
					limit: 12,
					pageNo: 1,
					companyId: sessionStorage.getItem("companyId")
				}
				const names = await this.$api.user.list({name: this.search, ...params})
				const email = await this.$api.user.list({email: this.search, ...params})
				const phone = await this.$api.user.list({phone: this.search, ...params})
				const username = await this.$api.user.list({username: this.search, ...params})
				const lists = [...names.data.resultList, ...email.data.resultList, ...phone.data.resultList, ...username.data.resultList]
				const obj = {};
				this.list = lists.filter((item, index, arr)=>{
					return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
				})
			},
			// 获取数据
			findTreeData(type) {
				this.loading = true;
				this.$api.user.list({
					limit: this.page.limit,
					pageNo: this.page.pageNo,
					companyId: sessionStorage.getItem("companyId")
				}).then(res => {
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
				dataForm.userType = sessionStorage.getItem('userType')
				dataForm.companyId = sessionStorage.getItem('companyId')
				dataForm.password = dataForm.password1
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
	.pagination {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
