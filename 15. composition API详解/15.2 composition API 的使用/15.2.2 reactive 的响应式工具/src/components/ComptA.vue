<script>
export default {
    name: 'comptA',
    props: {
        num: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        console.log(props)
    }
}
</script>
<template>
    <span>
        {{ num.name }}
    </span>
    <!-- 子组件中尝试修改则会报错 -->
    <button @click="num.name = 'xh'">尝试修改名称</button>
</template>