<template>
  <div class="home-page">
    <el-row>
      <el-col v-for="index in 4" :span="6">
        <card></card>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="16" class="news">
        <header>最新通知</header>
        <div>
          <p>政企协议管理系统概述</p>
          <span>为防范市场风险与法律风险，提高企业经济效益，减少因合同签订、履行过程中不规范导致的纠纷，
            通过事前方案审批、事中稽核、事后风险管控实现协议闭环管理。</span>
        </div>
      </el-col>
      <el-col :span="8" class="quick-mark">
        <header>扫码登录</header>
        <div>
          <span>扫描二维码登录手机端系统</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import card from './card'
  export default {
    name: 'index',
    components: { card },
    data () {
      return {}
    },
    props: {},
    watch: {},
    methods: {},
    mounted () {
    }
  }
</script>

<style scoped lang="less">
.home-page {
  margin: 0 10px;
  .content {

  }
  .news, .quick-mark {
    border: 1px solid #ddd;
    height:500px;
    header {
      color: #fff;
      height: 40px;
      line-height: 40px;
      background-color: rgb(101, 149, 188);
      padding-left:20px;
    }
  }
  .quick-mark {
    header {
      background-color: rgb(69, 103, 130);
    }
  }
}
</style>
