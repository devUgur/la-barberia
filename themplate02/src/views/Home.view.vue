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
  },
  mounted(){
    const observer = new IntersectionObserver(([entry]) => {

      // If the element to watch is intersecting within the threshold
      if (entry && entry.isIntersecting) {
        console.log("Intersection Observer entered -> ", entry.target.id);

        // save current view name to nav store
        this.$store.dispatch('nav/handleCurrentView', entry.target.id);

        let name = 'La Barberia';
        if(entry.target.id === 'intro'){
          document.title = name;
        }
        if(entry.target.id === 'about-us'){
          document.title = name + ' - Über Uns';
        }
        if(entry.target.id === 'service'){
          document.title = name + ' - Dienstleistungen';
        }
        console.log(entry.target.id)
        if(entry.target.id === 'contact'){
          document.title = name + ' - Kontakt';
        }
      }

      // If the element is not intersecting, run the (optional) unintersecting callback
      else {
        console.log("Intersection Observer leaved -> ", entry.target.id);
      }
    }, {
      threshold: 0.3,
    });

    const sections = document.querySelectorAll('#home-view section');
    sections.forEach( section => {
      observer.observe(section);
    })
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