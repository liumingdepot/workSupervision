import axios from 'axios';
import config from './config';
import Cookies from "js-cookie";
import router from '@/router';
import {Message} from 'element-ui';

export default function $axios(options, type) {
    return new Promise((resolve, reject) => {
        let baseURL
        if(type == true){
            baseURL = config.baseUrlMetro
        }else if(type == 100){
            baseURL = config.baseUrlCost
        }else{
            baseURL = config.baseUrlAdmin
        }
        //初始化
        const instance = axios.create({
            baseURL,
            headers: config.headers,
            timeout: config.timeout,
            withCredentials: config.withCredentials
        })

        // request 拦截器
        instance.interceptors.request.use(
            config => {
                let token = Cookies.get('token')
                if (token) {
                    config.headers.Authorization = token
                } else {
                    // 重定向到登录页面
                    router.push('/login')
                }
                return config
            },

            error => {
                // 请求错误时
                console.log('request:', error)
                // 1. 判断请求超时
                if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
                    console.log('timeout请求超时')
                    // return service.request(originalRequest);// 再重复请求一次
                }
                // 2. 需要重定向到错误页面
                const errorInfo = error.response
                console.log(errorInfo)
                if (errorInfo) {
                    error = errorInfo.data // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
                    const errorStatus = errorInfo.status; // 404 403 500 ...
                    router.push({
                        path: `/error/${errorStatus}`
                    })
                }
                return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
            }
        )

        // response 拦截器
        instance.interceptors.response.use(
            response => {
                let data = response.data || JSON.parse(response.request.responseText);
                if (data.code === 200 || data.code === 401) {
                    return data
                } else if (data.code === 402) {
                    // 重定向到登录页面
                    Message({
                        message: '登陆过期，请重新登录',
                        type: 'error'
                    })
                    Cookies.remove('token');
                    router.push('/login')
                }else {
                    Message({
                        message: data.msg,
                        type: 'error'
                    })
                }
            },
            err => {
                Message({
                    message: '服务器错误',
                    type: 'error'
                })
                return Promise.reject(err) // 返回接口返回的错误信息
            }
        )

        // 请求处理
        instance(options).then(res => {
            resolve(res)
            return false
        }).catch(error => {
            reject(error)
        })
    })
}
