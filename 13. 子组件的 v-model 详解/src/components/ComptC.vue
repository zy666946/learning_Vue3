<script>
export default {
    name: 'comptC',
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    emits: ['update:modelValue'],
    methods: {
        changeObj(value, name) {
            this.$emit('update:modelValue', {
                ...this.modelValue,
                [name]: value
            })
        }
    }
}
</script>
<template>
    <!-- v-model 绑定对象不同的是需要将整个对象传给回调函数，我们需要封装一个函数 -->
    <span>name:</span><input :value="modelValue.name" @input="changeObj($event.target.value, 'name')" type="text">{{
        modelValue.name }}
    <span>age:</span><input :value="modelValue.age" @input="changeObj($event.target.value, 'age')" type="text">{{
        modelValue.age }}
</template>