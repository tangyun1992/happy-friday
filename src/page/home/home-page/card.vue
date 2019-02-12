<template>
  <div class="card">
    <el-col v-for="value in dataInfo" :span="6">
      <div class="cards">
      <span class="number">{{value.num}}</span>
      <span class="name">{{value.name}}</span>
      <i :class="value.icon" class="icon"></i>
      <div class="deal">
      <span>{{value.deal}}</span>
      </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'card',
  components: {},
  data () {
    return {
      dataInfo: [
        {
          name: '条待处理流程',
          num: 17,
          icon: 'el-icon-info',
          deal: '处理待处理'
        },
        {
          name: '条已处理流程',
          num: 35,
          icon: 'el-icon-success',
          deal: '已处理'
        },
        {
          name: '发起流程',
          icon: 'el-icon-upload',
          deal: '发起教程'
        },
        {
          name: '审批流程',
          icon: 'el-icon-download',
          deal: '审批'
        }
      ]
    }
  },
  props: {},
  watch: {},
  methods: {},
  async mounted () {
    let res = await this.$http.get('/getNum')
    if (res.status === 200) {
      console.log(res.data)
    }
  }
}
</script>

<style scoped>
.cards{
  position: relative;
  margin: 10px;
  border: 1px solid #ddd;
  height:80px;
  padding:20px;
}
  .number {
    font-size:40px;
    line-height: 60px;
  }
  .name {
    color: purple;
    vertical-align: top;
  }
  .icon {
    position:absolute;
    right: 30px;
    font-size:50px;
  }
  .deal {
    background-color: rgb(101, 149, 188);
    height:30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    cursor:pointer;
  }
</style>
