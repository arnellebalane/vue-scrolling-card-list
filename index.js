import Vue from 'vue';
import App from './App.vue';
import {intersectionRoot, intersect} from './directives';

Vue.directive('intersection-root', intersectionRoot);
Vue.directive('intersect', intersect);

new Vue({
    el: '#app',
    render: h => h(App)
});
