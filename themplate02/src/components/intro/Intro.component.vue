<template>

  <div id="introComponent">
    <div id="bgImage" ref="bgImage"></div>
    <transition name="fade">
      <div class="content" v-if="!menuIsOpen">
        <div class="logoContent">
          <transition name="fade-down">
            <CurvedLogoComponent :class="{'hover-bouncing': logoHoverBouncing}" v-if="showAppointmentBtn"></CurvedLogoComponent>
          </transition>
        </div>

        <div class="appointmentContent">

          <div class="btn-layout" @mouseleave="coloredBgColor();" @mouseover="greyBgColor()">
            <transition name="fade-up">
              <AppointmentBtnComponent v-if="!menuIsOpen && showAppointmentBtn" :show="true" ></AppointmentBtnComponent>
            </transition>
          </div>
          <transition class="trimmer" name="fade-up">
            <div v-if="showAppointmentBtn" class="trimmer"></div>
          </transition>


          <div class="btn-layout" @mouseleave="coloredBgColor();" @mouseover="greyBgColor()">
            <transition name="fade-up">
              <div class="moreInfo" v-if="showAppointmentBtn" @click="moreInfo">
                Mehr erfahren
              </div>
              </transition>
          </div>


        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AppointmentBtnComponent from "@/components/intro/AppointmentBtn.component";
import CurvedLogoComponent from "@/components/logo/CurvedLogo.component";
import LogoComponent from "@/components/logo/logo.component";

export default {
  name: "IntroComponent",
  components: {
    AppointmentBtnComponent,
    CurvedLogoComponent,
    LogoComponent
  },
  data(){
    return {
      showAppointmentBtn: false,
      logoHoverBouncing: false
    }
  },
  methods: {
    moreInfo(){
      this.$store.dispatch('nav/scrollTo2', 'about-us')
    },
    greyBgColor(){
      this.$refs.bgImage.classList.add('no-focus');
    },
    coloredBgColor(){
      this.$refs.bgImage.classList.remove('no-focus');
    }
  },
  computed: {
    scrollTop(){
      return this.$store.getters['style/getScrollTop'];
    },
    menuIsOpen(){
      return this.$store.getters['menu/isOpen'];
    }
  },
  watch: {
    scrollTop(newVal, oldVal){
      //console.log("ScrollTop old:", oldVal);
      //console.log("ScrollTop new:", newVal);

      if(newVal <= 40){
        this.showAppointmentBtn = true;
        this.$refs.bgImage.classList.remove('no-focus');
      }else{
        this.showAppointmentBtn = false;
        this.$refs.bgImage.classList.add('no-focus');

      }
    }
  },
  mounted() {
    setTimeout( () => {
      this.showAppointmentBtn = true;
    }, 200);
  }
}
</script>

<style scoped>
#introComponent{
  position: relative;
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
}

#bgImage{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-image: url("@/assets/007.jpeg");
  background-attachment: fixed;
  z-index: -1;

  transition: all 0.7s;

}


.no-focus{
  filter: grayscale(100%);
}

.content{

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  margin-top: 30px;
  max-width: 600px;
  width: calc(100% - 130px); /* margin include */
  transition: all 0.3s;

  /*background-color: #275eb2;*/
  padding: 20px;
}

.logoContent{
  display: flex;
  justify-content: center;
}



.trimmer{
  max-width: 260px;
  width: 100%;
  border-bottom: 2px solid var(--light-color);
}

.appointmentContent{
  width: calc(100% - 40px);
  margin-top: 60px;

  padding: 20px;

  /*
  background-color: rgba(8, 14, 14, 0.85);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
   */

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-between;
  height: 150px;
}

.btn-layout{
  max-width: 260px;
  width: 100%;
  height: 45px;
  margin: 10px 0;
}

.appointmentBtn{
  background-color: #111c1c;
  border: 3px solid var(--light-color);
  padding: 15px 20px;
  text-transform: uppercase;
  margin: 10px;
  text-align: center;
  letter-spacing: 2px;

  width: calc(100% - 60px);
}

.moreInfo{
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  place-items: center;

  background-color: rgba(8, 14, 14, 0.85);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  cursor: s-resize;
}



@media screen and (max-width: 767px) {
  #bgImage{
    background-attachment: scroll;
  }
}
</style>