<template>
	<!--上传头像组件-->
	<el-upload class="avatar-uploader" :action="action" :headers="headers" :show-file-list="false" :on-success="handleAvatarSuccess"
			  :before-upload="beforeAvatarUpload" :data="{context:'仅限随工监理系统使用'}">
		<img v-if="avatar" :src="avatar" class="avatar" :style="{width:width,height:height}">
		<i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</el-upload>
</template>

<script>
	import Cookies from "js-cookie";

	export default {
		props: ['avatar', 'width', 'height'],
		data () {
			return {
				action: '',
				headers: {}
			}
		},
		created () {
			this.action = this.global.baseUrlMetro + '/uploadFile/uploadAddwatermark'
			this.headers = {
				Authorization : Cookies.get('token')
			}
		},
		methods: {
			//获取数据
			handleAvatarSuccess (res, file) {
				this.$emit('avatar', res.data)
			},
			beforeAvatarUpload(){
			
			}
		}
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
	
	.avatar {
		width: 100px;
		height: 100px;
		display: block;
	}
</style>