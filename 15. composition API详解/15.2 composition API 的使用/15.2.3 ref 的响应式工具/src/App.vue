<script>
import { reactive, toRefs, toRef, isRef, unref, customRef, shallowRef, triggerRef } from 'vue'
export default {
  name: 'app',
  setup() {
    // 1. toRefs 函数可以将一个 reactive 函数定义的响应式代理对象转换为一个包含 ref 对象属性的普通对象
    const reactiveInfo = reactive({
      name: 'zy',
      age: 22
    })
    const toRefsTest = toRefs(reactiveInfo)
    console.log(toRefsTest)

    // 2. toRef 函数用于转换 reactive 定义的响应式代理对象中的某一属性为 ref 对象
    const name = toRef(reactiveInfo, 'name') // 将 name 属性转换为 ref
    console.log(name.value)

    // 3. isRef 函数可以用于判断某个值是否为 ref 对象
    console.log(isRef(name)) //true

    // 4. unref 函数的参数如果为 ref 代理对象则返回内部 value 值，否则返回参数
    console.log(unref(name), unref(123))

    // 5. customRef 函数可以创建一个自定义的 ref ，接收一个工厂函数作为参数
    // 该工厂函数接收 track 和 trigger 两个函数作为参数并返回一个带有 get 和 set 方法的对象并对其依赖项和更新触发进行控制（如自定义的防抖ref）
    // 自定义 ref 响应式变量
    const MyRef = customRef((track, trigger) => {
      let value
      return {
        get() {
          track()
          console.log('我被读取了')
          return value
        },
        set(newValue) {
          console.log('我被赋值了')
          value = newValue
          trigger()
        }
      }
    })
    MyRef.value = 123
    console.log(unref(MyRef))

    // 防抖功能的 ref 响应式变量
    const useDebounceRef = (value, delay = 3000) => {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            // 获取时收集依赖并返回对象
            track()
            return value
          },
          set(newValue) {
            // 触发赋值时清除计时器并重新开启计时器
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              // 调用更新依赖
              trigger()
            }, delay)
          }
        }

      })
    }

    // 6. shallowRef 函数可以创建一个浅层 ref 响应式代理对象
    const useShallowRef = shallowRef({
      name: 'zy',
      age: 22
    })

    useShallowRef.value.age = 23 //更改name属性则不会触发响应式

    // 7. triggerRef 函数可以手动强制触发依赖于一个浅层 ref 的副作用（通常在对浅引用内部值进行深度变更后使用）
    triggerRef(useShallowRef) //这将触发刚才对于 shallowRef 浅层响应式对象的响应式副作用

    return {
      toRefsTest,

    }
  }
}
</script>
<template></template>