<script setup>
import { ref, onMounted } from 'vue'
// 1. 避免嵌套，逻辑代码全部位于顶层

// 2. setup 语法糖无需手动注册子组件
import ComptA from '@/components/ComptA.vue'

const name = ref('zy')

const test = (value) => {
  console.log(value)
}

const comptDom = ref(null)
// 获取到的子组件的属性
onMounted(() => {
  // 组件实例
  console.log('组件实例', comptDom.value)
  // 子组件导出的 test 属性
  console.log('子组件导出的test属性', comptDom.value.test)
})
</script>
<template>
  <ComptA ref="comptDom" @test="test" class="className" :name="name" :id="123">
    我是插槽内容
  </ComptA>
</template>