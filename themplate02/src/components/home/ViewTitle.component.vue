<template>
  <div class="viewTitle">
    <div class="left"></div>

      <div class="text" ref="target">
        <transition
            appear
            @before-enter="beforeEnterAnimation"
            @enter="enterAnimation"

        >
          <div v-if="showTitle" class="value">{{ title }}</div>
        </transition>

      </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";
import { onMounted, ref } from 'vue';

import SplitType from 'split-type'
import { v4 as uuidv4 } from 'uuid';

const uniqueId = require('lodash.uniqueid');

export default {
  name: "ViewTitleComponent",
  props: ['title', 'triggerName'],
  data(){
    return {
      showTitle: false,
    }
  },
  mounted() {
    console.log('#'+this.triggerName);

    gsap.registerPlugin(ScrollTrigger);
    // gsap.to triggers animations

    let options = {
      //root: document.querySelector('#app-view'),
      // rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(([entry]) => {

      // If the element to watch is intersecting within the threshold
      if (entry && entry.isIntersecting) {
        this.showTitle = true;
        //console.log("Intersection Observer entered -> ", this.title);
      }

      // If the element is not intersecting, run the (optional) unintersecting callback
      else {
        this.showTitle = false;
        //console.log("Intersection Observer leaved -> ", this.title);
      }
    }, options);

    observer.observe(this.$refs.target);

  },
  methods: {
    animateTitle(){
      const split = new SplitType(this.$refs.text);
      gsap.from(split.chars, {
        opacity: 0,
        duration: 1,
        ease: "circ.out",
        y: 80,
        //stragger: 0.02,
      });
    },
    splitAnimation() {
      let splitMessage = new SplitType(this.$refs.text);

      const tl = gsap.from(this.splitMessage.chars, {
        opacity: 0,
        stagger: 0.05,
      })
    },

    beforeEnterAnimation(el){
      el.style.opacity = '0';
    },
    enterAnimation(el){
      //let splitMessage = new SplitType(el);

      const tl = gsap.to(el, {
        opacity: 1,
        stagger: 0.20,
        duration: 1
      })
    },
    afterEnterAnimation(el){}

  },

}
</script>

<style scoped>
.viewTitle{
  height: 100px;
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  place-items: center;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: clamp(2rem, 6vw, 3rem);

}

.viewTitle .text{
  width: 100%;
  text-align: center;
  color: var(--palette-1-color-2);
  margin: 0 20px;
}




.viewTitle .left{
  width: 100%;
  border-bottom: 1px solid var(--palette-1-color-2);
}

.viewTitle .right{
  width: 100%;
  border-bottom: 1px solid var(--palette-1-color-2);
}

.text .value{
}

</style>