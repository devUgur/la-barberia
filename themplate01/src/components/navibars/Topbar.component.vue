<template>
  <div class="nav layout">
    <div class="logo content">
      <MiniLogoComponent></MiniLogoComponent>
    </div>

    <nav class="menu content">
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/location">LOCATION</router-link>
      <router-link to="/treatments">TREATMENTS</router-link>
    </nav>

    <div class="booking">
      <router-link to="/booking">BOOKING</router-link>
    </div>
  </div>
</template>


<script>
import MiniLogoComponent from "@/components/logo/MiniLogo.component";
export default {
  name: "TopbarComponent",
  components: { MiniLogoComponent },
}
</script>

<style scoped>

.layout{
  position: fixed;
  left: 0; top: 0; right: 0;
  display: flex;
  justify-content: space-between;
  place-items: center;

  z-index: 1000;
  height: 100px;
}

.logo{
  padding: 10px 20px;
  margin-left: 20px;
}

a{
  font-family: var(--nav-font-family);
  font-weight: bold;
  color: #e1e1e1;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.menu.content{
  display: flex;
  place-items: center;

  max-width: 230px;
  width: 100%;
  justify-content: space-between;
}
.booking{
  max-width: 250px;
  width: 100%;
}
</style>