<template>
  <div class="home">
    <main-header></main-header>
    <el-row class="menu" >
      <el-col >
        <el-menu
          background-color="rgb(101, 149, 188)"
          text-color="#fff"
          default-active="2"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-menu my-icon"></i>
              <span>主页</span>
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <span slot="title">系统管理</span>
          </el-submenu>
          <el-submenu index="3">
            <span slot="title">模板管理</span>
          </el-submenu>
          <el-submenu index="4">
            <span slot="title">我的流程</span>
          </el-submenu>
          <el-submenu index="4">
            <span slot="title">客户列表</span>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
            <i class="el-icon-setting my-icon"></i>
            <span slot="title">统计报表</span>
            </template>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
            <i class="el-icon-setting my-icon"></i>
            <span slot="title">基础信息管理</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-col>
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="less">
  .my-icon {
    color: #fff;
  }
  .menu {
    width: 200px;
  }

</style>
<style lang="less">
  .home {
    .el-menu {
      height: 800px;
    }
    .el-menu-item [class^=el-icon-], .el-submenu [class^=el-icon-] {
      margin-right: 0;
      width: auto;
    }
  }
</style>
