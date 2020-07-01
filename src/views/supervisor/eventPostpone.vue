<template>
	<div>
		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column prop="eventName" label="名称">
				<template slot-scope="scope">
					<el-tooltip class="item" :content="scope.row.eventName" placement="bottom" effect="light">
						<span class="name">{{ scope.row.eventName}}</span>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column prop="companyName"  label="请求单位"></el-table-column>
			<el-table-column prop="title"  label="标题"></el-table-column>
			<el-table-column prop="remarks" label="说明"></el-table-column>
			<el-table-column  label="状态">
				<template slot-scope="scope">
					<span :style="{color:scope.row.status == 3?'#EF5127':'#67C23A'}">{{['已提交','已确认','已审核','已驳回'][scope.row.status]}}</span>
				</template>
			</el-table-column>
			<el-table-column  label="查看附件">
				<template slot-scope="scope">
					<el-image style="width: 30px;display: flex;align-items: center" fit="contain" :src="scope.row.imgs[0]" :preview-src-list="scope.row.imgs"></el-image>
				</template>
			</el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right" width="185" label="操作" v-if="$store.state.project.userType != 5">
				<template slot-scope="scope">
					<el-button size="mini" :disabled="scope.row.status == '1'||scope.row.status == '0'?false:true" type="text"
							   @click="auditor(scope.row.id,'2')">同意</el-button>
					<span style="color:999999">&nbsp;|&nbsp; </span>
					<el-button size="mini" :disabled="scope.row.status == '1'||scope.row.status == '0'?false:true" type="text"
							   @click="auditor(scope.row.id,'3')">驳回</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				list: []
			}
		},
		computed: {
			projectZoneId  () {
				return this.$store.state.project.project.projectZoneId
			}
		},
		created () {
			this.getTreeData();
		},
		methods: {
			//获取菜单树tree
			getTreeData () {
				this.loading = true
				this.$axios({
					url: '/eventPostpone/list',
					method: 'get',
					params: {
						limit: 999,
						projectZoneId: this.projectZoneId
					}
				}, true).then(res => {
					this.list = res.data.resultList.map(item=>{
						item.imgs = item.materialsStr.split(',')
						return item
					})
					this.loading = false
				})
			},
			auditor(id,status){
				this.$axios({
					url: '/eventPostpone/updateStatus',
					method: 'put',
					params: {id,status}
				}, true).then(res => {
					this.$message.success('操作成功')
					this.getTreeData();
				})
			}
		}
	}
</script>

<style scoped>
	.name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
		cursor: pointer;
	}
</style>