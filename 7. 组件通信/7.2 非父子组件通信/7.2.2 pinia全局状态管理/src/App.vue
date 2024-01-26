<script setup>
import { useStore } from './stores/store'
const store = useStore()

</script>
<template>
    <input type="button" value="click me" @click="store.fn">
</template>