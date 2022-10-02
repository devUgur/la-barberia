<template>
  <transition
       @enter="enter"
       @leave="leave"
      v-bind:css="false"
      appear
  >
  <div id="full-page-menu" v-if="show" :class="{'blur': show}">
    <div class="fullpage-menu-inner">
      <div class="header">
        <CurvedLogoComponent class="logo"></CurvedLogoComponent>
      </div>

      <div class="body">
        <nav>
          <transition-group
              appear
              tag="div"
              class="main-menu"
              @before-enter="beforeEnterMenu"
              @enter="enterMenu"
              v-if="show"
          >
            <div class="router-link" v-for="(route, index) in routes" :key="route.name" :data-index="index">
              <a active-class="active" :class="{'active-route': (route.scrollName === currentViewName)}"
                 @click="routeTo(route.scrollName)">{{ route.name }}</a>
              <div class="nav-index">0{{ index+1 }}</div>
            </div>
          </transition-group>
        </nav>
      </div>
      <div class="footer">
        <AppointmentBtnComponent :show="show"></AppointmentBtnComponent>
        <div class="icon-links">
          <img src="@/assets/icons/instagram1.png">
          <img src="@/assets/icons/fb1.png">
          <img src="@/assets/icons/pin.png">
          <img onclick="window.location.href ='mailto:user@example.com?subject=Subject&body=message%20goes%20here'" src="@/assets/icons/email2.png">
          <img onclick="document.location.href='tel:+4923195018336'" src="@/assets/icons/anruf2.png">
          <tr onclick="window.open('tel:900300400');">
            <td>Phone: 900 300 400</td>
          </tr>

        </div>
        <p>Copyright</p>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import gsap from "gsap";
import { TimelineMax, Power4, TweenMax } from "gsap";
import CurvedLogoComponent from "@/components/logo/CurvedLogo.component";
import AppointmentBtnComponent from "@/components/intro/AppointmentBtn.component";

export default {
  name: "FullPageMenu",
  props: ['routes', 'show'],
  components: { CurvedLogoComponent, AppointmentBtnComponent },
  computed: {
    currentViewName(){
      console.log(this.$store.getters['nav/currentView']);
      return this.$store.getters['nav/currentView'];
    }
  },
  methods: {
    routeTo(targetID){
      this.$store.dispatch('menu/toggleMenu');
      this.$store.dispatch('nav/scrollTo3', targetID );
      this.$store.commit('nav/SET_CURRENT_VIEW', targetID);
    },
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
  left: 0; top: 0;
  height: calc(100vh - 30px);
  width: calc(100% - 60px);

  z-index: 900;

  padding: 30px;

}

.fullpage-menu-inner{
  margin-top: 50px;
  height: calc(100% - 80px);
  width: calc(100%);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #e1e1e1;

}

.router-link{
  display: flex;
  place-items: flex-end;
}

.nav-index{
  margin: 12px 5px;
  color: #eed37a;
}

.main-menu a{

  font-weight: bold;
  color: #e1e1e1;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 33px;
  mix-blend-mode: difference;
  letter-spacing: 2px;
  display: inline-block;
  position: relative;
  margin: 10px 0;

  transition: all 0.5s;

}

.header{
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
}

.icon-links{
   padding-top: 20px;
    margin: 0 auto;
}

.icon-links img{
  height: auto;
  width: 22px;
  margin: 0 10px;
}


.body{
  width: 100%;
  margin: 20px 0;
  /*background-color: #275eb2; */
}

.body nav{
  padding: 0 40px;

  max-width: 500px;
  margin: 0 auto;
}

.footer{
  /*background-color: #42b983;*/
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
}


.router-link{
  font-size: 14px;
  color: #eed37a !important;
}

a:hover{
  color: #d54646;
  cursor: pointer;
}

.header .logo{
  max-width: 160px;
}

.active-route{
  color: var(--active-nav-color) !important;
}

@media screen and (max-width: 767px) {
  #full-page-menu a{
    font-size: 24px;
  }

  .header .router-link{
    font-size: 16px !important;
    color: #e1e1e1 !important;
  }
}
/*
#full-page-menu{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 140px;
  height: calc(100vh - 140px);
  width: 100%;

  background-color: rgba(18, 36, 35, 0.68);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  filter: blur(8px);
  z-index: 1200;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #e1e1e1;
}


.fullpage-menu-inner{
  height: 100%;
  width: 100%;
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

  transition: all 0.5s;
}

a:hover{
  color: #d54646
}

a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #eed37a;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

a:hover:after {
  color: #eed37a;
  transform: scaleY(1);
  transform-origin: bottom left;
}

.nav-index{
  margin: 10px 0;
}

.header{
  padding: 20px 10px;
  width: 100%;
  height: 100%;

  display: flex;
  place-items: center;
  justify-content: center;
}

.footer{
  padding: 20px 10px;
  width: 100%;
}

@media screen and (max-width: 768px) {
  #full-page-menu a{
    font-size: 24px;
  }
}

@media screen and (min-width: 769px) {
  #full-page-menu{
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
}
 */
</style>