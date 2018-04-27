<template>
    <el-row>
        <el-col :span="9" class="tags">
            <el-tag :key="tag" v-for="tag in tags" :disable-transitions="false">
                {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">
                <i class="fa fa-plus"></i>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
import { Message } from 'element-ui'
export default {
  name: 'tags',
  data () {
    return {
      tags: ['node', 'js', 'css', 'vue'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (this.tags.includes(this.inputValue)) {
        Message({
          showClose: true,
          message: '标签已存在！',
          type: 'error'
        })
        return
      }
      if (inputValue) {
        this.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>
.tags {
  border-right: 1px solid #eee;
}
.el-tag {
  margin: 5px 10px 5px 0;
}
.button-new-tag {
  margin: 5px 10px 5px 0;
  height: 32px;
  line-height: 32px;
  padding-top: 0;
}
.input-new-tag {
  margin: 5px 10px 5px 0;
  width: 90px;
  vertical-align: bottom;
}
</style>
