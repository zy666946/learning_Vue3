<script>
export default {
    data() {
        return {

        }
    },
    created() {
        console.log('组件a启动')
    },
    activated() {
        console.log('a组件显示')
    },
    deactivated() {
        console.log('a组件离开')
    }
}
</script>
<template>
    ComptA
</template>