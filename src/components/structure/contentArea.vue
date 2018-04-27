<template>
    <div id="cont" :style="contSize">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'cont',
  data () {
    return {
      contSize: {
        width: `${this.$store.state.innerWidth * 0.85 - 180}px`
      },
      collapse: null
    }
  },
  mounted () {
    this.collapse = this.$store.state.isCollapse
  },
  methods: {
    ...mapMutations(['changeScrollbar'])
  },
  watch: {
    isCollapse: function (isCollapse) {
      if (!isCollapse) {
        this.contSize.width = `${this.innerWidth * 0.85 - 180}px`
      } else {
        this.contSize.width = `${this.innerWidth * 0.85 - 64}px`
      }
    },
    innerWidth (innerWidth) {
      if (!this.isCollapse) {
        this.contSize.width = `${this.innerWidth * 0.85 - 180}px`
      } else {
        this.contSize.width = `${this.innerWidth * 0.85 - 64}px`
      }
    }
  },
  computed: mapState(['isCollapse', 'innerWidth', 'isScrollbar', 'innerHeight'])
}
</script>

<style scoped>
#cont {
  margin: 60px 0;
  float: right;
  padding: 20px 0;
  margin-bottom: 60px;
}
</style>
