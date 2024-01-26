<script>
export default {
    name: 'HelloWorld',
    //props属性传入一个数组时，每个字符参数代表接收一个一个属性
    // props: ['text1', 'text2', 'text3']

    //也可传入对象，可配置更多属性 
    props: {
        text1: {
            //指定属性类型
            type: String,
            //required指定该属性是否必传，为true时父组件使用该组件时必须传递该参数，否则控制台警告
            required: true,
            //设置默认值，当父组件没有传入此属性值时则使用该默认值
            default: '默认值'
        },
        text2: {
            type: String,
            required: true,
            default: 'test2 is null'
        },
        text3:
        {
            type: Object,
            required: true,
            //当指定类型为 对象或数组 时，默认值需使用方法返回对象，以确保每个实例的默认值来自不同引用
            default() {
                return {
                    name: 'test3 is null'
                }
            }
        }
    }

}
</script>
<template>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <p>{{ text3.name }}</p>
</template>