<template>
  <div class="card">
    <div>
      <span class="number">{{value.num}}</span>
      <span class="name">{{value.name}}</span>
      <i :class="value.icon" class="icon"></i>
    </div>
    <div class="deal">
      <span>{{value.deal}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    components: {},
    data () {
      return {
        value: {
          name: '条待处理流程',
          num: 17,
          icon: 'el-icon-success',
          deal: '处理待处理'
        }
      }
    },
    props: {},
    watch: {},
    methods: {},
    mounted () {
    }
  }
</script>

<style scoped>
.card{
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
    font-size:30px;
  }
  .deal {
    background-color: rgb(101, 149, 188);
    height:30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
  }
</style>
