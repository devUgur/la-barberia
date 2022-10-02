import $ from 'jquery';

const state = {
    routes: [
        { name: 'Home', to: '/', scrollName: 'intro', active: true },
        { name: 'Über Uns', to: '/about-us', scrollName: 'about-us', active: false },
        { name: 'Dienstleistung', to: '/services', scrollName: 'service', active: false },
        { name: 'Kontakt', to: '/contact', scrollName: 'contact', active: false }
    ],
    currentView: null,
}

// Getter functions
const getters = {
    routes: (state) => {
        return state.routes;
    },
    currentView: (state) => {
        return state.currentView;
    }
}

// Actions
const actions = {
    scrollTo({},hash) {
        if (hash !== "") {
            console.log(hash)
            let _hash = hash;
            $('html, body').animate({
                scrollTop: $('#'+_hash).offset().top
            }, 800, function(){
                window.location.hash = _hash;
            });
        }
    },
    scrollTo2({},name){
        let toScroll = document.getElementById(name);
        if(toScroll){
            toScroll.scrollIntoView({
                behavior: 'smooth'
            })
        }
    },
    scrollTo3({}, targetID){
        let toScroll = document.getElementById(targetID);
        console.log(targetID);
        if(toScroll){
            toScroll.scrollIntoView();
        }
    },
    getNameFromId({state}, id){
        state.routes.forEach(route => {
            if(route.id === id){
                return route.name;
            }
        })
    },
    handleCurrentView({commit,state}, currentView){
        commit('SET_CURRENT_VIEW', currentView);
    }
}

// Mutations
const mutations = {
    SET_CURRENT_VIEW(state, currentView){
        state.currentView = currentView;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}