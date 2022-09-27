<template>
  <div id="devView">
    <section class="window">
      <div class="title">Window</div>

      <div class="content">
        <div class="name">Window width</div>
        <div class="value">{{ windowWidth}}</div>
      </div>

      <div class="content">
        <div class="name">Window height</div>
        <div class="value">{{ windowHeight }}</div>
      </div>

    </section>

    <section class="window">
      <div class="title">Fullpage Menu</div>

      <div class="content">
        <div class="name">is open</div>
        <div class="value">{{ fullpageMenuIsOpen }}</div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: "DevView",
  computed:{
    windowWidth(){
      return this.$store.getters['style/getWindowWidth'];
    },
    windowHeight(){
      return this.$store.getters['style/getWindowHeight'];
    },
    fullpageMenuIsOpen(){
      return this.$store.getters['menu/isOpen'];
    }
  }

}
</script>

<style scoped>
#devView{
  padding: 0 20px;
  padding-top: 160px;
  min-height: calc(100vh - 160px);
}

section{
  padding: 20px;
}

section .title{
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 1px;
}

section .content{
  display: flex;
  padding: 0 10px;
  padding-top: 15px;
}
</style>