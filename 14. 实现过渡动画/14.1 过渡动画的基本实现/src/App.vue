<script>
import ComptA from './components/ComptA.vue';
export default {
  name: 'app',
  data() {
    return {
      show: true
    }
  }
}
</script>
<template>
  <!-- transition 标签是对css中的 transition 属性的封装，可以作用在条件渲染、条件展示、动态组件以及组件根节点等情况下 -->
  <button @click="show = !show">click me</button>
  <!-- 我们可以给 transition 标签的name属性赋值来命名过渡动画名称,默认为 v -->
  <!-- type 属性指定过渡类型，transition 或 animation ，默认监听持续时间较长的动画对应的事件 -->
  <!-- mode 属性指定过渡模式，in-out 或 out-in ，默认为空（in-out 表示新元素完成过渡后当前元素再进行过渡，out-in 反之亦然） -->
  <!-- appear 属性指定否初次渲染时是否执行，默认 false -->
  <transition mode="out-in" name="zy" appear>
    <div v-if="show">test</div>
    <div v-else="show">test2</div>
  </transition>
</template>
<style scoped>
div {
  height: 50px;
  width: 50px;
  border-radius: 5px;
  background-color: red;
}

/* 我们需要在 css 中定义过渡动画的类以达到我们想要的效果 */
/* 动画名-enter-from 定义进入过渡的开始状态（在被绑定元素插入前生效，插入后的下一帧移除） */
.zy-enter-from {
  display: block;
}

/* 动画名-enter-active 定义进入过渡生效时的状态（在被绑定元素插入前生效，插入后的下一帧移除） 
active 状态包含 from 到 to 状态的整个区间，常用于定义过渡的过程时间、延迟和曲线函数 */
.zy-enter-active {
  /* 设置此状态时需要执行的动画，时间，效果 */
  animation: test 0.5s ease;
  /* 执行 test 动画，时间 1s 低速开始加速、结束前降低速度（常用）  */
}

/* 动画名-enter-to 定义进入过渡的结束状态 */
.zy-enter-to {
  display: block;
}



/* 离开动画 leave 同上 */
.zy-leave-from {
  display: block;
}

.zy-leave-active {
  /* 执行 test 动画，时间 1s 低速开始加速、结束前降低速度（常用），reverse表示反向执行动画  */
  animation: test 0.5s ease reverse;
}

.zy-leave-to {
  display: block;
}

@keyframes test {
  0% {
    /* 缩放到0倍大小 */
    transform: scale(0);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}
</style>