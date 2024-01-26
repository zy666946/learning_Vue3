<script>
export default {
    data() {
        return {
            value: '我是子组件传回的父组件'
        }
    },
    //声明需要调用的方法
    emits: ['fn1']
}
</script>
<template>
    <div>调用父组件方法并传参</div>、
    <!-- 子组件调用 this.$emit 方法调用父组件方法，第一个参数为需要调用的方法名称，第二个参数为函数传参 -->
    <input type="button" value="click me" @click="this.$emit('fn1', value)">
</template>