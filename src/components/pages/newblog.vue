<template>
    <el-row class="indexContainer">
        <el-col class="editorContainer">
            <markdown 
            :mdValuesP="msg.mdValue"  
            :fullPageStatusP="false" 
            :editStatusP="true" 
            :previewStatusP="true" 
            :navStatusP="true"
            :icoStatusP="true"  
            @childevent="childEventHandler"
            ></markdown>
        </el-col>
    </el-row>
</template>

<script>
    import jsonServices from "../../service/datahandler";
    import markdown from '../base/md.vue';
    export default {
        name: 'index',
        data() {
            return {
                msgShow:'我要显示的内容',
                dilogStatus:false,
                msg: {
                    mdValue:''
                }
            }
        },
        components: {
            markdown
        },
        methods: {
            childEventHandler:function(res){
                this.msg=res;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .indexContainer {
        width: 100%;
        height: 400px;
    }
    .editorContainer {
        height: 100%;
        border: 1px solid #ddd;
    }
</style>