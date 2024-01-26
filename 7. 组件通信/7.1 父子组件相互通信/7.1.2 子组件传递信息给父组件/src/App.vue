<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  methods: {
    fn1(value) {
      alert(value)
    }
  },
  components: {
    HelloWorld
  }
}
</script>
<template>
  <HelloWorld @fn1="fn1"></HelloWorld>
</template>