<template>
    <el-row id="home">
        <el-col :span="24">
            <topBar></topBar>
        </el-col>
        <el-col :span="3">
            <sideBar></sideBar>
        </el-col>
        <el-col :span="21">
            <contentArea></contentArea>
        </el-col>
    </el-row>
</template>

<script>
    import topBar from './common/topBar.vue'
    import sideBar from './common/sideBar.vue'
    import contentArea from './common/contentArea.vue'

    export default {
        name: 'index',
        components: { topBar, sideBar, contentArea }
    }
</script>

<style>

</style>
