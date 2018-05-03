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
        width: `${this.$store.state.innerWidth * 0.85 - 180}px`,
        minHeight: `${this.$store.state.innerHeight - 121}px`
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
      this.contSize.minHeight = `${this.$store.state.innerHeight - 121}px`
    },
    innerHeight (innerHeight) {
      this.contSize.minHeight = `${this.$store.state.innerHeight - 121}px`
    }
  },
  computed: mapState(['isCollapse', 'innerWidth', 'isScrollbar', 'innerHeight'])
}
</script>

<style scoped>
#cont {
  margin-top: 80px;
  margin-bottom: 20px;
  float: right;
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
}
</style>
