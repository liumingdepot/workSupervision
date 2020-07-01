import axios from '../axios'

export const upload = (params) => {
    return axios({
        url: '/upload/upload',
        method: 'post',
        params
    })
}
