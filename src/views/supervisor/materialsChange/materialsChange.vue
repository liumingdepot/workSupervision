<template>
    <!--材料变更-->
    <div class="page-container">
        <!--表格树内容栏-->
        <el-table :data="list" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。" :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column prop="storageName" label="材料名称"></el-table-column>
            <el-table-column prop="originalNum" label="原始数量"></el-table-column>
            <el-table-column prop="nowNum" label="修改数量"></el-table-column>
            <el-table-column prop="fileMaterials" label="文件" show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button @click="openUrl(scope.row.fileMaterialsStr)" size="mini" type="text">
						{{scope.row.fileMaterialsStr?'查看文件':'暂无数据'}}
					</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="createDate" label="更新时间"></el-table-column>
            <el-table-column prop="remarks" header-align="center" align="center" label="说明"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            list: []
        }
    },
    computed: {
        project() {
            return this.$store.state.project.project
        }
    },
    created() {
        this.findTreeData()
    },
    methods: {
        //跳转url
        openUrl(url) {
            if (url) {
                window.open(url)
            }
        },
        // 获取数据
        findTreeData() {
            this.loading = true
            this.$axios(
                {
                    url: '/materialsChange/list',
                    method: 'get',
                    params: {
                        limit: 999,
                        projectId: this.project.projectId
                    }
                },
                true
            ).then(res => {
                this.list = res.data.resultList.map(item => {
                    console.log(item)
                    item.createDate = new Date(item.createDate).toLocaleDateString()
                    return item
                })
                this.loading = false
            })
        }
    }
}
</script>
