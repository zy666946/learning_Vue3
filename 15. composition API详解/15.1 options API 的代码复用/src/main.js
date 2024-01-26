import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mixin({
    mounted() {
        console.log('全局mixin：组件加载完毕')
    }
})
app.mount('#app')