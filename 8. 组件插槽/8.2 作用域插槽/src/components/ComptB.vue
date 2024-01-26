<script>
export default {
    name: 'comptB',
    data() {
        return {

        }
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    }
}
</script>
<template>
    <!-- 当 -->
    <slot name="slot1"></slot>
    <slot name="slot2" v-for="(item, index) in data" :item="item" :key="index"></slot>
</template>
<style scoped></style>