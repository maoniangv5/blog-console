<template>
    <el-row>
        <el-col :span="4" class="category">
            <el-tag :key="item" v-for="item in category" :disable-transitions="false">
                {{item}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">
                <i class="fa fa-plus"></i>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
      category: ['原创', '转载', '生活', '奇技淫巧'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.tags.splice(this.category.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (this.category.includes(this.inputValue)) {
        this.$message({
          showClose: true,
          message: '类目已存在！',
          type: 'error'
        })
        return
      }
      if (inputValue) {
        this.category.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>
.category {
  border-right: 1px solid #eee;
  padding-right: 10px;
}
.el-tag {
  margin: 5px 0;
  width: 100%;
}
.button-new-tag {
  margin: 5px 10px 5px 0;
  height: 32px;
  line-height: 32px;
  padding-top: 0;
  width: 100%;
}
.input-new-tag {
  margin: 5px 10px 5px 0;
  width: 100%;
  vertical-align: bottom;
}
</style>
