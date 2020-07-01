<template>
    <!-- 新增修改界面 -->
    <el-dialog :title="type == 'add' ? '新增' : '查看'" width="60%" :visible.sync="dialogVisible" :close-on-click-modal="false">
        <el-input v-if="type == 'add'" placeholder="请输入批次名称" v-model="dataForm.name" style="margin: 20px auto;width: 400px"></el-input>
        <el-date-picker v-if="type == 'add'" v-model="dataForm.putawayDateSub" value-format="yyyy-MM-dd" type="date" placeholder="选择日期"></el-date-picker>
        <div style="display: flex">
            <el-checkbox-group v-if="type == 'add'" v-model="checkList" @change="changeCheckList">
                <el-checkbox style="display: block;text-align: left;height: 30px" v-for="(item, index) in list" :key="index" :label="item">{{ item.name }} </el-checkbox>
            </el-checkbox-group>
            <el-table :data="dataForm.materialsInfos" stripe size="mini" tooltip-effect="dark" ref="materials" v-loading="loading">
                <el-table-column prop="name" header-align="center" align="center" label="入库材料">
                    <el-table-column prop="name" header-align="left" align="left" label="材料名称"></el-table-column>
                    <el-table-column header-align="center" align="left" label="供货商">
                        <template slot-scope="scope">
                            <el-input placeholder="请输入供货商" size="mini" v-model="scope.row.supplier"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column header-align="center" align="center" label="入库数量">
                        <template slot-scope="scope">
                            <el-input-number v-model="scope.row.number" size="mini" :min="1" :max="scope.row.oldNumber" label="请输入入库数量"></el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column header-align="center" align="center" label="合格报告">
                        <template slot-scope="scope">
                            <el-link type="primary" v-if="scope.row.complianceReport" @click="goURL(scope.row.warehouseWarrant.split(',')[1])">{{ scope.row.complianceReport.split(',')[0] }} </el-link>
                            <el-upload :action="global.baseUrlMetro + '/uploadFile/upload'" :headers="headers" :show-file-list="false" :on-success="success" style="float: right">
                                <el-button size="mini" type="primary" v-if="type == 'add'" @click="changeUpload(scope.row, 'complianceReport')">
                                    点击上传
                                </el-button>
                            </el-upload>
                        </template>
                    </el-table-column>
                    <el-table-column header-align="center" align="center" label="入库单">
                        <template slot-scope="scope">
                            <el-link type="primary" v-if="scope.row.warehouseWarrant" @click="goURL(scope.row.warehouseWarrant.split(',')[1])">{{ scope.row.warehouseWarrant.split(',')[0] }} </el-link>
                            <el-upload :action="global.baseUrlMetro + '/uploadFile/upload'" :headers="headers" :show-file-list="false" :on-success="success" style="float: right">
                                <el-button size="mini" type="primary" v-if="type == 'add'" @click="changeUpload(scope.row, 'warehouseWarrant')">
                                    点击上传
                                </el-button>
                            </el-upload>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="dialogVisible = false">取消</el-button>
            <el-button size="small" type="primary" v-if="type == 'add'" @click="submitForm">新增</el-button>
        </span>
    </el-dialog>
</template>

<script>
import Cookies from 'js-cookie'

export default {
    data() {
        return {
            list: [],
            checkList: [],
            dialogVisible: false,
            dataForm: {
                name: '',
                list: []
            },
            loading: false,
            type: '',
            form: {},
            headers: {
                Authorization: ''
            },
            row: {},
            upType: ''
        }
    },
    created() {
        this.headers.Authorization = Cookies.get('token')
    },
    methods: {
        async initData(dataForm) {
            this.loading = true
            this.checkList = []
            this.dataForm = dataForm
            //总库存数据获取
            const materialsStorage_list = await this.$api.sorage.materialsStorage_list(this.form)
            this.list = materialsStorage_list.data.resultList
            this.list.forEach(item => {
                this.$refs.materials.toggleRowSelection(item)
            })
            this.loading = false
            //如果是修改 获取已入库数据
            if (this.type == 'put') {
                const info_list = await this.$api.sorage.info_list({ materialsId: dataForm.id })
                for (let item of info_list.data.resultList) {
                    for (let val of materialsStorage_list.data.resultList) {
                        if (item.name == val.name) {
                            this.checkList.push(val)
                        }
                    }
                }
                this.dataForm.materialsInfos = info_list.data.resultList
            }
        },
        //点击上传 传递字段
        changeUpload(row, type) {
            this.row = row
            this.upType = type
        },
        // 预览
        goURL(url) {
            window.location.href = url
        },
        //上传成功
        success(response, file) {
            const index = this.dataForm.materialsInfos.indexOf(this.row)
			this.dataForm.materialsInfos[index][this.upType] = file.name + ',' + response.data.viewUrl
        },
        //多选
        changeCheckList(arr) {
            this.dataForm.materialsInfos = arr.map(item => {
                return {
					storageId:item.id,
                    model: item.model,
                    name: item.name,
                    unit: item.unit,
                    oldNumber: Number(item.number),
                    number: Number(item.number),
                    supplier: '',
                    complianceReport: '',
                    warehouseWarrant: ''
                }
            })
        },
        submitForm() {
            //表单验证
            if (!this.dataForm.putawayDateSub || !this.dataForm.name) {
                this.$message.error('批次名称或日期未填写')
                return
            }
            if (this.dataForm.materialsInfos.length == 0) {
                this.$message.error('请选择材料入库')
                return
            }
            if (this.dataForm.materialsInfos.length > 0) {
                for (let item of this.dataForm.materialsInfos) {
                    if (!item.supplier || !item.number) {
                        this.$message.error(item.name + '未填写完整')
                        return
                    }
                }
            }
            //克隆数据
			const dataForm = JSON.parse(JSON.stringify(this.dataForm))
			dataForm.materialsInfos = JSON.stringify(dataForm.materialsInfos)
            //判断新增还是修改
            const api = this.type == 'add' ? 'savePutaway' : 'updatePutaway'
            this.$api.sorage[api](dataForm).then(res => {
                if (res.code == 200) {
                    this.$message.success('操作成功')
                    this.$emit('changeTree', this.form.typeId)
                    this.dialogVisible = false
                }
            })
        }
    }
}
</script>
