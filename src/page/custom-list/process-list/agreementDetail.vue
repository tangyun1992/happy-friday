<template>
  <div class="agreementDetail">
    <div class="title">
      <span>基本信息填写：</span>
      <span @click="editOrSave" class="editOrSave"><i :class="ifEdit? 'el-icon-edit':'el-icon-circle-check-outline'"></i>{{ifEdit?'编辑':'保存'}}</span>
    </div>
    <el-form ref="form" :model="detail" size="mini" label-width="150px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="客户名称" required>
            <el-input size="medium" v-model="detail.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户类型" required>
            <el-select v-model="detail.type">
              <el-option label="市州级重点客户" value="shanghai"></el-option>
              <el-option label="省级重点客户" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
     <el-row>
       <el-col :span="12">
         <el-form-item label="一般纳税人" required>
           <el-select v-model="detail.person">
             <el-option label="是" value="shanghai"></el-option>
             <el-option label="否" value="beijing"></el-option>
           </el-select>
         </el-form-item>
       </el-col>
       <el-col :span="12">
         <el-form-item label="行业类型">
           <el-select v-model="detail.businessType" required>
             <el-option label="国家机构" value="shanghai"></el-option>
             <el-option label="私企" value="beijing"></el-option>
           </el-select>
         </el-form-item>
       </el-col>
     </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="协议类型" required>
            <el-select v-model="detail.agreementType">
              <el-option label="战略" value="shanghai"></el-option>
              <el-option label="私企" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="机构代码或营业执照" required>
            <el-input class="inline-input" v-model="detail.agencyCode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="协议产品" required>
            <el-select v-model="detail.businessType">
              <el-option label="战略" value="shanghai"></el-option>
              <el-option label="私企" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属区域" required>
            <el-select v-model="detail.businessType">
              <el-option label="战略" value="shanghai"></el-option>
              <el-option label="私企" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="协议起止时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="开始时间" v-model="detail.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="结束时间" v-model="detail.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="单位基本信息">
          <el-row>
            <span class="add"><i class="el-icon-plus"></i>点击增加基本信息</span>
          </el-row>
          <el-row>
            <span>单位人数：</span><span class="num">{{detail.unit.num || 0}}</span><span>人</span>
          </el-row>
          <el-row>
            <span>现有通信现状：天翼</span><span class="num">{{detail.unit.ty || 0}}</span>
            <span>部，电路</span><span class="num">{{detail.unit.dl || 0}}</span><span>条，光纤</span>
            <span class="num">{{detail.unit.gx || 0}}</span><span>条</span>
          </el-row>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'agreementDetail',
  components: {},
  data () {
    return {
      detail: {
        unit: {

        }
      },
      ifEdit: true
    }
  },
  props: {},
  watch: {},
  methods: {
    async editOrSave () {
      this.ifEdit = !this.ifEdit
      if (!this.ifEdit) {
        await this.$http.post('', this.detail)
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  i {
    font-weight: bold;
    font-size: 16px;
  }
  .agreementDetail {
    height: 400px;
    .title {
      margin: 10px;
      font-weight: bold;
    }
    .editOrSave {
      color:blue;
      margin-left:10px;
    }
    .required {
      color: red;
    }
    .num {
      text-decoration: underline;
      padding: 0 5px;
    }
    .add {
      color: blue;
    }
  }
</style>
