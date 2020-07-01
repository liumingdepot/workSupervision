import axios from '../axios';

/*
 * 菜单管理模块
 */

// 获取所有菜单
export const findAllMenuList = (params) => {
    return axios({
        url: '/menu/findAllMenuList',
        method: 'get',
        params
    })
};

//新增
export const save = (data) => {
    return axios({
        url: '/menu/save',
        method: 'post',
        data
    })
};

//菜单修改
export const update = (data) => {
    return axios({
        url: '/menu/update',
        method: 'put',
        data
    })
};

//菜单删除
export const menuDelete = (id) => {
    return axios({
        url: '/menu/delete?id=' + id,
        method: 'delete',
    })
};




