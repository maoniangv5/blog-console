<template>
    <el-row id="home">
        <el-col :span="24" class="top">
            <topBar></topBar>
        </el-col>

        <el-col :span="24" class="mid">
            <div>
                <sideBar></sideBar>
            </div>
            <div>
                <contentArea></contentArea>
            </div>
        </el-col>
        <!-- <el-col :span="24" class="foot">
            <footBar></footBar>
        </el-col> -->
    </el-row>
</template>

<script>
import topBar from './structure/topBar.vue'
import sideBar from './structure/sideBar.vue'
import footBar from './structure/footBar.vue'
import contentArea from './structure/contentArea.vue'
export default {
  name: 'home',
  components: {
    topBar,
    sideBar,
    footBar,
    contentArea
  }
}
</script>

<style scoped>
#index {
  margin: 0;
}
.top {
  border-bottom: 1px solid #eee;
}
.mid {
  padding: 0 5%;
  background-color: #f4f5f5;
}
</style>
