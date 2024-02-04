<script>
import { watchEffect, ref } from 'vue'
export default {
  name: 'app',
  setup() {
    const test = ref('zy')
    // 在 composition API 中需要对数据的响应式变化进行监听时可以使用 watchEffect 或 watch 函数（响应式数据进行变化时执行某些操作）
    // 1. watchEffect 函数可以自动收集响应式数据的依赖
    watchEffect(() => {
      console.log(`test发生了变化${test}
      +`)
    })
  }
}
</script> 