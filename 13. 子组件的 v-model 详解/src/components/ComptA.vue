<script>
export default {
    name: 'cmptA',
    data() {
        return {

        }
    },
    props: {
        modelValue: {

        }
    },
    emits: ['update:modelValue'],
    computed: {
        text: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>
<template>
    <!-- 直接传入事件中的 value 参数 -->
    <input :value="modelValue" @input="this.$emit('update:modelValue', $event.target.value)" type="text" class="myInput">
    <span>{{ modelValue }}</span>

    <!-- 在子组件中不能直接将 v-model 绑定在元素上，因为这样会直接修改 props 破坏单向流
    但是可以通过 computed 计算属性在显示时获取 modelValue 在数据修改时触发 updata:modelValue 监听从而调用父组件中的回调 -->
    <input type="text" v-model="text">
    <span>{{ text }}</span>
</template>
<style scoped>
.myInput {
    border: 2px solid red;
}
</style>