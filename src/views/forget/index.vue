<template>
  <div class="forget">
    <div>一段文字</div>
    <el-input
      v-model="input"
      placeholder="请输入邮箱"
      clearable
    />
    <el-button type="primary" disabled>发送</el-button>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scope>
.forget{
    background-color: white;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
}

</style>
