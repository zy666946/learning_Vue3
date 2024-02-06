<script>
import { provide, ref } from 'vue'
import Inject from '@/components/Inject.vue'
export default {
  name: 'app',
  setup() {
    // 在 composition API 中我们可以引入 provide 和 inject 为子孙组件提供数据
    // 提供普通数据
    const name = 'zy'
    provide('name', name)
    // 提供响应式数据
    const age = ref(22)
    provide('age', age)

  },
  components: {
    Inject
  }
}
</script>
<template>
  <inject></inject>
</template>