<script>
export default {
    //直接在孙子组件中注入依赖
    inject: ['text']
}
</script>
<template>
    <div>{{ text }}</div>
</template>