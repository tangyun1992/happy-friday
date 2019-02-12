<!--
 * @author
 * @date 2019-02-12 17:26
 * @desc
 -->

<template>
  <div>
    <p>hello</p>
    <el-form :model="detail">
      <el-form-item label="客户名称"></el-form-item>
      <el-input v-model="detail.name"></el-input>
      <el-form-item label="客户类型"></el-form-item>
      <el-input v-model="detail.type"></el-input>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  components: {},
  data () {
    return {
    }
  },
  props: {
    detail: {
      type: Object
    }
  },
  watch: {},
  methods: {},
  mounted () {
  }
}
</script>

<style scoped lang="less">

</style>
