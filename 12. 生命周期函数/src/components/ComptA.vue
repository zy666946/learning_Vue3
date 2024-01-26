<script>
export default {
    name: 'comptA',
    beforeCreated() {
        console.log('组件实例即将初始化')
    },
    created() {
        console.log('组件实例初始化完成')
    },
    beforeMount() {
        console.log('组件实例即将挂载')
    },
    mounted() {
        console.log('组件实例挂载完成')
    },
    beforeUpdate() {
        console.log('组件实例即将应响应式状态更新而刷新')
    },
    updated() {
        console.log('组件实例更新完成')
    },
    beforUnmount() {
        console.log('组件实例即将被卸载')
    },
    unmounted() {
        console.log('组件实例卸载完成')
    }
}
</script>
<template></template>