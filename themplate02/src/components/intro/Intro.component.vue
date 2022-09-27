<template>
  <div id="introComponent">
    <div id="backgroundCover">
     <!-- <img src="@/assets/007.jpeg">-->
      <LogoComponent></LogoComponent>
      <AppointmentBtnComponent></AppointmentBtnComponent>
    </div>
  </div>
</template>

<script>
import AppointmentBtnComponent from "@/components/intro/AppointmentBtn.component";
import LogoComponent from "@/components/logo/logo.component";
export default {
  name: "IntroComponent",
  components: {
    AppointmentBtnComponent,
    LogoComponent
  }
}
</script>

<style scoped>
#introComponent{
  width: 100%;
}
#backgroundCover{
  height: 100vh;
  width: 100%;

  background-image:url('@/assets/007.jpeg');
  background-repeat:no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
  background-position:center;

  /*parallax effect*/
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
}

#backgroundCover img{

  max-width: 1200px;
  min-width: 600px;

  height: auto;
  width: 100%;
}
</style>