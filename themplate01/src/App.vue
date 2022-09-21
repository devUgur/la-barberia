<template>

  <start-loader-component></start-loader-component>

  <TopbarComponent></TopbarComponent>

  <div id="app-layout">
    <div id="view">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <!--
    <router-view v-slot="{ Component }">
        <transition v-bind:css="false" appear v-on:enter="enter" v-on:leave="leave">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    -->
    <footer-component></footer-component>
  </div>

  <!--
  <transition v-bind:css="false" appear v-on:enter="enter" v-on:leave="leave">

    <div id="app-layout">

      <router-view></router-view>
    </div>
  </transition>
  -->

  <!--

  <div id="view" @scroll="handleViewScroll($event)">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>



  -->
</template>

<script>
import TopbarComponent from '@/components/navibars/Topbar.component';
//import uDevtoolComponent from "@/components/udevtool/udevtool.component";
import {  TweenMax, Power4 } from 'gsap';
import StartLoaderComponent from "@/components/loaders/StartLoader.component";

import FooterComponent from "@/components/footer/Footer.component";

export default{
  components: {
    TopbarComponent,
    //uDevtoolComponent,
    StartLoaderComponent,
    FooterComponent
  },
  data(){
    return{
      transitionName: null,
      ready: false,
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      if(toDepth < fromDepth){
        //this.transitionName = 'slide-right'

      }else{
        //this.transitionName = 'slide-left'
        this.transitionName = "fade" // "slide"
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      //console.log(toDepth, fromDepth)
    }
  },
  methods:{
    handleViewScroll(){
      this.$store.dispatch('style/handleScroll', window.pageYOffset);
    },
    handleResize(){
      this.$store.dispatch('style/handleResize');
    },
    enter(el, done) {
      TweenMax.fromTo(el, 1, {
        autoAlpha: 0,
        scale: 1.5,
      }, {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: '50% 50%',
        ease: Power4.easeOut,
        onComplete: done
      });
    },
    leave(el, done) {
      TweenMax.fromTo(el, 1, {
        autoAlpha: 1,
        scale: 1,
      }, {
        autoAlpha: 0,
        scale: 0.8,
        ease: Power4.easeOut,
        onComplete: done
      });
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {

    window.addEventListener('scroll', this.handleViewScroll)

    this.$store.dispatch('style/init');

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap');
:root{
  --logo-color: #38344b;
  --dark-green-bg: #122423;
  --das-bg: #c2cecb;
  --light-text-color: #e5e5e5;
  --dsas-color: #3a3d3d;
  --light-color: #b9b0a3;
  --active-nav-color: #d54646;

  --abril-font-family: 'Abril Fatface', cursive;
  --nav-font-family: 'Anton', sans-serif;
  --raleway-font-family: 'Raleway', sans-serif;

}

body{
  margin: 0;
  background: #122423;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--light-text-color);

  position: relative;
}

/* NEW CSS */
#app-layout{
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

#view{
  min-height: 100vh;
  /* mix-blend-mode: screen; */
  overflow-x: hidden;
  transition: padding 0.5s;
}
.view{
  min-height: 100vh;
}
/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}



/* Route Transition */
.slide-left-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.slide-left-enter-active {
  transition: all 0.3s ease-out;
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-left-leave-active{
  transition: all 0.3s ease-in;
}
.slide-right-enter-from{
  opacity: 0;
  transform: translateX(-100px);
}
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.slide-right-leave-active{
  transition: all 0.3s ease-in;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.3s ease-out;
}
.grow-in-enter-from,
.grow-in-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
.grow-in-enter-active,
.grow-in-leave-active {
  transition: 0.3s ease-out;
}
.grow-out-enter-from,
.grow-out-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
.grow-out-enter-active,
.grow-out-leave-active {
  transition: 0.3s ease-out;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
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

/* Media Queries */
@media screen and (max-width: 768px) {

  #app-layout{
    /*margin: 0 20px;*/
  }

  #view{
    /* padding: 0 20px; */
  }
}

</style>
