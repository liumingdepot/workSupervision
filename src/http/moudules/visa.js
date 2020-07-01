import axios from '../axios'

/*
 * 签证 visa
 */

// 签证列表（分页）
export const list = params => {
    return axios({
        url: '/visa/list',
        method: 'GET',
        params
    }, true)
}

// 修改签证信息
export const update = data => {
    return axios({
        url: '/visa/update',
        method: 'put',
        data
    }, true)
}
