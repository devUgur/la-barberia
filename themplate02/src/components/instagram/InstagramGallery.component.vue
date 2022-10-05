<template>
  <div id="instagram-gallery">
    <div class="title">
      <div class="trimmer"></div>
      <div class="layout">
        <div ref="title" @click="animateTitle()" class="value">Folge Sie unserer Reise</div>
      </div>
      <div class="trimmer"></div>
    </div>

    <InstagramFeed
        :count="12"
        :accessToken="accessToken"
        :pagination="true"
        :caption="true"
    />
  </div>

  <div class="instagram-tag social-tag">
    <div class="instagram-icon icon"></div>
    <div ref="instagramName" class="text">la_barberia_dortmund</div>
  </div>
  <!--
  <div class="instagram-tag social-tag">
    <div class="facebook-icon icon"></div>
    <div ref="facebookName" class="text">la_barberia_dortmund</div>
  </div>
  -->
</template>

<script>

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default {
  name: "InstagramGallery",
  computed: {
    accessToken(){
      return this.$store.getters['instagram/accessToken'];
    },
  },
  data: () => {
    return {
      titleAnimation: false,
      _animateTitle: false,
    }
  },
  methods: {
    async animateTitle(){
      let splittedText = new SplitType(this.$refs.title);
      this.titleAnimation = await gsap.from(splittedText.chars, {
        scrollTrigger: {
          trigger: '#instagram-gallery',
          // once: true,
          scrub: false,
          toggleActions: "play none none reverse",
          start: "top 60%",
        },
        duration: 0.7,
        //delay: 0.3,
        ease: "circ.out",
        y: -220,
        stagger: 0.03,

      });

      let splittedText2 = new SplitType(this.$refs.instagramName);
      await gsap.from(splittedText2.chars, {
        scrollTrigger: {
          trigger: this.$refs.instagramName,
          // once: true,
          scrub: false,
          toggleActions: "play none none reverse",
          start: "top 70%",
        },
        duration: 0.3,
        //delay: 0.3,
        ease: "circ.out",
        x: -250,
        stagger: 0.03,

      });

      /*
      let splittedText3 = new SplitType(this.$refs.facebookName);
      await gsap.from(splittedText3.chars, {
        scrollTrigger: {
          trigger: this.$refs.facebookName,
          // once: true,
          scrub: false,
          toggleActions: "play none none reverse",
          start: "top 70%",
        },
        duration: 0.3,
        //delay: 0.3,
        ease: "circ.out",
        x: -250,
        stagger: 0.03,

      });
       */
    },
    restartAnimation(){
      if(this.titleAnimation){
        console.log(this.titleAnimation)
        this.titleAnimation.start();
      }
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.animateTitle();

    /*
    const observer = new IntersectionObserver(([entry]) => {

      // If the element to watch is intersecting within the threshold
      if (entry && entry.isIntersecting) {
        this._animateTitle = true;
      }

      else {
        this._animateTitle = false;
      }
    }, {
      threshold: 0
    });

    let containers = document.querySelectorAll('#instagram-gallery .title');
    containers.forEach( container => {
      observer.observe(container);
    })

     */
  },
  watch: {
  }
}
</script>


<style scoped>
#instagram-gallery{
}

.title{
  display: flex;
  justify-content: space-between;
  place-items: center;
  margin: 2rem;
  font-size: clamp(2rem, 6vw, 3rem);
  overflow: hidden;
  margin-top: 230px;
  margin-bottom: 100px;
  text-align: center;

  color: #eed37a;

  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
}

.title .layout{
  max-width: 380px;
  min-width: 220px;
  width: calc(90%);

}

.title .value{
  width: 100%;
  overflow: hidden;
}

.trimmer{
  height: calc(50% - 2px);
  border-bottom: 1px solid var(--light-color);
  max-width: 420px;
  width: calc(100% - 30px);
}
.trimmer:first-of-type{
  margin-right: 30px;
}
.trimmer:last-of-type{
  margin-left: 30px;
}

.social-tag{
  display: flex;
  justify-content: center;
  place-items: center;
  gap: 20px;
  color: var(--light-color);
  font-weight: bolder;
}

.instagram-tag{
  position: relative;
  margin: 0 auto;

  text-align: center;
  font-size: 22px;
  letter-spacing: 1px;

  max-width: 500px;


}
.icon{
  height: 22px;
  width: 22px;
  background-size: 100%;
  object-fit: fill;
  color: var(--light-color);
}

.instagram-tag .instagram-icon{

  background-image: url("@/assets/icons/instagram3.png");

}

.facebook-icon{
  background-image: url("@/assets/icons/fb1.png");
}
.instagram-tag .text{
  overflow: hidden;
}
</style>

<style>
.instagram-wrapper {
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}
.instagram-gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  padding-bottom: 3rem;

  max-width: 900px;
  margin: auto;
}
.instagram-gallery-item {
  position: relative;
  flex: 1 0 16rem !important;
  margin: 1rem !important;
  color: #fff;
  cursor: pointer;
}
.instagram-gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>