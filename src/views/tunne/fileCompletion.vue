<template>
    <div class="app">
        <el-select v-model="areaId" filterable placeholder="请选择隧道" class="item">
            <el-option v-for="item in list" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
        <el-cascader v-model="id" :options="list2" :props="{ expandTrigger: 'hover' }" placeholder="请选择事项" class="item"></el-cascader>
        <el-date-picker v-model="time" type="date" placeholder="选择日期" class="item" value-format="yyyy-MM-dd"></el-date-picker>
        <el-upload :action="global.baseUrlMetro + '/course/uploadList'" :headers="headers" :before-upload="beforeUpload"
                   :data="{areaId,id:id[1],time}" :auto-upload="false" list-type="picture" multiple :on-success="onSuccess"
                   class="item" ref="upload" name="files">
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitForm">上传到服务器</el-button>
        </el-upload>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <span>上传成功,点击确认继续上传</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="upload">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>


<script>
    import Cookies from 'js-cookie';

    export default {
        data() {
            return {
                // 隧道 事项
                list: [],
                list2: [],
                areaId: '',
                id: '',
                time: '',
                dialogVisible: false,
                fileList: [],
                headers: {},
                params: {}
            };
        },
        created() {
            this.initData();
            this.headers.Authorization = Cookies.get('token');
        },
        computed: {
            projectId() {
                return this.$store.state.project.project.projectId;
            },
            projectZoneId() {
                return this.$store.state.project.project.projectZoneId;
            }
        },
        methods: {
            async initData() {
                //获取隧道
                const p1 = await this.$axios({
                    url: '/courseArea/list',
                    params: {
                        projectId: this.projectId
                    }
                }, true);
                this.list = p1.data.resultList;

                //获取事项类别
                const p2 = await this.$axios({
                    url: '/eventType/findAllEventTypeList',
                    params: {
                        projectId: this.projectId
                    }
                }, true);

                //循环事项类别获取事项详情
                const temp = [];
                for (let val of p2.data) {
                    let p3 = await this.$axios({
                        url: '/event/list',
                        params: {
                            limit: 9999,
                            pageNo: 1,
                            typeId: val.id,
                            projectZoneId: this.projectZoneId
                        }
                    }, true);
                    let children = [];
                    //循环事项详情重新赋值
                    for (let item of p3.data.resultList) {
                        children.push({
                            value: item.id,
                            label: item.name
                        });
                    }
                    temp.push({
                        value: val.id,
                        label: val.type,
                        children: children
                    });
                }
                this.list2 = temp;
            },
            beforeUpload(file) {
                if (!['image/png', 'image/jpeg'].includes(file.type)) {
                    this.$message.error('请上传png/jpeg图片');
                    return false;
                }
                return true;
            },
            onSuccess() {
                this.dialogVisible = true;
            },
            upload() {
                this.areaId = '';
                this.id = '';
                this.time = '';
                this.$refs.upload.uploadFiles = []
                this.dialogVisible = false;
            },
            submitForm() {
                if (!this.areaId) {
                    this.$message.error('请先选择隧道');
                    return;
                }
                if (!this.id) {
                    this.$message.error('请先选择事项');
                    return;
                }
                if (!this.time) {
                    this.$message.error('请先选择时间');
                    return;
                }
                this.$refs.upload.submit();
            }
        }
    };
</script>


<style scoped lang="scss">

    .app {
        text-align: left;

        .item {
            display: block;
            width: 400px;
            margin-bottom: 20px;
        }
    }

</style>
