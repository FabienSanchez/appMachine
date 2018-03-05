import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import List from './components/MachinesList.vue'
import Map from './components/MachinesMap.vue'
import Machine from './components/Machine.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/machines', component: List },
        { path: '/map', component: Map },
        { path: '/machine', component: Machine }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
});
