export default {
	state: {
		component: 'login',
		userType:JSON.parse(sessionStorage.getItem("userType"))
	},
	getters: {
		getComponent({component}) {
			return component
		}
	},
	mutations: {
		setComponent(state, newComponent) {
			//更改组件
			state.component = newComponent
		},
		setNavBar(state, navBar) {
			//更改组件
			state.navBar = navBar
		}
	}
}