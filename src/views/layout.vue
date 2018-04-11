<template>
    <div>
        <div class="container">
            <md-bottom-bar class="md-accent" md-sync-route>
                <md-bottom-bar-item md-label="收件箱" md-icon="home"></md-bottom-bar-item>
                <md-bottom-bar-item md-label="工作流" md-icon="home"></md-bottom-bar-item>
                <md-bottom-bar-item md-label="关于" md-icon="home"></md-bottom-bar-item>
            </md-bottom-bar>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        align-items: flex-end;
        height: 100vh;
        background: rgba(#000, .06);
    }
</style>
