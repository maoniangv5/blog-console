<template>
    <el-row>
        <VmMarkdown theme="default"
                    width="100%" 
                    height="400px" 
                    v-on:gethtml="showHtml"
                    >
        </VmMarkdown>
        <p>{{htmlStr}}</p>
    </el-row>
</template>

<script>
    import VmMarkdown from '../base/md/components/index';
    export default {
        name: 'index',
        data() {
            return {
                htmlStr: ''
            }
        },
        components: {
            VmMarkdown
        },
        methods: {
            showHtml (html) {
                this.htmlStr = html
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>