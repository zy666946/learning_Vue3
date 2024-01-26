<script>
export default {
    name: 'comptA',
    props: {
        data: {
            type: Object,
            default: {}
        }
    }
}
</script>
<template>
    comptA {{ data.name }} {{ data.age }}
</template>