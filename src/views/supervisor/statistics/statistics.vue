<template>
    <div style="margin-top: -25px">
        <!-- 菜单 -->
        <el-menu default-active="0" mode="horizontal" @select="changeTree" style="border:none;margin-bottom: 10px">
            <el-menu-item v-for="(item, index) in tree" :key="index" :index="String(index)"
                          style="height: 50px;padding: 0;margin-right: 26px">
                {{ item.type }}
            </el-menu-item>
        </el-menu>
        <div style="height:5px;background-color: rgba(240,242,245,1);padding:0 15px;margin: 0 -30px"></div>
        <!--表格树内容栏-->
        <div style="margin:10px 0;text-align: left;font-size:14px;font-weight:bold;">选择周期</div>
        <div style="float: left;width:100%;padding: 10px;background-color: #F9F9F9;margin-bottom: 20px;box-sizing: border-box">
            <div class="radio">
                <div class="item" :class="dateType == '' ? '_item' : ''" @click="changeRadio('')">所有</div>
                <div class="item" :class="dateType == 'today' ? '_item' : ''" @click="changeRadio('today')">今天</div>
                <div class="item" :class="dateType == 'week' ? '_item' : ''" @click="changeRadio('week')">本周</div>
                <div class="item" :class="dateType == 'month' ? '_item' : ''" @click="changeRadio('month')">本月</div>
                <div class="item" :class="dateType == 'date' ? '_item' : ''" @click="changeRadio('date')">选择日期</div>
                <el-date-picker v-if="dateType == 'date'" v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期"
                                end-placeholder="结束日期" size="mini" value-format="yyyy-MM-dd" format="yyyy-MM-dd"
                                style="width: 270px;margin-left: 10px"></el-date-picker>
            </div>
            <div style="display: flex;margin-top: 24px">
                <el-button type="primary" size="small" @click="changeDate" style="padding: 0 30px">确认</el-button>
                <JsonExcel :data="json_data" name="统计.xls" style="margin:0 10px">
                    <el-button type="primary" plain size="small">导出EXCEL</el-button>
                </JsonExcel>
            </div>
        </div>
        <el-table :data="eventList" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。"
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column label="施工内容">
                <template slot-scope="scope">
                    <el-tooltip class="item" :content="scope.row.type" placement="bottom" effect="light">
                        <span class="name">{{ scope.row.type }}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column prop="finishCost" sortable label="完工量"></el-table-column>
            <el-table-column prop="allCost" sortable label="总工程量"></el-table-column>
            <el-table-column prop="unit" sortable label="单位"></el-table-column>
            <el-table-column prop="pain" sortable label="进度"></el-table-column>
            <el-table-column label="百分比">
                <template slot-scope="scope">
                    <el-progress class="progress" :percentage="scope.row.progress"></el-progress>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import JsonExcel from 'vue-json-excel';

    export default {
        components: {
            JsonExcel
        },
        data() {
            return {
                date: '',
                show: false,
                tree: [],
                form: {},
                props: {
                    children: 'children',
                    label: 'name'
                },
                dateType: '',
                eventList: [],
                dataFrom: {
                    name: '',
                    cost: '',
                    unit: ''
                },
                json_data: [],
                type: '',
                loading: false,
                dialogVisible: false,
                arr: []
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
                this.$api.event
                    .list({
                        limit: 999,
                        projectId: this.projectId,
                        status: '0',
                        companyId: sessionStorage.getItem('companyId')
                    })
                    .then(res => {
                        if (res.data.resultList == 0) {
                            this.$message({ message: '请先添加施工类别', type: 'error' });
                            return;
                        }
                        this.tree = res.data.resultList;
                        this.index = 0;
                        this.changeTree(this.index, {});
                    });
            },
            changeRadio(e) {
                this.dateType = e;
            },
            changeDate() {
                const paramer = {};
                if (this.dateType == 'date') {
                    paramer.dateEnd = this.date[0];
                    paramer.dateStart = this.date[1];
                } else {
                    paramer.dateType = this.dateType;
                }
                this.changeTree(this.index, paramer);
            },
            //切换事项
            changeTree(index, paramer) {
                this.index = index;
                this.eventList = [];
                this.loading = true;
                this.$api.statistics
                    .eventPlan({
                        projectZoneId: this.projectZoneId,
                        ...paramer
                    })
                    .then(res => {
                        console.log(res);
                        //筛选
                        const eventList = res.data.filter(item => item.name == this.tree[index].type);
                        let progress = 0;
                        let bi = 1 / eventList.length;
                        for (let item of eventList) {
                            item.allCost = Number(item.allCost);
                            //判断分母不为0
                            if (item.allCost > 0) {
                                item.pain = `${item.finishCost}/${item.allCost}`;
                                item.progress = +((item.finishCost / item.allCost) * 100).toFixed(1);
                                progress += item.progress / eventList.length;
                            } else {
                                item.pain = '0/0';
                                item.progress = '0%';
                            }
                        }
                        eventList.push({
                            type: '合计',
                            progress: +progress.toFixed(2)
                        });
                        this.eventList = eventList;
                        this.json_data = eventList.map((item, index) => {
                            return {
                                序号: index,
                                施工内容: item.type,
                                完成量: item.finishCost,
                                总工程量: item.allResidueCost,
                                进度: item.pain,
                                单位: item.unit,
                                百分比: item.progress + '%'
                            };
                        });
                        this.loading = false;
                    });
            }
        }
    };
</script>

<style scoped lang="scss">
    .radio {
        display: flex;

        .item {
            padding: 0 18px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(237, 237, 237, 1);
            border-radius: 2px;
            margin-right: 10px;
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            cursor: pointer;


        }

        ._item {
            background: rgba(236, 245, 255, 1);
            border: 1px solid rgba(21, 134, 252, 1);
            color: rgba(21, 134, 252, 1);
        }
    }
</style>
