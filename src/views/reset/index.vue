<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入登录用户名"
      clearable
    />
    <el-input
      v-model="input"
      placeholder="请输入新密码"
      clearable
    />
    <el-input
      v-model="input"
      placeholder="请确认新密码"
      clearable
    />
    <el-input
      v-model="input"
      placeholder="请输入邮箱收到验证码"
      clearable
    />
    <el-button type="primary" disabled>重置密码</el-button>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scope>

</style>
