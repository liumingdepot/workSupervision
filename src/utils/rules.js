import validate from './validate';

export default {
	//必填验证
	required: [
		{
			required: true,
			message: '此项必填项，请先填写',
			trigger: 'change'
		}
	],
	//手机号验证
	mobile: [
		{
			required: true,
			validator: (rule, value, callback) => {
				//手机号验证
				if (!validate.isMobile(value)) {
					callback(new Error('请输入正确的手机号'));
				} else {
					callback();
				}
			},
			trigger: 'blur'
		}
	],
	isName: [
		{
			required: true,
			message: '请输入密码',
			trigger: 'blur'
		},
		{
			validator: (rule, value, callback) => {
				//手机号验证
				if (!validate.isName(value)) {
					callback(new Error('请输入正确的姓名'));
				} else {
					callback();
				}
			},
			trigger: 'blur'
		}
	],
	//密码验证
	password: [
		{
			required: true,
			message: '请输入密码',
			trigger: 'blur'
		},
		{
			min: 8,
			max: 20,
			message: '请输入长度8-20位密码',
			trigger: 'blur'
		}
	],
	verification: [
		{
			required: true,
			message: '请输入验证码',
			trigger: 'blur'
		},
		{
			min: 6,
			max: 6,
			message: '请输入长度6位验证码',
			trigger: 'blur'
		}
	],
	//用户名验证
	userName: [
		{
			required: true,
			validator: (rule, value, callback) => {
				//用户名验证
				if (!validate.isUserName(value)) {
					callback(new Error('请输入字母/数字用户名'));
				} else {
					callback();
				}
			},
			trigger: 'blur'
		},
		{
			min: 6,
			max: 20,
			message: '请输入长度6-20位字母/数字',
			trigger: 'blur'
		}
	],
	//邮箱验证
	email: [
		{
			required: true,
			validator: (rule, value, callback) => {
				//邮箱验证
				if (!validate.isEmail(value)) {
					callback(new Error('请输入正确的邮箱'));
				} else {
					callback();
				}
			},
			trigger: 'blur'
		}
	],
	SocialCreditCode: [
		{
			required: true,
			validator: (rule, value, callback) => {
				//邮箱验证
				if (!validate.isSocialCreditCode(value)) {
					callback(new Error('请输入正确的信用代码'));
				} else {
					callback();
				}
			},
			trigger: 'change'
		}
	]
}
