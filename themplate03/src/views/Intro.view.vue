<template>
  <div id="intro-view">
    <div id="bgImage" ref="bgImage"></div>
    <div class="content">
      <CurvedLogoComponent :show="true"></CurvedLogoComponent>
      <AppointmentBtnComponent></AppointmentBtnComponent>
      <div class="trimmer"></div>
      <div class="more-info blur" @click="moreInfo"> Mehr erfahren</div>
    </div>
  </div>
</template>

<script>
import CurvedLogoComponent from "@/components/logos/CurvedLogo.component";
import AppointmentBtnComponent from "@/components/view/AppointmentBtn.component";
export default {
  name: "IntroView",
  components: {
    CurvedLogoComponent,
    AppointmentBtnComponent
  },
  methods: {
    moreInfo: () => {}
  }
}
</script>

<style scoped>
#intro-view{
  position: relative;
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
  height: 100vh;
}

#bgImage{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-image: url("@/assets/imgs/intro-bg-img-2.jpeg");
  background-attachment: fixed;
  z-index: -1;
  transition: all 0.7s;
}

#intro-view .content{
  position: relative;
  margin-top: 80px;
  max-width: 340px;
  height: calc(100% - 140px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;

  /* background-color: #eed37a;*/
  padding: 30px 70px;
}
#intro-view .content div:first-of-type{
  margin-bottom: 20px;
}
.trimmer{
  max-width: 120px;
  width: 100%;
  margin: 10px 0;
  border-bottom: 2px solid var(--light-color);
}
.more-info{
  width: 100%;
  max-height: 43px;
  height: 100%;
  display: flex;
  justify-content: center;
  place-items: center;
  border-top: 2px solid var(--light-color);
  cursor: s-resize;
}


@media screen and (max-width: 767px) {
  #bgImage{
    background-attachment: scroll;
  }
}
</style>