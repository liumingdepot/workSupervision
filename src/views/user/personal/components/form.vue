<template>
	<el-dialog title="账户名称" width="500px" :visible.sync="dialogVisible" :show-close="false" :close-on-press-escape="false"
	:close-on-click-modal="false">
		<el-form label-width="100px" size="small" style="text-align:left;">
			<el-form-item label="账户名称">
				<el-input v-model="dataForm.userName" placeholder="账户名称"></el-input>
			</el-form-item>
			<el-form-item label="账户密码">
				<el-input type="password" v-model="dataForm.password" placeholder="账户密码"></el-input>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button size="small" type="primary" @click="submit">确认</el-button>
		</span>
	</el-dialog>
</template>

<script>
	export default {
		data(){
			return{
				dialogVisible:false,
				dataForm:{}
			}
		},
		created(){
			this.personal()
		},
		methods:{
			//获取数据
			personal () {
				this.$api.login.personal().then(res=>{
					this.dialogVisible = res.data.userName ? false : true
				})
			},
			//提交
			submit () {
				if (!this.dataForm.userName||!this.dataForm.password) {
					this.$message({message: '请填写用户名密码', type: 'error'});
					return;
				}
				this.$api.user.modifyInfo(this.dataForm).then(res => {
					this.$message({message: '操作成功', type: 'success'});
					this.dialogVisible = false;
				});
			}
		}
	}
</script>