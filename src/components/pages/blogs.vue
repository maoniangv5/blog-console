<template>
    <el-row>
        <el-col class="blog-search">
            <el-form :inline="true" :model="formSearch" size="small" ref="formSearch">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="formSearch.title" placeholder="请输入标题" clearable></el-input>
                </el-form-item>
                <el-form-item label="类目" prop="category">
                    <el-select v-model="formSearch.category" placeholder="请选择类目" clearable>
                        <el-option v-for="item in searchOpt" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" plain @click="search">查询</el-button>
                    <el-button type="warning" plain @click="$refs['formSearch'].resetFields()">重置</el-button>
                </el-form-item>
                <el-form-item class="add-btn">
                    <router-link to="/home/blogs/new">
                        <el-button type="primary" circle class="add">
                            <i class="fa fa-plus fa-fw"></i>
                        </el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </el-col>
        
        <el-col class="blog-table">
            <el-table :data="tableData" border size="mini">
                <el-table-column label="标题" width="350">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="类目" width="150">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="标签" width="350">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span>查看</span>
                        <span>编辑</span>
                        <span>删除</span>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'tags',
        data() {
            return {
                tableData: [{title: 'hello'},{title: 'world'}],
                formSearch: {
                    title: '',
                    category: ''
                },
                searchOpt: [{
                        value: '1',
                        label: '黄金糕'
                    },
                    {
                        value: '2',
                        label: '双皮奶'
                    }, 
                    {
                        value: '3',
                        label: '蚵仔煎'
                    }
                ]
            }
        },
        mounted(){
        },
        methods: {
            search () {}
        },
        watch: {
        }
        
    }
</script>

<style scoped>
.add-btn {
    float:right;
    margin:0;
}
.add {
    padding: 10px 9px;
}

</style>