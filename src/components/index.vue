<template>
    <el-row id="index">
        <el-col :span="24" class="top">
            <topBar></topBar>
        </el-col>

        <el-col :span="24" class="mid">
            <div>
                <sideBar></sideBar>
            </div>
            <div>
                <contentArea></contentArea>
            </div>
        </el-col>
        <el-col :span="24" class="foot">
            <footBar></footBar>
        </el-col>

    </el-row>
</template>

<script>
    import topBar from './common/topBar.vue'
    import sideBar from './common/sideBar.vue'
    import footBar from './common/footBar.vue'
    import contentArea from './common/contentArea.vue'
    export default {
        name: 'index',
        components: {
            topBar,
            sideBar,
            footBar,
            contentArea
        }
    }
</script>

<style scoped>
    #index {
        margin: 0;
    };
    .top {
        border-bottom: 1px solid #eee;
    }
    .mid {
        padding: 0 5%;
    }
    .foot {
        background-color: #f6f6f6;
    }
</style>
