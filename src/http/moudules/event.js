import axios from '../axios'

/*
 * 事项类别 eventType
 */

// 获取所有类型
export const findAllEventTypeList = (params) => {
    return axios({
        url: '/eventType/findAllEventTypeList',
        method: 'get',
        params
    },true)
}

// 事项分页
export const list = (params) => {
    return axios({
        url: '/eventType/list',
        method: 'get',
        params
    },true)
}

// 事项添加
export const save = (data) => {
    return axios({
        url: '/eventType/save',
        method: 'post',
        data
    },true)
}

// 事项编辑
export const update = (data) => {
    return axios({
        url: '/eventType/update',
        method: 'put',
        data
    },true)
}

// 事项删除
export const del = (params) => {
    return axios({
        url: '/eventType/delete',
        method: 'delete',
        params
    },true)
}

// 删除单位事项信息
export const deleteCompanyEvent = (params) => {
    return axios({
        url: '/event/deleteCompanyEvent',
        method: 'delete',
        params
    },true)
}

// 事项详情
export const findById = (data) => {
    return axios({
        url: '/eventType/findById',
        method: 'get',
        data
    },true)
}

// 事项状态
export const updateStatus = (params) => {
    return axios({
        url: '/eventType/updateStatus',
        method: 'put',
        params
    },true)
}
