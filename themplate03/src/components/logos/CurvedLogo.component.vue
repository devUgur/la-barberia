<template>
  <div id="curved-logo">
    <img src="@/assets/logos/logo-white-trans.png" class="blur">
  </div>
</template>

<script>
export default {
  name: "CurvedLogoComponent",

}
</script>

<style scoped>
#curved-logo{
  max-width: 270px;
  width: 100%;
  min-height: 50px;
}
#curved-logo img{

  width: calc(100% - 40px);
  height: auto;
  padding: 15px;

  border-radius: 50%;
  border: 5px solid var(--light-color);
  box-shadow: var(--box-shadow-3);

}
</style>