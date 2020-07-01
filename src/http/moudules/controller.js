import axios from '../axios'

/*
 * 区段工程信息 controller
 */

// 删除单位区段工程信息
export const deleteUserProject = params => {
    return axios({
        url: '/projectZone/deleteUserProject',
        method: 'DELETE',
        params
    }, true)
}

// 区段工程信息
export const list = params => {
    return axios({
        url: '/projectZone/list',
        method: 'GET',
        params
    }, true)
}

// 单位工程关联信息
export const userProjectList = (params) => {
    return axios({
        url: '/projectZone/userProjectList',
        method: 'get',
        params
    }, true)
}

// 编辑用户区段工程信息
export const editUserProject = (params) => {
    return axios({
        url: '/projectZone/editUserProject',
        method: 'PUT',
        params
    }, true)
}

// 区段工程信息添加
export const save = (data) => {
    return axios({
        url: '/projectZone/save',
        method: 'post',
        data
    }, true)
}

// 区段工程信息编辑
export const update = (data) => {
    return axios({
        url: '/projectZone/update',
        method: 'put',
        data
    }, true)
}

// 区段工程信息删除
export const del = params => {
    return axios({
        url: '/projectZone/del',
        method: 'delete',
        params
    }, true)
}

// 区段工程信息
export const findById = (params) => {
    return axios({
        url: '/projectZone/findById',
        method: 'get',
        params
    }, true)
}

/*
 * 事项信息 controller
 */

// 导入事项
export const portEvent = params => {
    return axios({
        url: '/event/portEvent',
        method: 'post',
        params
    }, true)
}

// 导出模板
export const exportTemplate = () => {
    return axios({
        url: '/event/exportTemplate',
        method: 'get'
    }, true)
}

// 事项信息删除
export const event_delete = params => {
    return axios({
        url: '/event/delete',
        method: 'delete',
        params
    }, true)
}

//修改单位事项信息
export const editCompanyEventList = (params) => {
    return axios({
        url: '/event/editCompanyEventList',
        method: 'put',
        params
    }, true)
}

//获取单位事项信息
export const findCompanyEventList = (params) => {
    return axios({
        url: '/event/findCompanyEventList',
        method: 'get',
        params
    }, true)
}

//获取指定事项信息
export const event_findById = (params) => {
    return axios({
        url: '/event/findById',
        method: 'get',
        params
    }, true)
}

//查询事项列表信息
export const event_list = (params) => {
    return axios({
        url: '/event/list',
        method: 'get',
        params
    }, true)
}

//删除单位事项信息
export const deleteCompanyEvent = (params) => {
    return axios({
        url: '/event/deleteCompanyEvent',
        method: 'DELETE',
        params
    }, true)
}


//新增事项信息
export const event_save = (data) => {
    return axios({
        url: '/event/save',
        method: 'post',
        data
    }, true)
}

//修改事项信息
export const event_update = (data) => {
    return axios({
        url: '/event/update',
        method: 'PUT',
        data
    }, true)
}


// 业务文件分类列表
export const classifyList = (params) => {
    return axios({
        url: '/AppFile/classifyList',
        method: 'get',
        params
    }, true)
}

// 业务文件分类列表
export const AppFilelist = (params) => {
    return axios({
        url: '/AppFile/list',
        method: 'get',
        params
    }, true)
}


// 事项类型查询pid集合
export const appFindByType = (params) => {
    return axios({
        url: '/course/appFindByType',
        method: 'get',
        params
    }, true)
}