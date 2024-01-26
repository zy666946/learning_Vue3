<script>
export default {
    name: 'comptA',
    props: {
        data: {
            type: Array,
            default: []
        }
    }
}


</script>
<template>
    <!-- 将遍历结果的每一次参数通过属性传递给父组件中的插槽 -->
    <slot v-for="(item, index) in data" :key="index" :item="item">
        默认内容
    </slot>
</template>
<style scoped></style>