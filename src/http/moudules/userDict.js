import axios from '../axios'

/*
 * 字典管理模块 userDict
 */

// 字典分页
export const list = (params) => {
	return axios({
		url: '/userDict/list',
		method: 'get',
		params
	},true)
}

// 字典添加
export const save = (data) => {
	return axios({
		url: '/userDict/save',
		method: 'post',
		data
	},true)
}

// 字典编辑
export const update = (data) => {
	return axios({
		url: '/userDict/update',
		method: 'put',
		data
	},true)
}

// 字典删除
export const dictDelete = (params) => {
	return axios({
		url: '/userDict/delete',
		method: 'delete',
		params
	},true)
}

// 字典详情
export const findById = (params) => {
	return axios({
		url: '/userDict/findById',
		method: 'get',
		params
	},true)
}
