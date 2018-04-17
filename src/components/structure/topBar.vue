<template>
    <el-row class="top">
        <el-col :span="showSearch?4:10">
            <router-link to="/">
                <i class="fa fa-usb logo"></i>
                <span class="title" v-if="showSite">xicha.biz</span>
            </router-link>
        </el-col>
        <el-col :span="6" class="top-search" v-if="showSearch">
            <el-input placeholder="输入搜索内容..." v-model="search" size="mini">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-col>
        <el-col  :span="showSearch?4:14" :offset="!showSearch?0:10">
            <div class="avatar-area">
                <div class="logout">退 出</div>
                <img class="avatar" src="../../../static/image/avatar/avatar.jpg" alt="avatar" width="34" height="34">
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'topBar',
        data() {
            return {
                search: '',
                showSite: true,
                showSearch: true
            }
        },
        mounted () {
            const that = this;
            this.showSite = this.$store.state.innerWidth>1000?true:false
            this.showSearch = this.$store.state.innerWidth>700?true:false
            
            window.onresize = function temp() {
                that.changeInnerWidth([window.innerWidth, window.innerHeight])
            };
        },
        computed: mapState(["innerWidth", "innerHeight"]),
        methods: {
            ...mapMutations([  
                'changeInnerWidth'
            ]),
        },
        watch: {
            innerWidth: function (innerWidth) {
                this.showSite = innerWidth>1000?true:false
                this.showSearch = innerWidth>700?true:false
            }
        },
    }
</script>

<style scoped>
    .top{
        text-align: center;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #fff;
        padding: 0 2%;
        border-bottom: 1px solid #eee;
        
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
