import axios from "axios";

const state = {
    books: {},
};
const mutations = {
    SET_BOOKS(state, books) {
        state.books = books;
    },
};
const actions = {
    initBooks({ commit }, params) {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?${params}`)
            .then((response) => {
                commit("SET_BOOKS", response.data);
            });
    },
};
const getters = {
    books(state) {
        return state.books;
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
};
