<template>
	<div class="container">
		<h1>完善资料</h1>
		<!-- 单位 步骤条 -->
		<el-steps :active="active" align-center process-status="wait" style="margin: 50px auto;">
			<el-step title="步骤 1" description="单位信息"></el-step>
			<el-step title="步骤 2" description="个人信息"></el-step>
		</el-steps>
		<!-- 检测用户名 -->
		<v-form />
		<!--单位-->
		<v-company @activeChange="activeChange" v-if="active == 1" />
		<!--个人-->
		<v-personnel @activeChange="activeChange" v-if="active == 2" />
	</div>
</template>

<script>
	import vCompany from './components/company'
	import vPersonnel from './components/personnel'
	import vForm from './components/form'
	
	export default {
		components: {
			vCompany,
			vPersonnel,
			vForm
		},
		data () {
			return {
				active:1,
				userId:''
			}
		},
		methods: {
			activeChange(e){
				this.active = e
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
