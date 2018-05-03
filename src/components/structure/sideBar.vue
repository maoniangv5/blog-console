<template>
    <div id="side" :style="sideSize">
        <div class="switch">
            <div @click="changeColl">
                <i v-if="collapse" class="fa fa-ellipsis-v"></i>
                <i v-else class="fa fa-ellipsis-h"></i>
            </div>
        </div>
        <div class="menu-area" :style="menuSize" @mouseover="hover($event)" @mouseout="leave">
            <el-menu class="menu" v-for="item in menuData" :key="item.index" :default-active="meunNow" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="selectedItem" router>
                <el-menu-item :index="item.index">
                    <i :class="item.icon + ' fa-fw fa '"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
        </div>
        <hr />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'side',
  data () {
    return {
      sideSize: {
        // height: `${this.$store.state.innerHeight - 100}px`,
        width: `${180}px`
      },
      menuSize: {
        height: `${this.$store.state.innerHeight - 160}px`,
        width: `${180}px`,
        overflowX: `hidden`,
        overflowY: `hidden`
      },
      collapse: null,
      menuData: [
        {
          index: '/dashboard',
          title: '概览',
          icon: 'fa-line-chart'
        },
        {
          index: '/blogs',
          title: '博客',
          icon: 'fa-file-word-o'
        },
        {
          index: '/category',
          title: '类目',
          icon: 'fa-bars'
        },
        {
          index: '/tags',
          title: '标签',
          icon: 'fa-tags'
        },
        {
          index: '/media',
          title: '媒体文件',
          icon: 'fa-file-image-o'
        }
      ],
      meunNow: null
    }
  },
  mounted () {
    let pathArr = this.$route.path.split('/')
    this.meunNow = [pathArr[0], pathArr[1]].join('/')
    this.collapse = this.$store.state.isCollapse
  },
  methods: {
    ...mapMutations(['changeCollapse', 'changeInnerWidth']),
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {},
    selectedItem (key, keyPath) {
      this.meunNow = key
    },
    hover (event) {
      this.menuSize.overflowY = `auto`
    },
    leave () {
      this.menuSize.overflowY = `hidden`
    },
    changeColl () {
      this.collapse = !this.collapse
    }
  },
  watch: {
    collapse: function (isCollapse) {
      if (!isCollapse) {
        this.sideSize.width = `${64}px`
        this.menuSize.width = `${64}px`
      } else {
        this.sideSize.width = `${180}px`
        this.menuSize.width = `${180}px`
      }
      this.changeCollapse()
    },
    innerHeight (innerHeight) {
      // this.sideSize.height = `${innerHeight - 100}px`
      this.menuSize.height = `${innerHeight - 160}px`
    },
    innerWidth (innerWidth) {
      this.collapse = innerWidth > 1000
    },
    $route (to, from) {
      let pathArr = to.path.split('/')
      this.meunNow = [pathArr[0], pathArr[1]].join('/')
    }
  },
  computed: mapState(['isCollapse', 'innerWidth', 'innerHeight'])
}
</script>

<style scoped>
#side {
  text-align: center;
  position: fixed;
  top: 80px;
  overflow-y: auto;
  background-color: #fff;
}
.switch {
  position: fixed;
  height: 30px;
  line-height: 30px;
  top: 80px;
  z-index: 999;
  width: 20px;
  text-align: center;
  cursor: pointer;
}
.menu-area {
  position: fixed;
  top: 120px;
  text-align: left;
  border-radius: 5px;
}
.menu {
  border: none;
}
li {
  border-radius: 5px;
}
.el-menu--collapse {
  text-align: left;
}
.el-menu-item {
  border-left: 4px solid #eee;
  padding: 0;
  margin: 1px;
  height: 40px;
  line-height: 40px;
}
.is-active {
  border-left: 4px solid #409eff;
  background-color: #ecf5ff
}
</style>
