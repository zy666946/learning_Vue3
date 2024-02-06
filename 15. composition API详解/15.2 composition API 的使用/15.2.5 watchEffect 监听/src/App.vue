<script>
import { watchEffect, ref } from 'vue'
export default {
  name: 'app',
  setup() {
    const test = ref(1)
    // 在 composition API 中需要对数据的响应式变化进行监听时可以使用 watchEffect 或 watch 函数（响应式数据进行变化时执行某些操作）
    // 1. watchEffect 函数可以自动收集响应式数据的依赖
    const watchTest = watchEffect((onInvalidate) => {
      console.log(`test发生了变化${test.value}`)
      // 2. watchEffect 函数返回一个函数，调用这个函数可以停止监听函数，例如满足条件停止监听
      if (test.value >= 5) watchTest()
      // 3. 清除副作用
      // watchEffect 函数接收一个 onInvalidate 函数类型的参数
      // 该函数会在所监听的响应式变量更新或停止监听时触发传入该函数的回调
      // 我们模拟一次网络请求，并在下一次监听时取消上一次的网络请求
      const timer = setTimeout(() => {
        console.log('模拟网络请求成功')
      }, 3000)

      onInvalidate(() => {
        clearTimeout(timer)
      })
    })

    // 4. watchEffect 的执行时机
    // 在 composition API 中没有this，但是可以通过预先定义一个 ref 变量来供 template 使用
    const h1Ref = ref(null)
    watchEffect(() => {
      console.log(h1Ref.value)
      // 我们使用 watchEffect 进行监听时发现打印了两次，这是因为在 DOM 还没有挂载时 setup 就会执行 watchEffect 传入的副作用函数
      // 当 DOM 挂载时，会为 变量重新赋值
    })

    // 我们也可以通过为 watchEffect 函数第二个参数传入配置对象来改变执行时机
    watchEffect(() => {
      // 只打印了一次
      console.log(h1Ref.value)
    }, {
      // 默认 pre 表示元素挂载前执行副作用函数
      // post 表示挂载后调用
      // aync 表示依赖变化时同步执行副作用，这种方式会折损性能
      flush: 'post'
    })



    return {
      test,
      h1Ref
    }


  }
}
</script>
<template>
  <div>
    <span>{{ test }}</span>
    <button @click="test += 1">click me</button>

    <h1 ref="h1Ref">h1Ref</h1>
  </div>
</template>