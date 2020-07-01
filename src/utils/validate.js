/**
 * 公共正则
 */
export default {
    //邮箱
    isEmail(s) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
    },
    //手机
    isMobile(s) {
        return /^1[0-9]{10}$/.test(s)
    },
    //名称
    isUserName(s) {
        return /^[a-zA-Z0-9_-]{4,16}$/.test(s)
    },
    isSocialCreditCode(s) {
        return /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g.test(s)
    },
    isName(s){
        return /^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/.test(s)
    }
}
