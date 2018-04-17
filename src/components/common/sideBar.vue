<template>
    <div class="side" :style="sideSize">
        <div class="switch">
            <el-switch v-model="collapse" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
        </div>
        <div class="menu-area" :style="menuSize" @mouseover="hover" @mouseout="leave">
            <el-menu class="menu" v-for="item in menuData" :key="item.index" :default-active="meunNow" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="selectedItem">
                <el-menu-item :index="item.index">
                    <i class="fa fa-pie-chart"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "side",
        data() {
            return {
                sideSize: {
                    height: `${ window.innerHeight - 140 }px`,
                    width: `${ 180 }px`,
                },
                menuSize: {
                    height: `${ window.innerHeight - 200 }px`,
                    width: `${ 180 }px`,
                    overflowX: `hidden`,
                    overflowY: `hidden`
                },
                collapse: null,
                menuData: [
                    {
                        index: '/blogs',
                        title: '博客',
                        icon: 'fa fa-chart-line'
                    },
                    {
                        index: '/tags',
                        title: '标签',
                        icon: 'fa fa-chart-line'
                    },
                    {
                        index: '/media',
                        title: '媒体文件',
                        icon: 'fa fa-chart-line'
                    },
                    {
                        index: '/sites',
                        title: '站内统计',
                        icon: 'fa fa-chart-line'
                    }
                ],
                meunNow: ''
            };
        },
        created() {
        },
        mounted () {
            this.collapse = this.$store.state.isCollapse
            
            const that = this;
            window.onresize = function temp() {
                that.sideSize.height = `${ window.innerHeight - 140 }px`;
                that.menuSize.height = `${ window.innerHeight - 200 }px`;
            };
        },
        methods: {
            ...mapMutations([  
                'changeCollapse'
            ]),
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
            },
            selectedItem(key, keyPath) {
                this.meunNow = key
            },
            hover() {
                this.menuSize.overflowY = `auto`
            },
            leave() {
                this.menuSize.overflowY = `hidden`
            }
        },
        watch: {
            collapse: function (isCollapse) {
                if (!isCollapse) {
                    this.sideSize.width = `${ 64 }px`;
                    this.menuSize.width = `${ 64 }px`;
                } else {
                    this.sideSize.width = `${ 180 }px`;
                    this.menuSize.width = `${ 180 }px`;
                }
                this.changeCollapse()
            }
        },
        computed: mapState(["isCollapse"])
    };
</script>

<style scoped>
    .side {
        text-align: center;
        position: fixed;
        top: 80px;
        overflow-y: auto;
        border-right: 2px solid #eee
    }
    .switch {
        position: fixed;
        height: 30px;
        line-height: 30px;
        top: 80px;
        z-index: 999;
        width: inherit;
    }
    .menu-area {
        position: fixed;
        top: 120px;
        text-align: left;
    }
    .menu {
        border: none;
    }
    .el-menu--collapse {
        text-align: left;
    }
    .el-menu-item {
        border-left: 4px solid #eee;
        padding: 0;
        margin: 1px;
        height: 40px;
        line-height: 40px;
    }
    .is-active {
        border-left: 4px solid #409EFF;
    }
</style>