<!--施工队管理-->
<template>
	<div class="page-container">
		<!--工具栏-->
		<el-button type="primary" @click="handleAdd" size="mini" style="float:left;margin:20px 0;">选择施工队</el-button>
		
		<!--表格树内容栏-->
		<el-table :data="list" row-key="id"  size="mini" style="width: 100%;"  v-loading="loading"
				  element-loading-text="加载中。。。" :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" header-align="center" align="center" width="50" label="排序"/>
			<el-table-column prop="laborName" header-align="center" align="center" label="施工队"></el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right" header-align="center" align="center" width="120" label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<!--新增-->
		<el-dialog title="施工队" width="700px" :visible.sync="dialogVisible" :close-on-click-modal="false">
			<el-transfer v-model="value" :props="props" :data="meunData" style="text-align: left;margin: 0 auto" filterable
						 filter-placeholder='请输入施工队名称' :titles="['施工队列表', '已选中']" @change="transferChange"/>
			<span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitMenu">确认</el-button>
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
		data () {
			return {
				loading: false,
				filters: {
					name: ''
				},
				props: {
					key: 'id',
					label: 'name'
				},
				value: [],
				meunData: [],
				newMeunData: [],
				list: [],
				dialogVisible: false,
				dialogVisible2: false,
				dataForm: {
					laborId: ''
				},
				options: [],
				userType: '',
				projectZoneId: '',
				userId: '',
                laborName:'',
			}
		},
		created () {
			this.initLoadData()
			this.resultList()
		},
		methods: {
			//初始化加载
			initLoadData (type) {
				this.loading = true;
				let lists = [];
				this.$api.company.userList({
					companyId: sessionStorage.getItem("companyId")
				}).then(res=>{
					this.list = res.data
					this.loading = false;
				})
			},
			//获取施工队
			async resultList () {
				const list = await this.$api.company.list({type: 3})
				console.log(list);
				this.meunData = list.data.resultList
				const project = await this.$api.project.list({companyId: sessionStorage.getItem("companyId")})
				const options = [];
				project.data.resultList.forEach((val, index) => {
					options.push(val)
					this.$api.controller.list({
						projectId: val.id, 
						userType: '3'
					}).then(res => {
						options[index].options = res.data.resultList
					})
				})
				this.$api.company.userList({
					companyId: sessionStorage.getItem("companyId")
				}).then(res => {
					const value = []
					for (const item of res.data) {
						value.push(item.laborId)
					}
					this.value = value
				})
				this.options = options
			},
			transferChange (arr) {
				this.dataForm.laborId = arr.join(',');
			},
			//新增
			handleAdd () {
				this.dataForm.laborId = ""
				this.dialogVisible = true;
			},
			handleDelete (data) {
				this.$api.company.userDel({id: data.id}).then(res => {
					this.initLoadData()
				})
			},
			//提交
			submitMenu () {
				this.$api.company.editUserCompany({
					companyId: sessionStorage.getItem("companyId"),
					laborId: this.dataForm.laborId
				}).then(res => {
					this.initLoadData()
					this.dialogVisible = false
				})
			}
		}
	}
</script>
