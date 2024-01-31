<script>
import demoMixin from '../mixins/demoMixin.js'
export default {
    name: 'demoA',
    // 在 mixins 属性中传入需要混入的对象数组，所有属性都会被合并在一起而非覆盖，mixins 会在冲突时保留组件内的属性
    // 声明周期的钩子函数会被存入数组进行逐一调用
    mixins: [demoMixin]
    // 当每个组件都有共同的某些选项时，可以在 main.js 文件的 vue 实例对象中 app.mixin 方法进行注册
    // mixin混入的缺点：1. 无法像插槽一样通过传参改变逻辑，缺乏灵活性 2. 多个 mixin 混入同一个组件中时容易发生命名冲突

    // option API 还提供了另一种逻辑复用方式：extends 继承，这种方式可以使组件继承另一个组件的代码逻辑实现复用
    // DemoB 组件将复用此组件
}
</script>
<template></template>