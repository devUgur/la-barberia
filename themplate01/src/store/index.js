import { createStore } from 'vuex'

// store modules
import StyleModule from "@/store/modules/style.module";
import MenuModule from "@/store/modules/menu.module";

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
    menu: MenuModule
  }
})
