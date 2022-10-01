<template>
  <div id="mini-logo">
    <div class="title" id="title" ref="title" >LA BARBERIA</div>
    <div style="margin: 0 30px;"><img class="head" src="@/assets/labarberia-logo-whead.png"></div>
    <img v-if="isSmalled" ref="undertitle" class="undertitle" src="@/assets/labarberia-logo-untertitle.png">
  </div>
</template>

<script>
import CircleType from 'circletype';

export default {
  name: "MiniLogoComponent",
  mounted() {
    console.log("mounted");
    this.curvedTitle();
  },
  methods: {
    curvedTitle(){
      let circleType = new CircleType(this.$refs.title);
      circleType.radius(50);
      console.log("curvedTitle");
    }
  },
  data(){
    return{
      isSmalled: false,
    }
  }
}
</script>

<style scoped>

.title{
  font-family: var(--abril-font-family);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
  object-fit: scale-down;
  color: var(--logo-color);
  margin-bottom: -20px;
  color: #e1e1e1;
}

img.head{
  height: 35px;
}

img.undertitle{
  max-width: 110px;
  margin-top: -50px;
}

</style>