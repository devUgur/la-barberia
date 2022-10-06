const state = {
    routes: [
        { name: 'Home', to: '/', scrollName: 'intro-view' },
        { name: 'Über Uns', to: '/about-us', scrollName: 'about-view' },
        { name: 'Dienstleistung', to: '/services', scrollName: 'services-view' },
        { name: 'Kontakt', to: '/contact', scrollName: 'contact-view' }
    ],
    currentViewName: null,
}

// Getter functions
const getters = {
    routes: (state) => {
        return state.routes;
    },
    currentViewName: (state) => {
        return state.currentView;
    }
}