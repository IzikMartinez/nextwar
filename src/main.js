import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NewGame from "@/components/NewGame.vue";
import SelectGame from '@/components/Select-Game'
import Map from '@/components/Map'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes= [
    { path: '/NewGame', component: NewGame },
    { path: '/Map', component: Map},
    { path: '/', component: SelectGame},
    ];

const router = new VueRouter({
    routes,
    mode: 'history'
    });


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
