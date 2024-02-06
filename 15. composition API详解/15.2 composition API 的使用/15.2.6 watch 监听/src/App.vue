<script>
import { reactive, watch, ref } from 'vue'
export default {
  name: 'app',
  setup() {
    // 1. 监听单个数据源
    const info = reactive({
      name: 'zy'
    })
    const name = ref('zy')
    //传入一个 getter 函数，该函数返回的是响应式对象 info 的name属性 
    watch(() => info.name, (newValue, oldValue) => {
      console.log('传入getter函数', `info 从${oldValue}变化到${newValue}`)
    })
    // 传入响应式对象
    watch(info, (newValue, oldValue) => {
      // 只能获取新旧值的响应式对象
      console.log('传入响应式', oldValue, newValue)
    })
    // 解构为 getter 函数可获取为普通对象
    watch(() => {
      return { ...info }
    }, (newValue, oldValue) => {
      console.log('解构', oldValue, newValue)
    })
    // 传入 ref
    watch(name, (newValue, oldValue) => {
      console.log('ref', newValue, oldValue)
    })

    function changeValue() {
      info.name = 'xh'
      name.value = 'xh'
    }


    // 2. 监听多个源 
    // 传入数组可监听多个源，回调中接收新旧值的两个数组
    watch([() => ({ ...info }), name], ([newInfo, newName], [oldInfo, oldName]) => {
      // 为变化的新旧值相同
      console.log('监听多个源')
    })

    // 3. 监听响应式对象
    // 在需要监听深层嵌套响应式对象时，我们需要传入配置对象 deep 参数进行深度监听，还可以通过immediate参数先执行一次回调
    const obj = reactive({
      name: 'zy',
      lick: {
        js: false
      }
    })
    watch(() => ({ ...obj }), (newValue, oldVale) => {
      console.log(newValue, oldVale)
    }, {
      deep: true,
      immediate: true
    })
    function changeObj() {
      obj.lick.js = true
    }
    return {
      changeValue,
      changeObj
    }
  }

}
</script>

<template>
  <button @click="changeValue()">changeValue</button>
  <button @click="changeObj()">changeObj</button>
</template>