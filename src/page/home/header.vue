
<template>
  <div class="main-header">
    <div class="left">
      <span class="logo"><i class="el-icon-tickets" style="color: #ddd;"></i>中国电信</span>
      <span class="title"><i class="el-icon-arrow-right"></i>电信政企协议管理系统</span>
    </div>
    <div class="right">
      <span>{{name}} 欢迎您</span>
      <span>修改密码</span>
      <el-button type="danger" @click="exit" class="exit">安全退出</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-header',
    components: {},
    data () {
      return {
        name: ''
      }
    },
    props: {},
    watch: {},
    methods: {
      exit () {
        this.$router.push({path: '/'})
      }
    },
    mounted () {
      this.name =JSON.parse(localStorage.getItem('userInfo')).data.username
    }
  }
</script>

<style scoped lang="less">
.main-header {
  background-color: rgb(69, 103, 130);
  height: 60px;
  color: #fff;
  line-height: 60px;
  .left {
    display:inline-block;
    .logo {
      font-size: 25px;
      font-family: 华文楷体;
      margin: 0 40px 0 20px;
    }
    .title {
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 2px;
    }
  }
  .right {
    margin-right: 20px;
    display: inline-block;
    float: right;
    .exit{
      margin-left: 20px;
    }
  }
}
</style>
<style lang="less">
  .main-header{
    .el-button {
      background-color: red;
      padding: 5px;
      border-radius: 2px;
      border-color:red;
    }
  }
</style>
