<template>

  <div id="topnav" class="nav layout" ref="nav" :class="{'blur': !menuIsOpen}">
    <div class="logo content" @click="this.$router.push('/')">
     <MiniLogoComponent v-if="!menuIsOpen"></MiniLogoComponent>
    </div>
    <nav class="menu vertical content">
      <div class="router-list" v-for="route in routes" :key="route.name">
        <div class="router-link" @click="scrollTo(route.scrollName)"> {{route.name}} </div>
      </div>
    </nav>


    <FullPageMenuComponent :routes="routes" :show="menuIsOpen"></FullPageMenuComponent>


    <div class="appointmentBtnLayout">
      <AppointmentBtnComponent :show="showAppointmentBtn"></AppointmentBtnComponent>
    </div>






    <svg id="menuBtn" class="ham ham2" viewBox="0 0 100 100" width="80" @click="toggleMenu">
      <path
          class="line top"
          d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381" />
      <path
          class="line middle"
          d="m 30,50 h 40" />
      <path
          class="line bottom"
          d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381" />
    </svg>
  </div>

</template>


<script>
import MiniLogoComponent from "@/components/logo/MiniLogo.component";
import AppointmentBtnComponent from "@/components/intro/AppointmentBtn.component";
import FullPageMenuComponent from '@/components/navigation/FullPageMenu.component'

export default {
  name: "TopbarComponent",
  components: {
    MiniLogoComponent,
    AppointmentBtnComponent,
    FullPageMenuComponent
  },
  data(){
    return{
      slim: false,
      lastScrollTopPos: 0,
      menu: false,
      tl: null,
      showAppointmentBtn: false,
    }
  },
  setup(){

  },
  computed: {
    scrollTop(){
      return parseInt(this.$store.getters['style/getScrollTop']);
    },
    windowWidth(){
      return this.$store.getters['style/getWindowWidth'];
    },
    mobileMode(){
      return false // this.windowWidth < 768;
    },
    menuIsOpen(){
      return this.$store.getters['menu/isOpen'];
    },
    routes(){
      return this.$store.getters['nav/routes'];
    }
  },
  methods: {
    toSlim(){
      this.$refs.nav.classList.add('slim');

    },
    toFit(){
      this.$refs.nav.classList.remove('slim');
    },
    toggleMenu(){
      this.menu = !this.menu;
      this.$store.dispatch('menu/toggleMenu');
    },
    scrollTo(name){
      this.$store.dispatch('nav/scrollTo2', name);
    }
  },
  watch: {
    scrollTop(newVal){

      if(newVal >= 40){
        this.showAppointmentBtn = true;
      }else{
        this.showAppointmentBtn = false;
      }
      /*
      if(newVal === 0){
        this.toFit();
      }else{
        if(!this.menuIsOpen){
          this.toSlim();
        }
      }
       */
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

  },
}
</script>

<style scoped>

/* topbar css */
.nav.layout{
  position: fixed;
  top: 0;
  width: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
  place-items: center;

  z-index: 1000;
  height: 80px;

  transition: all 0.3s;
  font-family: 'Arapey', serif;

  padding: 0 30px;

  /* border-bottom: 2px solid var(--light-color); */


}

#topnav:hover{

}

.slim{

}

.logo{
}

.router-list{
  display: flex;
  justify-content: center;
  place-items: center;
}
.router-link{
  display: flex;
  justify-content: center;
  place-items: center;

  text-transform: uppercase;
  text-decoration: none;
  /*
  background-image: linear-gradient(
      to right,
      #462523 0,
      #cb9b51 22%,
      #f6e27a 45%,
      #c7c172 50%,
      #f6e27a 55%,
      #cb9b51 78%,
      #462523 100%
  );
  color:transparent;
  -webkit-background-clip:text;
  transition: all 0.5s;
   */

  font-size: 18px;
  color: #eed37a;
  letter-spacing: 1px;
}

.vertical .router-link:hover{
  cursor: pointer;
  /*font-size: 22px;*/
}

.router-link.active{
  color: #d54646;
  font-size: 22px;
}
a:hover{
  color: #d54646
}
a.router-link-exact-active{
  color: #d54646;
  font-size: 22px;
}


.menu.vertical.content{
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  max-width: 500px;
  min-width: 400px;
  width: 100%;

}

.appointmentBtnLayout{
  height: 36px;
  max-width: 180px;
  width: 100%;
}

#menuBtn{
  display: none;
  cursor: pointer;
  z-index: 1200;

}


svg{
  height: 50px;
}
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #e5e5e5;
  stroke-width: 5;

}

.ham2 .top {
  stroke-dasharray: 40 121;
}
.ham2 .bottom {
  stroke-dasharray: 40 121;
}
.ham2.active .top {
  stroke-dashoffset: -102px;
}
.ham2.active .bottom {
  stroke-dashoffset: -102px;
}

@media screen and (max-width: 768px) {
  .menu.vertical.content{
    display: none;
    background-color: #eed37a;
  }

  .booking{
    display: none;
  }

  #menuBtn{
    display: block;
  }
}
</style>