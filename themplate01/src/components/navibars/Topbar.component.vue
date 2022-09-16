<template>
  <div class="nav layout" ref="nav">
    <div class="logo content" @click="this.$router.push('/')">
      <MiniLogoComponent></MiniLogoComponent>
    </div>

    <nav class="menu content">
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/location">LOCATION</router-link>
      <router-link to="/">START</router-link>
      <router-link to="/treatments">TREATMENTS</router-link>
    </nav>


    <div class="booking">
      <router-link v-if="!mobileMode" to="/booking">{{ windowWidth }}</router-link>
    </div>


    <section class="fullpage-menu">
      <div class="fullpage-menu-inner">
        <nav>
          <ul class="main-menu">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">{{ menu }}</a></li>
          </ul>
        </nav>

      </div>
    </section>


    <!--
    <svg @click="toggleMenu" width="40" class="openmenu hamburger menu-toggle" id="menuToggle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <circle :class="{'active':menu}" cx="3" cy="6" r="4" style="transformX: 50%"></circle>
      <path class="top" d="M0 9h30v2H20z"/>
      <line class="mid" x1="0" y1="15" x2="30" y2="15" stroke="white" stroke-width="2" vector-effect="non-scaling-stroke"/>
      <path class="bot" d="M0 19h30v2H0z"/>
      <circle :class="{'active':menu}" cx="3" cy="24" r="5"></circle>
    </svg>
    -->

    <!--
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line>
      <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
      <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
    </svg>
    -->

    <svg viewBox="0 0 12 10" class="hamburger menu-toggle" id="menuToggle" height="30px" width="120px">
      <path d="M10,2 L2,2" class="upper" style="fill: none;stroke: #fff;stroke-linecap: round;"/>
      <path d="M2,5 L10,5" class="middle" style="fill: none;stroke: #fff;stroke-linecap: round;"/>
      <path d="M10,8 L2,8" class="lower" style="fill: none;stroke: #fff;stroke-linecap: round;"/>
    </svg>

  </div>
</template>


<script>
import MiniLogoComponent from "@/components/logo/MiniLogo.component";
import { TimelineLite, TimelineMax } from "gsap";
import { Power2 } from "gsap";

export default {
  name: "TopbarComponent",
  components: { MiniLogoComponent },
  data(){
    return{
      slim: false,
      lastScrollTopPos: 0,
      menu: false,
      tl: false,
    }
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
    }
  },
  methods: {
    toSlim(){
      this.$refs.nav.style.height = "100px";
    },
    toFit(){
      this.$refs.nav.style.height = "140px";
    },
    toggleMenu(){
      this.menu = !this.menu;
    },
  },
  watch: {
    scrollTop(newVal, oldVal){
      if( newVal > oldVal ){
        this.toSlim();
      }else{
        this.toFit();
      }
    }
  },
  mounted() {

    // burger menu animation
    var upper = document.getElementsByClassName('upper');
    var middle = document.getElementsByClassName('middle');
    var lower = document.getElementsByClassName('lower');
    var navMain = document.querySelector("section.fullpage-menu");

    let dot1 = document.querySelector('circle');

    var tl = new TimelineLite({paused: true, reversed: true});

    tl
        .to(dot1, 0.5, {attr: {d: "M8,2 L2,8"}, x: 3, ease:Power2.easeInOut}, 'start')
        .to(upper, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
        .to(middle, 0.5, {autoAlpha: 0}, 'start')
        .to(lower, 0.8, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start')



    var menuAnimation = new TimelineMax({paused:true, reversed: true});
    menuAnimation.to(navMain, 0.7, {width: "100%", ease: Power2.easeInOut, transform: "translate3d(0,0,0)"},0)

    var menuToggle = new TimelineMax({paused:true, reversed:true});
    menuToggle

        .to( dot1, .2, {y:'-9px', x:'10px', transformOrigin: '50% 50%'}, 'burg')
        .to(' .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
        .to(' .bot', .2, {y:'9px', transformOrigin: '50% 50%'}, 'burg')
        .to(' .mid', .2, {scale:0.1, transformOrigin: '50% 50%'}, 'burg')
        .add('rotate')
        .to(' .top', .2, {y:'5'}, 'rotate')
        .to(' .bot', .2, {y:'-5'}, 'rotate')
        .to( dot1, .2, {y:'-3px', x: '-9px', transformOrigin: '50% 50%'}, 'burg')
        .to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
        .to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')
    // .set('#burger .mid', {opacity:0})//temp fix for stupid iOS rotate y bug

    document.querySelector('.hamburger').addEventListener('click', function(){
      tl.reversed() ? tl.play() : tl.reverse();
      menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
      menuAnimation.reversed() ? menuAnimation.play() : menuAnimation.reverse();
    })


    // for open menu

  },
}
</script>

<style scoped>

.layout{
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  place-items: center;

  z-index: 1000;
  height: 140px;

  transition: all 0.3s;

}

.logo{
  padding: 10px 20px;
  margin-left: 5%;
  cursor: pointer;
  z-index: 1500;
}

a{
  font-family: var(--nav-font-family);
  font-weight: bold;
  color: #e1e1e1;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 22px;
  mix-blend-mode: difference;
  letter-spacing: 2px;
}

circle{
}

circle.active{
  opacity: 1;
}

nav a.router-link-exact-active {
  color: #111111;
}
.menu.content{
  display: flex;
  place-items: center;

  max-width: 460px;
  width: 100%;
  justify-content: space-between;
}
.booking{
  margin: 0 5%;
  background-color: #275eb2;
  height: 100%;

  display: flex;
  justify-content: center;
  place-items: center;
}

#menuToggle{
  display: none;
}



/* Header start */



.menu-toggle{
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1200;
}




.fullpage-menu-inner{
  display: flex;
  align-items: center;
  height: 100%;
  padding: 100px 60px;
}


nav{
  position: relative;
}


.fullpage-menu{
  position: fixed;
  left: 0; top: 0;
  bottom: 0;
  height: 100vh;
  width: 0%;

  overflow: hidden;

  background-color: #275eb2;
}



@media screen and (max-width:767px) {
  .header-row, .header-nav-footer{
    padding: 30px;
  }
  .fullpage-menu-inner{
    padding: 70px 30px;
  }
  nav li a{
    font-size: 54px;
  }
  .social-links li{
    font-size: 16px;
  }

  .booking{
    display: none;
  }

  .menu.content{
    display: none;
  }

  #menuToggle{
    display: block;
  }
}
</style>