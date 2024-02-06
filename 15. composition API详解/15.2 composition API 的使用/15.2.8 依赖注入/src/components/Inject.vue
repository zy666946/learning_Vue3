<script>
import { inject } from 'vue'
export default {
    name: 'inject',
    setup() {
        // inject 注入依赖
        const name = inject('name')
        const age = inject('age')
        console.log(name, age.value)
    }
}
</script>
<template></template>