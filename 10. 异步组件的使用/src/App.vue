<script>
// 使用异步组件的目的是导入时利用promise对打包文件进行分包
// webpack 中类似 chunk-xxxx.js 称之为块，vite中则为 Compt-xxxx.js（详见dist目录）
// 好处是提高首屏启动速度等
// 1. 使用import语法糖进行常规导入 
// import AsyncComptA from './components/ComptA.vue' 
// 2. 使用工厂函数进行组件异步导入
// import { defineAsyncComponent } from 'vue';
// const AsyncComptA = defineAsyncComponent(() => import('./components/ComptA.vue'))
// 3. 导入时使用配置对象（高级）
import { defineAsyncComponent } from 'vue';
import Loading from './components/Loading.vue';
const AsyncComptA = defineAsyncComponent({
  // 3.1 需要异步导入的组件
  loader: () => import('./components/ComptA.vue'),
  // 3.2 加载时显示的 loading 组件
  loadingComponent: Loading,
  // 3.3 记载失败显示的 Error 组件
  errorComponent: Loading,
  // 3.4 延迟加载
  delay: 2000,
  // 3.5 超时限制（默认 infinity 即永不超时）
  timeout: 3000,
  // 3.6 自定义组件是否可挂起，默认 true
  suspensible: true, //false表示异步组件可退出 Suspense 控制，并始终控制自己的记载状态
  // 3.7 记载失败的回调
  onError: (error, retry, fail, attempts) => {
    if (error.message.match(/fetch/) && attempts <= 3) {
      //请求错误重试最多3次
      // retry 和 fail 如同 Promise 中的resolve和reject 一样
      retry()
    } else {
      // 必须调用其中一个才能进行错误处理
      fail()
    }
  }
})
export default {
  components: {
    Loading,
    AsyncComptA,
  }
}
</script>
<template>
  <AsyncComptA></AsyncComptA>
  <hr>
  Suspense用法
  <br>
  <!-- 为了防止多个异步组件的加载行为同时出现，可以通过 Suspense 组件对异步依赖进行协调处理（实验性API） -->
  <!-- defaul 插槽无法显示时将会显示 fallback插槽 -->
  <Suspense>
    <template #default>
      <AsyncComptA></AsyncComptA>
    </template>
    <template #fallback>
      <Loading></Loading>
    </template>
  </Suspense>
</template>