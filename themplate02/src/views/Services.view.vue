<template>
  <div id="services-view" class="view">
    <ViewTitleComponent :title="title" :trigger-name="'service'"></ViewTitleComponent>
    <div class="services-list">
      <div class="header title" v-if="show">
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

    <div class="products list">
      <div class="header title" v-if="show">
        <img src="@/assets/icons/products-icon.png">
      </div>
    </div>
  </div>
</template>

<script>
import ViewTitleComponent from "@/components/home/ViewTitle.component";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ServicesView",
  components: {
    ViewTitleComponent
  },
  data: () => {
    return{
      title: 'Dienstleisungen',
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
      //console.log(el.dataset.index)
      gsap.to(el, {
        scrollTrigger: {
          trigger: '#services-view',
          toggleActions: 'restart'
          //pin: true,
          //scrub: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        onComplete: done,
        delay: 0.5 + el.dataset.index * 0.2
      })
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout( () => {
      this.show = !this.show;
    }, 200)
  }
}
</script>

<style scoped>
#services-view{

  display: flex;
  flex-direction: column;
  place-items: center;




  color: var(--light-color);

}
.title{
  text-align: left;
  font-size: 52px;

  display: flex;
  justify-content: left;
  place-items: center;
}

.title img{
  height: 32px;
  border: 2px solid var(--light-color);
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 20px;
}

.header.title{
  display: flex;
  justify-content: center;
  place-items: center;
}

.services-list{
  max-width: 900px;
  width: calc(100% - 40px);
  padding: 0 20px;
}
.service{
  display: flex;
  justify-content: space-between;
  place-items: center;

  margin: 7.5px 20px;
  font-family: 'Spectral', serif;
  text-transform: uppercase;

  font-size: 16px;
}
.service .trimmer{
  border-bottom: 2px dotted var(--light-color);
  width: 100%;
  margin: 0 15px;
  height: 8px;

}

.service .price{
  color: var(--golden-color);
  font-weight: bolder;

  background-color: #111c1c;
}

.products.list{
  padding-top: 100px;
}
</style>