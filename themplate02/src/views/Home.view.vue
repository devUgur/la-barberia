<template>
  <div id="home-view">
    <section id="intro">
      <IntroComponent></IntroComponent>
    </section>

    <section id="about-us">
      <h3> Section 2 </h3>
      <h4> ABOUT US </h4>
    </section>

    <section id="service">
      <h3> Section 3 </h3>
      <h4> SERVICE </h4>
    </section>

    <section id="contact">
      <h3> Section 4 </h3>
      <h4> CONTACT </h4>
    </section>
  </div>
</template>

<script>
import IntroComponent from "@/components/intro/Intro.component";
export default {
  name: 'HomeView',
  components: {
    IntroComponent
  }
}
</script>

<style scoped>
#home-view{
}

section{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>