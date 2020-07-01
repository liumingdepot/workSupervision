<template>
	<!-- 权限管理 -->
	<div class="page-container">
		<!--工具栏-->
		<el-button type="primary" size="mini" @click="handleAdd" style="float: left;margin-bottom: 10px">新增</el-button>

		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column prop="name" label="角色名称"></el-table-column>
			<el-table-column prop="code" label="角色编码"></el-table-column>
			<el-table-column prop="sort" sortable label="排序"></el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-switch @change="changeStatus(scope.row)" :value="scope.row.status == 0 ? true : false" active-color="#13ce66"
					           inactive-color="#ff4949"></el-switch>
				</template>
			</el-table-column>
			<el-table-column label="更多">
				<template slot-scope="scope">
					<kt-button icon="fa fa-edit" type="text" label="分配权限" perms="admin"
					           @click="jurisdiction(scope.row.id)"/>
					<kt-button icon="fa fa-edit" type="text" label="分配人员" perms="admin"
					           @click="getUsers(scope.row.id)"/>
				</template>
			</el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right" header-align="center" align="center" label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
					<span style="color:999999">&nbsp;|&nbsp; </span>
					<el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="margin-top:30px;float: right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo" hide-on-single-page
		             :page-sizes="page.limits" :page-size="page.limit" layout="total, sizes, prev, pager, next, jumper" :total="page.totalNumber"></el-pagination>

		<!-------------------------------------------- 新增修改 --------------------------------------------->
		<el-dialog :title="show == 'add' ? '新增' : '修改'" width="500px" :visible.sync="dialogVisible"
		           :close-on-click-modal="false">
			<el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="submitForm()"
			         label-width="80px" size="small" style="text-align:left;">
				<!-- 字典名称 -->
				<el-form-item label="角色名称" prop="name">
					<el-input v-model="dataForm.name" placeholder="角色名称"></el-input>
				</el-form-item>
				<!-- 字典代码 -->
				<el-form-item label="角色编码" prop="name">
					<el-input v-model="dataForm.code" placeholder="角色编码"></el-input>
				</el-form-item>
				<!-- 菜单类型 -->
				<el-form-item label="状态" prop="type">
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

		<!---------------------------------------- 权限 ---------------------------------------------------------->
		<el-dialog title="权限" width="700px" :visible.sync="dialogVisible1"
		           :close-on-click-modal="false">
			<tree-transfer :title="['权限列表', '拥有权限']" :button_text="['添加', '删除']"
			               :from_data='meunData' :defaultProps="{label:'name'}"
			               :to_data="newMeunData" transferOpenNode openAll
			               height="500px" placeholder="请输入权限"
			               @addBtn='subMeun_Data' @removeBtn='subMeun_Data' filter pid="parentId">
			</tree-transfer>
			<span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible1 = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitMenu">确认</el-button>
            </span>
		</el-dialog>

		<!------------------------------------------ 人员 ------------------------------------------------------>
		<el-dialog title="人员" width="700px" :visible.sync="dialogVisible2"
		           :close-on-click-modal="false">
			<tree-transfer :title="['用户列表', '拥有用户']" :button_text="['添加', '删除']"
			               :from_data='users' :defaultProps="{label:'name'}"
			               :to_data="newUsers" transferOpenNode openAll
			               height="500px" placeholder="请输入权限" filter
			               @addBtn='subUsers_Data' @removeBtn='subUsers_Data'>
			</tree-transfer>
			<span slot="footer" class="dialog-footer">
               <el-button size="small" @click="dialogVisible2 = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitUser">确认</el-button>
            </span>
		</el-dialog>
	</div>
</template>

<script>
	import KtButton from '@/views/Core/KtButton';
	import TableTreeColumn from '@/views/Core/TableTreeColumn';
	import PopupTreeInput from '@/components/PopupTreeInput';
	import FaIconTooltip from '@/components/FaIconTooltip';
	import treeTransfer from 'el-tree-transfer';

	export default {
		components: {
			PopupTreeInput,
			KtButton,
			TableTreeColumn,
			FaIconTooltip,
			treeTransfer
		},
		data() {
			return {
				loading: false,
				filters: {
					name: ''
				},
				defaultProps: {
					key: "pid",
					label: "name",
					children: "children"
				},
				id: '',
				meunData: [],
				newMeunData: [],
				subMeunData: [],
				users: [],
				newUsers: [],
				subUserData: [],
				value: true,
				list: [],
				popupTreeData: [],
				popupTreeProps: {
					label: 'name',
					children: 'children'
				},
				dialogVisible: false,
				dialogVisible1: false,
				dialogVisible2: false,
				dataForm: {
					code: "",
					name: "",
					sort: 0,
					status: "0"
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
		},
		methods: {
			//改变状态
			changeStatus(e) {
				let data = {
					id: e.id
				}
				data.status = e.status == '0' ? '1' : '0'
				this.$api.authority.changeStatus(data).then(res => {
					if (res.code == 200) {
						this.findTreeData();
					}
				})
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
			// 监听穿梭框组件添加
			subMeun_Data(fromData, toData, obj) {
				this.subMeunData = this.$tool.getId(toData)
			},
			// 监听穿梭框组件添加
			subUsers_Data(fromData, toData, obj) {
				this.subUserData = this.$tool.getId(toData)
			},
			//用户权限
			async jurisdiction(id) {
				this.id = id;
				const meunData = await this.$api.authority.findMenuListByRole({id, type: 0})
				this.meunData = this.$tool.tree(meunData.data)
				const newMeunData = await this.$api.authority.findMenuListByRole({id, type: 1})
				this.newMeunData = this.$tool.tree(newMeunData.data)
				this.dialogVisible1 = true;
			},
			//提交权限
			submitMenu() {
				this.$api.authority.editRoleMenu({
					id: this.id,
					menuIds: this.subMeunData.join(',')
				}).then(res => {
					this.$message({message: res.msg, type: 'success'});
					this.dialogVisible1 = false
				})
			},
			//人员
			async getUsers(id) {
				this.id = id;
				const users = await this.$api.authority.findUserByRole({id, type: 0});
				this.users = users.data;
				const newUsers = await this.$api.authority.findUserByRole({id, type: 1});
				this.newUsers = newUsers.data;
				this.dialogVisible2 = true
			},
			//提交人员
			submitUser() {
				this.$api.authority.editRoleUser({
					id: this.id,
					userIds: this.subUserData.join(',')
				}).then(res => {
					this.$message({message: res.msg, type: 'success'});
					this.dialogVisible2 = false
				})
			},
			// 获取数据
			findTreeData(type) {
				this.loading = true;
				let params = {
					limit: this.page.limit,
					pageNo: this.page.pageNo
				};
				this.$api.authority.list(params).then(res => {
					this.list = res.data.resultList
					this.page.totalNumber = res.data.totalNumber
					this.loading = false;
				});
			},
			// 显示新增界面
			handleAdd() {
				this.show = 'add'
				this.dataForm = {
					code: "",
					name: "",
					sort: 0,
					status: "0"
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
					this.$api.authority.roleDelete({id}).then(res => {
						this.findTreeData();
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			},
			// 表单提交
			submitForm(type) {
				const api = type == 'put' ? 'update' : 'save';
				this.$refs['dataForm'].validate(valid => {
					if (valid) {
						this.editLoading = true;
						this.$api.authority[api](this.dataForm).then(res => {
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
	}
	;
</script>

