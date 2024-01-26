<script>
import HelloWorld from "./components/HelloWorld.vue"
import TestComponent from "./components/TestComponent.vue";

export default {
  // name属性可选，方便调试
  name: 'App',
  data() {
    return {
      text1: 'Hello World',
      //props传入对象可使用v-bind将对象中每个属性拆出来逐一绑定
      obj: {
        text2: 'text2'
      }
    }
  },
  computed: {
    text3() {
      return {
        name: 'zy'
      }
    }
  }
  ,
  //注册局部组件
  components: {
    HelloWorld,
    TestComponent
  }
}
</script>
<template>
  <HelloWorld :text1="text1" v-bind="obj" :text3="text3"></HelloWorld>
  下面是多根情况
  <TestComponent class="test"></TestComponent>
</template>
<style scoped></style>