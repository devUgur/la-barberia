<template>
  <transition v-on:enter="pageTransitionEnter" v-on:leave="pageTransitionLeave" v-bind:css="false" appear>
    <div v-if="loader" ref="start-loader" id="start-loader">
      <CurvedShopNameComponent></CurvedShopNameComponent>
      <transition appear name="bounce" @before-enter="logoHeadBeforeEnter" @enter="logoHeadEnter">
        <img class="undertitle" src="@/assets/labarberia-logo-whead.png">
      </transition>
    </div>
  </transition>
</template>

<script>
import CurvedShopNameComponent from "@/components/logo/CurvedShopName.component";
import gsap from "gsap";
import { TweenMax, Power4 } from 'gsap';

export default {
  name: "StartLoaderComponent",
  components: {
    CurvedShopNameComponent,
  },
  data(){
    return {
      loader: true,
    }
  },
  created() {
    setTimeout( () => {
      this.loader = false;
    }, 3000)
  },
  methods: {
    logoHeadBeforeEnter(el){
      console.log('before enter - set initial state');
      el.style.transform = 'translateY(60px)';
      el.style.opacity = 0;
    },
    logoHeadEnter(el){
      gsap.to(el, {
        duration: 1,
        y: 0,
        delay: 1,
        opacity: 1,
      })
    },
    pageTransitionEnter(el, done) {
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
    pageTransitionLeave(el, done) {
      TweenMax.fromTo(el, 1, {
        autoAlpha: 1,
        scale: 1,
      }, {
        autoAlpha: 0,
        scale: 0.3,
        ease: Power4.easeOut,
        onComplete: done
      });
    }
  }
}
</script>


<style scoped>
#start-loader{
  color: #e1e1e1;
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;

  z-index: 2000;

  background-color: var(--dark-green-bg);

  overflow: hidden;

  max-height: 100vh;
}
</style>