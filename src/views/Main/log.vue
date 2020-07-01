<template>
	<div class="log">
		<el-table :data="list" style="width: 100%;height: auto;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="logTitle" label="日志标题">
				<template slot-scope="scope">
					<el-tooltip class="item" :content="scope.row.logTitle" placement="bottom" effect="light">
						<span class="name">{{ scope.row.logTitle}}</span>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column prop="requestUri" label="请求地址"></el-table-column>
			<el-table-column prop="operateName" label="操作人"></el-table-column>
			<el-table-column prop="logType" label="日志类型"></el-table-column>
			<el-table-column prop="operateDate" label="时间"></el-table-column>
			<el-table-column prop="remoteAddr" label="客户端IP"></el-table-column>
			<el-table-column prop="deviceName" label="设备系统"></el-table-column>
			<el-table-column prop="browserName" label="浏览器名称"></el-table-column>
		</el-table>
		<el-pagination style="margin-top:30px;float: right" @current-change="handleCurrentChange" :current-page="page.pageNo" hide-on-single-page :page-sizes="page.limits"
		              hide-on-single-page :page-size="page.limit" layout="total, prev, pager, next, jumper" :total="page.totalNumber"></el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				list: [],
				page: {
					limits: [15],
					limit: 15,
					pageNo: 1,
					pageSize: 10,
					totalNumber: 0
				}
			}
		},
		created() {
			this.logData()
		},
		methods: {
			logData() {
				let {limit, pageNo} = this.page
				this.loading = true;
				this.$api.log.log({limit, pageNo}).then(res => {
					if (res.code == 200) {
						const list = res.data.resultList;
						list.forEach(val => {
							val.operateDate = new Date(val.operateDate).toLocaleDateString()
						})
						this.list = list
						this.page.totalNumber = res.data.totalNumber
						this.loading = false;
					}
				})
			},
			handleCurrentChange(pageNo) {
				this.page.pageNo = pageNo;
				this.logData()
			}
		}
	}
</script>

<style>
	.name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
		cursor: pointer;
	}
</style>