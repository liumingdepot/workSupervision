<template>
	<!-- 单位管理 -->
	<div class="page-container">
		<!--工具栏-->
		<el-button size="mini" type="primary" @click="handleAdd" style="margin-bottom: 10px;float: left">新增</el-button>

		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" width="200" label="单位名称" show-overflow-tooltip></el-table-column>
			<el-table-column prop="type" label="单位类型">
				<template slot-scope="scope">
					{{ USER[scope.row.type] }}
				</template>
			</el-table-column>
			<el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
			<el-table-column prop="mobile" label="单位电话" show-overflow-tooltip></el-table-column>
			<el-table-column prop="email" label="单位邮箱" show-overflow-tooltip></el-table-column>
			<el-table-column prop="manager" label="负责人" show-overflow-tooltip></el-table-column>
			<el-table-column prop="phone" label="联系电话" show-overflow-tooltip></el-table-column>
			<el-table-column prop="creditCode" label="社会信用代码" show-overflow-tooltip></el-table-column>
			<!-- 排序 -->
			<el-table-column prop="sort" sortable header-align="center" align="center" label="排序"></el-table-column>
			<!-- 操作 -->
			<el-table-column header-align="center" align="center" label="状态">
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
		<el-pagination class="pagination" small @current-change="handleCurrentChange" :current-page="page.pageNo" :page-sizes="page.limits" hide-on-single-page
		             :page-size="page.limit" layout="total, prev, pager, next, jumper" :total="page.totalNumber"/>

		<!-- 新增修改界面 -->
		<el-dialog :title="show == 'add' ? '新增' : '修改'" width="600px" lock-scroll :visible.sync="dialogVisible"
		           :close-on-click-modal="false">
			<el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="submitForm()"
			         label-width="140px" label-position="left" size="small" style="text-align:left;">
				<!-- 单位名称 -->
				<el-form-item label="单位名称">
					<el-input v-model="dataForm.name" placeholder="角色名称"></el-input>
				</el-form-item>
				<!-- 单位类型 -->
				<el-form-item label="单位类型">
					<lm-select type="USER" @changeSelect="changeSelect"/>
				</el-form-item>
				<!-- 上级菜单 -->
				<el-form-item label="上级菜单">
					<popup-tree-input
							width="200px"
							:data="popupTreeData"
							:props="popupTreeProps"
							:prop="dataForm.parentName||'顶级单位'"
							:nodeKey="'' + dataForm.parentId"
							:currentChangeHandle="handleTreeSelectChange"
					></popup-tree-input>
				</el-form-item>
				<!-- 单位邮箱 -->
				<el-form-item label="单位邮箱">
					<el-input v-model="dataForm.email" placeholder="单位邮箱"></el-input>
				</el-form-item>
				<!-- 单位地址 -->
				<el-form-item label="单位地址">
					<el-input v-model="dataForm.address" placeholder="单位地址"></el-input>
				</el-form-item>
				<!-- 单位电话 -->
				<el-form-item label="单位图标">
					<el-input v-model="dataForm.mark" placeholder="单位图标"></el-input>
				</el-form-item>
				<!-- 单位电话 -->
				<el-form-item label="单位电话">
					<el-input v-model="dataForm.mobile" placeholder="单位电话"></el-input>
				</el-form-item>
				<!-- 单位信息 -->
				<el-form-item label="单位信息">
					<el-input v-model="dataForm.description" placeholder="单位信息"></el-input>
				</el-form-item>
				<!-- 单位资质 -->
				<el-form-item label="单位资质">
					<el-input v-model="dataForm.quality" placeholder="单位资质"></el-input>
				</el-form-item>
				<!-- 社会信用统一代码 -->
				<el-form-item label="社会信用统一代码">
					<el-input v-model="dataForm.creditCode" placeholder="社会信用统一代码"></el-input>
				</el-form-item>
				<!-- 负责任姓名 -->
				<el-form-item label="负责任姓名">
					<el-input v-model="dataForm.manager" placeholder="负责任姓名"></el-input>
				</el-form-item>
				<!-- 负责任电话 -->
				<el-form-item label="负责任电话">
					<el-input v-model="dataForm.phone" placeholder="负责任电话"></el-input>
				</el-form-item>
				<!-- 负责任身份证 -->
				<el-form-item label="负责任身份证">
					<el-input v-model="dataForm.idCard" placeholder="负责任身份证"></el-input>
				</el-form-item>
				<!-- 负责任身份证照片 -->
				<el-form-item label="负责任身份证照片">
					<el-input v-model="dataForm.idCardImg" placeholder="负责任身份证照片"></el-input>
				</el-form-item>
				<!-- 状态 -->
				<el-form-item label="状态">
					<el-radio-group v-model="dataForm.status">
						<el-radio label="0">启用</el-radio>
						<el-radio label="1">禁用</el-radio>
					</el-radio-group>
				</el-form-item>
				<!-- 排序编号 -->
				<el-form-item label="排序编号" prop="sort">
					<el-input-number v-model="dataForm.sort" controls-position="right" :min="0"
					                 label="排序编号"></el-input-number>
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
					name: ''
				},
				value: true,
				list: [],
				popupTreeProps: {
					label: 'name',
					children: 'children'
				}, popupTreeData: [],

				dialogVisible: false,
				dataForm: {
					address: "",
					creditCode: "",
					detailId: "",
					email: "",
					idCard: "",
					idCardImg: "",
					manager: "",
					mark: "",
					mobile: "",
					name: "",
					parentId: "",
					phone: "",
					quality: "",
					sort: 0,
					status: "",
					type: "",
				},
				show: 'add',
				page: {
					limits: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
					limit: 10,
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
				},
				USER: []
			};
		},
		async mounted() {
			this.USER = await this.$tool.findDictByCode('USER')
			this.findTreeData();
		},
		methods: {
			changeSelect(e) {
				this.dataForm.type = e
			},
			changeStatus(e) {
				let data = {
					id: e.id
				}
				data.status = e.status == '0' ? '1' : '0'
				this.$api.company.updateStatus(data).then(res => {
					if (res.code == 200) {
						this.findTreeData();
					}
				})
			},
			// 菜单树选中
			handleTreeSelectChange(data, node) {
				this.dataForm.parentId = data.id;
				this.dataForm.parentName = data.name;
			},
			// 获取上级菜单树
			getParentMenuTree(tableTreeDdata) {
				let parent = {
					parentId: 0,
					name: '顶级单位',
					children: tableTreeDdata
				};
				return [parent];
			},
			//分页
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
				let params = {
					limit: this.page.limit,
					pageNo: this.page.pageNo
				};
				this.$api.company.list(params).then(res => {
					this.list = this.$tool.tree(res.data.resultList)
					this.popupTreeData = this.getParentMenuTree(this.list);
					this.page.totalNumber = res.data.totalNumber
					this.loading = false;
				});
			},
			// 显示新增界面
			handleAdd() {
				this.show = 'add'
				this.dataForm = {
					address: "",
					creditCode: "",
					detailId: "",
					email: "",
					idCard: "",
					idCardImg: "",
					manager: "",
					mark: "",
					mobile: "",
					name: "",
					parentId: "0",
					phone: "",
					quality: "",
					sort: 0,
					status: "",
					type: "",
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
			handleDelete(res) {
				if (res.children && res.children.length > 0) {
					this.$message({message: '请删除子集', type: 'error'});
					return;
				}
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$api.company.companyDelete(res.id).then(res => {
						this.findTreeData();
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			},
			// 表单提交
			submitForm(type) {
				//判断新增or修改
				const api = type == 'put' ? 'update' : 'save';
				this.$refs['dataForm'].validate(valid => {
					if (valid) {
						this.editLoading = true;
						this.$api.company[api](this.dataForm).then(res => {
							this.editLoading = false;
							if (res.code == 200) {
								this.$message({message: '操作成功', type: 'success'});
								this.$refs['dataForm'].resetFields();
								this.dialogVisible = false;
							} else {
								let msg = res.msg ? res.msg : "系统错误"
								this.$message({message: msg, type: 'error'});
							}
							this.findTreeData();
						});
					}
				});
			}
		}
	};
</script>

<style scoped>
	.pagination {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>