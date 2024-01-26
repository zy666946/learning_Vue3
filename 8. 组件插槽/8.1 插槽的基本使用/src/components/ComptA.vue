<script></script>
<template>
    <!-- 插槽基础用法 -->
    <slot>
        <!-- 设置默认内容（没有传入内容时显示） -->
        我是ComptA的默认内容
    </slot>
    <!-- 存在多个插槽时会渲染相同内容 -->
    <slot></slot>
</template>
<style scoped></style>