<template>
  <div id="landing-page">

    <section class="intro">
      <div class="intro-bg-img">
      <!--  <div class="intro-text"> La Barberia Dortmund</div> -->
      </div>
      <img src="@/assets/instagram/07.jpg">
    </section>

    <!--
    <div class="images">
      <img class="two" src="@/assets/instagram/02.jpg">
      <img class="three" src="@/assets/instagram/03.jpg">
    </div>
    -->
    <LogoComponent></LogoComponent>
    <div style="height: 200vh"></div>
  </div>
</template>

<script>

// COMPONENTS
import LogoComponent from "@/components/logo/logo.component";

// MODULES
//import CircleType from 'circletype';

export default {
  components: {
    LogoComponent
  },
  mounted() {
    //let circleType = new CircleType(document.querySelector('section.intro .intro-text'));
    //circleType.radius(420);
    console.log("curvedTitle");
  }
}
</script>

<style scoped>
#landing-page{
  position: relative;
  min-height: 100vh;
}

section{
  min-height: 100vh;
}

section.intro{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  position: relative;

}

/*
.intro-bg-img{
  background-image: url("@/assets/instagram/07.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;


  height: 100vh;
  max-width: calc(100% - 15%);
  width: 100%;
}

 */

.intro-text{
  font-family: var(--abril-font-family);
  font-size: clamp(2rem, -0.575rem + 8.333333vw, 4.5rem);
  color: white;
  margin-top: 200px;


}

.intro-text span{
  color: #111111;
}

img{
  max-width: 100%;
  min-width: 300px;
  height: auto;
  object-fit: scale-down; max-width: 100%

}
section.intro img{
}

</style>