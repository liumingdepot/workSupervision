<template>
	<!--单位信息 -->
	<el-form :model="dataForm" ref="dataForm" @keyup.enter.native="submitForm()" label-width="140px" label-position="left" size="small"
	         style="text-align:left;width: 600px;margin: 0 auto">
		<!-- 单位类型 -->
		<el-form-item label="单位类型" prop="type" :rules="$rules.required">
			<v-select type="USER" :lm_model="dataForm.type" ref="select" @changeSelect="changeSelect"/>
			<el-tooltip class="item" effect="dark" content="已有公司，直接跳过" placement="top-start">
				<el-button type="primary" @click="activeChange(2)" plain>已有公司，下一步</el-button>
			</el-tooltip>
		</el-form-item>
		<!-- 单位名称 -->
		<el-form-item label="单位名称" prop="name" :rules="$rules.required">
			<el-input v-model="dataForm.name" placeholder="单位名称"></el-input>
		</el-form-item>
		<!-- 上级菜单 -->
		<el-form-item label="隶属单位">
			<el-cascader :options="popupTreeData" :props="popupTreeProps" clearable @change="handleTreeSelectChange"></el-cascader>
		</el-form-item>
		<!-- 社会信用统一代码 -->
		<el-form-item label="社会信用统一代码" prop="creditCode" v-if="show">
			<el-input v-model="dataForm.creditCode" placeholder="社会信用统一代码"></el-input>
		</el-form-item>
		<!-- 负责人姓名 -->
		<el-form-item label="负责人姓名" prop="manager" :rules="$rules.isName">
			<el-input v-model="dataForm.manager" placeholder="负责人姓名"></el-input>
		</el-form-item>
		<!-- 负责人电话 -->
		<el-form-item label="负责人电话" prop="phone" :rules="$rules.mobile">
			<el-input v-model="dataForm.phone" placeholder="负责人电话"></el-input>
		</el-form-item>
		<!-- 单位地址 -->
		<el-form-item label="单位地址" prop="address" v-if="show">
			<el-input v-model="dataForm.address" placeholder="单位地址"></el-input>
		</el-form-item>
		<!-- 单位资质 -->
		<el-form-item label="单位资质" prop="quality" v-if="show">
			<el-upload :action="global.baseUrlMetro + '/uploadFile/uploadAddwatermark'" list-type="picture-card" :headers="headers" :on-preview="handlePictureCardPreview"
			           :on-success="handleSuccess" :on-remove="handleRemove" :file-list="qualityStr" style="width: 500px">
				<i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
				<img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</el-form-item>
		<!-- 提交 -->
		<el-form-item>
			<el-button type="primary" @click="submitForm">下一步</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import Cookies from "js-cookie";
	import vSelect from '@/components/select'

	export default {
		components: {
			vSelect
		},
		data() {
			return {
				dataForm: {
					type: '',
					quality: '',
					parentId: ''
				},
				quality: [],
				qualityStr: [],
				dialogImageUrl: '',
				dialogVisible: false,
				popupTreeData: [],
				popupTreeProps: {
					label: 'name',
					value: 'id',
					expandTrigger: "hover",
					children: 'children',
					checkStrictly: true
				},
				headers: {
					Authorization: ''
				},
        show:true
			}
		},
		created() {
			this.headers.Authorization = Cookies.get('token')
			this.company()
			this.personal()
		},
		methods: {
			//上传成功
			handleSuccess(response, file) {
				this.quality.push(response.data.fileUrl)
			},
			//删除
			handleRemove(file, fileList) {
				let index
				if (file.url) {
					index = this.quality.indexOf(file.url)
				} else {
					index = this.quality.indexOf(file.response.data.fileUrl)
				}
				this.quality.splice(index, 1)
			},
			//查看
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			async personal() {
				const personal = await this.$api.login.personal()
				if(personal.data.userType == 3){
					this.show = false
				}
				if (personal.data.companyId) {
					const company = await this.$api.company.findById({id: personal.data.companyId})
					this.quality = company.data.quality.split(',')
					const qualityStr = company.data.qualityStr ? company.data.qualityStr.split(',') : []
					for (let item of qualityStr) {
						this.qualityStr.push({
							url: item
						})
					}
					this.dataForm = company.data
					this.$refs.select.value = company.data.type
				}
			},
			//获取单位列表
			company() {
				this.$api.company.findAllCompanyList().then(res => {
					res.data.forEach(val => {
						val.value = [val.code, val.id]
					})
					this.popupTreeData = this.$tool.tree(res.data)
				})
			},
			//选择单位
			changeSelect(e) {
				if(e == 3){
				  this.dataForm.creditCode = (new Date()).getTime() //默认
				  this.show = false
				}else{
				  this.show = true
				}
				this.dataForm.type = e
			},
			//单位资质
			avatarQuality(avatar) {
				this.dataForm.quality = avatar
			},
			// 菜单树选中
			handleTreeSelectChange(arr) {
				this.dataForm.parentId = arr[arr.length - 1]
			},
			//单位提交
			submitForm() {
				const dataForm = this.dataForm
				dataForm.quality = this.quality.join(',')
				const type = this.$route.query.type || 'save'
				this.$refs.dataForm.validate(valid => {
					if (valid) {
						this.$api.company[type](dataForm).then(res => {
							if (!res) {
								return
							}
							this.$message({message: '操作成功', type: 'success'});
							this.dialogVisible = false;
							this.activeChange(2)
						});
					}
				});
			},
			//改变步骤
			activeChange(e) {
				this.$emit('activeChange', e)
			}
		}
	}
</script>
