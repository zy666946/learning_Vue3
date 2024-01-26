<script>
import ComptA from './components/ComptA.vue'
import ComptB from './components/ComptB.vue'
export default {
    name: 'App',
    data() {
        return {
            data: ['zy', 'xh', 'hfl']
        }
    },
    components: {
        ComptA,
        ComptB
    }
}
</script>
<template>
    <!-- 所谓作用域插槽，就是在父组件中接收来自子组件插槽传递的属性，常用于组件在插槽中渲染列表而又希望自定义每项内容 -->
    <ComptA :data="data">
        <!-- 对具名插槽赋值表示声明一个变量接收来自插槽传递的所有属性的集合 -->
        <!-- 默认插槽需要使用 v-slot:default 来接收属性集合 简写为 #default -->
        <template #default="slotPorps">
            <p>{{ slotPorps.item }}</p>
        </template>
    </ComptA>
    <hr>
    <ComptB :data="data">
        <!-- 多个具名插槽同时使用 -->
        <template #slot1>
            <h1>test</h1>
        </template>
        <template #slot2="slotPorps">
            <p>{{ slotPorps.item }}</p>
        </template>
    </ComptB>
</template>
<style scoped></style>