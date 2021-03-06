import Vue from 'vue';
import VueIntersect from '@arnellebalane/vue-intersect';
import App from './App.vue';

Vue.use(VueIntersect);

new Vue({
    el: '#app',
    render: h => h(App)
});
