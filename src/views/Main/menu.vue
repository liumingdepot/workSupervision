<template>
	<div class="page-container">
		<!--工具栏-->
		<div style="float: left;padding-bottom: 10px">
			<el-button  size="mini" type="primary" @click="handleAdd" style="margin-right: 10px">新增</el-button>
			<el-switch v-model="menuType" active-text="是否显示按钮" @change="changeMenuType"></el-switch>
		</div>

		<!--表格树内容栏-->
		<el-table :data="tableTreeDdata" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column prop="name"  label="名称" width="240">
			</el-table-column>
			<el-table-column prop="type"  label="类型">
				<template slot-scope="scope">
					{{ ['菜单','按钮'][scope.row.type] }}
				</template>
			</el-table-column>
			<el-table-column prop="permission" :show-overflow-tooltip="true" label="授权标识"></el-table-column>
			<el-table-column label="图标">
				<template slot-scope="scope">
					<i :class="scope.row.icon || ''"></i>
				</template>
			</el-table-column>
			<el-table-column prop="superior" label="上级菜单"></el-table-column>
			<el-table-column prop="href" label="菜单URL"></el-table-column>
			<el-table-column prop="sort" sortable label="排序"></el-table-column>
			<el-table-column fixed="right"  width="185" label="操作">
				<template slot-scope="scope">
                    <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                    <span style="color:999999">&nbsp;|&nbsp; </span>
                    <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 新增修改界面 -->
		<el-dialog :title="!dataForm.id ? '新增' : '修改'" width="500px" :visible.sync="dialogVisible"
		           :close-on-click-modal="false">
			<el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="submitForm()"
			         label-width="80px" size="small" style="text-align:left;">
				<!-- 菜单类型 -->
				<el-form-item label="菜单类型" prop="type">
					<el-radio-group v-model="dataForm.type">
						<el-radio label="0">菜单</el-radio>
						<el-radio label="1">按钮</el-radio>
					</el-radio-group>
				</el-form-item>
				<!-- 菜单名称 -->
				<el-form-item label="菜单名称" prop="name" v-if="dataForm.type == 0">
					<el-input v-model="dataForm.name" placeholder="菜单名称"></el-input>
				</el-form-item>
				<el-form-item label="按钮名称" prop="name" v-if="dataForm.type == 1">
					<el-input v-model="dataForm.name" placeholder="按钮名称"></el-input>
				</el-form-item>
				<!-- 上级菜单 -->
				<el-form-item label="上级菜单" prop="parentName">
					<popup-tree-input
							:data="popupTreeData"
							:props="popupTreeProps"
							:prop="dataForm.parentName == null || dataForm.parentName == '' ? '顶级菜单' : dataForm.parentName"
							:nodeKey="'' + dataForm.parentId"
							:currentChangeHandle="handleTreeSelectChange"
					></popup-tree-input>
				</el-form-item>
				<!-- 授权标识 -->
				<el-form-item label="授权标识" prop="perms">
					<el-input v-model="dataForm.permission" placeholder="如: sys:user:add"></el-input>
				</el-form-item>
				<!-- 菜单路由 -->
				<el-form-item v-if="dataForm.type == 0" label="菜单路由" prop="href">
					<el-row>
						<el-col :span="22">
							<el-input v-model="dataForm.href" placeholder="菜单路由"></el-input>
						</el-col>
						<el-col :span="2" class="icon-list__tips">
							<el-tooltip placement="top" effect="light" style="padding: 10px;">
								<div slot="content">
									<p>URL格式：</p>
									<p>1.常规业务开发的功能URL，如用户管理，Views目录下页面路径为 /Sys/User, 此处填写 /sys/user。</p>
									<p>2.嵌套外部网页，如通过菜单打开百度网页，此处填写 http://www.baidu.com，http:// 不可省略。</p>
									<p>示例：用户管理：/sys/user 嵌套百度：http://www.baidu.com 嵌套网页：http://127.0.0.1:8000</p>
								</div>
								<i class="el-icon-warning"></i>
							</el-tooltip>
						</el-col>
					</el-row>
				</el-form-item>
				<!-- 排序编号 -->
				<el-form-item label="排序编号" prop="sort">
					<el-input-number v-model="dataForm.sort" controls-position="right" :min="0"
					                 label="排序编号"></el-input-number>
				</el-form-item>
				<!-- 菜单图标 -->
				<el-form-item label="菜单图标" prop="icon">
					<el-row>
						<el-col :span="22">
							<el-input v-model="dataForm.icon" v-popover:iconListPopover :readonly="false"
							          placeholder="菜单图标名称（如：fa fa-home fa-lg）" class="icon-list__input"></el-input>
						</el-col>
						<el-col :span="2" class="icon-list__tips">
							<fa-icon-tooltip/>
						</el-col>
					</el-row>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">{{ $t('action.cancel') }}</el-button>
                <el-button size="small" v-if="dataForm.id" type="primary" @click="submitForm('put')">{{ $t('action.comfirm') }}</el-button>
                <el-button size="small" v-if="!dataForm.id" type="primary" @click="submitForm('add')">{{ $t('action.comfirm') }}</el-button>
            </span>
		</el-dialog>
	</div>
</template>

<script>
	import TableTreeColumn from '@/views/Core/TableTreeColumn';
	import PopupTreeInput from '@/components/PopupTreeInput';
	import FaIconTooltip from '@/components/FaIconTooltip';

	export default {
		components: {
			PopupTreeInput,
			TableTreeColumn,
			FaIconTooltip
		},
		data() {
			return {
				loading: false,
				filters: {
					name: ''
				},
				menuType: false,
				tableTreeDdata: [],
				dialogVisible: false,
				dataForm: {
					id: 0,
					type: '0',
					name: '',
					parentId: 0,
					href: '',
					permission: '',
					sort: 0,
					icon: '',
				},
				dataRule: {
					name: [
						{
							required: true,
							message: '菜单名称不能为空',
							trigger: 'blur'
						}
					]
				},
				popupTreeData: [],
				popupTreeProps: {
					label: 'name',
					children: 'children'
				}
			};
		},
		mounted() {
			this.findTreeData();
		},
		methods: {
			changeMenuType() {
				this.findTreeData();
			},
			// 获取数据
			findTreeData() {
				this.loading = true;
				let type = this.menuType ? 0 : 1
				this.$api.menu.findAllMenuList({type}).then(res => {
					let list = this.$tool.tree(res.data)
					this.tableTreeDdata = list
					this.popupTreeData = this.getParentMenuTree(list);
					this.loading = false;
				});
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
			// 显示新增界面
			handleAdd() {
				this.dataForm = {
					id: 0,
					type: '0',
					name: '',
					parentId: 0,
					href: '',
					permission: '',
					sort: 0,
					icon: '',
				}
				this.dialogVisible = true;
			},
			// 显示编辑界面
			handleEdit(row) {
				Object.assign(this.dataForm, row);
				this.dialogVisible = true;
			},
			// 删除
			handleDelete(item) {
				if (item.children && item.children.length > 0) {
					this.$message({message: '存在子类,请先删除子类', type: 'error'});
					return;
				}
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$api.menu.menuDelete(item.id).then(res => {
						this.findTreeData();
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			},
			// 菜单树选中
			handleTreeSelectChange(data, node) {
				this.dataForm.parentId = data.id;
				this.dataForm.parentName = data.name;
			},
			// 图标选中
			iconActiveHandle(iconName) {
				this.dataForm.icon = iconName;
			},
			// 表单提交
			submitForm(type) {
				const api = type == 'put' ? 'update' : 'save'
				this.$refs['dataForm'].validate(valid => {
					if (valid) {
						this.editLoading = true;
						this.$api.menu[api](this.dataForm).then(res => {
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

