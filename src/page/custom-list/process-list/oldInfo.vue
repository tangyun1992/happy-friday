
<template>
  <div>
    <el-table :data="tableData">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column label=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'oldInfo',
  components: {},
  data () {
    return {
      tableData: []
    }
  },
  props: {},
  watch: {},
  methods: {},
  mounted () {
  }
}
</script>

<style scoped lang="less">

</style>
