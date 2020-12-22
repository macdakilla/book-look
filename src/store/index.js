import Vue from "vue";
import Vuex from "vuex";
import Books from "./modules/books";
import Favorite from './modules/favorite';
import Categories from './modules/categories';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Books,
        Favorite,
        Categories
    },
});
