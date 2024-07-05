import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

router.beforeEach((to, from, next) => {
    const defaultTitle = 'Scratch';
    document.title = to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle;
    next()
})

app.use(router)

app.mount('#app')
