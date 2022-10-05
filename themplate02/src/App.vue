<template>
  <div id="app-layout" @load="loaded">
    <div v-if="loadedData">
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
    <div class="loader" v-else>
      <div>
        <h1>Lädt</h1>
        <h2 class='loader--text'>0%</h2>
      </div>
    </div>
  </div>
</template>

<script>
import TopbarComponent from "@/components/navigation/Topbar.component";
import FooterComponent from "@/components/footer/Footer.component";

import smoothscroll from 'smoothscroll-polyfill';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import imagesLoaded from "imagesloaded";

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
      instagramAccessToken: 'IGQVJWNVpQdnh5UFRpazJrQ2FTNDhBLTlqNHM3c2hTdjZAmRUwyNzBnSWE0U3ZAvcG1sUGFUYnhVVWx3TTZADNDhONVJBTUQ0eFJ1ZAmpPQVh4UWwxbWNZAZAnZAPa3FlOUh0RFI0VTdWYjdVUl8tdkFVT1otSgZDZD'
    }
  },
  created() {
    // set page title
    document.title = "La Barberia Dortmund"
  },
  mounted() {

    // inits
    this.$store.dispatch('style/init');
    this.$store.dispatch('listeners/init');

    // kick off the polyfill!
    smoothscroll.polyfill();

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
    loaded(){
      this.loadedData = true;
    }
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

  /* box-shadows */
  --box-shadow-1: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  --box-shadow-2: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  /* color palette 1 */
  --palette-1-color-1: #DAD7CD;
  --palette-1-color-2: #A3B18A;
  --palette-1-color-3: #588157;
  --palette-1-color-4: #3A5A40;
  --palette-1-color-5: #344E41;
}

html {
  /*
  scroll-behavior: smooth;
   */
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

.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--dark-green-bg);
  color: white;
  z-index: 2000;



  display: flex;
  justify-content: center;
  place-items: center;

  text-align: center;
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

/* fade DOWN */

.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.5s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}


/* fade RIGHT */
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s ease;
}

.fade-right-enter-from,
.fade-right-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
/* fade LEFT */
.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 0.5s ease;
}

.fade-left-enter-from,
.fade-left-leave-to {
  transform: translateX(100px);
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
