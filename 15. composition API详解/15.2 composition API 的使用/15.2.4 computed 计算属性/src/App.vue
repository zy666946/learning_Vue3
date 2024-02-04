<script>
import { computed, ref } from 'vue'
export default {
  name: 'app',
  setup(props, context) {
    // 1. 传入一个函数
    const firstName = ref('Zhang'),
      lastName = ref('Yu')
    const name = computed(() => {
      return firstName.value + lastName.value
    })
    // 2. 传入一个配置对象
    const name2 = computed({
      get() {
        return firstName.value + lastName.value
      },
      set(newValue) {
        const names = newValue.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
        console.log('赋值成功')
      }
    })
    name2.value = 'Xiao He'
    return {
      name
    }
  },

}
</script>
<template>
  <span>{{ name }}</span>
</template>