<template>
	<div class="form" style="margin-top: -25px">
		<div style="display: flex;align-items: flex-end;justify-content: space-between">
			<el-menu :default-active="active1" mode="horizontal" @select="changeMenu" style="float: left;margin-bottom: 20px;border:none">
				<el-menu-item v-for="(item,index) in tree" :key="index" :index="item.typeId" style="height: 50px;padding: 0;margin-right:26px">{{item.name}}</el-menu-item>
			</el-menu>
		</div>
		<!--表格树内容栏-->
		<el-table :data="list" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。"
		          @selection-change="handleSelectionChange" :header-cell-style="$store.state.project.headerName">
			<el-table-column type="selection" header-align="center" align="center" width="50"></el-table-column>
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column label="材料名称">
				<template slot-scope="scope">
					<el-tooltip class="item" :content="scope.row.name" placement="bottom" effect="light">
						<span class="name">{{ scope.row.name}}</span>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column prop="number" label="预计需求量"></el-table-column>
			<el-table-column prop="storage" label="实际入库量"></el-table-column>
			<el-table-column prop="usage" label="使用数量"></el-table-column>
			<el-table-column prop="unit" label="单位"></el-table-column>
			<el-table-column prop="model" label="规格"></el-table-column>
		</el-table>
		<el-pagination class="pagination" small @current-change="handleCurrentChange" :current-page="page.pageNo" :page-sizes="page.limits"
		               hide-on-single-page :page-size="page.limit" layout="total, prev, pager, next, jumper" :total="page.totalNumber"/>

		<!-- 新增修改界面 -->
		<el-dialog :title="show == 'add' ? '新增' : '申请变更'" width="400px" :visible.sync="dialogVisible"
		           :close-on-click-modal="false">
			<el-form label-width="70px" size="small" label-position="left">
				<el-form-item label="名称">
					<el-input v-model="dataForm2.name" placeholder="名称" :disabled="show == 'add'?false:true"></el-input>
				</el-form-item>
				<el-form-item :label="show == 'add'?'数量':'原始数量'">
					<el-input type="number" v-model="dataForm2.number" :disabled="show == 'add'?false:true" placeholder="数量"></el-input>
				</el-form-item>
				<el-form-item label="修改数量" v-if="show == 'put'">
					<el-input type="number" v-model="dataForm2.nowNum" placeholder="数量"></el-input>
				</el-form-item>
				<el-form-item label="变更资料" v-if="show == 'put'">
					<el-upload :action="global.baseUrlMetro + '/uploadFile/upload'" :headers="headers" :on-success="fileMaterials"  style="float: left">
						<el-button size="mini" type="primary">点击上传</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="说明" v-if="show == 'put'">
					<el-input type="textarea" v-model="dataForm2.remarks" placeholder="说明"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button size="small" type="primary" @click="submitForm">{{show == 'add' ? '新增' : '申请变更'}}</el-button>
            </span>
		</el-dialog>
	</div>
</template>

<script>
	import Cookies from 'js-cookie';

	export default {

		data() {
			return {
				loading: false,
				active1: '',
				tree: [],
				list: [],
				dataForm: {},
				dataForm2: {},
				headers: {
					Authorization: ''
				},
				show: '',
				arr: [],
				dialogVisible: false,
				page: {
					limit: 20,
					pageNo: 1,
					pageSize: 10,
					totalNumber: 0
				}
			}
		},
		computed: {
			projectId() {
				return this.$store.state.project.project.projectId
			},
			projectZoneId() {
				return this.$store.state.project.project.projectZoneId
			}
		},
		created() {
			this.headers.Authorization = Cookies.get('token')
			this.getTreeData();
		},
		methods: {
			//翻页
			handleCurrentChange(pageNo) {
				this.page.pageNo = pageNo;
				this.changeTree(this.dataForm.typeId)
			},
			//获取菜单树tree
			getTreeData() {
				this.tree = []
				this.$api.event.list({
					limit: 999,
					projectId: this.projectId,
					status: '0',
					companyId: sessionStorage.getItem('companyId')
				}).then(res => {
					this.tree = res.data.resultList.map(item => {
						return {
							name: item.type,
							typeId: item.id,
							projectZoneId: this.projectZoneId
						}
					})
					this.active1 = this.tree[0].typeId
					this.changeTree(this.tree[0].typeId)
				})
			},
			//新增一条
			handleAdd() {
				this.dataForm2 = {}
				this.show = 'add'
				this.dialogVisible = true
			},
			//修改材料
			fileMaterials(row, file) {
				this.dataForm2.fileMaterials = row.data.fileUrl
			},
			//编辑
			handleEdit(row) {
				this.dataForm2 = {
					name: row.name,
					number: row.number,
					id: row.id
				}
				this.show = 'put'
				this.dialogVisible = true
			},
			//提交
			submitForm() {
				if (this.show == 'add') {
					this.$api.sorage.materialsStorage_save({
						...this.dataForm2,
						...this.dataForm
					}).then(res => {
						this.changeTree(this.dataForm.typeId)
						this.dialogVisible = false
					})
				} else {
					const dataForm = {
						fileMaterials: this.dataForm2.fileMaterials,
						originalNum: this.dataForm2.number,
						nowNum: this.dataForm2.nowNum,
						storageId: this.dataForm2.id,
						storageName: this.dataForm2.name,
						remarks: this.dataForm2.remarks,
						projectId: this.projectId,
					}
					this.$axios({
						url: '/materialsChange/save',
						method: 'post',
						data: dataForm
					}, true).then(res => {
						this.changeTree(this.dataForm.typeId)
						this.dialogVisible = false
					})
				}
			},
			//删除
			handleDelete({id}) {
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$api.sorage.materialsStorage_delete({id}).then(res => {
						this.changeTree(this.dataForm.typeId)
					})
				})
			},
			//批量删除
			async handleDeleteAll() {
				const arr = this.arr.map(val => val.id)
				const confirm = await this.$confirm('确认删除选中记录吗？', '提示', {type: 'warning'})
				if (confirm == 'confirm') {
					const loading = this.$loading({
						lock: true,
						text: 'Loading',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					});
					for (let id of arr) {
						await this.$api.sorage.materialsStorage_delete({id})
					}
					await loading.close();
				}
				await this.changeTree(this.dataForm.typeId)
			},
			//确认导入
			success() {
				this.changeTree(this.dataForm.typeId)
			},
			//全选功能
			handleSelectionChange(arr) {
				this.arr = arr
			},
			//切换事项
			changeMenu(typeId) {
				this.page = {
					limit: 12,
					pageNo: 1,
					pageSize: 10,
					totalNumber: 0
				}
				this.changeTree(typeId)
			},
			changeTree(typeId) {
				this.dataForm = {
					projectId: this.projectId,
					typeId
				}
				this.loading = true
				this.$api.sorage.materialsStorage_list({
					limit: this.page.limit,
					pageNo: this.page.pageNo,
					...this.dataForm
				}).then(res => {
					this.list = res.data.resultList
					this.page.totalNumber = res.data.totalNumber
					this.loading = false
				})
			}
		}
	}
</script>

<style scoped>
	.form {
		min-height: 780px;
		position: relative;
	}

	.name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
		cursor: pointer;
	}

	.pagination {
		position: absolute;
		right: 0;
		bottom: -40px;
	}
</style>