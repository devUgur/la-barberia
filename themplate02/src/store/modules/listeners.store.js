const state = {}

// Getter functions
const getters = {}

// Actions
const actions = {
    init({dispatch}){
        // init start values
        dispatch('handleResize');
        dispatch('handleScroll');
    },
    handleResize({commit, dispatch}){
        commit('style/SET_WINDOW_HEIGHT', window.innerHeight, {root: true});
        commit('style/SET_WINDOW_WIDTH', window.innerWidth, {root: true});
        dispatch('style/handleDeviceMode', {},{root: true});
    },
    handleScroll({commit}, value){
        commit('style/SET_SCROLL_TOP', window.pageYOffset, {root: true});
    },
}

// Mutations
const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}