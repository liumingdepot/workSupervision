export default {
  state: {
    perms: [], // 用户权限标识集合
  },
  mutations: {
    setPerms(state, perms) { // 用户权限标识集合
      state.perms = perms;
    }
  },
  actions: {}
}
