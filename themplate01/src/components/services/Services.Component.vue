<template>
  <div id="services-view">
    <div class="services-list">
      <div class="header title" v-if="show">
        Unsere Leistungen
        <img src="@/assets/icons/comb-4.png">
      </div>
      <transition-group
          appear
        tag="div"
        v-if="show"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <div v-for="(service, index) in services" :key="service.name" class="service" :data-index="index">
          <div class="name">{{service.name}}</div>
          <div class="trimmer"></div>
          <div class="price">{{service.price}}€</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "ServicesComponent",
  data(){
    return {
      services: [
        { name: 'Haarschnitt' , price: 35 },
        { name: 'Bartrasur' , price: 30 },
        { name: 'Nassrasur' , price: 20 },
        { name: 'Fadecut' , price: 20 },
      ],
      show: false
    }
  },
  methods: {
    beforeEnter(el){
      el.style.opacity = 0;
      el.style.transform = 'translateY(100px)';
    },
    enter(el, done){
      console.log(el.dataset.index)
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay:  el.dataset.index * 0.2
      })
    }
  },
  mounted() {
    setTimeout( () => {
      this.show = !this.show;
    }, 200)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap');

#services-view{

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;


  width: 100%;

  color: #e1e1e1;

  height: 100vh;
  width: 100%;
}

.services-list{
  max-width: 900px;
  width: 100%;
  padding: 20px;
}
.service{
  display: flex;
  justify-content: space-between;
  place-items: center;

  margin: 7.5px 20px;
  font-family: 'Spectral', serif;
  text-transform: uppercase;

  font-size: 20px;
}

.service .name{
}

.service .price{
}

.service .trimmer{
  border-bottom: 2px solid;
  width: 100%;
  margin: 0 15px;
  height: 18px;

}
.title{
  text-align: left;
  font-family: var(--abril-font-family);
  font-size: 52px;
  margin: 20px;

  display: flex;
  justify-content: left;
  place-items: center;
}

.title img{
  height: 64px;
}
</style>