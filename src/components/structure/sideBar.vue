<template>
    <div class="side" :style="sideSize">
        <div class="switch">
            <el-switch v-model="collapse" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
        </div>
        <div class="menu-area" :style="menuSize" @mouseover="hover($event)" @mouseout="leave">
            <el-menu class="menu" v-for="item in menuData" :key="item.index" :default-active="meunNow" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="selectedItem">
                <el-menu-item :index="item.index">
                    <i :class="item.icon + ' fa-fw fa '"></i>
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
                    height: `${ this.$store.state.innerHeight - 140 }px`,
                    width: `${ 180 }px`,
                },
                menuSize: {
                    height: `${ this.$store.state.innerHeight - 200 }px`,
                    width: `${ 180 }px`,
                    overflowX: `hidden`,
                    overflowY: `hidden`
                },
                collapse: null,
                menuData: [
                    {
                        index: '/blogs',
                        title: '博客',
                        icon: 'fa-file-word-o'
                    },
                    {
                        index: '/tags',
                        title: '标签',
                        icon: 'fa-tags'
                    },
                    {
                        index: '/media',
                        title: '媒体文件',
                        icon: 'fa-file-image-o'
                    },
                    {
                        index: '/sites',
                        title: '站内统计',
                        icon: 'fa-line-chart'
                    }
                ],
                meunNow: ''
            };
        },
        created() {
        },
        mounted () {
            this.collapse = this.$store.state.isCollapse
        },
        methods: {
            ...mapMutations([  
                'changeCollapse',
                'changeInnerWidth'
            ]),
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
            },
            selectedItem(key, keyPath) {
                this.meunNow = key
            },
            hover(event) {
                this.menuSize.overflowY = `auto`
                this.sideSize.borderRight = `none`
            },
            leave() {
                this.menuSize.overflowY = `hidden`
                this.sideSize.borderRight = `2px solid #eee`
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
            },
            innerHeight(innerHeight) {
                this.sideSize.height = `${ innerHeight - 140 }px`
                this.menuSize.height = `${ innerHeight - 200 }px`
            },
            innerWidth(innerWidth) {
                this.collapse = innerWidth>700?true:false;
            }
        },
        computed: mapState(["isCollapse", "innerWidth", "innerHeight"])
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