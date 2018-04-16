<template>
    <div class="cont" :style="contSize">
        <div v-for="i in 20" :key="i">
            <h1>{{i}}</h1>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "cont",
        data() {
            return {
                contSize: {
                    width: `${ window.innerWidth*.88 - 180 }px`
                },
                collapse: null
            };
        },
        mounted () {
            this.collapse = this.$store.state.isCollapse
        },
        watch: {
            isCollapse: function (isCollapse) {
                if (!isCollapse) {
                    this.contSize.width = `${ window.innerWidth*.88 - 180 }px`
                } else {
                    this.contSize.width = `${ window.innerWidth*.88 - 64}px`
                }
            }
        },
        computed: mapState(["isCollapse"])
    };
</script>

<style scoped>
    .cont{
        line-height: 60px;
        text-align: center;
        margin-top: 60px;
        padding-top: 30px;
        margin-bottom: 23px;
        float: right;
    }
</style>