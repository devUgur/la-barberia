<template>
  <div id="main-layout">
    <topnav-component></topnav-component>
    <div id="components-layout">
      <intro-view></intro-view>
      <about-view></about-view>
      <services-view></services-view>
      <contact-view></contact-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>


<script>
import IntroView from "@/views/Intro.view";
import AboutView from "@/views/About.view";
import ServicesView from "@/views/Services.view";
import ContactView from "@/views/Contact.view";

import topnavComponent from "@/components/navigation/Topnav.component";
import footerComponent from "@/components/footer/Footer.component";
export default {
  name: "MainLayout",
  components: {
    topnavComponent,
    footerComponent,

    IntroView,
    AboutView,
    ServicesView,
    ContactView
  }
}
</script>

<style>
#components-layout > div:not(:first-of-type){
  min-height: 100vh;
  padding-top: 100px;
}
</style>