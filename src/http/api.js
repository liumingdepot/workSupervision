/*
 * 接口统一集成模块
 */
import * as login from './moudules/login'
import * as user from './moudules/user'
import * as menu from './moudules/menu'
import * as log from './moudules/log'
import * as company from './moudules/company'
import * as dict from './moudules/dict'
import * as authority from './moudules/authority'
import * as upload from './moudules/upload'
import * as project from './moudules/project'
import * as controller from './moudules/controller'
import * as sorage from './moudules/sorage'
import * as designAudit from './moudules/designAudit'
import * as sampling from './moudules/sampling'
import * as course from './moudules/course'
import * as visa from './moudules/visa'
import * as event from './moudules/event'
import * as statistics from './moudules/statistics'
import * as userDict from './moudules/userDict'


// 默认全部导出
export default {
    login,
    user,
    menu,
    log,
    dict,
    upload,
    authority,
    company,
    project,
    controller,
    sorage,
    designAudit,
    course,
    visa,
    event,
    sampling,
    userDict,
    statistics
}
