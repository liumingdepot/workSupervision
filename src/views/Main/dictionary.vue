<template>
	<!-- 字典管理 -->
	<div class="page-container">
		<!--工具栏-->
		<div class="toolbar" style="display: flex;align-items: center;margin-bottom: 10px">
			<el-input size="mini" v-model="filters.name" placeholder="名称" style="width: 200px;margin-right: 10px"></el-input>
			<el-button size="mini" type="primary" @click="findTreeData">查询</el-button>
			<el-button size="mini" plain type="primary" @click="handleAdd">新增</el-button>
		</div>

		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column prop="name" label="字典名称"></el-table-column>
			<el-table-column prop="code" label="字典代码"></el-table-column>
			<el-table-column prop="value" label="字典值"></el-table-column>
			<el-table-column prop="sort" label="字典排序"></el-table-column>
			<el-table-column label="字典状态">
				<template slot-scope="scope">
					<div>{{scope.row.status == 0 ?'启用':'禁用'}}</div>
				</template>
			</el-table-column>
			<el-table-column prop="updateDate" label="更新时间"></el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right" width="185" label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
					<span style="color:999999">&nbsp;|&nbsp; </span>
					<el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 新增修改界面 -->
		<el-dialog :title="show == 'add' ? '新增' : '修改'" width="500px" :visible.sync="dialogVisible"
		           :close-on-click-modal="false">
			<el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="submitForm()"
			         label-width="80px" size="small" style="text-align:left;">
				<!-- 上级菜单 -->
				<el-form-item label="上级菜单" prop="parentName">
					<popup-tree-input
							:data="popupTreeData"
							:props="popupTreeProps"
							:prop="dataForm.superior|| dataForm.parentName||'顶级菜单'"
							:nodeKey="'' + dataForm.parentId"
							:currentChangeHandle="handleTreeSelectChange"
					></popup-tree-input>
				</el-form-item>
				<!-- 字典名称 -->
				<el-form-item label="字典名称">
					<el-input v-model="dataForm.name" placeholder="字典名称"></el-input>
				</el-form-item>
				<!-- 字典值 -->
				<el-form-item label="字典值">
					<el-input v-model="dataForm.value" placeholder="字典值"></el-input>
				</el-form-item>
				<!-- 字典代码 -->
				<el-form-item label="字典代码">
					<el-input v-model="dataForm.code" placeholder="字典代码"></el-input>
				</el-form-item>
				<!-- 菜单类型 -->
				<el-form-item label="状态">
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
	import KtButton from '@/views/Core/KtButton';
	import TableTreeColumn from '@/views/Core/TableTreeColumn';
	import PopupTreeInput from '@/components/PopupTreeInput';
	import FaIconTooltip from '@/components/FaIconTooltip';

	export default {
		components: {
			PopupTreeInput,
			KtButton,
			TableTreeColumn,
			FaIconTooltip
		},
		data() {
			return {
				loading: false,
				filters: {
					name: ''
				},
				list: [],
				popupTreeData: [],
				popupTreeProps: {
					label: 'name',
					children: 'children',
					value: 'id'
				},
				dialogVisible: false,
				dataForm: {
					code: "",
					name: "",
					parentId: "0",
					value: '',
					sort: 0,
					status: '0'
				},
				show: 'add',
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
			// 获取数据
			findTreeData() {
				this.loading = true;
				this.$api.dict.list({
					name: this.filters.name,
					limit: 999
				}).then(res => {
					const list = res.data.resultList;
					list.forEach(val => {
						val.updateDate = new Date(val.updateDate).toLocaleDateString()
					})
					this.list = this.$tool.tree(list)
					this.popupTreeData = this.getParentMenuTree(this.list);
					this.loading = false;
				});
			},
			// 显示新增界面
			handleAdd() {
				this.show = 'add'
				this.dataForm = {
					code: "",
					name: "",
					parentId: "0",
					value: '',
					sort: 0,
					status: '0'
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
			// 获取上级菜单树
			getParentMenuTree(tableTreeDdata) {
				let parent = {
					parentId: 0,
					name: '顶级菜单',
					children: tableTreeDdata
				};
				return [parent];
			},
			// 删除
			handleDelete({id}) {
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$api.dict.dictDelete(id).then(res => {
						this.findTreeData();
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			},
			// 表单提交
			submitForm(type) {
				const api = type == 'put' ? 'update' : 'save';
				const dataForm = this.dataForm
				delete dataForm.updateDate
				this.$refs['dataForm'].validate(valid => {
					if (valid) {
						this.editLoading = true;
						this.$api.dict[api](dataForm).then(res => {
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

