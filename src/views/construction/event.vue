<template>
    <div>
        <div style="float: right;margin-bottom:20px">
            <el-date-picker size="small" v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期"
                            end-placeholder="结束日期"></el-date-picker>
            <el-button type="primary" size="small"  @click="sublim">确认</el-button>
            <el-button type="primary" size="small" @click="packageAll">导出日报</el-button>
        </div>
        <!--表格树内容栏 批量操作-->
        <el-table :data="eventList" ref="table" size="mini" class="table" :header-cell-style="$store.state.project.headerName">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <div v-if="props.row.fileList.length == 0">暂无数据</div>
                    <div v-else>
                        <div class="imgs">
                            <div style="width:80px;height:150px;margin:0 20px 20px 0;" v-for="(o, i) in props.row.imgs" :key="i">
                                <el-image style="width:80px;height:120px;" :src="o.pathNameStr"
                                          :preview-src-list="[o.pathNameStr,...props.row.imgArr]"></el-image>
                                <el-button type="text" size="mini" @click="delImg(o.id, props.row.imgs, i)"
                                           style="margin:0 auto;display:block">删除
                                </el-button>
                            </div>
                        </div>
                        <div class="imgs">
                            <div style="width:200px;height:150px;margin:0 20px 20px 0;" v-for="(o, i) in props.row.video" :key="i">
                                <video style="width:200px;height:120px;" controls="controls"
                                       :src="o.pathNameStr"></video>
                                <el-button type="text" size="mini" @click="delImg(o.id, props.row.video, i)"
                                           style="margin:0 auto;display:block">删除
                                </el-button>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="typeName" label="事项名称"></el-table-column>
            <el-table-column prop="lastCost" sortable label="剩余量"></el-table-column>
            <el-table-column prop="cost" sortable label="日完成量"></el-table-column>
            <el-table-column prop="event.unit" sortable label="单位"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background :page-size="limit" layout="prev, pager, next" :total="total" @current-change="currentChange"
                       @prev-click="prevClick" @next-click="nextClick" class="pagination"></el-pagination>
        <el-dialog title="日完成量" :visible.sync="dialogVisible" width="30%" :show-close="false" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <el-input v-model="fromData.cost" type="number" placeholder="最大保留两位小数" size="mini" @input="changeInput"/>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="submitData">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    export default {
        data() {
            return {
                daterange: '',
                paramsDate: {},
                eventList: [],
                fromData: {
                    cost: 0,
                    eventId: 0,
                    date: ''
                },
                dialogVisible: false,
                limit: 10,
                pageNo: 1,
                total: 0
            };
        },
        computed: {
            projectZoneId() {
                return this.$store.state.project.project.projectZoneId;
            },
            projectName() {
                return this.$store.state.project.project.name;
            }
        },
        created() {
            this.initData();
        },
        methods: {
            sublim() {
                this.paramsDate = {};
                //选择日期
                if (this.daterange[0] == this.daterange[1]) {
                    this.paramsDate = {
                        date: this.daterange[0]
                    };
                } else {
                    //选择时间区间
                    this.paramsDate = {
                        dateStart: this.daterange[0],
                        dateEnd: this.daterange[1]
                    };
                }
                this.initData();
            },
            delImg(id, arr, index) {
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url: '/AppFile/delete',
                        method: 'DELETE',
                        params: {
                            id
                        }
                    }, true).then(res => {
                        if (res.code == 200) {
                            this.$message.success('删除成功');
                        }
                        arr.splice(index, 1);
                    });
                });
            },
            handleEdit(row) {
                this.fromData = {
                    eventId: row.event.id,
                    cost: row.cost,
                    date: row.date
                };
                this.lastCost = row.lastCost;
                this.dialogVisible = true;
            },
            /**
             * 验证表单
             */
            changeInput(value) {
                if (Number(value) == 0) {
                    this.$message.error('输入有误,请重新输入');
                    this.fromData.cost = ' ';
                }
                if (value < 0) {
                    this.$message.error('数量不能小与0，请重新输入');
                    this.fromData.cost = ' ';
                }
            },
            //导出
            packageAll() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.7)'
                });
                function createObjectURL(object) {
                    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
                }
                let projectName = this.projectName
                var xhr = new XMLHttpRequest();
                var formData = new FormData();
                xhr.open('get', this.global.baseUrlMetro + '/course/exportDays?projectZoneId=' + this.projectZoneId);  //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
                xhr.setRequestHeader("Authorization", Cookies.get('token'));
                xhr.responseType = 'blob';
                xhr.onload = function(e){
                    if (this.status == 200) {
                        var blob = this.response;
                        const date = new Date().toLocaleDateString().replace('/','-').replace('/','-')
                        var filename = projectName + '日报' + date + ".xlsx";  //这里的名字，可以按后端给的接口固定表单设置一下名字，如（费用单.xlsx,合同.doc等等）
                        if (window.navigator.msSaveOrOpenBlob) {
                            navigator.msSaveBlob(blob, filename);
                        } else {
                            var a = document.createElement('a');
                            var url = createObjectURL(blob);
                            a.href = url;
                            a.download = filename;
                            document.body.appendChild(a);
                            a.click();
                            window.URL.revokeObjectURL(url);
                        }
                        loading.close();
                    }
                };
                xhr.send(formData);
            },
            //提交数据
            submitData() {
                if (this.fromData.cost.includes('.')) {
                    let length = this.fromData.cost.split('.')[1].length > 2 ? 2 : 1;
                    this.fromData.cost = Number(this.fromData.cost).toFixed(length);
                }
                this.$axios({
                    url: '/event/setFinishCost',
                    method: 'put',
                    params: this.fromData
                }, true).then(res => {
                    if (res.code == 200) {
                        this.dialogVisible = false;
                        this.initData();
                    }
                });
            },
            //翻页
            prevClick() {
                this.pageNo--;
                this.initData();
            },
            nextClick() {
                this.pageNo++;
                this.initData();
            },
            currentChange(pageNo) {
                this.pageNo = pageNo;
                this.initData();
            },
            //翻页结束
            initData() {
                this.$axios({
                    url: '/course/courseList',
                    params: {
                        ...this.paramsDate,
                        limit: this.limit,
                        pageNo: this.pageNo,
                        projectZoneId: this.projectZoneId,
                        areaId: this.areaId
                    }
                }, true).then(res => {
                    const p1 = res.data.resultList;
                    this.total = res.data.totalNumber;
                    for (let item of p1) {
                        item.lastCost = Number(item.lastCost);
                        item.imgs = [];
                        item.video = [];
                        item.imgArr = []
                        for (let val of item.fileList) {
                            if (val.ext == 'img') {
                                item.imgs.push(val);
                                item.imgArr.push(val.pathNameStr)
                            }
                            if (val.ext == 'video') {
                                item.video.push(val);
                            }
                        }
                    }
                    this.eventList = res.data.resultList;
                    this.totalNumber = res.data.totalNumber;
                });
            }
        }
    };
</script>

<style scoped>
    .imgs {
        display: flex;
        flex-wrap: wrap;
    }

    .table {
        height: calc(100vh - 300px);
        overflow: auto;
    }

    .pagination {
        float: right;
        margin-top: 20px
    }


</style>
