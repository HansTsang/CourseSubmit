<template>
    <div class="">
        <el-menu
            :router="true"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#1e9fff"
            text-color="#C1E4FF"
            active-text-color="#fff">
            <el-menu-item index="0">
                <img src="../assets/logo2.png" class="logo-img">
            </el-menu-item>
            <el-menu-item index="1">处理中心</el-menu-item>

            <el-submenu index="2">
                <template slot="title">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    我的工作台
                    </template>
                <el-menu-item index="/list">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>

            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
