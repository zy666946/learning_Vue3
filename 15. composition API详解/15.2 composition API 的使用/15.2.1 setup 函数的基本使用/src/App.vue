<script>
import SetupDemo from '@/components/SetupDemo.vue'
import SetupBack from '@/components/setup的返回值.vue';
export default {
  name: 'app',
  components: {
    SetupDemo,
    SetupBack
  }
}
</script>

<template>
  <!-- set up 函数的基本使用 -->
  <SetupDemo class="demo" test="学习 setup 函数" @emitTest="console.log('学习 setup 函数')">
    我是slot
  </SetupDemo>
  <SetupBack></SetupBack>
</template>