import axios from '../axios'

/*
 * 单位管理模块 company
 */

// 获取所有单位
export const findAllCompanyList = () => {
    return axios({
        url: '/company/findAllCompanyList',
        method: 'get'
    })
}

// 单位分页
export const list = (params) => {
    return axios({
        url: '/company/list',
        method: 'get',
        params
    })
}

// 单位添加
export const save = (data) => {
    return axios({
        url: '/company/save',
        method: 'post',
        data
    })
}

// 单位编辑
export const update = (data) => {
    return axios({
        url: '/company/update',
        method: 'put',
        data
    })
}

// 单位状态
export const updateStatus = (params) => {
    return axios({
        url: '/company/updateStatus',
        method: 'put',
        params
    })
}

// 单位删除
export const companyDelete = (id) => {
    return axios({
        url: '/company/delete?id=' + id,
        method: 'delete',
    })
}

// 单位详情
export const findById = params => {
    return axios({
        url: '/company/findById',
        method: 'get',
        params
    })
}

// 编辑单位关联信息
export const editUserCompany = params => {
    return axios({
        url: '/userCompany/editUserCompany',
        method: 'PUT',
        params
    }, true)
}

// 获取单位关联信息
export const userList = params => {
    return axios({
        url: '/userCompany/list',
        method: 'GET',
        params
    }, true)
}

//删除单个单位关联信息
export const userDel = params => {
    return axios({
        url: '/userCompany/delete',
        method: 'DELETE',
        params
    }, true)
}



