<template>
    <div style="margin-top: -25px">
        <!-- 菜单 -->
        <el-menu default-active="0" mode="horizontal" @select="changeTree" style="border-bottom: none">
            <el-menu-item v-for="(item, index) in tree" :key="index" :index="String(index)"
                          style="height: 50px;padding: 0;margin-right: 26px">{{ item.type }}
            </el-menu-item>
        </el-menu>
        <!--工具栏-->
        <div style="display: flex;margin: 20px 0;align-items: center;">
            <el-select v-model="allocation" placeholder="请选择施工队" size="mini" style="width: 250px">
                <el-option v-for="item in companyList" :key="item.laborId" :label="item.laborName" :value="item.value"></el-option>
            </el-select>
            <el-button size="mini" style="margin: 0 10px" type="primary" @click="submitAllocation">批量分配</el-button>
            <!--            &lt;!&ndash;施工队包商列表&ndash;&gt;-->
            <!--            <el-checkbox-group v-model="companyValue" style="width: 84%">-->
            <!--                <el-checkbox v-for="(item, index) in companyList" :key="index" :label="item.value">{{ item.laborName }}</el-checkbox>-->
            <!--            </el-checkbox-group>-->
                        <el-button size="mini" plain type="primary" @click="clearAll">批量清除分配</el-button>
            <!--            <el-button size="mini" plain type="primary" @click="submitBatch">批量提交</el-button>-->
        </div>
        <!--表格树内容栏 批量操作-->
        <el-table :data="eventList" size="mini" style="width: 100%; margin-bottom: 100px" v-loading="loading"
                  :header-cell-style="$store.state.project.headerName" element-loading-text="加载中。。。"
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50" header-align="center" align="center" :selectable='checkboxT'></el-table-column>
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column prop="name" show-overflow-tooltip label="施工内容"></el-table-column>
            <el-table-column prop="cost" label="总工程量" sortable></el-table-column>
            <el-table-column prop="finish" label="已完成工程量" sortable></el-table-column>
            <el-table-column label="未分配工程量">
                <template slot-scope="scope">
                    <div :style="{ color: scope.row._cost != 0 ? '#fb0a0a' : '#08d59c' }">
                        {{ scope.row._cost || '分配完成' }}
                    </div>
                </template>
            </el-table-column>
            <!--            <el-table-column v-for="item in companyValue" :key="item.id" :label="item.split(',')[0]">-->
            <!--                <template slot-scope="scope">-->
            <!--                    <el-input type="number" :disabled="!scope.row._cost" @input="changeInput($event, scope.row, item)"-->
            <!--                              v-model="scope.row.arr[item]" placeholder="填写工程量"></el-input>-->
            <!--                </template>-->
            <!--            </el-table-column>-->
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <!--                    <el-button type="text" :disabled="scope.row.finish>0?true:false" @click="submitItem(scope.row)">提交</el-button>-->
                    <!--                    <span style="color:999999">&nbsp;|&nbsp; </span>-->
                    <el-button type="text" :disabled="scope.row.finish>0?true:false" @click="removeItem(scope.row)">重置分配</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--批量分配弹层-->
        <el-dialog title="提示：确认分配" width="800px" :visible.sync="dialogVisible" :close-on-click-modal="false">
            <div class="dialog">
                <el-table :data="arr" size="mini">
                    <el-table-column property="allocation" label="施工队" width="200"/>
                    <el-table-column property="name" label="工程内容"/>
                    <el-table-column property="cost" label="数量" width="100"/>
                </el-table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="submitAllocationData">确 定</el-button>
            </span>
        </el-dialog>
        <!--批量提交弹层-->
        <!--        <el-dialog title="提示：确认分配" width="800px" class="dialog" :visible.sync="dialogVisible2" :close-on-click-modal="false">-->
        <!--            <div class="dialog">-->
        <!--                <el-table :data="arr2" size="mini">-->
        <!--                    <el-table-column property="name" label="工程内容"/>-->
        <!--                    <el-table-column property="cost" label="工程量" width="100"/>-->
        <!--                    <el-table-column label="分配">-->
        <!--                        <template slot-scope="scope">-->
        <!--                            <el-tag type="info" v-for="item in scope.row.arr" :key="item.laborId" style="margin:0 10px">-->
        <!--                                {{ item.laborName }}:{{ item.cost }}-->
        <!--                            </el-tag>-->
        <!--                        </template>-->
        <!--                    </el-table-column>-->
        <!--                </el-table>-->
        <!--            </div>-->
        <!--            <span slot="footer" class="dialog-footer">-->
        <!--                <el-button size="mini" @click="dialogVisible2 = false">取 消</el-button>-->
        <!--                <el-button size="mini" type="primary" @click="submitBatchData">确 定</el-button>-->
        <!--            </span>-->
        <!--        </el-dialog>-->
        <!-- 新增修改界面 -->
        <el-dialog title="新增" width="400px" :visible.sync="dialogVisible3" :close-on-click-modal="false" class="dialog">
            <el-form label-width="100px" size="small" style="text-align:left;">
                <el-form-item label="名称">
                    <el-input v-model="dataForm3.name" :placeholder="'请提交' + name"></el-input>
                </el-form-item>
                <el-form-item label="资料上传">
                    <el-upload :action="global.baseUrlMetro + '/uploadFile/uploadAddwatermark'" :headers="headers" :on-success="success"
                               :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="说明">
                    <el-input v-model="dataForm3.remarks" placeholder="请提交说明"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" type="primary" @click="submitForm3">新增</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        data() {
            return {
                allocation: '',
                tree: [],
                eventList: [],
                companyList: [],
                companyValue: [],
                arr: [],
                arr2: [],
                loading: false,
                dialogVisible: false,
                dialogVisible2: false,
                dialogVisible3: false,
                headers: {
                    Authorization: ''
                },
                dataForm3: {
                    name: '',
                    filePath: ''
                },
                name: '',
                fileList: []
            };
        },
        computed: {
            projectId() {
                return this.$store.state.project.project.projectId;
            },
            projectZoneId() {
                return this.$store.state.project.project.projectZoneId;
            },
            companyId() {
                return this.$store.state.project.project.companyId;
            },
            status() {
                return this.$store.state.project.project.status;
            }
        },
        created() {
            this.headers.Authorization = Cookies.get('token');
            if (this.status == 2) {
                this.company();
                this.getTreeData();
            } else {
                this.$message.error('未开工，请上传开工报告，施工组织设计，若已上传等待监理审核。。。');
            }
        },
        methods: {
            //获取菜单树tree
            async getTreeData() {
                const resultList = await this.$api.event.list({
                    limit: 99999,
                    projectId: this.projectId,
                    status: '0',
                    companyId: this.companyId
                });
                this.tree = resultList.data.resultList;
                setTimeout(() => {
                    this.changeTree('0');
                }, 50);
            },
            //筛选已经完成的
            checkboxT(row, rowIndex) {
                if (row.finish > 0) {
                    return false;//禁用
                } else {
                    return true;//不禁用
                }
            },
            /**
             * 验证表单
             */
            changeInput(value, item, key) {
                if (Number(value) == 0) {
                    this.$message.error('输入有误,请重新输入');
                    item.arr[key] = ' ';
                }
                if (value > item._cost) {
                    this.$message.error('数量不能超过可用工程量最大值，请重新输入');
                    item.arr[key] = ' ';
                }
                if (value < 0) {
                    this.$message.error('数量不能小与0，请重新输入');
                    item.arr[key] = ' ';
                }
            },
            ziliao(name) {
                this.fileList = [];
                this.dataForm3 = {
                    name,
                    filePath: ''
                };
                this.name = name;
                this.dialogVisible3 = true;
            },
            //上传成功
            success(response, file) {
                this.dataForm3.filePath = response.data.fileUrl;
            },
            //获取施工队列表 并分配区段
            company() {
                this.$api.company.userList({
                    companyId: sessionStorage.getItem('companyId')
                }).then(res => {
                    for (let item of res.data) {
                        item.value = item.laborName + ',' + item.laborId;
                        //分配区段
                        this.$api.controller.editUserProject({
                            code: '1',
                            projectZoneId: this.projectZoneId,
                            userId: item.laborId
                        });
                        this.companyValue.push(item.value);
                    }
                    this.companyList = res.data;
                });
            },
            // 提交开工报告
            submitForm3() {
                if (!this.dataForm3.filePath) {
                    this.$message.error('请上传文件');
                    return;
                }
                const dataForm = {
                    name: this.dataForm3.name,
                    filePath: this.dataForm3.filePath,
                    remarks: this.dataForm3.remarks,
                    projectId: this.projectId,
                    projectName: this.name
                };
                this.$axios(
                    {
                        url: '/documentDatum/save',
                        method: 'post',
                        data: dataForm
                    },
                    true
                ).then(res => {
                    this.$message.success('操作成功');
                    this.dialogVisible3 = false;
                    if (this.status == 2) {
                        this.changeTree(this.index);
                    } else {
                        this.$message.success('上传成功，等待审核');
                    }
                });
            },
            //全选功能
            handleSelectionChange(arr) {
                this.arr = arr;
            },
            /**************************************批量分配******************************************/
            submitAllocation() {
                if (this.arr.length == 0) {
                    this.$message.error('请先选择事项内容');
                    return;
                }
                if (!this.allocation) {
                    this.$message.error('请先选择施工队');
                    return;
                }
                for (let item of this.arr) {
                    item.allocation = this.allocation.split(',')[0];
                    item.laborId = this.allocation.split(',')[1];
                }
                this.dialogVisible = true;
            },
            // 确认批量分配
            async submitAllocationData() {
                const arr = [];
                for (let item of this.arr) {
                    arr.push({
                        companyId: item.laborId,
                        cost: Number(item.cost) > 0 ? Number(item.cost) : 0,
                        eventId: item.id
                    });
                }
                await this.editCompanyEventList(arr);
                this.dialogVisible = false;
            },
            /**************************************批量提交*****************************************/
            // submitBatch() {
            //     const arr = [];
            //     for (let item of this.arr) {
            //         let arrItem = {
            //             name: item.name,
            //             cost: Number(item.cost) > 0 ? Number(item.cost) : 0,
            //             _cost: Number(item._cost) > 0 ? Number(item._cost) : 0,
            //             arr: [],
            //             endPlanDate: item.endPlanDate
            //         };
            //         for (let val in item.arr) {
            //             arrItem.arr.push({
            //                 companyId: val.split(',')[1],
            //                 laborName: val.split(',')[0],
            //                 cost: item.arr[val],
            //                 eventId: item.id
            //             });
            //         }
            //         arr.push(arrItem);
            //     }
            //     this.arr2 = arr;
            //     this.dialogVisible2 = true;
            // },
            // //确认批量提交
            // async submitBatchData() {
            //     const arr = [];
            //     for (let item of this.arr2) {
            //         for (let val of item.arr) {
            //             arr.push(val);
            //         }
            //     }
            //     await this.editCompanyEventList(arr);
            //     this.dialogVisible2 = false;
            // },
            /**************************************单个事项提交******************************************/
            // submitItem(row) {
            //     let num = 0;
            //     let arr = [];
            //     for (let val in row.arr) {
            //         num += Number(row.arr[val]);
            //         arr.push({
            //             companyId: val.split(',')[1],
            //             cost: row.arr[val],
            //             eventId: row.id,
            //             endPlanDate: row.endPlanDate
            //         });
            //     }
            //     if (num > row.cost) {
            //         this.$message.error('总量超出范围');
            //     } else {
            //         this.editCompanyEventList(arr);
            //     }
            // },
            // // 循环提交数据
            // async editCompanyEventList(arr) {
            //     const loading = this.$loading({
            //         lock: true,
            //         text: 'Loading',
            //         spinner: 'el-icon-loading',
            //         background: 'rgba(0, 0, 0, 0.7)'
            //     });
            //     for (let item of arr) {
            //         await this.$api.controller.editCompanyEventList({
            //             ...item,
            //             type: '2'
            //         });
            //     }
            //     this.$message.success('操作成功');
            //     await this.changeTree(this.index);
            //     loading.close();
            // },
            /**************************************切换事项******************************************/
            changeTree(index) {
                this.index = index;
                this.allocation = '';
                this.loading = true;
                this.$api.controller
                    .event_list({
                        limit: 99999,
                        type: '2',
                        projectZoneId: this.projectZoneId,
                        typeId: this.tree[index].id
                    })
                    .then(res => {
                        for (let item of res.data.resultList) {
                            item.arr = {};
                            item.cost = Number(item.cost);
                            item._cost = item.cost;
                            for (let val of item.costList) {
                                item.arr[val.companyName + ',' + val.companyId] = val.cost;
                                if (String(item._cost).includes('.')) {
                                    item._cost = (item._cost - item.cost).toFixed(String(item._cost).split('.')[1].length);
                                } else {
                                    item._cost -= val.cost;
                                }
                            }
                        }
                        this.eventList = res.data.resultList;
                        this.loading = false;
                    });
            },
            /**************************************清除******************************************/
            // 批量清除
            async clearAll() {
                const flag = await this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                });
                if (flag == 'confirm') {
                    this.loading = true;
                    for (let item of this.arr) {
                        await this.remove(item);
                    }
                    this.changeTree(this.index);
                    this.loading = false;
                }
            },
            //单行清除
            async removeItem(row) {
                const flag = await this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                });
                if (flag == 'confirm') {
                    this.loading = true;
                    await this.remove(row);
                    this.changeTree(this.index);
                    this.loading = false;
                }
            },
            //删除
            async remove(row) {
                for (let item in row.arr) {
                    await this.$api.event.deleteCompanyEvent({
                        companyId: item.split(',')[1],
                        eventId: row.id,
                        type: '2'
                    });
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .dialog {
        width: 700px;
        height: 50vh;
        overflow: auto;
    }
</style>
