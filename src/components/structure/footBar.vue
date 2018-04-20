<template>
    <el-row class="fixed">
        <p>【蜀ICP备18008315号】 | Copyright &copy; 2018 xicha.biz, all Rights Reserved.</p>
    </el-row>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'foot',
        data() {
            return {
            }
        },
    }

</script>

<style scoped>
    .no-fixed {
        text-align: center;
        height: 35px;
        width: 100%;
        line-height: 35px;
        font-size: 12px;
        border-top: 1px solid #eee;
        background-color: #fff;
    }
    .fixed {
        text-align: center;
        height: 35px;
        width: 100%;
        line-height: 35px;
        font-size: 12px;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #eee;
        background-color: #fff;
        z-index: 999;
    }

</style>
