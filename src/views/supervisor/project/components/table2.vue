<template>
    <div class="form" style="margin-top: -15px">
        <div style="display: flex;justify-content: space-between;align-items: flex-end">
            <!-- 菜单 -->
            <el-menu default-active="0" mode="horizontal" @select="changeMenu" style="margin-bottom: 20px;border:none">
                <el-menu-item size="mini" v-for="(item,index) in tree" :key="index" :index="String(index)"
                              style="height: 50px;padding: 0;margin-right: 26px">{{item.name}}
                </el-menu-item>
            </el-menu>
            <!--工具栏-->
            <div style="display: flex;margin-bottom: 18px" v-if="$store.state.project.project.userType != 5">
                <el-upload :action="global.baseUrlMetro + '/event/importEvent'" :headers="headers" :data="form"
                           :show-file-list='false' :on-success="success" :on-progress="progress" style="margin: 0 10px">
                    <el-button size="mini" type="primary">导入施工内容</el-button>
                </el-upload>
                <el-button size="mini" type="primary" @click="handleAdd" plain>新增事项</el-button>
                <el-button size="mini" type="primary" @click="handleDeleteAll" plain>多选删除</el-button>
            </div>
        </div>
        <!--表格树内容栏-->
        <el-table :data="eventList" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。"
                  @selection-change="handleSelectionChange" :header-cell-style="$store.state.project.headerName">
            <el-table-column type="selection" header-align="center" align="center" width="50"></el-table-column>
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column label="施工内容">
                <template slot-scope="scope">
                    <el-tooltip class="item" :content="scope.row.name" placement="bottom" effect="light">
                        <span class="name">{{ scope.row.name}}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column label="预计完工时间" width="200">
                <template slot-scope="scope">
                    <div class="endPlanDate" v-if="$store.state.project.project.userType != 5">
                        <div class="endPlanDate1">{{scope.row.endPlanDateStr||'未分配'}}</div>
                        <el-date-picker  class="endPlanDate2" size="small" v-model="scope.row.endPlanDateStr" type="date" placeholder="请选择" value-format="yyyy-MM-dd"
                                        :start-placeholder="startPlaceholder" @blur="datePicker(scope.row)"></el-date-picker>
                    </div>
                    <div v-else class="endPlanDate1">{{scope.row.endPlanDateStr||'未分配'}}</div>
                </template>
            </el-table-column>
            <el-table-column prop="cost" sortable  label="工程量"></el-table-column>
            <el-table-column prop="unit" sortable  label="单位"></el-table-column>
            <el-table-column prop="plan" sortable label="进度"></el-table-column>
            <el-table-column prop="progress" sortable label="百分比"></el-table-column>
            <el-table-column label="工程状态">
                <template slot-scope="scope">
                    <span :style="{color:scope.row.color||'#08d59c'}">{{scope.row.bi?'已超期'+scope.row.bi+'天':'正常'}}</span>
                </template>
            </el-table-column>
            <!-- 操作 -->
            <el-table-column width="185" label="操作" v-if="$store.state.project.project.userType != 5">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                    <span style="color:999999">&nbsp;|&nbsp; </span>
                    <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 详情新增修改界面 -->
        <el-dialog :title="type == 'event_save'?'新增':'修改'" width="500px" :visible.sync="dialogVisible">
            <el-form label-width="70px" size="small" label-position="left">
                <el-form-item label="事项名称">
                    <el-input v-model="dataFrom.name"></el-input>
                </el-form-item>
                <el-form-item label="工程量">
                    <el-input v-model="dataFrom.cost"></el-input>
                </el-form-item>
                <el-form-item label="单位">
                    <el-input v-model="dataFrom.unit"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="dataFrom.sort"></el-input>
                </el-form-item>
                <el-form-item label="标准化拍摄指南:">
                    <el-input type="textarea" :rows="5" v-model="dataFrom.remarks"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitForm">提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        data() {
            return {
                show: false,
                tree: [],
                form: {},
                startPlaceholder: new Date().toDateString(),
                eventList: [],
                dataFrom: {
                    name: '',
                    cost: '',
                    unit: '',
                    remarks:''
                },
                type: '',
                headers: {},
                loading: false,
                dialogVisible: false,
                arr: [],
                yujing: [],
                page: {
                    limit: 9999,
                    pageNo: 1,
                    pageSize: 10,
                    totalNumber: 0
                }
            }
        },
        props: ['projectZoneId', 'projectId'],
        created() {
            this.yujingD()
            this.getTreeData();
            this.headers.Authorization = Cookies.get('token')
        },
        methods: {
            yujingD() {
                this.$axios({
                    url: '/userDict/findByCode',
                    params: {
                        companyId: sessionStorage.getItem('companyId'),
                        code: 'WARN'
                    }
                }, true).then(res => {
                    if (res.data.length > 0) {
                        this.yujing = res.data
                    }
                });
            },
            //获取菜单树tree
            getTreeData() {
                this.$api.event.list({
                    limit: 9999,
                    projectId: this.projectId,
                    status: '0',
                    companyId: sessionStorage.getItem('companyId')
                }).then(res => {
                    if (res.data.resultList == 0) {
                        this.$message({message: '请先添加施工类别', type: 'error'});
                        return
                    }
                    const tree = [];
                    for (let item of res.data.resultList) {
                        tree.push({
                            name: item.type,
                            typeName: item.type,
                            typeId: item.id,
                            projectZoneId: this.projectZoneId
                        })
                    }
                    this.tree = tree
                    this.changeTree(0)
                })
            },
            //切换事项
            changeMenu(index) {
                this.page = {
                    limit: 9999,
                    pageNo: 1,
                    pageSize: 10,
                    totalNumber: 0
                }
                this.changeTree(index)
            },
            changeTree(index) {
                this.index = index
                this.form = this.tree[index]
                this.loading = true
                this.$api.controller.event_list({
                    limit: this.page.limit,
                    pageNo: this.page.pageNo,
                    projectZoneId: this.projectZoneId,
                    typeId: this.form.typeId
                }).then(res => {
                    for (let item of res.data.resultList) {
                        const end = new Date(item.endPlanDateStr).getTime() //预计完工
                        const now = new Date().getTime() //现在
                        if (now > end) {
                            const bi = Math.ceil((now - end) / 24 / 60 / 60 / 1000)
                            if (this.yujing.length > 0) {
                                for (let val of this.yujing) {
                                    const min = val.value.split('-')[0]
                                    const max = val.value.split('-')[1]
                                    if (bi > min && bi < max) {
                                        item.bi = bi
                                        item.color = val.color
                                    }
                                }
                            }
                        }
                        //数量小数点去除
                        item.cost = Number(item.cost)
                        if(item.plan.includes('/')){
                            let plan = item.plan.split('/')
                            //判断分母不为0
                            if(!plan[1]){
                                item.progress = '0%'
                            }else{
                                plan[0] = Number(plan[0])
                                plan[1] = Number(plan[1])
                                item.plan = plan[0] + '/' + plan[1]
                                item.progress = ((plan[0] / plan[1]) * 100).toFixed(2) + '%'
                            }
                        }else{
                            item.progress = '0%'
                        }
                    }
                    this.page.totalNumber = res.data.totalNumber
                    this.eventList = res.data.resultList
                    this.loading = false
                })
            },
            //上传时钩子
            progress() {
                this.loading = true
            },
            //分配完工时间
            datePicker(row) {
                this.$api.controller.event_update({
                    id: row.id,
                    endPlanDate: row.endPlanDateStr
                }).then(res => {
                    this.success()
                })
            },
            //刷新页面
            success() {
                this.loading = false
                this.$message({message: '成功', type: 'success'});
                this.changeTree(this.index);
            },
            //新增事项内容
            handleAdd() {
                this.type = 'event_save';
                this.dataFrom = {
                    name: '',
                    cost: '',
                    unit: '',
                    remarks:'',
                    typeId: this.form.typeId,
                    projectZoneId: this.projectZoneId
                }
                this.dialogVisible = true
            },
            //编辑事项内容
            handleEdit(row) {
                this.type = 'event_update'
                this.dataFrom = {
                    name: row.name,
                    cost: row.cost,
                    unit: row.unit,
                    remarks:row.remarks,
                    id: row.id,
                    typeId: row.typeId,
                    remarks: row.remarks,
                    projectZoneId: this.projectZoneId
                }
                this.dialogVisible = true
            },
            //删除事项内容
            handleDelete(item) {
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$api.controller.event_delete({id: item.id}).then(res => {
                        this.success()
                    });
                });
            },
            //全选功能
            handleSelectionChange(arr) {
                this.arr = arr
            },
            //多选删除事项内容
            handleDeleteAll() {
                if (this.arr.length == 0) {
                    this.$message({message: '请先选择', type: 'error'});
                    return
                }
                const ids = []
                for (let item of this.arr) {
                    ids.push(item.id)
                }
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.loading = true
                    this.$api.controller.event_delete({
                        id: ids.join(',')
                    }).then(res => {
                        this.success()
                        this.loading = false
                    });
                });
            },
            //提交
            submitForm() {
                this.$api.controller[this.type](this.dataFrom).then(res => {
                    this.success()
                    this.dialogVisible = false
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .toolbar {
        float: left;
    }

    .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        cursor: pointer;
    }
    .endPlanDate {
        .endPlanDate1{
            display: block;
        }
        .endPlanDate2{
            display: none;
            width: 150px;
        }
        &:hover{
            .endPlanDate1{
                display: none;
            }
            .endPlanDate2{
                display: block;
            }
        }
    }
</style>


