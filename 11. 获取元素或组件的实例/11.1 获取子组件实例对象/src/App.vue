<script>
import ComptA from './components/ComptA.vue';
export default {
  name: 'app',
  components: {
    ComptA
  },
  // 我们在 mounted 钩子中尝试打印元素实例和子组件实例中定义的变量和方法
  mounted() {
    console.log(this.$refs.ref1, this.$refs.ref2)
    console.log(this.$refs.ref2.message)
    this.$refs.ref2.sayHello()
    // 当然除了获取子组件的实例对象，也可以通过实例对象的 $el 属性获取 DOM 对象
    console.log(this.$refs.ref2.$el)
  }
}
</script>
<template>
  <!-- ref 属性可以注册元素或子组件的引用，所有被注册的组件实例将保存在组件的 this.$refs 对象中 -->
  <div ref="ref1"></div>
  <ComptA ref="ref2"></ComptA>
</template>