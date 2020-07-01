import Vue from 'vue'
import Router from 'vue-router'
import Cookies from "js-cookie"
import store from '@/store'
import Home from '@/views/Home'
import {Notification} from 'element-ui';

Vue.use(Router)


const router = new Router({
    routes: [
        {
            path: '/',
            redirect: "/home",
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/home',
                    redirect: "/index"
                },
                {
                    path: '/index',
                    meta: {
                        title: '主页'
                    },
                    component: () => import('@/views/Main/index')
                },
                {
                    path: '/paySave',
                    meta: {
                        title: '缴费'
                    },
                    component: () => import('@/views/payPage/paySave')
                },
                {
                    path: '/payList',
                    meta: {
                        title: '缴费记录'
                    },
                    component: () => import('@/views/Main/payList')
                },
                {
                    path: '/updatePhone',
                    meta: {
                        title: '主页'
                    },
                    component: () => import('@/views/Main/updatePhone')
                },
                {
                    path: '/menu',
                    meta: {
                        title: '菜单管理'
                    },
                    component: () => import('@/views/Main/menu')
                },
                {
                    path: '/dictionary',
                    meta: {
                        title: '字典管理'
                    },
                    component: () => import('@/views/Main/dictionary')
                },
                {
                    path: '/userDic',
                    meta: {
                        title: '字典管理'
                    },
                    component: () => import('@/views/Main/userDict')
                },
                {
                    path: '/log',
                    meta: {
                        title: '访问日志'
                    },
                    component: () => import('@/views/Main/log')
                },
                {
                    path: '/user',
                    meta: {
                        title: '用户管理'
                    },
                    component: () => import('@/views/Main/user')
                },
                {
                    path: '/company',
                    meta: {
                        title: '单位管理'
                    },
                    component: () => import('@/views/Main/company')
                },
                {
                    path: '/authority',
                    meta: {
                        title: '角色管理'
                    },
                    component: () => import('@/views/Main/authority')
                },
                {
                    path: '/payType',
                    meta: {
                        title: '角色管理'
                    },
                    component: () => import('@/views/Main/payType')
                },
                /***************************************************监理单位*****************************************/
                {
                    path: '/sup_project',
                    meta: {
                        title: '工程管理'
                    },
                    component: () => import('@/views/supervisor/project/project')
                },
                {
                    path: '/materialsChange',
                    meta: {
                        title: '材料变更'
                    },
                    component: () => import('@/views/supervisor/materialsChange/materialsChange')
                },
                {
                    path: '/designChange',
                    meta: {
                        title: '设计变更'
                    },
                    component: () => import('@/views/supervisor/designChange/designChange')
                },
                {
                    path: '/sampling',
                    meta: {
                        title: '工程抽检'
                    },
                    component: () => import('@/views/supervisor/sampling/sampling')
                },
                {
                    path: '/projectHandover',
                    meta: {
                        title: '工程移交'
                    },
                    component: () => import('@/views/supervisor/projectHandover')
                },
                {
                    path: '/management',
                    meta: {
                        title: '签证管理'
                    },
                    component: () => import('@/views/supervisor/management/management')
                },
                {
                    path: '/sup_dictionary',
                    meta: {
                        title: '字典管理'
                    },
                    component: () => import('@/views/supervisor/dictionary')
                },
                {
                    path: '/outStorage',
                    meta: {
                        title: '材料送检'
                    },
                    component: () => import('@/views/supervisor/outStorage/outStorage')
                },
                {
                    path: '/eventPostpone',
                    meta: {
                        title: '材料送检'
                    },
                    component: () => import('@/views/supervisor/eventPostpone')
                },
                {
                    path: '/sup_user',
                    meta: {
                        title: '人员管理'
                    },
                    component: () => import('@/views/supervisor/user')
                },
                {
                    path: '/statistics',
                    meta: {
                        title: '统计报告'
                    },
                    component: () => import('@/views/supervisor/statistics/statistics')
                },
                {
                    path: '/sorage',
                    meta: {
                        title: '工程材料'
                    },
                    component: () => import('@/views/supervisor/sorage/sorage')
                },
                {
                    path: '/event',
                    meta: {
                        title: '统计报告'
                    },
                    component: () => import('@/views/supervisor/event/event')
                },
                {
                    path: '/course',
                    meta: {
                        title: '进出场检查'
                    },
                    component: () => import('@/views/supervisor/course')
                },
                {
                    path: '/information',
                    meta: {
                        title: '进出场检查'
                    },
                    component: () => import('@/views/supervisor/information/information')
                },
                /***************************************************施工单位*****************************************/
                {
                    path: '/con_project',
                    meta: {
                        title: '工程管理'
                    },
                    component: () => import('@/views/construction/project/project')
                },
                {
                    path: '/con_information',
                    meta: {
                        title: '工程资料'
                    },
                    component: () => import('@/views/construction/information')
                },
                {
                    path: '/inSorage',
                    meta: {
                        title: '材料入库'
                    },
                    component: () => import('@/views/construction/inSorage/inSorage')
                },
                {
                    path: '/con_visa',
                    meta: {
                        title: '签证管理'
                    },
                    component: () => import('@/views/construction/visa')
                },
                {
                    path: '/design',
                    meta: {
                        title: '施工设计'
                    },
                    component: () => import('@/views/construction/changeDesign')
                },
                {
                    path: '/changeDesign',
                    meta: {
                        title: '设计变更'
                    },
                    component: () => import('@/views/construction/changeDesign')
                },
                {
                    path: '/con_sorage',
                    meta: {
                        title: '设计变更'
                    },
                    component: () => import('@/views/construction/sorage/sorage')
                },
                {
                    path: '/con_contractor',
                    meta: {
                        title: '施工队管理'
                    },
                    component: () => import('@/views/construction/contractor')
                },
                {
                    path: '/con_event',
                    meta: {
                        title: '事项列表'
                    },
                    component: () => import('@/views/construction/event')
                },
                {
                    path: '/tunnelName',
                    meta: {
                        title: '隧道管理'
                    },
                    component: () => import('@/views/tunne/tunnelName')
                },
                {
                    path: '/tunnelManagement',
                    meta: {
                        title: '隧道照片查看'
                    },
                    component: () => import('@/views/tunne/tunnelManagement')
                },
                {
                    path: '/fileCompletion',
                    meta: {
                        title: '隧道照片查看'
                    },
                    component: () => import('@/views/tunne/fileCompletion')
                }
            ]
        },
        {
            path: '/personal',
            meta: {
                title: '个人中心'
            },
            component: () => import('@/views/user/personal/personal')
        },
        {
            path: '/password',
            meta: {
                title: '修改密码'
            },
            component: () => import('@/views/user/password/password')
        },
        {
            path: '/Login',
            name: '登录',
            meta: {
                title: '登录'
            },
            component: () => import('@/views/Login')
        },
        {
            path: '/404',
            name: 'Error',
            meta: {
                title: '404'
            },
            component: () => import('@/views/Error/404')
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : ''
    const token = Cookies.get('token')
    if (to.path === '/login') {
        if (token) {
            next({
                path: '/'
            })
        } else {
            next()
        }
    } else {
        if (sessionStorage.getItem('userType') == 0 || sessionStorage.getItem('userType') == 1 || sessionStorage.getItem('userType') == 5) {
            if (to.path != '/' && to.path != '/index' && to.path != "/updataPhopne" && to.path != '/sup_project' && to.path != '/login' && to.path != '/personal') {
                const project = store.state.project.project
                if (!project.projectId || !project.projectZoneId) {
                    Notification({
                        title: '提示',
                        message: '请先选择工程',
                        type: 'warning'
                    });
                    next({
                        path: '/'
                    })
                } else {
                    next()
                }
            } else {
                next()
            }
        } else {
            next()
        }
    }
})


export default router
