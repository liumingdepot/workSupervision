<template>
	<!--签证管理-->
	<div class="page-container">
		<!--表格树内容栏-->
		<el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column prop="title" label="签证名称"></el-table-column>
			<el-table-column prop="companyName" label="公司名称"></el-table-column>
			<el-table-column prop="count" label="类型">
				<template slot-scope="scope">
					{{ CONSTRUCTION[scope.row.type] }}
				</template>
			</el-table-column>
			<el-table-column prop="location" label="地点"></el-table-column>
			<el-table-column prop="projectName" label="签证工程"></el-table-column>
			<el-table-column prop="content" label="内容"></el-table-column>
			<el-table-column prop="remarks" label="说明"></el-table-column>
		</el-table>
		<el-pagination style="margin-top:30px;float: right" @size-change="handleSizeChange" :page-size="page.limit" layout="total, sizes, prev, pager, next, jumper"
                       hide-on-single-page   :total="page.totalNumber"></el-pagination>

		<el-dialog title="查看" width="1000px" height="600px" :visible.sync="dialogVisible" :close-on-click-modal="false">
			<el-image v-if="imgUrl" :src="imgUrl"></el-image>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				filters: {
					projectZoneId: '',
				},
				options: [],
				list: [],
				imgUrl: '',
				dialogVisible: false,
				page: {
					limits: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
					limit: 12,
					pageNo: 1,
					pageSize: 10,
					totalNumber: 0
				},
				CONSTRUCTION: []
			};
		},
		computed: {
			projectZoneId() {
				return this.$store.state.project.project.projectZoneId
			}
		},
		created() {
			this.findTreeData();
			this.$tool.findDictByCode('CONSTRUCTION').then(data => {
				this.CONSTRUCTION = data
			})
		},
		methods: {
			changeOptions() {
				this.findTreeData();
			},
			//翻页
			handleSizeChange(limit) {
				this.page.limit = limit;
				this.findTreeData();
			},
			handleCurrentChange(pageNo) {
				this.page.pageNo = pageNo;
				this.findTreeData()
			},
			playImg(url) {
				this.imgUrl = url
				this.dialogVisible = true
			},
			// 获取数据
			findTreeData() {
				this.loading = true;
				this.$api.visa.list({
					limit: this.page.limit,
					pageNo: this.page.pageNo,
					projectZoneId: this.projectZoneId
				}).then(res => {
					this.list = res.data.resultList
					this.page.totalNumber = res.data.totalNumber
					this.loading = false;
				});
			},
		}
	};
</script>

