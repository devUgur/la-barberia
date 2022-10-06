<template>
  <router-view/>
</template>

<script>
export default {
  data(){
    return {
      title: "La Barberia"
    }
  },
  created() {
    document.title = this.title;
  }
}
</script>

<style>
@import './styles/transitions.css';
@import "./styles/fonts.css";
@import "./styles/scrollbar.css";
@import "./styles/main.css";

:root{
  --logo-color: #cfc6fd;
  --dark-green-bg: #122423;
  --light-text-color: #e5e5e5;
  --dsas-color: #3a3d3d;
  --light-color: #b9b0a3;
  --active-nav-color: #d54646;
  --golden-color:  #eed37a;
  --green-img-filter: hue-rotate(300deg);

  /* box-shadows */
  --box-shadow-1: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  --box-shadow-2: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  --box-shadow-3: rgba(0, 0, 0, 0.35) 0px 5px 15px;;

  /* color palette 1 */
  --palette-1-color-1: #DAD7CD;
  --palette-1-color-2: #A3B18A;
  --palette-1-color-3: #588157;
  --palette-1-color-4: #3A5A40;
  --palette-1-color-5: #344E41;
}

html {
  /* scroll-behavior: smooth; */
}

body{
  background: var(--dark-green-bg);
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

#app{
  font-family: 'Arapey', serif;
  color: var(--light-text-color);
}
</style>
