<template>
  <div id="topnav-component" class="blur">
      <text-logo-component></text-logo-component>
      <full-pag-nav-btn-component></full-pag-nav-btn-component>
  </div>
</template>

<script>
import TextLogoComponent from "@/components/logos/TextLogo.component";
import FullPagNavBtnComponent from "@/components/navigation/FullPagNavBtn.component";
export default {
  name: "TopnavComponent",
  components: {
    TextLogoComponent,
    FullPagNavBtnComponent
  }
}
</script>

<style scoped>
#topnav-component{
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;
  height: 80px;
  width: calc(100% - 60px);

  display: flex;
  justify-content: space-between;
  place-items: center;

  padding: 0 30px;
  box-shadow: var(--box-shadow-2);
}
</style>