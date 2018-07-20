<template>
  <div id="app">
    <el-container>
      <el-header height="100%">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  methods: {

  },
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
