<template>
  <div class="vm-editor-menu"
       :style="{backgroundColor:bgMenu, color:menuColor, border:menuBorder}">
    <div class="command">
      <VmMarkdownButton icon="fa fa-fw fa-header">
        <VmMarkdownDropdown>
          <ul class="vm-editor-ul" :style="{color: filterColor}">
            <li @click="insertText('# H1\n')">
              <h1>H1</h1>
            </li>
            <li @click="insertText('## H2\n')">
              <h2>H2</h2>
            </li>
            <li @click="insertText('### H3\n')">
              <h3>H3</h3>
            </li>
            <li @click="insertText('#### H4\n')">
              <h4>H4</h4>
            </li>
            <li @click="insertText('##### H5\n')">
              <h5>H5</h5>
            </li>
          </ul>
        </VmMarkdownDropdown>
      </VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-bold" @click.native="insertText(' **Bold** ')"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-italic" @click.native="insertText(' *Italic* ')"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-strikethrough" 
                        @click.native="insertText(' ~~Strikethrough~~ ')">                
      </VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-list-ol" @click.native="insertText('1. Ordered List\n')"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-list-ul" @click.native="insertText('- Unordered List\n')"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-quote-left" @click.native="insertText(' > Blockquote\n\n')"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-code" @click.native="insertText('```\nCode\n```\n')"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-table">
        <VmMarkdownTable :hoverColor="bgMenu"
                         @textChange="uploadTable">
        </VmMarkdownTable>
      </VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-image" id="fileSelect"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-link" @click.native="insertText('[JesseLuo](https://github.com/luosijie)')"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-minus" @click.native="insertText('***\n')"></VmMarkdownButton>
      <!-- 隐藏的模拟input -->
      <input type="file" id="fileElem" accept="image/*" @change="handleFiles($event)" style="display：none">
    </div>
    <div class="vm-markdown-layout">
      <VmMarkdownButton icon="fa fa-fw fa-columns" layout="columns"></VmMarkdownButton>
      <VmMarkdownButton icon="fa fa-fw fa-arrows-alt" layout="zoom"></VmMarkdownButton>
    </div>
  </div>
</template>
<style lang="scss">
  .vm-editor-menu{
    display: flex;
    height: 40px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-radius: 4px 4px 0px 0px;
    position: relative;
    
    .command, .vm-markdown-layout{
      display: flex;
    }
    .line{
      display: inline-block;
      width: 1px;
      height: 40px;
      margin: 0 10px;
      background-color: #eeeff1;
    }
  }
  ul.vm-editor-ul{
    padding: 0;
    margin: 0;
    li{
      margin: 0;
      padding: 5px 30px;
      display: flex;
      justify-content: center;
      &:hover{
        background: #f8f8f8;
      }
      h1{
        text-align: center;
      }
    }  
  }
  #fileElem{
    display: none
  }
</style>
<script>
import VmMarkdownButton from './vm-markdown-button.vue'
import VmMarkdownDropdown from './vm-markdown-dropdown.vue'
import VmMarkdownTable from './vm-markdown-table.vue'
import insertText from '../assets/js/insertText.js'
export default {
  name: 'VmMarkdownMenu',
  components: {
    VmMarkdownButton,
    VmMarkdownDropdown,
    VmMarkdownTable
  },
  props: {
    bgMenu: {
      type: String,
      default:'#fafbfc'
    },
    menuBorder: {
      type: String,
      default:'1px solid #eeeff1'
    },
    menuColor: {
      type: String,
      default: '#858585'
    },
    hoverColor: {
      type: String,
      default:'#232323'
    }
  },
  computed: {
    filterColor: function(){
      return this.menuColor
    }
  },
  methods: {
    insertText(string){
      let content = document.querySelector('.vm-markdown-content')
      insertText(content, string)
      this.$emit('textChange', content.value)
    },
    uploadTable(content){
      console.log(content)
      this.$emit('textChange', content)
    },
    handleFiles(e){
      let _this = this
      let file = e.target.files[0];           
      let param = new FormData(); //创建form对象
      param.append('file',file,file.name);//通过append向form对象添加数据
      this.$axios({
        method:"POST",
        url:'https://api.xicha.biz/api/upload',
        data: param,
        headers:{'Content-Type':'multipart/form-data'}
      })
      .then(function (res) {
        let img_url = res.data.result.imageurl
        let img_name = res.data.result.imagename
        _this.insertText(`![net err](${img_url})`)
      })
      .catch(function (err) {
      })
    }
  },
  mounted () {
    let menu = document.querySelector('.vm-editor-menu')
    menu.addEventListener('mouseover', evt => {
      if (evt.target.tagName == 'I') {
        evt.target.style.color = this.hoverColor
      } 
    })
    menu.addEventListener('mouseout', function (evt) {
      if (evt.target.tagName == 'I') {
        evt.target.style.color = ''
      } 
    })
    // 为图片按钮绑定自定义事件
    let fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem");

    fileSelect.addEventListener("click", function (e) {
      if (fileElem) {
        fileElem.click();
      }
    }, false);
  }
}
</script>
