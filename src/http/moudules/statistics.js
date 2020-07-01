import axios from "../axios";

/**
 * 统计 statistics
 */

// 全部事项进度统计
export const allEventPlan = (params) => {
	return axios({
		url: '/statistics/supervisor/allEventPlan',
		method: 'GET',
		params
	},true)
}
// 进出场材料数量统计
export const courseCost = (params) => {
	return axios({
		url: '/statistics/supervisor/courseCost',
		method: 'GET',
		params
	},true)
}
// 事项进度统计
export const eventPlan = (params) => {
	return axios({
		url: '/statistics/supervisor/eventPlan',
		method: 'GET',
		params
	},true)
}
// 入库材料数据量统计
export const materialsCost = (params) => {
	return axios({
		url: '/statistics/supervisor/materialsCost',
		method: 'GET',
		params
	},true)
}