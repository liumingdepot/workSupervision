<template>
	<div>
		<!-- 事项类别 -->
		<el-menu :default-active="active1" mode="horizontal" @select="changeTree" style="float: left;border:none">
			<el-menu-item v-for="(item,index) in tree" :key="index" :index="item.typeId" style="height: 50px;padding: 0;margin-right: 26px">{{item.name}}</el-menu-item>
		</el-menu>
		<el-button size="mini" style="float: right;margin: 30px 0 10px 0" type="primary" @click="handleAdd">新增</el-button>
		<!--表格树内容栏-->
		<el-table :data="eventData"  size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column prop="name"  label="批次名称"></el-table-column>
			<el-table-column  label="入库时间">
				<template slot-scope="scope">
					{{scope.row.putawayDateStr.split(' ')[0]}}
				</template>
			</el-table-column>
			<el-table-column prop="typeName"  label="所属工程类别"></el-table-column>
			<el-table-column  label="状态">
				<template slot-scope="scope">
					<el-tag style="border:none;background: #ffffff" :type="scope.row.status==0?'success':'info'">{{['正常','已作废'][scope.row.status]}}</el-tag>
				</template>
			</el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right"  width="185" :label="$t('action.operation')">
				<template slot-scope="scope">
					<el-button size="mini" type="text" @click="handleEdit(scope.row)">查看</el-button>
					<span style="color:999999"> &nbsp;|&nbsp; </span>
					<el-button size="mini"  type="text" :disabled="scope.row.status == '0'?false:true" @click="cancelPutaway(scope.row.id)">作废</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--新增批次表单-->
		<v-form ref="form" @changeTree="changeTree"></v-form>
	</div>
</template>

<script>
	//表单单独引入
	import vForm from './form.vue'

	export default {
		components: {
			vForm
		},
		data () {
			return {
				loading: false,
				active1: '',
				tree: [],
				eventData: [],
				form: {}
			}
		},
		computed: {
			projectId () {
				return this.$store.state.project.project.projectId
			},
			projectZoneId () {
				return this.$store.state.project.project.projectZoneId
			}
		},
		created () {
			this.getTreeData();
		},
		methods: {
			//获取菜单树tree
			getTreeData () {
				this.tree = []
				this.$api.event.list({
					limit: 999,
					projectId: this.projectId,
					status: '0',
					userId: sessionStorage.getItem('companyId')
				}).then(res => {
					console.log(res);
					this.tree = res.data.resultList.map(item => {
						return {
							name: item.type,
							typeId: item.id
						}
					})
					this.active1 = this.tree[0].typeId
					this.changeTree(this.tree[0].typeId)
				})
			},
			//材料作废
			cancelPutaway (id) {
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$axios({
						url: '/materials/cancelPutaway',
						method: 'DELETE',
						params: {id}
					}, true).then(res => {
						console.log(res);
						this.changeTree(this.form.typeId)
					})
				})
			},
			//新增
			handleAdd () {
				this.$refs.form.form = this.form
				this.$refs.form.initData({
					projectId: this.form.projectId,
					typeId: this.form.typeId,
					name: '',
					putawayDateSub: '',
					materialsInfos: []
				})
				this.$refs.form.type = 'add'
				this.$refs.form.dialogVisible = true
			},
			//查看
			handleEdit (row) {
				this.$refs.form.form = this.form
				this.$refs.form.initData({
					projectId: row.projectId,
					typeId: row.typeId,
					id: row.id,
					name: row.name,
					putawayDateSub: row.putawayDateStr.split(' ')[0],
					materialsInfos: []
				})
				this.$refs.form.dialogVisible = true
				this.$refs.form.type = 'put'
			},
			//切换事项
			changeTree (typeId) {
				this.form = {
					projectId: this.projectId,
					typeId: typeId,
					limit: 9999
				}
				this.loading = true
				this.$api.sorage.list(this.form).then(res => {
					this.eventData = res.data.resultList
					this.loading = false
				})
			}
		}
	}
</script>

