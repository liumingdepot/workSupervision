import axios from '../axios'
/*
 * 抽检信息
 */
// 抽检信息信息
export const list = (params) => {
    return axios({
        url: '/sampling/list',
        method: 'GET',
        params
    },true)
}


