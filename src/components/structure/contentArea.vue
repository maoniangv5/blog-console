<template>
    <div class="cont" :style="contSize">
        <router-view></router-view>
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
                    this.contSize.width = `${ this.innerWidth*.85 - 180 }px`
                } else {
                    this.contSize.width = `${ this.innerWidth*.85 - 64}px`
                }
            },
            innerWidth(innerWidth) {
                if (!this.isCollapse) {
                    this.contSize.width = `${ this.innerWidth*.85 - 180 }px`
                } else {
                    this.contSize.width = `${ this.innerWidth*.85 - 64}px`
                }
                // this.contSize.width = `${ innerWidth*0.85-180}px`
            }
        },
        computed: mapState(["isCollapse", "innerWidth"])
    };
</script>

<style scoped>
    .cont{
        text-align: center;
        margin-top: 60px;
        float: right;
        border: 1px solid red;
        padding: 0px;
    }
</style>