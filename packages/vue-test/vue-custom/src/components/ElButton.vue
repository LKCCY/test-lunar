<template>
  <Button @click="onClick">共享按钮</Button>
</template>

<script>
export default {
  methods: {
    onClick () {
      alert('该组件已经被共享')
    }
  }
}
</script>

<style  scoped>

</style>