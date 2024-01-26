<script>
export default {
    name: 'app',
    data() {
        return {
            data: [
                {
                    name: 'zy',
                    age: 22
                }, {
                    name: 'xh',
                    age: 21
                }
            ]
        }
    },
    methods: {
        add() {
            this.data.splice(0, 0, {
                name: 'test',
                age: 2024
            })
        },
        remove() {
            this.data.pop(1)
        },

        splice() {
            this.data.splice(1, 1)
        }
    }
}

</script>
<template>
    <!-- 1. 默认不渲染容器元素进行包裹，但可以通过tag属性传入一个组件或元素名作为容器 -->
    <!-- 2. 必须为列表中每一个元素指定唯一 key ，确保删除、新增、移动元素时能够正确的应用过渡 -->
    <!-- 3. transition 将不可用，因为不存在相斥的两个元素互换行为 -->
    <!-- 4. css过渡动画类将会直接绑定到每一个列表元素上 -->
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <button @click="splice">splice</button>
    <!-- 可以通过 名称-move 类指定元素平移时的过渡 -->
    <TransitionGroup tag="ul" name="test" appear>
        <p v-for="item in  data " :key="item">
            {{ `姓名：${item.name} --年龄：${item.age} ` }}
        </p>
    </TransitionGroup>
</template>
<style scoped>
@keyframes test {
    0% {
        opacity: 0;
        filter: blur(20px);
    }

    100% {
        opacity: 1;
        filter: blur(0px);
    }
}

.test-enter-active {
    animation: test 0.5s ease;
}

.test-leave-active {
    animation: test 0.5s ease reverse;
    /* 动画执行时需要将该元素脱离文档流才能触发后面元素的位移 */
    position: absolute;
}

.test-move {
    transition: transform 0.5s;
}
</style>