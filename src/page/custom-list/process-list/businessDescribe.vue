<template>
  <div class="businessDescribe">
    <el-row>
      <span class="title">业务描述：</span>
      <div class="tool">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
         >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <el-button type="info" size="small">上传购物车excel</el-button>
        <el-button type="info" size="small">下载购物车模板</el-button>
        <el-button plain size="small" class="retreat">全部撤销</el-button>
      </div>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span>类型：</span>
      </el-col>
     <el-col :span="18" class="chooses">
      <div>
        <span>光纤 <i class="el-icon-info"></i></span>
        <span>电路 <i class="el-icon-error"></i></span>
        <span>手机 <i class="el-icon-success"></i></span>
        <span>固话 <i class="el-icon-warning"></i></span>
        <span>单宽带 <i class="el-icon-question"></i></span>
        <span>电信电视 <i class="el-icon-remove"></i></span>
        <span>融合套餐<i class="el-icon-circle-plus"></i></span>
        <span>组合套餐 <i class="el-icon-circle-close"></i></span>
        <span>ICT套餐 <i class="el-icon-circle-check"></i></span>
      </div>
     </el-col>
    </el-row>
    <!--购物信息-->
    <el-form>
      <el-row label-width="20px" label-position="left" class="shoppingGoods">
        <el-col :span="4">
          <el-form-item label="类型" >
            <el-select v-model="form">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="名称" >
            <el-select v-model="form">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="宽带(兆)" >
            <el-input v-model="form"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="数量" >
            <el-input v-model="form"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="费用周期" >
            <el-select v-model="form">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="原价" >
            <el-input v-model="form"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="报价" >
            <el-input v-model="form"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="受理价" >
            <el-input v-model="form"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="一次性价格" >
            <el-input v-model="form"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label="新建资源" >
            <el-select v-model="form">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="生效时间段">
        <el-col :span="4">
          <el-form-item prop="date1">
            <el-date-picker type="date" v-model="detail" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="4">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" v-model="detail" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    <div class="result">
      <span>原价：</span><span class="value">{{data || 0}}元</span>
      <span>优惠：</span><span class="value">{{data || 0}}元</span>
      <span>一次性价格：</span><span class="value">{{data || 0}}元</span>
      <span>折扣率：</span><span class="value">{{data || 0}}</span>
      <span>报价：</span><span class="value">{{data || 0}}元</span>
      <span>受理价：</span><span class="value">{{data || 0}}元</span>
      <el-button type="primary" size="mini">加入购物车</el-button>
    </div>
    <old-info></old-info>
  </div>
</template>

<script>
import oldInfo from './oldInfo'
export default {
  name: 'businessDescribe',
  components: { oldInfo },
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
  i {
    font-weight: bold;
    font-size: 16px;
  }
  .title {
    font-weight: bold;
  }
  .tool {
    display: inline-block;
    float: right;
  }
  .retreat, .chooses {
    color:blue;
  }
  .chooses {
    span {
      margin-left: 5px;
    }
  }
.result {
  float: right;
  .value {
    color: red;
    font-weight: bold;
  }
}
</style>
<style lang="less">
  .businessDescribe  .shoppingGoods {
    label.el-form-item__label {
      writing-mode: vertical-lr;
      padding: 0;
      text-align: center;
      letter-spacing: 3px;
    }
    .el-form-item {
      display: flex;
    }
  }
  .el-row {
    margin: 10px 0;
  }
</style>
