<script>
export default {
    name: 'comptB',
    props: {
        name: {

        }
    },
    emits: ['update:name'],
    computed: {
        text: {
            get() {
                return this.name
            },
            set(value) {
                this.$emit('update:name', value)
            }
        }
    }
}
</script>
<template>
    <input type="text" v-model="text"><span>{{ text }}</span>
</template>