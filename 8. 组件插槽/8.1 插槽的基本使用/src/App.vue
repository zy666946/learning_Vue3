<script>
import ComptA from './components/ComptA.vue'
import ComptB from './components/ComptB.vue'
export default {
  name: 'App',
  data() {
    return {
      testName: 'test3'
    }
  },
  components: {
    ComptA,
    ComptB
  }
}
</script>
<template>
  <compt-a>
    <div class="comptA"></div>
  </compt-a>
  <compt-b :testName="testName">
    <!-- 在使用具名插槽时需要将内容编写进入template标签中,使用冒号语法传递插槽名 -->
    <template v-slot:test1>
      <p>test1</p>
    </template>
    <!-- #是v-solt: 的缩写,同v-bind一样 -->
    <template #test2>
      <p>test2</p>
    </template>
    <!-- 动态插槽名 -->
    <template #[testName]>
      <p>test3</p>
    </template>
  </compt-b>
</template>
<style scoped>
.comptA {
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-color: red;
}
</style>