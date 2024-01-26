<script>
export default {
    props: {
        testName: {
            type: String,
            required: true,
            // default: 'test3'
        }
    }
}
</script>
<template>
    <!-- 需要在同一组件内使用多个插槽显示不同内容时需要使用slot的name属性添加具名插槽 -->
    <slot name="test1"></slot>
    <slot name="test2"></slot>
    <!-- 可以通过父组件等形式传入动态插槽名 -->
    <slot :name="testName"></slot>
</template>
<style scoped></style>