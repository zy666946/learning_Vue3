<script>
// 在组件中定义了 message 变量和 sayHello 方法
export default {
    data() {
        return {
            message: 'ComptA'
        }
    },
    methods: {
        sayHello() {
            alert('hello world')
        }
    }
}
</script>
<template>
    <p> {{ message }}</p>
</template>