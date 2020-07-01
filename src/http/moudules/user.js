import axios from '../axios'

/*
 * 权限管理模块 authority
 */

// 得到所有用户（分页）
export const list = (params) => {
	return axios({
		url: '/user/list',
		method: 'GET',
		params
	})
}

// 用户添加
export const save = (data) => {
	return axios({
		url: '/user/save',
		method: 'post',
		data
	})
}

// 用户编辑
export const update = (data) => {
	return axios({
		url: '/user/update',
		method: 'put',
		data
	})
}

// 用户删除
export const userDelete = (id) => {
	return axios({
		url: '/user/delete?userId=' + id,
		method: 'delete',
	})
}

// 用户详情
export const findById = (data) => {
	return axios({
		url: '/user/findById',
		method: 'get',
		data
	})
}

// 修改状态
export const updateStatus = (params) => {
	return axios({
		url: '/user/updateStatus',
		method: 'PUT',
		params
	})
}

// 重置密码
export const restPwd = (data) => {
	return axios({
		url: '/user/restPwd?' + data,
		method: 'PUT'
	})
}

// 所有用户
export const findAllUser = () => {
	return axios({
		url: '/user/findAllUser',
		method: 'get'
	})
}

// 分配用户
export const editUserRole = (params) => {
	return axios({
		url: '/user/editUserRole',
		method: 'put',
		params
	})
}

// 完善
export const modifyPerfect = () => {
	return axios({
		url: '/personal/modifyPerfect',
		method: 'put'
	})
}

// 验证码
export const editUserRole2 = (params) => {
	return axios({
		url: '/personal/editUserRole',
		method: 'put',
		params
	})
}


// 验证码
export const sendSms = (params) => {
	return axios({
		url: '/personal/sendSms',
		method: 'get',
		params
	})
}

// 完善
export const modifyInfo = (data) => {
	return axios({
		url: '/personal/modifyInfo',
		method: 'put',
		data
	})
}









