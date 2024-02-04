<script>
import { reactive, ref } from 'vue'
export default {
    name: 'setp返回值',

    // 注意：在setup 函数中应该尽量避免使用 this ，因为 setup 函数的执行在 data ，methods 等函数之前。
    // setup 执行于 data 等之前，并可以返回对象，可以将声明的变量利用返回对象 retrun 出来以替代在 data 中声明变量
    setup() {

        let number = 100
        /**
         * 没有响应式的函数
         */
        const add = () => {
            number++
        }
        /**
         * reactive 定义响应式数据，返回一个对象的响应式代理：state
         * @example 
         * ```js
         * reactive({name: 'zy'})
         * ```
         */
        let state = reactive({ number: 100 })
        const add2 = () => {
            state.number++
        }

        //  reactive 对传入的数据类型是有限制的，例如传入 String Number Boolean 则会出现警告，因此 vue 提供了另一个响应式 API ，ref
        //  ref函数接收一个值，返回一个响应式、可更改的 ref 对象，该对象只有一个指向其内部值的 value 属性
        //  ref 对象内部的值是通过 value 属性维护的，如果值为一个对象，则它将被 reactive 函数处理为深层的响应式对象
        const ref1 = ref(123)
        console.log(ref1.value)
        // 注意：虽然在 setup 函数中不会对 ref 进行解包，但如果在普通对象中包含 ref 对象,那么在模板中引用时会进行自动解包，reactive 中包含 ref 时也是如此
        return {
            number,
            state, //返回响应式对象
            add,
            add2,
            ref1
        }
    }

}
</script>
<template>
    <div>
        <!-- 因为在 setup 中定义的变量都是是普通变量，vue 不会跟踪他们，所以 add 方法不会触发页面的响应式更新 -->
        <span>{{ number }}</span>
        <button @click="add">add</button>
        <!-- 使用 reactive 获得响应式 -->
        <span>{{ state.number }}</span>
        <button @click="add2">add2</button>

        <!-- 在模板中使用 ref 对象时会进行自动解包 -->
        <span>{{ ref1 }}</span>

    </div>
</template>