<script>
import ComptA from './components/ComptA.vue';
import ComptB from './components/ComptB.vue';
export default {
  name: 'app',
  data() {
    return {
      compt: 'ComptA'
    }
  },
  methods: {
    changeCompt() {
      this.compt = this.compt === 'ComptA' ? 'ComptB' : 'ComptA'
    }
  }
  ,
  components: {
    ComptA,
    ComptB
  }
}
</script>
<template>
  <button @click="changeCompt">click me</button>
  <!-- 被缓存的组件的created和mounted等生命周期钩子只会被触发一次，可以使用 activated 和 deactivated 钩子监听组件显示和离开事件-->
  <keep-alive>
    <component :is="compt"></component>
  </keep-alive>
</template>