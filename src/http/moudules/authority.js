import axios from '../axios'

/*
 * 权限管理模块 authority
 */

// 得到所有角色
export const findAll = () => {
    return axios({
        url: '/role/findAll',
        method: 'GET'
    })
}

// 角色列表（分页）
export const list = (params) => {
    return axios({
        url: '/role/list',
        method: 'get',
        params
    })
}

// 角色添加
export const save = (data) => {
    return axios({
        url: '/role/save',
        method: 'post',
        data
    })
}

// 角色编辑
export const update = (data) => {
    return axios({
        url: '/role/update',
        method: 'put',
        data
    })
}

// 角色删除
export const roleDelete = (params) => {
    return axios({
        url: '/role/delete',
        method: 'delete',
        params
    })
}

// 角色详情
export const findById = (data) => {
    return axios({
        url: '/dict/findById',
        method: 'get',
        data
    })
}

// 根据角色获取权限
export const findMenuListByRole = (params) => {
    return axios({
        url: '/role/findMenuListByRole',
        method: 'get',
        params
    })
}

// 编辑权限
export const editRoleMenu = (params) => {
    return axios({
        url: '/role/editRoleMenu',
        method: 'PUT',
        params
    })
}

// 根据角色用户
export const findUserByRole = (params) => {
    return axios({
        url: '/role/findUserByRole',
        method: 'get',
        params
    })
}

// 编辑用户
export const editRoleUser = (params) => {
    return axios({
        url: '/role/editRoleUser',
        method: 'PUT',
        params
    })
}


// 修改状态
export const changeStatus = (params) => {
    return axios({
        url: '/role/changeStatus',
        method: 'PUT',
        params
    })
}


