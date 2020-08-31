<template>
  <div>
    消费模块
    <el-button></el-button>
  </div>
</template>

<script>

// import ElButton from './components/ElButton.vue'

export default {
  components: {
    'el-button': () => import('./components/ElButton.vue')
  }
}
</script>

<style  scoped>

</style>