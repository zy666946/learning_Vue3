<script>
import { onMounted, onBeforeMount, onUpdated, onBeforeUpdate, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue'
export default {
  name: 'app',
  // 在 composition API 中 created 和 beforCreated 被 setup 函数替代，其它钩子均可引入使用
  setup() {
    console.log('创建前')
    onBeforeMount(() => {
      console.log('挂在前')
    })
    onMounted(() => {
      console.log('挂在后')
    })
    onBeforeUpdate(() => {
      console.log('更新前')
    })
    onUpdated(() => {
      console.log('更新后')
    })
    onActivated(() => {
      console.log('动态渲染')
    })
    onDeactivated(() => {
      console.log('隐藏')
    })
  }
}
</script>
<template></template>