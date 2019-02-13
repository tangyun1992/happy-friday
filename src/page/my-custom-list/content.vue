<!--
 * @author
 * @date 2019-02-11 22:23
 * @desc
 -->

<template>
  <div class="disContent">
    <el-button @click="addContent"><i class="el-icon-circle-plus"></i>补充协议</el-button>
    <el-button><i class="el-icon-sort"></i>续签协议</el-button>
    <el-button><i class="el-icon-circle-close"></i>终止协议</el-button>
    <el-button><i class="el-icon-more"></i>补充协议号码</el-button>
    <el-button><i class="el-icon-remove"></i>合同开关</el-button>
   <el-table border :data="contentData">
     <el-table-column label="流程类型"></el-table-column>
     <el-table-column label="协议状态"></el-table-column>
     <el-table-column label="协议编号"></el-table-column>
     <el-table-column label="协议名称"></el-table-column>
     <el-table-column label="协议生效日期"></el-table-column>
   </el-table>
    <el-dialog title="补充协议" :visible.sync="dialogFormVisible" width="60%">
      <dialog-content :detail="detail"></dialog-content>
    </el-dialog>
  </div>
</template>

<script>
import dialogContent from './dialog'
export default {
  name: 'con',
  components: {dialogContent},
  data () {
    return {
      contentData: [],
      dialogFormVisible: false
    }
  },
  props: {
    detail: Object
  },
  watch: {},
  methods: {
    addContent () {
      this.dialogFormVisible = true
    },
    async getData () {
      let res = await this.$http.post('/getAgreementList', {})
      if (res.data.result === 'success') {
        this.contentData = res.data.data
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="less">

</style>
