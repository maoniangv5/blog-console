<template>
    <div id="cont" :style="contSize">
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
                    width: `${ this.$store.state.innerWidth*0.85-180}px`,
                },
                collapse: null
            };
        },
        created () {
        },
        mounted () {
            this.collapse = this.$store.state.isCollapse;
        },
        methods: {
            ...mapMutations(['changeScrollbar']),
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
            }
        },
        computed: mapState(["isCollapse", "innerWidth", "isScrollbar", "innerHeight"])
    };
</script>

<style scoped>
    #cont {
        text-align: center;
        margin-top: 60px;
        margin-bottom: 80px;
        float: right;
        padding: 0px;
        margin-bottom: 60px;
    }
</style>