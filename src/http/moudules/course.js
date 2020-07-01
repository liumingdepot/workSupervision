import axios from '../axios'

/*
 * 进出场检查API course
 */

// 进出场检查列表（分页）
export const list = params => {
    return axios({
        url: '/course/list',
        method: 'GET',
        params
    }, true)
}

// 进出场检查材料信息列表
export const appSupList = params => {
    return axios({
        url: '/course/appSupList',
        method: 'GET',
        params
    }, true)
}

// 进出场检查材料信息列表
export const findListByCourseId = params => {
    return axios({
        url: '/courseInfo/findListByCourseId',
        method: 'GET',
        params
    }, true)
}