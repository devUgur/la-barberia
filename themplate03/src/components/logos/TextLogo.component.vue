<template>
  <div id="text-logo-component">
    {{ documentTitle }}
  </div>
</template>

<script>
export default {
  name: "TextLogoComponent",
  computed: {
    documentTitle(){
      return document.title;
    }
  }
}
</script>

<style scoped>
#text-logo-component{
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: clamp(18px, 4.5vw, 26px);

  border-top: solid 1px var(--light-color);
  border-bottom: solid 1px var(--light-color);
}
</style>