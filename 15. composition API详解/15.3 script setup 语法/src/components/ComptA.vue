<script setup>
// 1. 接收 porps 属性
const porps = defineProps({
    name: {
        type: String,
        required: true
    }
})

console.log('porps', porps.name)

// 2. 接收 emit 方法
const emit = defineEmits(['test'])
// 触发 emit
emit('test', '我是传入参数')

// 3. 暴露属性或方法给父组件
import { ref } from 'vue'
const test = ref('test')
defineExpose({ test })

// 4. 接收插槽和非响应式的其它属性
import { useSlots, useAttrs } from 'vue'
const slots = useSlots()
const attrs = useAttrs()
// slots 没有获取到？？？
console.log('slots', slots)
console.log('attrs', attrs.id)
</script>
<template>
    <!-- 接收类名 -->
    comptA
    <span :class="$attrs.class">{{ porps.name }}</span>
</template>