<template>
  <div id="small-logo">
    <div class="title" id="title">LA BARBERIA</div>
    <div style="margin: 0 30px;"><img class="head" src="@/assets/labarberia-logo-whead.png"></div>
    <img class="undertitle" src="@/assets/labarberia-logo-untertitle.png">
  </div>
</template>

<script>
import CircleType from 'circletype';

export default {
  name: "SmallLogoComponent",
  mounted() {
    console.log("mounted");
    const circleType = new CircleType(document.querySelector('#small-logo .title'));
    circleType.radius(90);


  }
}
</script>

<style scoped>
#small-logo{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  color: var(--logo-color);
  max-height: 150px;
}

.title{
  font-family: var(--abril-font-family);
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 5px;
  object-fit: scale-down;
  color: var(--logo-color);
  margin-bottom: -30px;
}

img.head{
  height: 70px;
  /*
  max-width:100%;
  object-fit: scale-down;
  */
}


img.undertitle{
  max-width: 160px;
  /*
  max-width: 100%;
  object-fit: scale-down;
   */
}


</style>