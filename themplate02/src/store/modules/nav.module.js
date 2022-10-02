import $ from 'jquery';

const state = {
    routes: [
        { name: 'Home', to: '/', scrollName: 'intro' },
        { name: 'Über Uns', to: '/about-us', scrollName: 'about-us' },
        { name: 'Dienstleistung', to: '/services', scrollName: 'service' },
        { name: 'Kontakt', to: '/contact', scrollName: 'contact' }
    ]
}

// Getter functions
const getters = {
    routes: (state) => {
        return state.routes;
    },
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
    }
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