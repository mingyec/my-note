import Vue from 'vue'
import App from './App'
import material from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(material)

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})