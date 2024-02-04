<script>
import { reactive, ref, readonly } from 'vue'
import comptA from '@/components/ComptA.vue'
export default {
  name: 'app',
  setup() {
    // 当我们使用 reactive 或 ref 定义一些响应式变量并打算传递给子组件时，为了防止变量在子组件中被修改（单向流）
    const num = reactive({
      name: 'zy',
      age: 22
    })
    // 我们可以使用 readonly api 创建一个响应式对象的劫持 setter 方法的只读代理对象
    const info = readonly(num)

    // readonly 函数可接收普通对象、ref或 reactive 创建的响应式对象

    /*1. isProxy 函数可以检查对象是否为由 reactive 或 readonly 创建的代理对象，ref 函数创建的是 RefImpl 对象。
      2. isReactive 函数可以检查对象是都由 reactive 创建的响应式代理对象。
      3. isReadonly 函数可以检查一个对象是否为由 readonly 创建的只读代理对象。
      4. toRaw 函数可以返回由 reactive 或 readonly 代理对象的原始对象
      5. shallowReactive 函数可以创建一个浅层代理对象，只有根级别属性是响应式
      6. shallowReadonly 函数可以创建一个浅层只读代理对象，只有根级别属性是只读的
    */
    return {
      num,
      info
    }
  },
  components: {
    comptA
  }
}
</script>
<template>
  <compt-a :num="info"></compt-a>
</template>