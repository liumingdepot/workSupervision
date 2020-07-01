import axios from '../axios'

/*
 * 工程材料信息 sorage
 */

// 工程材料信息
export const list = (params) => {
    return axios({
        url: '/materials/list',
        method: 'GET',
        params
    },true)
}


// 新增材料信息
export const save = (data) => {
    return axios({
        url: '/materials/save',
        method: 'post',
        data
    },true)
}

// 修改材料信息
export const update = (data) => {
    return axios({
        url: '/materials/update',
        method: 'put',
        data
    },true)
}

// 修改入库
export const updatePutaway = data => {
    return axios({
        url: '/materials/updatePutaway',
        method: 'put',
        data
    },true)
}

// 保存入库信息
export const savePutaway = data => {
    return axios({
        url: '/materials/savePutaway',
        method: 'post',
        data
    },true)
}

// 删除材料信息
export const materialsDelete = params => {
    return axios({
        url: '/materials/delete',
        method: 'delete',
        params
    },true)
}

// 获取指定材料信息
export const findById = (data) => {
    return axios({
        url: '/materials/findById',
        method: 'get',
        data
    },true)
}


/*
 * 材料详情 sorage
 */

// 工程材料信息
export const info_list = (params) => {
    return axios({
        url: '/materialsInfo/list',
        method: 'GET',
        params
    },true)
}


// 新增材料信息
export const info_save = (data) => {
    return axios({
        url: '/materialsInfo/save',
        method: 'post',
        data
    },true)
}

// 修改材料信息
export const info_update = (data) => {
    return axios({
        url: '/materialsInfo/update',
        method: 'put',
        data
    },true)
}

// 删除材料信息
export const info_materialsDelete = params => {
    return axios({
        url: '/materialsInfo/delete',
        method: 'delete',
        params
    },true)
}

// 获取分类统计材料数量
export const getStatistics = params => {
    return axios({
        url: '/materials/getStatistics',
        method: 'get',
        params
    },true)
}


// 获取指定材料信息
export const info_findById = (data) => {
    return axios({
        url: '/materialsInfo/findById',
        method: 'get',
        data
    },true)
}



/*
 * 材料送检信息 sorage
 */
// 材料送检信息列表
export const mater_list = (params) => {
    return axios({
        url: '/materialsInspect/list',
        method: 'GET',
        params
    },true)
}


// 新增材料信息
export const mater_save = (data) => {
    return axios({
        url: '/materialsInspect/save',
        method: 'post',
        data
    },true)
}

// 修改材料信息
export const mater_update = (data) => {
    return axios({
        url: '/materialsInspect/update',
        method: 'put',
        data
    },true)
}

// 删除材料信息
export const mater_delete = params => {
    return axios({
        url: '/materialsInspect/delete',
        method: 'delete',
        params
    },true)
}

// 删除材料信息
export const mater_findById = params => {
    return axios({
        url: '/materialsInspect/findById',
        method: 'delete',
        params
    },true)
}


/*
* 料库存信息
*/

//删除材料库存信息
export const materialsStorage_delete = params => {
    return axios({
        url: '/materialsStorage/delete',
        method: 'DELETE',
        params
    },true)
}

//获取指定材料库存信息
export const materialsStorage_findById = params => {
    return axios({
        url: '/materialsStorage/findById',
        method: 'GET',
        params
    },true)
}

//工程材料库存信息
export const materialsStorage_list = params => {
    return axios({
        url: '/materialsStorage/list',
        method: 'GET',
        params
    },true)
}

//工程材料库存信息
export const materialsStorage_save = data => {
    return axios({
        url: '/materialsStorage/save',
        method: 'POST',
        data
    },true)
}

//工程材料库存信息
export const materialsStorage_update = data => {
    return axios({
        url: '/materialsStorage/update',
        method: 'PUT',
        data
    },true)
}
