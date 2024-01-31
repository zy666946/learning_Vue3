<script>

export default {
    name: 'setp返回值',

    // 注意：在setup 函数中应该尽量避免使用 this ，因为 setup 函数的执行在 data ，methods 等函数之前。
    // setup 执行于 data 等之前，并可以返回对象，可以将声明的变量利用返回对象 retrun 出来以替代在 data 中声明变量
    setup() {
        let number = 100

        const add = () => {
            number++
        }

        return {
            number,
            add
        }
    }

}
</script>
<template>
    <div>
        <!-- 因为在 setup 中定义的变量都是是普通变量，vue 不会跟踪他们，所以 add 方法不会触发页面的响应式更新 -->
        <span>{{ number }}</span>
        <button @click="add()">add</button>
    </div>
</template>