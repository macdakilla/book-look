const state = {
    favorite: []
}
const mutations = {
    'SET_FAVORITE' (state, item) {
        state.favorite.push(item);
    },
    'REMOVE_FAVORITE' (state, id) {
        let index = 0;
        let hasItem = state.favorite.find((elem, i) => {index = i;  return elem.id == id}) === undefined ? false : true;
        if (hasItem) {
            state.favorite.splice(index, 1);
        }
    }
}
const getters = {
    favorite(state) {
        return state.favorite;
    }
}
export default {
    state,
    getters,
    mutations
}