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
    toggleMenu({state, commit, dispatch}) {
        state.open = !state.open;
        commit('SET_MENU_OPEN', state.open);
        dispatch('toggleMenuBtn');
    },
    toggleMenuBtn({state}){
        let menuBtn = document.getElementById('menuBtn');
        if(state.open){
            menuBtn.classList.add('active');
        }else{
            menuBtn.classList.remove('active');
        }
    }
}

// Mutations
const mutations = {
    SET_MENU_OPEN(state, value){
        state.open = value;
    },

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}