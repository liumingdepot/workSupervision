import axios from '../axios'

/*
 * 字典管理模块
 */

// 获取所有字典
export const findAllDictList = () => {
    return axios({
        url: '/dict/findAllDictList',
        method: 'get'
    })
}

// 根据code获取字典
export const findDictByCode = (params) => {
    return axios({
        url: '/dict/findDictByCode',
        method: 'get',
        params
    })
}

// 字典分页
export const list = (params) => {
    return axios({
        url: '/dict/list',
        method: 'get',
        params
    })
}

// 字典添加
export const save = (data) => {
    return axios({
        url: '/dict/save',
        method: 'post',
        data
    })
}

// 字典编辑
export const update = (data) => {
    return axios({
        url: '/dict/update',
        method: 'put',
        data
    })
}

// 字典删除
export const dictDelete = (id) => {
    return axios({
        url: '/dict/delete?id=' + id,
        method: 'delete',
    })
}

// 字典详情
export const findById = (data) => {
    return axios({
        url: '/dict/findById',
        method: 'get',
        data
    })
}
