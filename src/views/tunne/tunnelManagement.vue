<template>
    <div style="text-align: left">
        <el-menu default-active="0" mode="horizontal" @select="changeTree" style="border-bottom: none;margin-bottom: 20px">
            <el-menu-item v-for="(item, index) in getAreaIdData" :key="index" :index="String(index)"
                          style="height: 50px;padding: 0;margin-right: 26px">{{ item.name }}
            </el-menu-item>
        </el-menu>
        <el-date-picker style="margin-bottom: 20px" size="small" v-model="daterange" type="daterange" value-format="yyyy-MM-dd"
                        range-separator="至" start-placeholder="开始日期"
                        end-placeholder="结束日期"></el-date-picker>
        <el-button type="primary" size="small" @click="sublim">确认</el-button>
        <el-button type="primary" size="small" @click="packageAll(areaId)">导出当前隧道</el-button>
        <el-button type="primary" size="small" @click="packageAll('')">导出所有</el-button>
        <!--表格树内容栏 批量操作-->
        <el-table :data="eventList" ref="table" class="table" @row-click="rowClick" highlight-current-row
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <div v-if="props.row.fileList.length == 0">暂无数据</div>
                    <div v-else>
                        <div class="imgs">
                            <div style="width:80px;height:150px;margin:0 20px 20px 0;" v-for="(o, i) in props.row.Errorimgs" :key="i">
                                <el-tooltip class="item" effect="light" :content="o.remarks" placement="top">
                                    <el-image @click="clickIsDeal(o)" class="image" style="width:80px;height:120px;"
                                              :src="o.pathNameStr"></el-image>
                                </el-tooltip>
                            </div>
                        </div>
                        <div class="imgs">
                            <div style="width:80px;height:150px;margin:0 20px 20px 0;" v-for="(o, i) in props.row.imgs" :key="i">
                                <el-image style="width:80px;height:120px;" :src="o.pathNameStr"
                                          :preview-src-list="[o.pathNameStr,...props.row.imgArr]"></el-image>
                                <el-button type="text" size="mini" @click="delImg(o.id)"
                                           style="margin:0 auto;display:block" v-if="userType == 1">
                                    删除
                                </el-button>
                            </div>
                        </div>
                        <div class="imgs">
                            <div style="width:200px;height:150px;margin:0 20px 20px 0;" v-for="(o, i) in props.row.video" :key="i">
                                <video style="width:200px;height:120px;" controls="controls"
                                       :src="o.pathNameStr"></video>
                                <el-button type="text" size="mini" @click="delImg(o.id)"
                                           style="margin:0 auto;display:block" v-if="userType == 1">
                                    删除
                                </el-button>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="areaName" label="隧道名称"></el-table-column>

            <el-table-column prop="typeName" label="事项名称"></el-table-column>
        </el-table>
        <el-pagination background :page-size="limit" layout="prev, pager, next" :total="total" @current-change="currentChange"
                       @prev-click="prevClick" @next-click="nextClick" class="pagination"></el-pagination>


        <el-dialog :title="row.remarks" :visible.sync="dialogVisible" width="900px">
            <div style="display: flex;justify-content: space-between">
                <div class="block">
                    <span class="demonstration">处理前</span>
                    <el-image :src="row.pathNameStr"></el-image>
                </div>
                <div class="block">
                    <span class="demonstration">处理后</span>
                    <el-image v-if="row.newPathStr" :src="row.newPathStr"></el-image>
                </div>
            </div>
            <div style="margin-top: 20px;display: flex;align-items: center;justify-content: space-between">

                <div>
                    <span style="font-size: 18px;font-weight: bold">操作:</span>
                    <!--隧道-->
                    <el-row v-if="row.isError == 3">
                        <el-link @click="submitData(0,0)">将隧道水印修复为当前隧道(修复水印)</el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-popover placement="top" title="将文件移动正确隧道" trigger="click" content="">
                            <el-select v-model="row.areaId" placeholder="请选择" size="mini">
                                <el-option v-for="item in getAreaIdData" :key="item.value" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                            <el-button size="mini" type="primary" @click="submitData(0,1)">确认</el-button>
                            <el-divider direction="vertical"></el-divider>
                            <el-link slot="reference">文件移动正确隧道</el-link>
                        </el-popover>
                        <el-link type="danger" @click="submitData(1)">仍然使用</el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="danger" @click="delImg(row.id)">删除</el-link>
                    </el-row>
                    <!--时间错误-->
                    <el-row v-else-if="row.isError == 4">
                        <el-link @click="submitData(0,0)">修复时间为今日(修复水印)</el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link @click="submitData(0,3)">文件移动正确日期</el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="danger" @click="submitData(1)">仍然使用</el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="danger" @click="delImg(row.id)">删除</el-link>
                    </el-row>
                    <!--其他-->
                    <el-row v-else>
                        <el-link @click="submitData(0,0)">修复水印</el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="danger" @click="submitData(1)">仍然使用</el-link>
                        <el-divider direction="vertical"></el-divider>
                        <el-link type="danger" @click="delImg(row.id)">删除</el-link>
                    </el-row>
                </div>
                <el-button size="small" type="primary" @click="sublimSaveNewPath">确认</el-button>
            </div>
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
                getAreaIdData: [],
                areaId: '',
                limit: 10,
                pageNo: 1,
                total: 0,
                userType: 0,
                row: [],
                dialogVisible: false
            };
        },
        computed: {
            projectZoneId() {
                return this.$store.state.project.project.projectZoneId;
            },
            projectId() {
                return this.$store.state.project.project.projectId;
            }
        },
        created() {
            this.getAreaId();
            this.userType = sessionStorage.getItem('userType');
        },
        methods: {
            getAreaId() {
                this.$axios({
                    url: '/courseArea/findAll',
                    params: {
                        projectId: this.projectId
                    }
                }, true).then(res => {
                    this.getAreaIdData = res.data;
                    if (res.data.length > 0) {
                        this.areaId = this.getAreaIdData[0].id;
                        this.areaIdName = this.getAreaIdData[0].name;
                        this.initData();
                    } else {
                        this.$message.error('暂无隧道');
                    }
                });
            },
            //导出
            packageAll(areaId) {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.7)'
                });

                function createObjectURL(object) {
                    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
                }

                let areaIdName = this.areaIdName;
                var xhr = new XMLHttpRequest();
                var formData = new FormData();
                //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
                xhr.open('get', this.global.baseUrlMetro + '/course/exportFile?projectZoneId=' + this.projectZoneId + '&areaId=' + areaId);
                xhr.setRequestHeader('Authorization', Cookies.get('token'));
                xhr.responseType = 'blob';
                xhr.onload = function(e) {
                    if (this.status == 200) {
                        var blob = this.response;
                        var filename = areaIdName + '文件导出' + '.zip';  //这里的名字，可以按后端给的接口固定表单设置一下名字，如（费用单.xlsx,合同.doc等等）
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
            //确认提交
            sublimSaveNewPath() {
                console.log(this.row);
                this.$axios({
                    url: '/course/saveNewPath',
                    method: 'post',
                    params: {
                        id: this.row.id,
                        newPath: this.row.newPath
                    }
                }, true).then(() => {
                    this.initData();
                    this.dialogVisible = false;
                });
            },
            clickIsDeal(row) {
                this.row = row;
                this.dialogVisible = true;
            },
            //提交
            submitData(fixFlag, fixType) {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.7)'
                });

                const params = {
                    fixFlag,
                    fixType,
                    areaId: fixType == 1 ? this.row.areaId : this.areaId,
                    id: this.row.id
                };
                params.fixType = fixType == 3 ? 1 : fixType;
                this.dialogVisible = fixFlag == 1 ? false : true;
                this.$axios({
                    url: '/course/fixFile',
                    method: 'post',
                    params
                }, true).then(res => {
                    this.$set(this.row, 'newPathStr', res.data.url);
                    this.$set(this.row, 'newPath', res.data.path);
                    loading.close();
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
            changeTree(index) {
                this.areaId = this.getAreaIdData[index].id;
                this.areaIdName = this.getAreaIdData[index].name;
                this.initData();
            },
            rowClick(row) {
                this.$refs.table.toggleRowExpansion(row);
            },
            delImg(id) {
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
                            this.getAreaId();
                            this.dialogVisible = false;
                        }
                    });
                });
            },
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
                        item.Errorimgs = [];
                        item.video = [];
                        item.imgArr = [];
                        for (let val of item.fileList) {
                            if (val.ext == 'img') {
                                if (val.isDeal == 0) {
                                    item.Errorimgs.push(val);
                                } else {
                                    item.imgs.push(val);
                                    item.imgArr.push(val.pathNameStr);
                                }
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

<style scoped lang="scss">
    .imgs {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    .table {
        height: calc(100vh - 400px);
        overflow: auto;
    }

    .pagination {
        float: right;
        margin-top: 20px
    }

    .image {
        border: 2px solid #ef0606;
    }

    .block {
        text-align: center;
        vertical-align: top;
        width: 49%;

        .demonstration {
            display: block;
            color: #8492a6;
            font-size: 14px;
            margin-bottom: 20px;

        }
    }
</style>
