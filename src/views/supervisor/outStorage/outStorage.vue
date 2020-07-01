<!--送检名称-->
<template>
	<div class="dist">
		<div class="toolbar">
			<el-input v-model="filters.name" size="small" placeholder="名称" style="width: 200px;margin-right: 17px"></el-input>
			<el-button size="mini" type="primary" @click="findTreeData">查询</el-button>
			<el-button size="mini" plain type="primary" @click="handleAdd">新增</el-button>
		</div>
		<!--表格树内容栏-->
		<el-table :data="materialsInspect" row-key="id" size="mini" style="width: 100%" :header-cell-style="$store.state.project.headerName"
			v-loading="loading" element-loading-text="加载中。。。">
			<el-table-column type="index" label="序号" align="center"/>
			<el-table-column prop="name" label="送检名称"></el-table-column>
			<el-table-column label="送检物资名称">
				<template slot-scope="scope">
					<el-tooltip class="item" :content="scope.row.inspectName" placement="bottom" effect="light">
						<span class="name">{{ scope.row.inspectName}}</span>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column prop="inspect" label="送检单位"/>
			<el-table-column prop="testingName" label="检测单位"/>
			<el-table-column prop="path" label="检测报告" show-overflow-tooltip>
				<template slot-scope="scope">
					<span type="text" class="name" style="color: #129EF5" @click="getSee(scope.row.pathStr)">{{scope.row.pathStr}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="updateDate" label="时间"/>
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
			<el-form ref="dataForm" @keyup.enter.native="submitForm()" :model="dataForm" :rules="$rules"
			         label-width="100px" size="small" style="text-align:left;">
				<el-form-item label="送检物资名称">
					<el-input v-model="dataForm.inspectName" placeholder="送检物资名称"></el-input>
				</el-form-item>
				<el-form-item label="送检单位">
					<el-input v-model="dataForm.inspect" placeholder="送检单位"></el-input>
				</el-form-item>
				<el-form-item label="送检名称">
					<el-input v-model="dataForm.name" placeholder="送检名称"></el-input>
				</el-form-item>
				<el-form-item label="检测报告">
					<el-upload class="upload-demo" :headers="{Authorization:token}"
					           :action="global.baseUrlAdmin + '/uploadFile/upload'"
					           :on-change="pathChange"
					           :file-list="path" :before-remove="beforeRemove">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="检测单位">
					<el-input v-model="dataForm.testingName" placeholder="检测单位"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
                    <el-button size="small" @click="dialogVisible = false">取消</el-button>
                    <el-button size="small" v-if="show == 'put'" type="primary" @click="submitForm(show)">修改</el-button>
                    <el-button size="small" v-if="show == 'add'" type="primary" @click="submitForm(show)">新增</el-button>
                </span>
		</el-dialog>
	</div>
</template>


<script>
	import Cookies from "js-cookie";

	export default {
		data() {
			return {
				loading: false,
				token: '',
				project: '0',
				projectData: [],
				projectZoneIdData: [],
				materialsInspect: [],
				show: '',
				filters: {},
				path: [],
				dataForm: {
					inspect: "",
					inspectName: "",
					name: "",
					path: "",
					projectZoneId: "",
					testingName: ""
				},
				dialogVisible: false
			}
		},
		created() {
			this.token = Cookies.get('token')
			this.findTreeData()
		},
		computed: {
			projectId() {
				return this.$store.state.project.project.projectId
			},
			projectZoneId() {
				return this.$store.state.project.project.projectZoneId
			}
		},
		methods: {
			//上传
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${file.name}？`);
			},
			pathChange(file, fileList) {
				if (file.response) {
					this.dataForm.path = file.name + ',' + file.response.data
				}
			},
			getSee(url) {
				window.open(url, '_blank');
			},
			// 显示编辑界面
			handleEdit(row) {
				this.show = 'put'
				Object.assign(this.dataForm, row);
				this.path = row.path ? [{name: row.path.split(',')[0]}] : []
				this.dialogVisible = true;
			},
			//获取列表
			findTreeData() {
				this.loading = true;
				this.$api.sorage.mater_list({
					projectId: this.projectId
				}).then(res => {
					const materialsInspect = res.data.resultList
					materialsInspect.forEach(val => {
						val.updateDate = new Date(val.updateDate).toLocaleDateString()
					})
					this.materialsInspect = materialsInspect
					this.loading = false;
				});
			},
			// 显示新增界面
			handleAdd() {
				this.path = []
				this.show = 'add'
				this.dataForm = {
					inspect: "",
					inspectName: "",
					name: "",
					path: "",
					projectZoneId: "",
					testingName: ""
				}
				this.dialogVisible = true;
			},
			// 删除
			handleDelete({id}) {
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$api.sorage.mater_delete({id}).then(res => {
						this.findTreeData()
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			},
			// 表单提交
			submitForm(type) {
				const api = type == 'put' ? 'mater_update' : 'mater_save';
				let dataForm = this.dataForm
				delete dataForm.updateDate
				dataForm.projectId = this.projectId
				dataForm.projectZoneId = this.projectZoneId
				this.$refs['dataForm'].validate(valid => {
					if (valid) {
						this.editLoading = true;
						this.$api.sorage[api](dataForm).then(res => {
							this.editLoading = false;
							if (res.code == 200) {
								this.$message({message: '操作成功', type: 'success'});
								this.dialogVisible = false;
							} else {
								this.$message({message: res.msg, type: 'error'});
							}
							this.findTreeData()
						});
					}
				});
			}
		}
	}
</script>

<style>
	.toolbar {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
		cursor: pointer;
	}
</style>
