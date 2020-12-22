import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.mixin({
    data() {
        return {
            mainUrlApi: 'https://www.googleapis.com/books/v1/volumes'
        }
    },
    methods: {
        notUndefined(elem) {
            return elem !== undefined
        }
    }
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
