<template>
	<!-- 工程管理 -->
	<div class="page-container">
		<!-- 菜单 -->
		<el-tabs v-model="index" type="card" closable @tab-remove="removeTab" class="tabs">
			<!--工程表格-->
			<el-tab-pane label="工程列表" name="0" :closable="false">
				<v-table @list="getList" @handleAdd="handleAdd" @handleEdit="handleEdit" @currentChange="currentChange" ref="table"/>
			</el-tab-pane>
			<!--事项表格-->
			<el-tab-pane v-for="(item, key) in Tabs" :key="key" :label="item.name" :name="item.id">
				<v-table2 :projectZoneId="item.projectZoneId" :projectId="item.id"/>
			</el-tab-pane>
		</el-tabs>
		<!-- 工程新增修改界面 -->
		<v-form @submit="submit" ref="form"/>
	</div>
</template>

<script>
	import vTable from './components/table';
	import vTable2 from './components/table2';
	import vForm from './components/form';

	export default {
		components: {
			vTable,
			vTable2,
			vForm
		},
		data () {
			return {
				index: '0',
				Tabs: [],
				list: [],
				name: '',
				type: '',
				show: 1,
				row: {},
				projectZoneId: ''
			};
		},
		methods: {
			//获取数据
			getList (list) {
				this.list = list
			},
			//删除tabs
			removeTab (id) {
				this.Tabs.forEach((val,index)=>{
					if(val.id == id){
						this.Tabs.splice(index,1)
					}
				})
				this.index = '0'
			},
			//切换tabs工程
			currentChange (row) {
				if (this.Tabs.includes(row)) {
					this.index = row.id
				} else {
					this.Tabs.push(row)
					this.index = row.id
				}
			},
			//搜索
			search (name) {
				this.$refs.table.findTreeData(name)
			},
			//刷新
			submit () {
				this.search()
			},
			//增加工程
			handleAdd () {
				this.$refs.form.type = 'add'
				this.$refs.form.dataForm = {
					type:'',
					name:"",
					proposal:'',
					code:'',
					companyId:'',
					design:'',
					units:'',
					location:'',
					startPlanDate:'',
					endPlanDate:''
				}
				this.$nextTick(()=>{
					this.$refs.form.$refs.dataForm.resetFields()
				});
				this.$refs.form.dialogVisible = true
			},
			//修改工程
			handleEdit (row) {
				this.$refs.form.type = 'put'
				this.$refs.form.dataForm = {
					id:row.id,
					name:row.name,
					proposal:row.proposal,
					code:row.code,
					type:row.type,
					companyId:[row.companyId],
					design:row.design,
					units:row.units,
					location:row.location,
					startPlanDate:row.startPlanDateStr,
					endPlanDate:row.endPlanDateStr,
					projectZoneId:row.projectZoneId
				}
				if(row.ownerId.includes(',')){
					this.$refs.form.dataForm.ownerId = row.ownerId.split(',')
				}else{
					this.$refs.form.dataForm.ownerId = [row.ownerId]
				}
				this.$refs.form.dialogVisible = true
			}
		}
	};
</script>
