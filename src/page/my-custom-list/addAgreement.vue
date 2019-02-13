<!--
 * @author
 * @date 2019-02-13 13:40
 * @desc
 -->

<template>
  <div class="adds">
      <con></con>
    <div class="discC">
    <div class="load">
      <span>业务描述:</span>
      <el-button  class="btn" type="text">全部撤销</el-button>
      <el-button class="btn">下载购物车excel</el-button>
      <el-button class="btn">上传购物车excel</el-button>
    </div>
    <div class="ico">
      <span>类型：</span>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>ICT套餐</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>组合套餐</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>融合套餐</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>电信电视</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>单宽带</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>固话</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>手机</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>电路</el-button>
      <el-button type="text" size="mini"><i class="el-icon-star-on"></i>光纤</el-button>
    </div>
    <div class="bkg"></div>
      <el-input v-model="price.yj"></el-input>
    <div class="nums">
      <span>原价：</span><span class="price">{{price.yj || 0}}元</span>
      <span>优惠：</span><span class="price">{{price.yh || 0}}元</span>
      <span>一次性价格：</span><span class="price">{{dj}}元</span>
      <span>折扣率：</span><span class="price">{{dj}}%</span>
      <span>报价：</span><span class="price">{{dj}}元</span>
      <span>受理价：</span><span class="price">{{dj}}元</span>
      <el-button size="mini">加入购物车</el-button>
    </div>
      <div style="clear: both"></div>
    <hr>
    <div class="cusList">
      <el-table></el-table>
    </div>
  </div>
  </div>
</template>

<script>
import con from './dialog'
export default {
  name: 'addAgreement',
  components: {con},
  data () {
    return {
      datas: {},
      dj: 0,
      price: {
        yj: 100,
        bj: 99,
        slj: 98,
        yh: 0
      }
    }
  },
  watch: {
    yh () {
      debugger
      this.price.yh = this.price.yj - this.price.slj
    }
  },
  props: {},
  methods: {},
  mounted () {
  }
}
</script>

<style scoped lang="less">
.adds{
  height: 700px;
}
 .load{
   height: 50px;
   margin-top: 5px;
   span{
     font-size: 20px;
     color: #ba901d;
   }
   }
  .btn{
    float: right;
    margin-right: 10px;
  }
  .ico{
    height: 40px;
    .el-icon-star-on{
      float: right;
      margin-right: 20px;
    }
  }
  .bkg{
    height: 10px;
    background-color: #c0e1e6;
  }
  .nums{
    height: 30px;
    /*width: 100%;*/
    float: right;
    /*border: 1px solid black;*/
  }
  .price{
    color: #f40;

  }
.adds {
  .el-button--mini, .el-button--mini.is-round {
    padding:12px 15px;
  }
}
</style>
