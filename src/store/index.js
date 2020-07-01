import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import login from './modules/login'
import app from './modules/app'
import iframe from './modules/iframe'
import user from './modules/user'
import project from './modules/project'

const store = new vuex.Store({
    modules: {
        login,
        app,
        iframe,
        user,
        project
    }
})

export default store
