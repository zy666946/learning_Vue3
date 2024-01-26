<script>
import ComptA from './components/ComptA.vue'
export default {
  name: 'app',
  data() {
    return {
      comptName: 'comptA',
      data: {
        name: 'zy',
        age: 22
      }
    }
  },
  components: {
    ComptA
  }
}
</script>
<template>
  <!-- 使用 component 动态组件标签，通过is属性来切换需要显示的组件 -->
  <component :is="comptName"></component>
  <hr>
  <!-- 可以使用 props 给动态组件传参 -->
  <component :is="comptName" :data="data"></component>
</template>
<style scoped></style>