<template>
    <div>
        <div style="display: flex;justify-content: space-between;align-items: flex-end">
            <!--工具栏-->
            <div style="display: flex;margin-bottom: 18px">
                <el-button size="mini" type="primary" @click="handleAdd">新增隧道</el-button>
            </div>
        </div>
        <el-table :data="list" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。"
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column prop="projectName" header-align="center" align="center" label="工程名称"></el-table-column>
            <el-table-column prop="name" header-align="center" align="center" label="隧道名称"></el-table-column>
            <el-table-column prop="longitude" header-align="center" align="center" label="经度"></el-table-column>
            <el-table-column prop="latitude" header-align="center" align="center" label="纬度"></el-table-column>
            <!-- 操作 -->
            <el-table-column width="185" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                    <span style="color:999999">&nbsp;|&nbsp; </span>
                    <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 详情新增修改界面 -->
        <el-dialog :title="type == 'add'?'新增':'修改'" width="1200px" :visible.sync="dialogVisible">
            <el-form label-width="70px" size="small" label-position="left" inline>
                <el-form-item label="隧道名称">
                    <el-input v-model="dataFrom.name"></el-input>
                </el-form-item>
                <el-form-item label="经度">
                    <el-input v-model="center.lng"></el-input>
                </el-form-item>
                <el-form-item label="纬度">
                    <el-input v-model="center.lat"></el-input>
                </el-form-item>
            </el-form>

            <baidu-map class="bm-view" :center="center" :zoom="15" @click="getClickInfo" @ready="handler"
                       @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom"
                       :dragging="true" :scroll-wheel-zoom="true" ak="AkwXKCU6AGVeUGyXf7CtgHShqiAB66do">
                <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
                <bm-navigation  anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
                <bm-marker :position="{lng:center.lng, lat: center.lat}"></bm-marker>
            </baidu-map>
            <el-input v-model="keyword" placeholder="请输入搜索关键词" style="z-index: 999999"></el-input>

            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitForm">提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>


<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue';

    export default {
        components: {
            BaiduMap
        },
        data() {
            return {
                list: [],
                loading: false,
                type: 'add',
                dataFrom: {},
                dialogVisible: false,
                center:{
                    lng:108.95,
                    lat:34.27
                },
                location: "",
                keyword: ""
            };
        },
        created() {
            this.initData();
        },
        computed: {
            projectId() {
                return this.$store.state.project.project.projectId;
            }
        },
        methods: {
            initData() {
                this.$axios({
                    url: '/courseArea/list',
                    params: {
                        projectId: this.projectId
                    }
                }, true).then(res => {
                    this.list = res.data.resultList;
                });
            },
            handler({ BMap, map }) {},
            //点击获取到当前经纬度
            getClickInfo(e) {
                console.log(e);
                this.center.lng = e.point.lng.toFixed(2);
                this.center.lat = e.point.lat.toFixed(2);
            },
            //双向绑定经纬度以及缩放尺寸
            syncCenterAndZoom(e) {
                const { lng, lat } = e.target.getCenter();
                this.center.lng = lng;
                this.center.lat = lat;
            },
            handleAdd() {
                this.type = 'add';
                this.dataFrom = {
                    name: ''
                };
                this.dialogVisible = true;
            },
            handleEdit(row) {
                this.type = 'put';
                this.dataFrom = {
                    id: row.id,
                    name: row.name
                };
                this.dialogVisible = true;
            },
            handleDelete(row) {
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url: '/courseArea/delete?id=' + row.id,
                        method: 'delete'
                    }, true).then(res => {
                        this.initData();
                    });
                });
            },
            submitForm() {
                const data = {
                    projectId: this.projectId,
                    ...this.dataFrom,
                    latitude:this.center.lat.toString().includes('.')?this.center.lat.toString().replace('.','°')+'′':this.center.lat.toString()+'°',
                    longitude:this.center.lng.toString().includes('.')?this.center.lng.toString().replace('.','°')+'′':this.center.lng.toString()+'°',
                }
                if (this.type == 'add') {
                    this.$axios({
                        url: '/courseArea/save',
                        method: 'post',
                        data
                    }, true).then(res => {
                        this.dialogVisible = false;
                        this.initData();
                    });
                } else {
                    this.$axios({
                        url: '/courseArea/update',
                        method: 'put',
                        data,
                    }, true).then(res => {
                        this.dialogVisible = false;
                        this.initData();
                    });
                }
            }
        }
    };
</script>


<style scoped>
    .bm-view {
        width: 100%;
        height: 600px;
        display: flex;
    }
</style>