<template>
  <div class="nav layout" ref="nav">
    <div class="logo content" @click="this.$router.push('/')">
      <MiniLogoComponent></MiniLogoComponent>
    </div>
    <nav class="menu vertical content">
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link active-class="active" :to="route.to"> {{ route.name }} </router-link>
        </li>
      </ul>
    </nav>


    <div class="booking">
      <router-link v-if="!mobileMode" to="/booking">
        <!-- {{ windowWidth }} -->
        Termin buchen
      </router-link>
    </div>


    <FullPageMenuComponent :routes="routes" :show="menuIsOpen"></FullPageMenuComponent>

    <svg ref="menuBtn" @click="toggleMenu" viewBox="0 0 12 10" class="hamburger menu-btn" id="menuBtn" height="30px" width="120px">
      <path d="M10,2 L2,2" class="upper" style="fill: none;stroke: #fff;stroke-linecap: round;"/>
      <path d="M2,5 L10,5" class="middle" style="fill: none;stroke: #fff;stroke-linecap: round;"/>
      <path d="M10,8 L2,8" class="lower" style="fill: none;stroke: #fff;stroke-linecap: round;"/>
    </svg>

  </div>
</template>


<script>
import MiniLogoComponent from "@/components/logo/MiniLogo.component";
import FullPageMenuComponent from "@/components/navibars/FullPageMenu.component";

import { TimelineLite } from "gsap";
import { Power2 } from "gsap";

/* import { onMounted, ref } from "vue"; */

export default {
  name: "TopbarComponent",
  components: {
    MiniLogoComponent,
    FullPageMenuComponent
  },
  data(){
    return{
      slim: false,
      lastScrollTopPos: 0,
      menu: false,
      tl: null,
      routes: [
        { name: 'Home', to: '/' },
        { name: 'Über Uns', to: '/about-us' },
        { name: 'Dienstleistung', to: '/services' },
        { name: 'Kontakt', to: '/contact' }
      ],
    }
  },
  setup(){
    /*
    const box = ref();
    let animation = null;

    onMounted(() => {
      animation = new TimelineLite({paused: true, reversed: true})
          .to(box.getElementsByClassName('upper'), 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
          .to(box.$refs.menuBtn.getElementsByClassName('middle'), 0.5, {autoAlpha: 0}, 'start')
          .to(box.$refs.menuBtn.getElementsByClassName('lower'), 0.8, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start')
    });

    const play = () => animation.play();
    const pause = () => animation.pause();
    const restart = () => animation.restart();
    const reverse = () => animation.reverse();

     */
  },
  computed: {
    scrollTop(){
      return  parseInt(this.$store.getters['style/getScrollTop']);
    },
    windowWidth(){
      return this.$store.getters['style/getWindowWidth'];
    },
    mobileMode(){
      return this.windowWidth < 768;
    },
    menuIsOpen(){
      return this.$store.getters['menu/isOpen'];
    }
  },
  methods: {
    toSlim(){
      this.$refs.nav.style.height = "100px";
      /* this.$refs.nav.classList.add('slim'); */

    },
    toFit(){
      this.$refs.nav.style.height = "140px";
      /* this.$refs.nav.classList.remove('slim'); */
    },
    toggleMenu(){
      this.menu = !this.menu;
      this.$store.dispatch('menu/toggleMenu');
      this.toggleMenuBtn();
    },
    initMenuBtn(){
      // burger menu animation

      this.tl = new TimelineLite({paused: true, reversed: true});

      this.tl
          .to(this.$refs.menuBtn.getElementsByClassName('upper'), 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
          .to(this.$refs.menuBtn.getElementsByClassName('middle'), 0.5, {autoAlpha: 0}, 'start')
          .to(this.$refs.menuBtn.getElementsByClassName('lower'), 0.8, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start')

    },
    toggleMenuBtn(){
      if(this.tl){
        console.log("passiert");
        this.$refs.menuBtn.reversed() ? this.tl.play() : this.tl.reverse();
      }else{
        console.log(this.tl);
      }
    }

  },
  watch: {
    scrollTop(newVal){
      if(newVal === 0){
        this.toFit();
      }else{
        if(!this.menuIsOpen){
          this.toSlim();
        }

        /* this.menu = false; */
      }
    },
    menuIsOpen(isOpen){
      if(isOpen){
        this.toFit();
      }else{
        if(this.scrollTop > 0 ){
          this.toSlim();
        }

      }
    }
  },
  mounted() {
    this.initMenuBtn();
    // for open menu
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Goblin+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arapey&display=swap');



.slim{
  background-color: rgba(8, 14, 14, 0.39);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.logo{
  padding: 10px 20px;
  margin-left: 5%;
  cursor: pointer;
  z-index: 1500;
}

a{
  /** font-family: var(--nav-font-family); **/
  font-weight: bold;
  color: #e1e1e1;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  mix-blend-mode: difference;
  letter-spacing: 2px;
  display: inline-block;
  position: relative;
  margin: 0 10px;
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

a:hover{
  color: #d54646
}



circle.active{
  opacity: 1;
}
a.router-link-exact-active{
  color: #d54646
}

/* topbar css */
.layout{
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  place-items: center;

  z-index: 1000;
  height: 100px;

  transition: all 0.3s;
  font-family: 'Arapey', serif;
}

nav.vertical li {
  display: table-cell;
  position: relative;

}

.menu.content{
  display: flex;
  place-items: center;
  justify-content: space-between;
}

.booking{
  margin: 0 5%;

  display: flex;
  justify-content: center;
  place-items: center;
  border: 2px solid #eed37a;
}

.booking a{
  padding: 10px 5px;
}

.booking:hover{
  transition: all 0.7s;
  background-position: left;
  background: linear-gradient(to left, #eed37a 50%, transparent 50%) right;
  background-size: 200% 100%;
  color: #080a0a;
}

#menuBtn{
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1200;
}


/* FULLPAGE MENU CSS*/

.fullpage-menu-inner{
  display: flex;
  align-items: center;
  height: 100%;
  padding: 100px 60px;
}

.fullpage-menu{
  position: fixed;
  left: 0; top: 0;
  bottom: 0;
  height: 100vh;
  width: 0%;
  overflow: hidden;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.fullpage-menu ul{
  list-style: none;
  text-align: left;
  background-color: #38344b;
}

.fullpage-menu li{
  display: flex;
  color: #eed37a;
  place-items: flex-end;
}
.main-menu .nav-index{

}

@media screen and (max-width:767px) {

  .booking{
    display: none;
  }

  .menu.content{
    display: none;
  }

  #menuBtn{
    display: block;
  }
}

</style>