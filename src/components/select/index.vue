<template>
    <el-select v-model="value" placeholder="请选择" @change="changeSelect">
        <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"></el-option>
    </el-select>
</template>

<script>
    export default {
        props:['lm_model','type'],
        data() {
            return {
                value: this.lm_model,
                options: [],
            }
        },
        created() {
            this.typeData()
        },
        methods: {
            typeData() {
                this.$api.dict.findDictByCode({
                    code: this.type
                }).then(res => {
                    this.options = res.data.dictVos
                })
            },
            changeSelect() {
                this.$emit('changeSelect', this.value)
            }
        }
    }
</script>

