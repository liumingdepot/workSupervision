import axios from '../axios'

/* 
 * 日志管理模块
 */

// 分页查询
export const log = (params) => {
    return axios({
        url: '/log/list',
        method: 'get',
        params
    })
}

