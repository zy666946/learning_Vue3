<script>
export default {
    name: 'comptA',
    data() {
        return {
            num: 0
        }
    },
    methods: {
        addNum() {
            this.num++
        }
    }
}
</script>
<template>
    <div>
        <button @click="addNum">add1</button>
        {{ num }}
    </div>
</template>
<style scoped></style>