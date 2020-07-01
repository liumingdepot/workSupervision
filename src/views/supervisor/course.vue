<template>
    <!-- 进出场检查 -->
    <div class="page-container">
        <!--表格树内容栏-->
        <el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading"
                  element-loading-text="加载中。。。"
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column prop="sort" :formatter="formatSort" label="标识"></el-table-column>
            <el-table-column label="类型">
                <template slot-scope="scope">
                    <el-tooltip class="item" :content="scope.row.typeName" placement="bottom" effect="light">
                        <span class="name">{{ scope.row.typeName}}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column prop="count" label="工程量"></el-table-column>
            <el-table-column prop="companyName" label="名称"></el-table-column>
            <el-table-column prop="number" label="人数"></el-table-column>
            <el-table-column label="材料图片">
                <template slot-scope="scope">
                    <el-image style="width: 30px;display: flex;align-items: center" fit="contain"
                              v-if="scope.row.materialsPathStr"
                              :src="scope.row.materialsPathStr.includes(',')?scope.row.materialsPathStr.split(',')[0]:scope.row.materialsPathStr"
                              :preview-src-list="scope.row.materialsPathStr.includes(',')?scope.row.materialsPathStr.split(','):[scope.row.materialsPathStr]"></el-image>
                </template>
            </el-table-column>
            <el-table-column label="人员图片">
                <template slot-scope="scope">
                    <el-image style="width: 30px;display: flex;align-items: center" fit="contain"
                              v-if="scope.row.personPathStr"
                              :src="scope.row.personPathStr.includes(',')?scope.row.personPathStr.split(',')[0]:scope.row.personPathStr"
                              :preview-src-list="scope.row.personPathStr.includes(',')?scope.row.personPathStr.split(','):[scope.row.personPathStr]"></el-image>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="时间"></el-table-column>
        </el-table>
        <el-pagination class="pagination" s mall @current-change="handleCurrentChange" :current-page="page.pageNo"
                       :page-sizes="page.limits" hide-on-single-page :page-size="page.limit"
                       layout="total, prev, pager, next, jumper"
                       :total="page.totalNumber"/>

        <el-dialog title="查看" width="1000px" height="600px" :visible.sync="dialogVisible" :close-on-click-modal="false">
            <el-image v-if="imgUrl" :src="imgUrl"></el-image>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                filters: {
                    name: ''
                },
                list: [],
                imgUrl: '',
                dialogVisible: false,
                page: {
                    limits: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                    limit: 12,
                    pageNo: 1,
                    pageSize: 10,
                    totalNumber: 0
                }
            };
        },
        async created() {
            this.findTreeData();
        },
        methods: {
            formatSort(val) {
                return val.sort === '0' ? '进场' : '出场';
            },
            //翻页
            handleSizeChange(limit) {
                this.page.limit = limit;
                this.findTreeData();
            },
            handleCurrentChange(pageNo) {
                this.page.pageNo = pageNo;
                this.findTreeData();
            },
            // 获取数据
            findTreeData() {
                this.loading = true;
                const course = this.$api.course.list({
                    limit: this.page.limit,
                    pageNo: this.page.pageNo,
                    projectZoneId: this.$store.state.project.project.projectZoneId
                });
                course.then(res => {
                    this.list = res.data.resultList;
                    this.page.totalNumber = res.data.totalNumber;
                    this.loading = false;
                });
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

    .pagination {
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>
