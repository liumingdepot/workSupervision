<template>
    <div :class="$store.state.app.collapse?'position-left':''" class="main-container">
        <!-- 主内容区域 -->
        <div class="main-content">
            <keep-alive>
                <transition mode="out-in" name="fade">
                    <router-view></router-view>
                </transition>
            </keep-alive>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-container {
        position: absolute;
        top: 45px;
        left: 200px;
        margin: 10px 20px;
        width: calc(100vw - 240px);
    }
    .main-content{
        background-color: #fff;
        padding: 30px;
        min-height: calc(100vh - 150px);
    }
</style>