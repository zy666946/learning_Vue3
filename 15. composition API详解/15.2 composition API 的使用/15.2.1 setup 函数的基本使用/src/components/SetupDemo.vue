<script>
export default {
    name: 'setupDemo',
    // props 属性需要线接收才能在组件中获取
    props: {
        test: {
            type: String,
            required: true
        }
    },
    // setup函数接收两个参数分别是 props 和 context
    setup(props, context) {
        // props 对象中包含所有父组件中传入的 非class 参数
        console.log(props)
        // context 对象中包含三个对象分别是 attrs（所有非props属性），slots（父组件中传入的插槽），emit（用于触发事件）
        console.log('class属性为:' + context.attrs.class)
        // 触发事件如 context.emit("name",value)
        context.emit('emitTest')
        console.log(context.slots)

    }
}
</script>
<template></template>