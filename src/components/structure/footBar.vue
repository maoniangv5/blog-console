<template>
    <el-row :class="isScrollbar?'no-fixed':'fixed'">
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
        mounted () {
            const that = this;
            window.addEventListener('mouseover', that.handleScroll)
        },
        computed: mapState(["innerWidth", "innerHeight", "isScrollbar"]),
        methods: {
            ...mapMutations(['changeInnerWidth', "changeScrollbar"]),
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            }
        }
    }

</script>

<style scoped>
    .no-fixed {
        text-align: center;
        height: 35px;
        width: 100%;
        line-height: 35px;
        font-size: 12px;
    }
    .fixed {
        text-align: center;
        height: 35px;
        width: 100%;
        line-height: 35px;
        font-size: 12px;
        position: fixed;
        bottom: 0;
    }

</style>
