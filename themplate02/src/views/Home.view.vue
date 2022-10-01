<template>
  <div id="home-view">
    <section id="intro">
      <IntroComponent></IntroComponent>
    </section>

    <section id="about-us">
      <AboutView></AboutView>
    </section>

    <section id="service">
      <ServicesView></ServicesView>
    </section>

    <section id="contact">
      <ContactView></ContactView>
    </section>

    <ScrollToTopBtnComponent></ScrollToTopBtnComponent>
  </div>
</template>

<script>
import IntroComponent from "@/components/intro/Intro.component";
import Intro2Component from "@/components/intro/Intro2.component";
import AboutView from "@/views/About.view";
import ServicesView from "@/views/Services.view";
import ContactView from "@/views/Contact.view";

import ScrollToTopBtnComponent from "@/components/home/ScrollToTopBtn.component";

export default {
  name: 'HomeView',
  components: {
    IntroComponent,
    Intro2Component,
    AboutView,
    ServicesView,
    ContactView,

    ScrollToTopBtnComponent,
  }
}
</script>

<style scoped>
#home-view{
}

section:not(:first-of-type){
  min-height: 100vh;
}
</style>