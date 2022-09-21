const state = {
    open: false
}

// Getter functions
const getters = {
    isOpen(state){
        return state.open;
    }
}

// Actions
const actions = {
    toggleMenu({state, commit}) {
        commit('SET_MENU_OPEN', !state.open);
    }
}

// Mutations
const mutations = {
    SET_MENU_OPEN(state, value){
        state.open = value;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}