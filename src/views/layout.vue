<template>
    <md-app md-mode="fixed">
        <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <svg-icon icon-name="menu" class="nav-icon"></svg-icon>
            </md-button>
            <span class="md-title">收件箱</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-primary nav-tool" md-elevation="0">
                <md-avatar class="md-avatar-icon">M</md-avatar>
                UserName
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <md-icon>event_note</md-icon>
                    <span class="md-list-item-text">收件箱</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>view_day</md-icon>
                    <span class="md-list-item-text">今天</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>view_week</md-icon>
                    <span class="md-list-item-text">接下来7天</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>folder</md-icon>
                    <span class="md-list-item-text">项目</span>
                </md-list-item>
            </md-list>
        </md-app-drawer>

        <md-app-content>
            <md-empty-state md-icon="playlist_add" md-label="当前没有任务">
            </md-empty-state>
            <md-speed-dial class="md-bottom-right" md-direction="bottom">
                <md-speed-dial-target class="md-primary">
                    <md-icon>add</md-icon>
                </md-speed-dial-target>
            </md-speed-dial>
        </md-app-content>
    </md-app>
</template>

<script>
export default {
    data() {
        return {
            menuVisible: false
        }
    }
}
</script>


<style scoped>
    .nav-icon {
        font-size: 20px;
    }
    .md-app {
        height: 100vh;
    }
    .md-app-content {
        padding: 0;
        background-color: #dfdfdf;
    }
    .md-empty-state {
        height: 100%;
    }
    .nav-tool {
        font-size: 18px;
    }
    .md-avatar {
        margin: 10px;
    }
    .tab-item {
        font-size: 18px;
    }
</style>
