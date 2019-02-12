<template>
  <div class="home">
    <el-row>
      <main-header></main-header>
    </el-row>
    <el-row class="main">
      <div class="menu">
        <el-menu
          background-color="rgb(101, 149, 188)"
          text-color="#fff"
          unique-opened="true"
          @open="handleOpen"
          @close="handleClose"
        router>
          <el-menu-item index="/homePage">
            <template slot="title">
              <i class="el-icon-menu my-icon"></i>
              <span>主页</span>
            </template>
          </el-menu-item>
          <el-submenu index="/system">
            <template slot="title">系统管理</template>
              <el-menu-item index="">选项1</el-menu-item>
              <el-menu-item index="">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="/template">
            <template slot="title">模板管理</template>
              <el-menu-item index="">选项1</el-menu-item>
              <el-menu-item index="">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="/process">
            <template slot="title">我的流程</template>
              <el-menu-item index="">选项1</el-menu-item>
              <el-menu-item index="">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="/custom">
            <template slot="title">客户列表</template>
              <el-menu-item index="/processList">流程列表</el-menu-item>
              <el-menu-item index="/myprocessList">补充合同信息</el-menu-item>
          </el-submenu>
          <el-submenu index="/table">
            <template slot="title">
            <i class="el-icon-setting my-icon"></i>
            <span>统计报表</span>
            </template>
              <el-menu-item index="">选项1</el-menu-item>
              <el-menu-item index="">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="/base">
            <template slot="title">
            <i class="el-icon-setting my-icon"></i>
            <span>基础信息管理</span>
            </template>
              <el-menu-item index="">选项1</el-menu-item>
              <el-menu-item index="">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="content">
        <el-row>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="欢迎使用" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          </el-tabs>
        </el-row>
        <router-view></router-view>
      </div>
    </el-row>
  </div>
</template>

<script>
import mainHeader from './header'
export default {
  name: 'index',
  components: {mainHeader},
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {}
}
</script>

<style scoped lang="less">
  .main {
    display: flex;
    .menu {
      width: 200px;
      height: 800px;
      background-color: rgb(101, 149, 188)
    }
    .content {
      flex: 1;
    }
  }
  .my-icon {
    color: #fff;
  }

</style>
<style lang="less">
  .home {
    .el-menu-item [class^=el-icon-], .el-submenu [class^=el-icon-] {
      margin-right: 0;
      width: auto;
    }
    .el-menu-item.is-active{
      color: #fff;
    }
    .el-submenu {

    }
  }
</style>
