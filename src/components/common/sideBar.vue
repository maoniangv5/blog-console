<template>
    <div class="side" :style="sideSize">
        <div class="switch">
            <el-switch v-model="collapse" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
        </div>
        <div class="menu" :style="menuSize">
            <el-menu @open="handleOpen" @close="handleClose" :collapse="!collapse" :select="selectedItem">
                <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="7">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="8">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="9">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
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
                    height: `${ window.innerHeight - 160 }px`,
                    width: `${ 180 }px`,
                },
                menuSize: {
                    height: `${ window.innerHeight - 220 }px`,
                    width: `${ 180 }px`,
                    overflowY: `auto`,
                    overflowX: `hidden`
                },
                collapse: null
            };
        },
        created() {
        },
        mounted () {
            this.collapse = this.$store.state.isCollapse
            
            const that = this;
                window.onresize = function temp() {
                that.sideSize.height = `${ window.innerHeight - 160 }px`;
                that.menuSize.height = `${ window.innerHeight - 220 }px`;
            };
        },
        methods: {
            ...mapMutations([  
                'changeCollapse'
            ]),
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            selectedItem (key, keyPath) {
                console.log(key, keyPath);
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
        top: 60px;
        overflow-y: auto;
    }
    .switch {
        position: fixed;
        height: 30px;
        line-height: 30px;
        top: 80px;
        background-color: #f6f6f6;
        z-index: 999;
        width: inherit;
    }
    .menu {
        position: fixed;
        top: 120px;
    }

</style>