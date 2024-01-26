<script>
import ComptA from './components/ComptA.vue'
import ComptB from './components/ComptB.vue';
import ComptC from './components/ComptC.vue'
export default {
  name: 'app',
  data() {
    return {
      value: '',
      obj: {
        name: 'zy',
        age: 22
      }
    }
  },
  components: {
    ComptA,
    ComptB,
    ComptC
  }
}
</script>
<template>
  <!-- 在给表单元素使用 v-model 进行响应式变量的双向绑定时 vue 会将响应式变量绑定表单元素的 value 属性并监听表单的 input 事件并在回调函数中传入事件详情 -->
  <h2>普通表单元素绑定 v-model</h2>
  <input type="text" :value="value" @input="value = $event.target.value"> <span>{{ value }}</span>
  <!-- 在组件中使用 v-model 时 vue 将不再绑定组件的 value 属性也不会监听子组件的 input 事件，而是在情况下默认绑定 modelValue 属性并监听 update:modelValue 事件 -->
  <h2>组件绑定 v-model</h2>
  <!-- 注意，在组件中使用 v-model 语法糖时触发的事件回调会直接将组件返回参数赋值给响应式变量 -->
  <ComptA :modelValue="value" @update:modelValue="value = $event"></ComptA>
  <h2>
    实例默认 v-model 语法糖用法
  </h2>
  <ComptA v-model="value"></ComptA>

  <!-- 除了默认绑定 modelValue 外，我们可以指定绑定的变量名称，这样就可以绑定多个 v-model -->
  <h2>指定 v-model 绑定变量</h2>
  <ComptB v-model:name="value"></ComptB>

  <!-- 此外还能将 v-model 绑定对象 -->
  <h2>v-model 绑定对象</h2>
  <ComptC v-model="obj"></ComptC>
</template>