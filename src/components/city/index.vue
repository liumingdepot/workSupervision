<template>
    <el-cascader
            size="medium"
            :filterable="true"
            :options="city"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange">
    </el-cascader>
</template>

<script>
    import city from '@/utils/city'

    export default {
        data() {
            return {
                city: []
            }
        },
        created() {
            this.city = this.$tool.city(city)
        },
        methods:{
            handleChange(e){
                this.$emit('city',e)
            }
        }
    }
</script>
