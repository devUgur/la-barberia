<template>
  <div class="viewTitle">
    <div class="left"></div>

      <div class="text" ref="target">
        <div v-if="show" ref="text" class="value animated-component">{{ title }}</div>
      </div>
    <div class="right"></div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';

export default {
  name: "ViewTitleComponent",
  props: ['title'],
  data(){
    return{
      show: true
    }
  },
  methods: {
    splitTextAnimation() {
      this.splitMessage = new SplitText(this.$refs.text, { type: 'chars'})

      const tl = gsap.from(this.splitMessage.chars, {
        opacity: 0,
        stagger: 0.05
      })
    }
  },
  mounted() {
    /*
    setInterval(() => {
      this.show = !this.show;
    }, 2000);
     */
  },
  watch: {
    show(newVal){
      if(newVal){
        this.splitTextAnimation();
      }
    }
  }
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
  font-size: 22px;

}

.viewTitle .text{
  width: 100%;
  text-align: center;
  color: var(--light-color);
  margin: 0 20px;

}

.viewTitle div{
  transition: all 0.7s;
}

.viewTitle{
  transition: all 0.7s;
}

.viewTitle .left{
  width: 100%;
  border-bottom: 1px solid var(--light-color);
  transition: all 0.7s;
}

.viewTitle .right{
  width: 100%;
  border-bottom: 1px solid var(--light-color);
}

.text .value{
}

</style>