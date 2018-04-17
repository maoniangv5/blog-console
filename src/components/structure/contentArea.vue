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
                    width: `${ this.$store.state.innerWidth*0.85-180}px`
                },
                collapse: null
            };
        },
        mounted () {
            this.collapse = this.$store.state.isCollapse;
        },
        watch: {
            isCollapse: function (isCollapse) {
                if (!isCollapse) {
                    this.contSize.width = `${ this.innerWidth*.88 - 180 }px`
                } else {
                    this.contSize.width = `${ this.innerWidth*.88 - 64}px`
                }
            },
            innerWidth(innerWidth) {
                this.contSize.width = `${ innerWidth*0.85-180}px`
            }
        },
        computed: mapState(["isCollapse", "innerWidth"])
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
        border: 1px solid red
    }
</style>