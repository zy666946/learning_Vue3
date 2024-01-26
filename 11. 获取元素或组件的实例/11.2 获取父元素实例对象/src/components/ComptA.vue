<script>
export default {
    name: 'compt',
    mounted() {
        //通过 $parent 获取父组件的实例对象
        console.log(this.$parent)
        // 通过 $root 获取根组件的实例对象
        console.log(this.$root)
    }
}
</script>
<template></template>