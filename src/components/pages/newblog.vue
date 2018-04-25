<template>
    <el-row>
        <el-collapse v-model="activeName">
            <el-collapse-item title="基本信息" name="1">
                <el-form ref="formNew" :model="formNew" label-width="80px" size="mini">
                    <el-col :span="12">
                        <el-form-item label="标题" name="title">
                            <el-input v-model="formNew.title" placeholder="请输入标题"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="12" >
                        <el-form-item label="e-itle" name="title">
                            <el-input v-model="formNew.title" readonly placeholder="请先输入标题"></el-input>
                        </el-form-item>
                    </el-col>
                        <el-form-item label="描述" prop="desc">
                            <el-input v-model="formNew.desc" placeholder="请输入描述"></el-input>
                        </el-form-item>
                    <el-form-item label="类目" name="category">
                        <el-radio-group v-model="formNew.category" size="mini">
                            <el-radio-button v-for="cate in categoryOpt" :label="cate.value" :key="cate.value">{{cate.label}}</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="标签" name="tags">
                        <el-checkbox-group v-model="formNew.tags" size="mini" @change="tagSel">
                            <el-checkbox-button v-for="tag in tagsOpt" :label="tag.value" :key="tag.value">{{tag.label}}</el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="文本内容" name="2">
                <VmMarkdown theme="default" width="100%" height="400px" v-on:gethtml="showHtml">
                </VmMarkdown>
            </el-collapse-item>
        </el-collapse>
    </el-row>
</template>

<script>
    import VmMarkdown from '../base/md/components/index';
    export default {
        name: 'index',
        data() {
            return {
                activeName:'1',
                formNew: {
                    title: '',
                    category: '',
                    tags: [],
                    desc: '',
                    eTitle: ''
                },
                categoryOpt:[
                    {
                        label: '原创',
                        value: 'origin'
                    },
                    {
                        label: '转载',
                        value: 'share'
                    },
                    {
                        label: '奇技淫巧',
                        value: 'only'
                    }
                ],
                tagsOpt:[
                    {
                        label: '1',
                        value: 'node'
                    },
                    {
                        label: '2',
                        value: 'css'
                    },
                    {
                        label: '3',
                        value: 'js'
                    },
                ],
                htmlStr: ''
            }
        },
        components: {
            VmMarkdown
        },
        methods: {
            showHtml (html) {
                this.htmlStr = html
            },
            tagSel(value) {
                return value.sort()
            }
        },
        mounted(){
            this.htmlStr = this.formNew
        },
        watch: {
        }
    }
</script>

<style lang="scss" scoped>

</style>