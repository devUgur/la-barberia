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

/* Device sizes
320px — 480px: Mobile devices.
481px — 768px: iPads, Tablets.
769px — 1024px: Small screens, laptops.
1025px — 1200px: Desktops, large screens.
1201px and more — Extra large screens, TV.
*/

:root{
  --logo-color: #cfc6fd;
  --dark-green-bg: #122423;
  --light-text-color: #e5e5e5;
  --dsas-color: #3a3d3d;
  --light-color: #b9b0a3;
  --active-nav-color: #d54646;
  --golden-color:  #eed37a;
  --green-img-filter: hue-rotate(300deg);
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

/* MY EXTRA CLASSES */

.view {
  padding: 100px 0;
  min-height: calc(100vh - 200px);
}

.container{
  margin: 0 auto;
  max-width: 900px;
  width: calc(100% - 60px);
}


.flex-container{
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  place-items: center;
  gap: 30px;
}



.blur{
  background-color: rgba(8, 14, 14, 0.85);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  /*
  background-color: rgba(18, 36, 35, 0.68);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  */
}

.light-blur{
  background-color: rgba(18, 36, 35, 0.47);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

/* Transitions */

/* we will explain what these classes do next!
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* fade UP */

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.5s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}



/* bounce */

.bounce-enter-active {
  animation: bounce-in2 0.5s;
}
.bounce-leave-active {
  animation: bounce-in2 0.5s reverse;
}
@keyframes bounce-in2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.scale-enter-active {
  animation: bounce-in 1s reverse;
}
.scale-leave-active {
  animation: bounce-in 1s;
}
@keyframes bounce-in {
  0% {
    transform: skewY(0deg);
  }
  25% {
    transform: skewY(2deg);
  }
  50% {
    transform: skewY(-5deg);
  }
  75% {
    transform: skewY(0deg);
  }
  100% {
    transform: skewY(-120deg);
  }
}
</style>
