require('./bootstrap');

window.Vue = require('vue').default;

import  Form from 'vform'
import  HasError from 'vform'
import  AlertError from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes =[
    { path: '/ktp', component:require('./components/PilihanAdministrasi/ktp.vue').default},
    { path: '/akte', component:require('./components/PilihanAdministrasi/akte.vue').default}
]
   


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router
});
