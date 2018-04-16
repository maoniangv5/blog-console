<template>
    <el-row class="top">
        <el-col :span="3">
            <router-link to="/">
                <i class="fa fa-usb logo"></i>
                <span class="title">xicha.biz</span>
            </router-link>
        </el-col>
        <el-col :span="5" class="top-search">
            <el-input placeholder="输入搜索内容..." v-model="search" size="mini">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-col>
        <el-col :span="3" :offset="13">
            <div class="avatar-area">
                <div class="logout">退 出</div>
                <img class="avatar" src="../../../static/image/avatar/avatar.jpg" alt="avatar" width="34" height="34">
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'topBar',
        data() {
            return {
                search: ''
            }
        }
    }
</script>

<style scoped>
    .top{
        text-align: center;
    }
    .logo {
        color: #409EFF;
        font-size: 30px;
        height: 60px;
        line-height: 60px;
        transform: rotate(90deg);
    }
    .title {
        font-size: 22px;
        color: #409EFF;
    }
    .top-search {
        height: 32px;
        line-height: 32px;
        margin-top: 14px;
        border-left: 2px solid #eee;
        padding-left: 10px;
    }
    .avatar-area {
        padding: 12px;
    }
    .avatar {
        border-radius: 34px;
        float: right;
    }
    .logout {
        float: right;
        margin-left: 8px;
        padding-left: 8px;
        height: 34px;
        line-height: 34px;
        font-size: 15px;
        border-left: 2px solid #eee;
    }
</style>
