<script>
import Father from './components/Father.vue'
export default {
  data() {
    return {
      text: 'zy'
    }
  },
  components: {
    Father
  },

  //声明依赖，子孙组件都可注入依赖

  //传入对象则无法调用data中属性
  // provide: {
  //   text: 'zy'
  // }
  //传入方法返回对象则可调用data中属性
  provide() {
    return {
      text: this.text
    }
  }
}
</script>
<template>
  <Father></Father>
</template>