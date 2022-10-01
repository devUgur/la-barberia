<template>
  <div class="layout">
    <transition name="show">
      <div v-if="show" id="scrollToTopBtn" class="blur" @click="scrollToTop">
        <img src="@/assets/icons/arrow-up.png">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ScrollToTopBtnComponent",
  data(){
    return{
      show: false,
    }
  },
  computed: {
    scrollTop(){
      return this.$store.getters['style/getScrollTop'];
    }
  },
  watch: {
    scrollTop(newVal){
      if(newVal && newVal >= document.getElementById('intro').offsetHeight){
        this.show = true;
      }else{
        this.show = false;
      }
    }
  },
  methods: {
    scrollToTop(){
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>

.layout{
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  z-index: 700;
}
#scrollToTopBtn{

  padding: 12px 17px;

  /*
  background-color: rgba(18, 36, 35, 0.87);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
   */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#scrollToTopBtn img{
  width: 24px;
}
</style>