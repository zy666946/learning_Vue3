<script>
import ComptA from './components/ComptA.vue'
import ComptB from './components/ComptB.vue'

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
    <!-- 通过 keep-alive 保留了动态组件被切换后的所有状态 -->
    <keep-alive>
        <component :is="compt"></component>
    </keep-alive>
    <hr>
    <!-- keep-alive 的属性 -->
    <!-- 选择需要缓存的组件，首先检查组件name属性，无name属性则匹配局部注册名称 -->
    <!-- include 缓存匹配名称的组件  -->
    include属性
    <keep-alive :include="['comptA', 'comptB']">
        <component :is="compt"></component>
    </keep-alive>
    <hr>
    exclude属性
    <!-- exclude 不缓存匹配名称的组件 -->
    <keep-alive :exclude="['comptB']">
        <component :is="compt"></component>
    </keep-alive>
    <hr>
    <!-- max 属性设置最大缓存数量，0表示无限制 -->
    max属性
    <keep-alive :max="2">
        <component :is="compt"></component>
    </keep-alive>
</template>