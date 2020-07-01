<template>
    <!-- 新增修改界面 -->
    <el-dialog :title="type == 'add' ? '新增' : '修改'" width="600px" :visible.sync="dialogVisible" :close-on-click-modal="false">
        <el-form ref="dataForm" @keyup.enter.native="submitForm()" :model="dataForm" :rules="$rules" style="margin: 0 30px"
                 label-width="120px" size="small">
            <el-form-item label="工程名称" prop="name" :rules="$rules.required">
                <el-input v-model="dataForm.name" placeholder="工程名称"></el-input>
            </el-form-item>
            <el-form-item label="立项名称" prop="proposal">
                <el-input v-model="dataForm.proposal" placeholder="立项名称"></el-input>
            </el-form-item>
            <el-form-item label="立项编码" prop="code">
                <el-input v-model="dataForm.code" placeholder="立项编码"></el-input>
            </el-form-item>
            <el-form-item label="工程类别" prop="type">
                <el-select v-model="dataForm.type" placeholder="请选择" @change="lmSelectChange" style="width: 100%">
                    <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="施工单位" prop="companyId">
                <el-cascader :options="popupTreeData" :props="popupTreeProps" clearable v-model="dataForm.companyId"
                             style="width: 100%"></el-cascader>
            </el-form-item>
            <el-form-item label="建设单位" prop="companyId">
                <el-select v-model="dataForm.ownerId" placeholder="请选择" multiple size="mini" style="width: 100%">
                    <el-option v-for="item in popupTreeData2" :key="item.value" :label="item.name" :value="item.id"></el-option>
                </el-select>
                <!--<el-cascader :options="popupTreeData2" :props="popupTreeProps" clearable v-model="dataForm.ownerId" style="width: 100%"></el-cascader>-->
            </el-form-item>
            <el-form-item label="设计单位" prop="design">
                <el-input v-model="dataForm.design" placeholder="设计单位"></el-input>
            </el-form-item>
            <el-form-item label="建设地点" prop="location">
                <el-input v-model="dataForm.location" placeholder="建设地点"></el-input>
            </el-form-item>
            <el-form-item label="预计开工时间" prop="startPlanDate">
                <el-date-picker v-model="dataForm.startPlanDate" type="date" placeholder="选择日期" style="width: 100%"></el-date-picker>
            </el-form-item>
            <el-form-item label="预计完工时间" prop="endPlanDate">
                <el-date-picker v-model="dataForm.endPlanDate" type="date" placeholder="选择日期" style="width: 100%"></el-date-picker>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="dialogVisible = false">{{ $t('action.cancel') }}</el-button>
            <el-button size="small" v-if="type == 'put'" type="primary" @click.stop="submitForm(type)">修改</el-button>
            <el-button size="small" v-if="type == 'add'" type="primary" @click.stop="submitForm(type)">新增</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import vSelect from '@/components/select';

    export default {
        components: {
            vSelect
        },
        data() {
            return {
                type: '',
                popupTreeData: [],
                popupTreeData2: [],
                popupTreeProps: {
                    label: 'name',
                    children: 'children',
                    value: 'id',
                    checkStrictly: true
                },
                options: [],
                dataForm: {},
                dialogVisible: false
            };
        },
        props: {
            list: Array
        },
        created() {
            this.getTreeData();
            this.$api.dict.findDictByCode({
                code: 'PROJECT_TYPE'
            }).then(res => {
                this.options = res.data.dictVos;
            });
        },
        methods: {
            //获取建设单位
            getTreeData() {
                this.$api.company.list({
                    type: '1'
                }).then(res => {
                    let list = this.$tool.tree(res.data.resultList);

                    console.log(res);
                    this.popupTreeData = list;
                });
                this.$api.company.list({
                    type: '5'
                }).then(res => {
                    let list = this.$tool.tree(res.data.resultList);
                    this.popupTreeData2 = list;
                });
            },
            changeMenu(item) {
                this.$emit('changeMenu', item);
            },
            //类别选中
            lmSelectChange(e) {
                console.log(e);
                this.dataForm.type = e;
            },
            // 表单提交
            async submitForm(type) {
                const api = type == 'put' ? 'update' : 'save';
                const dataForm = this.dataForm;
                dataForm.ownerId = dataForm.ownerId? dataForm.ownerId.join(','):''
                //验证表单
                const validate = await this.$refs['dataForm'].validate();
                if (validate) {
                    //创建工程
                    this.popupTreeData2.forEach(val => {
                        if (val.id == dataForm.ownerId) {
                            dataForm.units = val.name;
                        }
                    });
                    dataForm.userId = sessionStorage.getItem('companyId');
                    if (dataForm.ownerId && dataForm.ownerId.length > 0) {
                        dataForm.ownerId = dataForm.ownerId[dataForm.ownerId.length - 1];
                    }
                    if (dataForm.companyId && dataForm.companyId.length > 0) {
                        dataForm.companyId = dataForm.companyId[dataForm.companyId.length - 1];
                    }
                    dataForm.status = dataForm.companyId ? '1' : '0';
                    const project = await this.$api.project[api](dataForm);
                    const controller = {
                        name: dataForm.name,
                        endPlanDate: dataForm.endPlanDate,
                        startPlanDate: dataForm.startPlanDate
                    };
                    if (type == 'put') {
                        controller.id = dataForm.projectZoneId;
                    } else {
                        controller.projectId = project.data;
                    }
                    await this.$api.controller[api](controller);
                    this.$refs['dataForm'].resetFields();
                    this.$message({ message: '操作成功', type: 'success' });
                    this.$emit('submit');
                    this.dialogVisible = false;
                }
            }
        }
    };
</script>
