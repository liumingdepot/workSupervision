<template>
	<div class="form">
		<!--工具栏-->
		<div class="toolbar" style="margin-bottom: 20px">
			<div>
				<el-input v-model="name" size="small" placeholder="请输入工程名称" style="width: 260px;margin-right: 17px"></el-input>
				<el-button size="mini" type="primary" @click="findTreeData(name)">查询</el-button>
				<el-button type="primary" plain size="mini" @click="handleAdd" v-if="$store.state.project.project.userType != 5">添加</el-button>
			</div>
			<div>
				<el-select v-model="projectId" placeholder="请选择" size="small" style="width: 260px;margin-right: 17px">
					<el-option v-for="item in list" :key="item.id" :label="item.name" :value="item.id + ',' + item.name"></el-option>
				</el-select>
				<el-button type="primary" size="mini" @click="packageAll">项目打包</el-button>
			</div>
		</div>
		<!--表格树内容栏-->
		<el-table :data="list" v-loading="loading" element-loading-text="加载中。。。" size="mini"
		          :header-cell-style="$store.state.project.headerName" @cell-click="currentChange">
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column label="工程名称">
				<template slot-scope="scope">
					<el-tooltip :content="scope.row.name" placement="bottom" effect="light">
						<span class="name">{{ scope.row.name }}</span>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column label="施工单位" >
				<template slot-scope="scope">
					<el-tooltip :content="scope.row.companyName" placement="bottom" effect="light">
						<span class="name">{{ scope.row.companyName }}</span>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column prop="type" label="工程类别">
				<template slot-scope="scope">
					{{ PROJECT_TYPE[scope.row.type] }}
				</template>
			</el-table-column>
			<el-table-column prop="startPlanDate" label="预计开工时间"></el-table-column>
			<el-table-column prop="endPlanDate" label="预计完工时间"></el-table-column>
			<!-- 分配监理 -->
			<el-table-column label="分配监理" show-overflow-tooltip v-if="$store.state.project.project.userType != 5">
				<template slot-scope="scope">
					<el-popover placement="bottom" trigger="click" class="select" @hide="submitForm">
						<el-select v-model="userIds" placeholder="请选择" multiple size="mini" collapse-tags>
							<el-option v-for="item in users" :key="item.value" :label="item.name" :value="item.id"></el-option>
						</el-select>
						<div class="name" slot="reference" @click="changeSelect(scope.row)">
							<img src="../../../../assets/bianji.png" style="width: 11px;height: 11px">
							{{scope.row.userNames||'未分配'}}
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<!-- 修改状态 -->
			<el-table-column header-align="center" align="center" label="工程状态" v-if="$store.state.project.project.userType != 5">
				<template slot-scope="scope">
					<el-popover placement="bottom" trigger="click" class="select">
						<el-button size="mini" type="primary" @click="Start(scope.row.id,'2')">确认开工</el-button>
						<el-button size="mini" type="danger" @click="Start(scope.row.id,'1')">关闭工程</el-button>
						<div type="text" slot="reference" v-if="scope.row.status != 0">
							<img src="../../../../assets/bianji.png" style="width: 11px;height: 11px">
							<span v-if="scope.row.status == 0" style="color: #545c64">未分配</span>
							<span v-if="scope.row.status == 1" style="color: #545c64">未开工</span>
							<span v-if="scope.row.status == 2" style="color: #129EF5">进行中</span>
							<span v-if="scope.row.status == 3" style="color: #F23504">逾期</span>
							<span v-if="scope.row.status == 4" style="color: #3CF204">已完成</span>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<!-- 操作 -->
			<el-table-column label="操作" width="170" v-if="$store.state.project.project.userType != 5">
				<template slot-scope="scope">
					<el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
					<span style="color:999999;">&nbsp;|&nbsp; </span>
					<el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
					<span style="color:999999"> &nbsp;|&nbsp; </span>
					<el-button type="text" @click="currentChange(scope.row)">详情</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="pagination" small @current-change="handleCurrentChange" :current-page="page.pageNo"
		               :page-sizes="page.limits" :page-size="page.limit" hide-on-single-page
		               layout="total, prev, pager, next, jumper" :total="page.totalNumber"/>
	</div>
</template>

<script>
	import Cookies from "js-cookie"

	export default {
		data() {
			return {
				projectId: '',
				list: [],
				name: '',
				users: [],
				userIds: [],
				PROJECT_TYPE: [],
				loading: false,
				dialogVisible2: false,
				projectZoneId: '',
				page: {
					limit: 12,
					pageNo: 1,
					pageSize: 10,
					totalNumber: 0
				},
				userNamesLoading: false
			}
		},
		async created() {
			this.PROJECT_TYPE = await this.$tool.findDictByCode('PROJECT_TYPE')
			this.findTreeData()
			this.usersData()
		},
		methods: {
			usersData() {
				this.loading = true;
				this.$api.user.list({
					limit: 9999,
					companyId: sessionStorage.getItem("companyId"),
				}).then(res => {
					this.users = res.data.resultList
				});
			},
			//项目打包
			packageAll() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(255, 255, 255, 0.7)'
				});
				if (!this.projectId) {
					this.$message.error('请先选择工程')
					return
				}
				const projectId = this.projectId.split(',')[0]
				const projectName = this.projectId.split(',')[1]

				function createObjectURL(object) {
					return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
				}

				var xhr = new XMLHttpRequest();
				var formData = new FormData();
				xhr.open('get', this.global.baseUrlMetro + '/package/all?projectId=' + projectId);  //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
				xhr.setRequestHeader("Authorization", Cookies.get('token'));
				xhr.responseType = 'blob';
				xhr.onload = function (e) {
					if (this.status == 200) {
						var blob = this.response;
						var filename = projectName + "项目文件.zip";  //这里的名字，可以按后端给的接口固定表单设置一下名字，如（费用单.xlsx,合同.doc等等）
						if (window.navigator.msSaveOrOpenBlob) {
							navigator.msSaveBlob(blob, filename);
						} else {
							var a = document.createElement('a');
							var url = createObjectURL(blob);
							a.href = url;
							a.download = filename;
							document.body.appendChild(a);
							a.click();
							window.URL.revokeObjectURL(url);
						}
						loading.close();
					}
				};
				xhr.send(formData);
			},
			//翻页
			handleCurrentChange(pageNo) {
				this.page.pageNo = pageNo;
				this.findTreeData()
			},
			//增加
			handleAdd() {
				this.$emit('handleAdd')
			},
			//点击工程详情
			currentChange(row, column, cell, event) {
				if (!column) {
					this.$emit('currentChange', row)
				} else if (column.label == '工程名称' || column.label == '施工单位') {
					this.$emit('currentChange', row)
				}
			},
			// 获取数据
			async findTreeData(name) {
				this.loading = true;
				const {data} = await this.$api.project.list({
					userId: sessionStorage.getItem("companyId"),
					limit: this.page.limit,
					pageNo: this.page.pageNo,
					name
				})
				for (let item of data.resultList) {
					item.startPlanDate = new Date(item.startPlanDate).toLocaleDateString()
					item.endPlanDate = new Date(item.endPlanDate).toLocaleDateString()
					const controller = await this.$api.controller.list({
						projectId: item.id,
						userType: sessionStorage.getItem('userType')
					})
					const data = controller.data.resultList[0]
					if (data.userName) {
						item.userNames = data.userName
					} else {
						item.userNames = ''
					}
					item.ids = data.ids
					item.projectZoneId = data.id
				}
				this.list = data.resultList
				await this.$emit('list', data.resultList)
				this.page.totalNumber = data.totalNumber
				this.loading = false;
				this.userNamesLoading = false
			},
			//修改工程
			handleEdit(row) {
				this.$emit('handleEdit', row)
			},
			//确认开工
			Start(id, status) {
				this.$axios({
					url: '/project/update',
					method: 'put',
					data: {id, status}
				}, true).then(res => {
					this.findTreeData();
				})
			},
			//提交分配监理
			async submitForm() {
				this.userNamesLoading = true
				for (let userId of this.userIds) {
					await this.$api.controller.editUserProject({
						userId,
						projectZoneId: this.projectZoneId,
						code: '0',
						userType: sessionStorage.getItem('userType')
					})
				}
				this.$message({message: '操作成功', type: 'success'});
				await this.findTreeData();
			},
			//分配监理
			async changeSelect(row) {
				this.projectZoneId = row.projectZoneId
				this.userIds = row.ids ? row.ids.split(',') : ''
				for (let userId of this.userIds) {
					await this.$api.controller.deleteUserProject({
						projectZoneId: row.projectZoneId,
						userId
					})
				}
			},
			//删除工程
			handleDelete({id}) {
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.$api.project.projectDelete({id}).then(res => {
						this.findTreeData();
						this.$message({message: '删除成功', type: 'success'});
					});
				});
			}
		}
	}
</script>

<style scoped>
	.toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

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
		bottom: 0;
	}
</style>
