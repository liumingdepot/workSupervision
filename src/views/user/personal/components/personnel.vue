<template>
    <!--个人-->
    <el-form :model="dataForm" ref="dataForm" @keyup.enter.native="submitForm()" style="text-align:left;width: 500px;margin: 0 auto"
             label-width="100px" label-position="left" size="small">
        <!-- 公司归属 -->
        <el-form-item label="公司归属" :rules="$rules.required" prop="companyId">
            <el-cascader v-model="dataForm.companyId" :options="popupTreeData" :props="popupTreeProps" clearable
                         @change="handleTreeSelectChange"></el-cascader>
            <el-tooltip class="item" effect="dark" content="没有所属公司，先创建公司" placement="top-start">
                <el-button type="primary" @click="activeChange(1)" plain>创建公司</el-button>
            </el-tooltip>
        </el-form-item>
        <!-- 账号 -->
        <el-form-item label="账号" prop="userName" :rules="$rules.required">
            <el-input v-model="dataForm.userName" disabled></el-input>
        </el-form-item>
        <!-- 昵称 -->
        <el-form-item label="昵称" prop="name" :rules="$rules.required">
            <el-input v-model="dataForm.name"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="dataForm.email"></el-input>
        </el-form-item>
        <!-- 电话 -->
        <el-form-item label="电话" prop="mobile" v-if="showMobile">
            <el-input v-model="dataForm.mobile" disabled></el-input>
        </el-form-item>
        <!-- 电话 -->
        <el-form-item label="电话" prop="mobile" v-if="!showMobile">
            <el-input v-model="dataForm.mobile" placeholder="请输入电话" style="width: 60%"></el-input>
            <el-tag type="warning">绑定电话，用于找回密码</el-tag>
        </el-form-item>
        <!--验证码-->
        <el-form-item prop="vsCode" label="验证码" v-if="!showMobile">
            <el-input type="text" v-model="dataForm.vsCode" placeholder="请输入验证码" style="width:30%;"></el-input>
            <el-button style="width:30%;" type="primary" @click.native.prevent="changeMobile" :disabled="mobile=='发送验证码'?false:true">
                {{mobile}}
            </el-button>
        </el-form-item>
        <!-- 提交 -->
        <el-form-item>
            <el-button type="primary" @click="activeChange(1)">上一步</el-button>
            <el-button type="primary" @click="submitForm">下一步</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

    import vSelect from '@/components/select';

    export default {
        components: {
            vSelect
        },

        data() {
            return {
                showMobile: '',
                mobile: '发送验证码',
                dataForm: {
                    companyId: ''
                },
                roleId: '',
                popupTreeData: [],
                popupTreeProps: {
                    label: 'name',
                    value: 'id',
                    expandTrigger: 'hover',
                    children: 'children',
                    checkStrictly: true
                }
            };
        },
        created() {
            this.company();
            this.personal();
        },
        methods: {
            //获取单位列表
            company() {
                this.$api.company.findAllCompanyList().then(res => {
                    res.data.forEach(val => {
                        val.value = [val.code, val.id];
                    });
                    this.popupTreeData = this.$tool.tree(res.data);
                });
            },
            //选择单位
            changeSelect(e) {
                console.log(e);
                this.dataForm.userType = e;
            },
            //获取验证码
            changeMobile() {
                if (!this.dataForm.mobile) {
                    this.$message({ message: '请填写手机号', type: 'error' });
                    return;
                }
                let dateInterval = setInterval(() => {
                    if (this.mobile <= 0) {
                        this.mobile = '发送验证码';
                        clearInterval(dateInterval);
                    } else {
                        this.mobile--;
                    }
                }, 1000);
                this.$api.user.sendSms({
                    mobile: this.dataForm.mobile
                }).then(res => {
                    console.log(res);
                });
                this.mobile = 60;
            },
            //获取数据
            async personal() {
                const personal = await this.$api.login.personal();
                this.showMobile = personal.data.mobile ? true : false;
                this.dataForm = personal.data;
            },
            //分配
            handleTreeSelectChange(arr) {
                this.dataForm.companyId = arr[arr.length - 1];
                this.$api.company.findById({
                    id: arr[arr.length - 1]
                }).then(res => {
                    this.dataForm.userType = res.data.type;
                });
            },
            //个人提交
            submitForm() {
                //表单验证
                this.$refs.dataForm.validate(valid => {
                    if (valid) {
                        if (this.showMobile) {
                            delete this.dataForm.mobile;
                        }
                        delete this.dataForm.password;
                        //获取用户类型
                        this.$api.authority.findAll().then(p1 => {
                            console.log(p1);
                            for (let item of p1.data) {
                                if (item.code == this.dataForm.userType) {
                                    this.roleId = item.id;
                                }
                            }
                            //提交个人信息
                            this.$api.user.modifyInfo(this.dataForm).then(p2 => {
                                if (!p2) {
                                    return;
                                }
                                // 提交用户类型
                                this.$api.user.editUserRole2({
                                    roleId: this.roleId
                                }).then(p3 => {
                                    // 确认认证流程完成
                                    this.$api.user.modifyPerfect().then(p4 => {
                                        const menuList = this.$tool.tree(p4.data);
                                        sessionStorage.setItem('menu', window.JSON.stringify(menuList));
                                    }).then(res => {
                                        this.$message({ message: '操作成功', type: 'success' });
                                        this.$router.push('/'); // 登录成功，跳转到主页
                                    });
                                });
                            });
                        });
                    }
                });
            },
            //改变步骤
            activeChange(e) {
                this.$emit('activeChange', e);
            }
        }
    };
</script>
