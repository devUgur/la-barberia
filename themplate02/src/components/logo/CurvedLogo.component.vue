<template>
  <div class="curved-logo">
    <img src="@/assets/logo/logo-trans-light.png">
  </div>
</template>

<script>
export default {
  name: "CurvedLogoComponent",

}
</script>

<style scoped>
.curved-logo{
  max-width: 220px;
  width: 100%;
}
.curved-logo img{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: calc(100% - 32px);

  height: auto;
  padding: 10px;

  background-color: rgba(8, 14, 14, 0.85);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  border-radius: 50%;
  border: 4px solid var(--light-color);

  box-shadow: var(--box-shadow-2);
}
</style>