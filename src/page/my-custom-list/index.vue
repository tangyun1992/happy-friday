<!--
 * @author
 * @date 2019-02-11 20:02
 * @desc
 -->

<template>
  <div>
    <el-form :inline="true" size="mini">
      <el-form-item label="客户名称:">
        <el-input v-model="params.customName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getData">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border stripe width="100%">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <con :detail="props.row"></con>
        </template>
      </el-table-column>
      <el-table-column label="客户名称" prop="name"></el-table-column>
      <el-table-column label="协议数量" prop="protocolNum"></el-table-column>
      <el-table-column label="发起人" prop="initiator"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i class="el-icon-plus"></i>
          <el-button size="small" type="text" @click="addAgreement">新增协议</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination width="100%"
      layout="prev, pager, next"
      :total="50"
    @current-change="pageChange">
    </el-pagination>
    <div>
      <el-dialog width="80%" title="新增协议" :visible.sync="dialogFormVisible">
      <ada></ada>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import ada from './addAgreement'
import con from './content'
export default {
  name: 'index',
  components: {con, ada},
  data () {
    return {
      tableData: [],
      params: {
        customName: '',
        current: 1
      },
      dialogFormVisible: false
    }
  },
  props: {},
  watch: {},
  methods: {
    pageChange (current) {
      this.params.current = current
      this.getData()
    },
    async getData () {
      let res = await this.$http.post('/getProcessList', this.params)
      if (res.data.result === 'success') {
        this.tableData = res.data.data
      }
    },
    addAgreement () {
      this.dialogFormVisible = true
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="less">
.el-icon-plus{
  color: lightblue;
}
</style>
