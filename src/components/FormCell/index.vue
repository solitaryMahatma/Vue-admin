<template>
  <div>
    <label>{{ title }}</label>
    <div>
      <el-input v-model="input" :placeholder="placeholder" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cell',
  props: {
    title: {
      type: String,
      default: '某某'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    name: {
      type: String,
      default: 'key'
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss" scope>

</style>
