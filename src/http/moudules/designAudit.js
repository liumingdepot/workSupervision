import axios from '../axios'

/*
 * 区段工程信息 designAudit
 */


// 角色列表（分页）
export const list = (params) => {
    return axios({
        url: '/design/list',
        method: 'get',
        params
    },true)
}

// 修改设计变更信息信息
export const update = (data) => {
    return axios({
        url: '/design/update',
        method: 'put',
        data
    },true)
}

// 设计变更信息删除
export const del = (params) => {
    return axios({
        url: '/design/delete',
        method: 'delete',
        params
    },true)
}

// 设计变更信息详情
export const findById = (data) => {
    return axios({
        url: '/design/findById',
        method: 'put',
        data
    },true)
}




// 获取设计变更审核记录列表
export const designAudit = (params) => {
    return axios({
        url: '/designAudit/findListByDesignId',
        method: 'GET',
        params
    },true)
}

// 审核设计变更
export const audit = (data) => {
    return axios({
        url: '/designAudit/audit',
        method: 'put',
        data
    },true)
}