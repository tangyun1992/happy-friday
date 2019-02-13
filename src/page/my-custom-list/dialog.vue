<!--
 * @author
 * @date 2019-02-12 17:26
 * @desc
 -->

<template>
  <div class="agreement">
    <el-form :model="detail" label-width="170px">
      <el-row>
        <el-col span="12">
          <el-form-item label="客户名称：" required>
            <el-input v-model="detail.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="客户类型：" required>
            <el-select v-model="detail.type">
              <el-option label="省" value="province"></el-option>
              <el-option label="市" value="city"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="一般纳税人：" required>
            <el-radio v-model="detail.ybnsr" label="1">是</el-radio>
            <el-radio v-model="detail.ybnsr" label="2">不是</el-radio>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="行业类型：" required>
            <el-select v-model="detail.type">
              <el-option label="国家" value="province"></el-option>
              <el-option label="市" value="city"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="协议类型：" required>
            <el-select v-model="detail.type">
              <el-option label="战略" value="province"></el-option>
              <el-option label="布局" value="city"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="机构代码或营业执照：" required>
            <el-input v-model="detail.number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="11">
      <el-form-item label="协议起止日期：">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="开始日期">
        </el-date-picker>
      </el-form-item>
        </el-col>
        <el-col span="11">
          <el-form-item label="至">
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="截止日期">
            </el-date-picker>
          </el-form-item>
          </el-col>
      </el-row>
      <el-row>
        <el-button><span class="font"><i class="el-icon-plus"></i>点击增加基本信息</span></el-button>
      </el-row>
      <el-row>
        <span class="font">单位人数：__ 人</span>
      </el-row>
      <el-row>
        <span class="font">现有通信现状： 天翼__部， 电路__条，光纤__条</span>
      </el-row>
      <el-row>
        <span class="font">异网竞争状况：______________________________</span>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  components: {},
  data () {
    return {
      value1: '',
      value2: ''
    }
  },
  props: {
    detail: {
      type: Object,
      default () {
        return {
          ybnsr: 1
        }
      }
    }
  },
  watch: {},
  methods: {},
  mounted () {
  }
}
</script>

<style scoped lang="less">
.agreement{
  height: 500px;
  .font{
    font-size: 18px;
  }
}
</style>
