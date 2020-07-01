/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

// 后台管理系统服务器地址
// const url = 'http://www.projecticms.com'
const url = 'http://10.168.1.66:9761'
export const baseUrlAdmin = url + '/pms-admin'
export const baseUrlMetro = url + '/pms-metro'
export const baseUrlCost = url + '/pms-cost'

export default {
  baseUrlAdmin,
  baseUrlMetro
}
