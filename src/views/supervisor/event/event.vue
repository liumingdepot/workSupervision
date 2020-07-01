<template>
    <div style="margin-top: -25px">
        <!-- 事项类别 -->
        <el-menu :default-active="active1" mode="horizontal" @select="changeTree" style="border:none;margin-bottom: 20px">
            <el-menu-item v-for="(item, index) in tree" :key="index" :index="item.typeId"
                          style="height: 50px;padding: 0;margin-right: 26px">{{ item.name }}
            </el-menu-item>
        </el-menu>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-table :data="eventList" v-loading="loading" element-loading-text="请稍等。。" highlight-current-row
                          :header-cell-style="$store.state.project.headerName" @row-click="changeEventList">
                    <el-table-column header-align="center" label="事项名称">
                        <template slot-scope="scope">
                            <div :class="scope.row.cnt ? 'no_cnt' : 'cnt'">
                                <div>{{ scope.row.name }}</div>
                                <div v-if="scope.row.cnt>0"><i class="el-icon-arrow-right"></i></div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="6">
                <el-table :data="dates" v-loading="loading" element-loading-text="请稍等。。" highlight-current-row
                          :header-cell-style="$store.state.project.headerName" :row-click="changeDate">
                    <el-table-column header-align="center" label="时间">
                        <template slot-scope="scope">
                            <span class="name" slot="reference">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="12">
                <el-tag v-if="list.imgs&&list.imgs.length>0" style="margin-bottom: 20px">照片</el-tag>
                <div class="imgs">
                    <div style="width:80px;height:150px;margin:0 20px 20px 0;" v-for="(o, i) in list.imgs" :key="i">
                        <el-image style="width:80px;height:120px;" :src="o.pathNameStr" :preview-src-list="[o.pathNameStr]"></el-image>
                    </div>
                </div>
                <el-tag v-if="list.imgs&&list.video.length>0" style="margin-bottom: 20px">视频</el-tag>
                <div class="imgs">
                    <div style="width:200px;height:150px;margin:0 20px 20px 0;" v-for="(o, i) in list.video" :key="i">
                        <video style="width:200px;height:120px;" controls="controls"
                               :src="o.pathNameStr"></video>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        data() {
            return {
                active1: '',
                active2: '',
                active3: '',
                tree: [],
                eventList: [],
                dates: [],
                businessId: '',
                list: {
                    imgs: [],
                    video: []
                },
                loading: false,
                imgUrl: '',
                dialogVisible: false,
                title: ''
            };
        },
        computed: {
            projectId() {
                return this.$store.state.project.project.projectId;
            },
            projectZoneId() {
                return this.$store.state.project.project.projectZoneId;
            }
        },
        created() {
            this.getTreeData();
        },
        methods: {
            //获取菜单树tree
            getTreeData() {
                this.tree = [];
                this.$api.event
                    .list({
                        limit: 999,
                        projectId: this.projectId,
                        status: '0',
                        companyId: sessionStorage.getItem('companyId')
                    })
                    .then(res => {
                        this.tree = res.data.resultList.map(item => {
                            return {
                                name: item.type,
                                typeId: item.id,
                                projectZoneId: this.projectZoneId
                            };
                        });
                        this.active1 = this.tree[0].typeId;
                        this.changeTree(this.tree[0].typeId);
                    });
            },
            //切换事项
            changeTree(typeId) {
                this.eventList = [];
                this.$api.controller
                    .event_list({
                        limit: 99999,
                        projectZoneId: this.projectZoneId,
                        typeId: typeId
                    })
                    .then(res => {
                        this.eventList = res.data.resultList.map(item => {
                            return {
                                name: item.name,
                                id: item.id,
                                cnt: item.cnt
                            };
                        });
                        this.active2 = this.eventList[0].id;
                    });
            },
            //切换事项
            changeEventList(row, column, event) {
                if (row.cnt == 0) {
                    return;
                }
                this.list = [];
                this.dates = [];
                this.$api.controller
                    .appFindByType({
                        projectZoneId: this.projectZoneId,
                        type: row.id
                    })
                    .then(res => {
                        if (res.data.length > 0) {
                            this.businessId = res.data.join(',');
                            this.$api.controller
                                .classifyList({
                                    businessId: this.businessId
                                })
                                .then(res2 => {
                                    if (res2.data.length > 0) {
                                        this.dates = res2.data;
                                        this.active3 = res2.data[0].date;
                                        this.changeDate(res2.data[0].date);
                                    }
                                });
                        }
                    });
            },
            //切换日期
            changeDate(row, column, event) {
                this.list = [];
                this.loading = true;
                this.$api.controller
                    .AppFilelist({
                        businessId: this.businessId,
                        date: row.date
                    })
                    .then(res => {
                        this.list.imgs = [];
                        this.list.video = [];
                        for (let item of res.data) {
                            console.log(item);
                            if (item.ext == 'img') {
                                this.list.imgs.push(item);
                            } else {
                                this.list.video.push(item);
                            }
                        }
                        this.loading = false;
                    });
            },
            playImg(url) {
                this.imgUrl = url;
                this.dialogVisible = true;
            }
        }
    };
</script>

<style scoped>
    .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        cursor: pointer;
    }

    .imgs {
        display: flex;
        flex-wrap: wrap;
    }

    .no_cnt {
        cursor: no-drop;
        display: flex;
        justify-content: space-between;
    }

    .cnt {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
    }
</style>
