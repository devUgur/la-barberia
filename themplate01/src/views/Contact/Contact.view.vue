<template>
  <div id="contactView">
    <transition name="bounce">
      <h1 v-if="show">Hast du noch Fragen?</h1>
    </transition>

    <transition name="grow-in">
      <img v-if="show" src="@/assets/instagram/09.jpg">
    </transition>

    <div class="container">
      <div class="left">
        <div></div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data(){
    return{
      show: false,
      showImg: false,
    }
  },
  mounted() {
    setTimeout( () => {
      this.show = !this.show;
    }, 300)
  }
}
</script>


<style scoped>
#contactView{
  min-height: 100vh;
  padding-top: 130px;
  font-family: 'Spectral', serif;
}

.container{
  display: flex;
  flex-wrap: wrap;
}

img{
  height: 600px;
}
</style>