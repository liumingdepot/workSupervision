<template>
    <div class="menu-bar-container">
        <el-menu ref="navmenu" :default-active="$route.path" router v-if="navTree" @open="closeNavmenu" style="border:none" :class="collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'" :collapse="collapse" background-color="#292B46" text-color="#999" active-text-color="#1586fc" popper-class="popperClass">
            <!-- 有子集 -->
            <el-submenu v-for="(item, index) in navTree" :index="item.id" :key="index" v-if="item.children">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span v-if="!collapse">{{ item.name }}</span>
                </template>
                <div v-if="item.children">
                    <el-menu-item :index="val.href" v-for="val in item.children" :key="val.index">
                        <span slot="title">&nbsp;&nbsp;&nbsp;{{ val.name }}</span>
                    </el-menu-item>
                </div>
            </el-submenu>
            <!-- 顶部菜单 -->
            <el-menu-item :index="item.href" v-else>
                <i :class="item.icon"></i>
                <span slot="title" v-if="!collapse">{{ item.name }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            appName: ({ app }) => app.appName,
            themeColor: ({ app }) => app.themeColor,
            collapse: ({ app }) => app.collapse
        }),
        navTree() {
            const userType = this.$store.state.login.userType;
            const menu = sessionStorage.getItem('menu');
            const navTree = JSON.parse(menu);
            if (userType == 4) {
                navTree.length = 4;
            }
            return navTree;
        }
    },
    beforeCreate() {},
    methods: {
        closeNavmenu(index) {
            this.navTree.forEach(({ id }) => {
                if (id == index) {
                    this.$refs.navmenu.open(index);
                } else {
                    this.$refs.navmenu.close(id);
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
.menu-bar-container {
    position: fixed;
    top: 45px;
    left: 0;

    .popperClass {
        background: #00ff00;
    }

    .el-menu {
        position: absolute;
        top: 0;
        bottom: 0;
        text-align: left;
        height: 100vh;
        background-color: #2968a30c;
    }

    .logo {
        position: absolute;
        top: 0px;
        height: 60px;
        line-height: 60px;
        background: #545c64;
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
            border-radius: 0px;
            margin: 10px 10px 10px 10px;
            float: left;
        }

        .title {
            font-size: 20px;
            color: white;
            text-align: center;
        }
    }

    .menu-bar-width {
        width: 200px;
    }

    .menu-bar-collapse-width {
        width: 65px;
    }
}
</style>
