<template>
  <div class="agreementContent">
    <el-form size="mini">
      <el-form-item>
        <el-button @click="add"><i class="el-icon-edit" style="color:green;"></i>补充协议</el-button>
        <el-button @click="continueAgreement"><i class="el-icon-edit-outline" style="color: yellow"></i>续签协议</el-button>
        <el-button @click="stopAgreement"><i class="el-icon-close" style="color: red;"></i>终止协议</el-button>
        <el-button @click="addAgreementNum"><i class="el-icon-more-outline"></i>补充协议号码</el-button>
        <el-button @click="agreementSwitch"><i class="el-icon-refresh" style="color: blue;"></i>合同开关</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column type="index" width="45" label="序号"></el-table-column>
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column prop="processType" label="流程类型"></el-table-column>
      <el-table-column prop="status" label="协议状态"></el-table-column>
      <el-table-column prop="code" label="协议编号" show-overflow-tooltip=true></el-table-column>
      <el-table-column prop="name" label="协议名称" show-overflow-tooltip=true></el-table-column>
      <el-table-column prop="customType" label="客户类型"></el-table-column>
      <el-table-column prop="type" label="协议类型"></el-table-column>
      <el-table-column prop="businessType" label="行业类型"></el-table-column>
      <el-table-column prop="workDate" label="协议生效日期" show-overflow-tooltip=true></el-table-column>
      <el-table-column prop="invalidDate" label="协议失效日期" show-overflow-tooltip=true></el-table-column>
      <el-table-column prop="startDate" label="发起时间" show-overflow-tooltip=true></el-table-column>
      <el-table-column prop="ifUpload" label="是否上传合同"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'agreement-content',
  components: {},
  data () {
    return {
      tableData: [],
      currentPage: 1
    }
  },
  props: {
    customId: {
      type: String,
      default: ''
    }
  },
  watch: {},
  methods: {
    add () {},
    continueAgreement () {},
    stopAgreement () {},
    addAgreementNum () {},
    agreementSwitch () {},
    async getData () {
      let res = await this.$http.post('/getAgreementList', {
        currentPage: this.currentPage,
        customId: this.customId
      })
      if (res.data.result === 'success') {
        this.tableData = res.data.data
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="less">
i {
  font-weight: bold;
  font-size: 16px;
}
.agreementContent th {
    font-weight: normal!important;
  }
</style>
<style lang="less">
  .agreementContent th {
    font-weight: normal!important;
  }
  .agreementContent .el-table th>.cell, .agreementContent .el-table td>.cell {
    white-space: nowrap;
  }
</style>
