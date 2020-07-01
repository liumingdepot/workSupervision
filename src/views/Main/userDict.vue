<template>
	<!-- 字典管理 -->
	<div class="page-container">
		<!--工具栏-->
		<div class="toolbar" style="display: flex;align-items: center;margin-bottom: 20px">
<!--			<el-input v-model="filters.name" placeholder="名称" size="small" style="width: 260px;margin-right: 17px"></el-input>-->
<!--			<el-button type="primary" size="mini" @click="findTreeData">查询</el-button>-->
			<el-button type="primary" size="mini"  @click="handleAdd">增加</el-button>
		</div>
		
		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column label="" width="55" prop="$index"></el-table-column>
			<el-table-column label="字典名称">
				<template slot-scope="scope">
					<div :style="{'color':scope.row.color}">
						{{scope.row.name}}
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="color"  label="字典属性">
				<template slot-scope="scope">
					<div :style="{'color':scope.row.color}">
						{{scope.row.color}}
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="value"  label="字典值"></el-table-column>
			<el-table-column prop="sort"  label="字典排序"></el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right"  width="185" label="操作">
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
				<!-- 字典值 -->
				<el-form-item label="字典属性">
					<el-color-picker v-model="dataForm.color"></el-color-picker>
				</el-form-item>
				<!-- 排序编号 -->
				<el-form-item label="排序编号">
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
	import PopupTreeInput from '@/components/PopupTreeInput';
	export default {
		components:{
			PopupTreeInput
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
				this.$api.userDict.list({
					companyId:sessionStorage.getItem('companyId')
				}).then(res => {
					this.list = this.$tool.tree(res.data)
					this.popupTreeData = this.getParentMenuTree(this.list);
					this.loading = false;
				});
			},
			// 显示新增界面
			handleAdd() {
				this.show = 'add'
				this.dataForm = {
					color: "#409EFF",
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
				this.dataForm = {
					parentId : row.parentId,
					color:row.color,
					id:row.id,
					companyId:row.companyId,
					name:row.name,
					sort:row.sort,
					value:row.value
				}
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
					this.$api.userDict.dictDelete({id}).then(res => {
						this.findTreeData();
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			},
			// 表单提交
			submitForm(type) {
				const api = type == 'put' ? 'update' : 'save';
				const dataForm = this.dataForm
				dataForm.companyId = sessionStorage.getItem('companyId')
				delete dataForm.updateDate
				this.$refs['dataForm'].validate(valid => {
					if (valid) {
						this.editLoading = true;
						this.$api.userDict[api](dataForm).then(res => {
							this.editLoading = false;
							if (res.code == 200) {
								console.log(res);
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

