<template>
  <div id="app-layout" v-if="loadedData">
    <TopbarComponent></TopbarComponent>
    <div id="app-view">
      <router-view v-slot="{ Component }">
        <transition :name="pageTransitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <FooterComponent></FooterComponent>
  </div>
  <div v-else>
    <!-- Start loader implementing -->
    <h3> Startloader </h3>
  </div>
</template>

<script>
import TopbarComponent from "@/components/navigation/Topbar.component";
import FooterComponent from "@/components/footer/Footer.component";

export default {
  components: {
    TopbarComponent,
    FooterComponent
  },
  computed: {
    pageTransitionName(){
      return this.$store.getters['style/pageTransitionName'];
    }
  },
  data(){
    return{
      loadedData: false,
    }
  },
  mounted() {

    // inits
    this.$store.dispatch('style/init');
    this.$store.dispatch('listeners/init');

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleViewScroll);

    setTimeout( () => {
      this.loadedData = true;
    }, 3000);
  },
  methods: {
    handleViewScroll(){
      this.$store.dispatch('listeners/handleScroll');
    },
    handleResize(){
      this.$store.dispatch('listeners/handleResize');
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arapey&display=swap');

:root{
  --logo-color: #cfc6fd;
  --dark-green-bg: #122423;
  --light-text-color: #e5e5e5;
  --dsas-color: #3a3d3d;
  --light-color: #b9b0a3;
  --active-nav-color: #d54646;

}

html {
  scroll-behavior: smooth;
}

body{
  background: var(--dark-green-bg);
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Arapey', serif;
  font-weight: bold;
  color: var(--light-text-color);
}


/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #111c1c;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
