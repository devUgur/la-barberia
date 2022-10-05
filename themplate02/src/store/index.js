import { createStore } from 'vuex'

// store modules
import StyleModule from "@/store/modules/style.module";
import MenuModule from "@/store/modules/menu.module";
import ListenersModule from "@/store/modules/listeners.store"
import NavModule from "@/store/modules/nav.module";
import InstagramModule from "@/store/modules/instagram.store";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    style: StyleModule,
    nav: NavModule,
    menu: MenuModule,
    listeners: ListenersModule,
    instagram: InstagramModule
  }
})
