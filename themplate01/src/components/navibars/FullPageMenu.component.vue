<template>
  <transition
       @enter="enter"
       @leave="leave"
      v-bind:css="false"
      appear
  >
  <div id="full-page-menu" v-if="show">
    <div class="header"></div>
    <div class="body">
      <nav>
        <transition-group
            appear
            tag="ul"
            class="main-menu"
            @before-enter="beforeEnterMenu"
            @enter="enterMenu"
            v-if="show"
        >
          <li  v-for="(route, index) in routes" :key="route.name" :data-index="index" @click="this.$store.dispatch('menu/toggleMenu')">
            <router-link active-class="active" :to="route.to">{{ route.name }}</router-link>
            <div class="nav-index">0{{ index+1 }}</div>
          </li>
        </transition-group>
      </nav>
    </div>
    <div class="footer"></div>
  </div>
  </transition>
</template>

<script>
import gsap from "gsap";
import { TimelineMax, Power4, TweenMax } from "gsap";

export default {
  name: "fullPageMenu",
  props: ['routes', 'show'],
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      })

      tl.set(el, {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50%'
      })

      tl.to(el, 1, {
        autoAlpha: 1,
        rotationX: 0,
        ease: Power4.easeOut
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done
      });
    },
    beforeEnterMenu(el){
      el.style.opacity = 0;
      el.style.transform = 'translateY(100px)';
    },
    enterMenu(el, done) {
      console.log(el.dataset.index)
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }
  }
}
</script>

<style scoped>
#full-page-menu{
  position: fixed;
  left: 0;
  top: 0;

  padding-top: 100px;
  height: 100vh;
  width: 100%;

  background-color: rgba(18, 36, 35, 0.68);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  z-index: 1200;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* FULLPAGE MENU CSS*/

.fullpage-menu-inner{
  display: flex;
  align-items: center;
  height: 100%;
  padding: 100px 60px;
}


ul{
  list-style: none;
  text-align: left;
}

li{
  display: flex;
  color: #eed37a;
  place-items: flex-end;
}

a{
  /** font-family: var(--nav-font-family); **/
  font-weight: bold;
  color: #e1e1e1;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 33px;
  mix-blend-mode: difference;
  letter-spacing: 2px;
  display: inline-block;
  position: relative;
  margin: 10px;
}

.nav-index{
  margin: 10px 0;
}
</style>