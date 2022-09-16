<template>

  <start-loader-component></start-loader-component>
  <u-devtool-component></u-devtool-component>

  <TopbarComponent></TopbarComponent>
  <transition v-bind:css="false" appear v-on:enter="enter" v-on:leave="leave">

    <div id="app-layout">

      <div style="height: 200vh"></div>
    </div>
  </transition>
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
import { TimelineMax, TweenMax, Power4 } from 'gsap';

import StartLoaderComponent from "@/components/loaders/StartLoader.component";
export default{
  components: {
    TopbarComponent,
    //uDevtoolComponent,
    StartLoaderComponent
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
        this.transitionName = 'slide-right'
      }else{
        this.transitionName = 'slide-left'
      }
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
      const tl = new TimelineMax({
        onComplete: done
      })

      tl.set(el, {
        delay: 3,
        autoAlpha: 0,
        scale: 2,
        transformOrigin: '50% 50%'
      })

      tl.to(el, 1, {
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
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

:root{
  --logo-color: #38344b;
  --dark-green-bg: #122423;
  --abril-font-family: 'Abril Fatface', cursive;
  --nav-font-family: 'Anton', sans-serif;
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
  color: #2c3e50;

  position: relative;
}

/* NEW CSS */
#app-layout{
  position: relative;
  overflow-x: hidden;
}

#view{
  height: 100vh;
  overflow-y: auto;
  mix-blend-mode: screen;
  overflow-x: hidden;
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
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
</style>
