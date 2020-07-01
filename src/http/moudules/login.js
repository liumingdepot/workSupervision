import axios from '../axios'

/*
 * 系统登录模块
 */

export const menuList = (params) => {
	return axios({
		url: '/login/findMenuList',
		method: 'post',
		params:{
			visit:0,
			...params
		}
	})
}

// 找回密码
export const retrievePwd = (params) => {
	return axios({
		url: '/login/retrievePwd',
		method: 'put',
		params
	})
}

// 发送验证码
export const sendSms = params => {
	return axios({
		url: '/login/sendSms',
		method: 'get',
		params
	})
};

// 登录
export const login = data => {
	return axios({
		url: 'login/login',
		method: 'POST',
		data
	})
};

// 登出
export const logout = () => {
	return axios({
		url: 'login/logout',
		method: 'PUT'
	})
};

// 注册
export const register = (data) => {
	return axios({
		url: 'login/register',
		method: 'post',
		data
	})
};

// 修改密码
export const password = (data) => {
	return axios({
		url: '/personal/modifyPwd',
		method: 'post',
		data
	})
};

// 个人信息
export const personal = () => {
	return axios({
		url: '/personal/info',
		method: 'get'
	})
};

// 修改个人信息
export const modifyInfo = () => {
	return axios({
		url: '/personal/modifyInfo',
		method: 'get'
	})
};

