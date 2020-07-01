import axios from '../axios'

/*
 * 工程信息 project
 */

// 单位工程信息
export const ownerProject = (params) => {
    return axios({
        url: '/ownerProject/list',
        method: 'GET',
        params
    },true)
}
// 单位工程信息
export const list = (params) => {
    return axios({
        url: '/project/list',
        method: 'GET',
        params
    },true)
}

// 用户工程信息
export const getProject = (params) => {
    return axios({
        url: '/project/getProject',
        method: 'GET',
        params
    },true)
}

// 工程信息添加
export const save = (data) => {
    return axios({
        url: '/project/save',
        method: 'post',
        data
    },true)
}

// 工程信息编辑
export const update = (data) => {
    return axios({
        url: '/project/update',
        method: 'put',
        data
    },true)
}

// 工程信息删除
export const projectDelete = params => {
    return axios({
        url: '/project/delete',
        method: 'delete',
        params
    },true)
}

// 工程信息详情
export const findById = (data) => {
    return axios({
        url: '/project/findById',
        method: 'get',
        data
    },true)
}
