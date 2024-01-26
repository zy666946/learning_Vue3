<script>
export default {
    name: 'testComponent'
}
</script>
<template>
    <!-- 当子组件有多个根元素时，非props属性无法继承，需要通过 $attrs 属性手动调用绑定 -->
    <div>One</div>
    <div :class="this.$attrs.class">two</div>
</template>