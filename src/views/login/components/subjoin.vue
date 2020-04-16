<template>
  <el-row :gutter="20">
    <el-col :span="12"><div class="red" @click="goForget">忘记密码</div></el-col>
    <el-col :span="12"><div class="blue" style="text-align:right;" @click="goRegister">注册</div></el-col>
  </el-row>
</template>
<script>
export default {
  name: 'Subjoin',
  methods: {
    goRegister() {
      console.log('goRegister', this)
      this.$router.replace('/register')
    },
    goForget() {
      this.$router.replace('/forget')
    }
  }
}
</script>

<style lang="scss" scope>
    .red{
        color: red;
        cursor: pointer;

    }
    .blue{
        color: blue;
        cursor: pointer;
    }

</style>
