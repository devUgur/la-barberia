<template>
  <TopbarComponent></TopbarComponent>
  <router-view/>
</template>

<script>
import TopbarComponent from '@/components/navibars/Topbar.component';
export default{
  components: {
    TopbarComponent,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body{
  margin: 0;
  background: #151515;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}



:root{
  --logo-color: #38344b;
  --abril-font-family: 'Abril Fatface', cursive;
  --nav-font-family: 'Montserrat', sans-serif;
}

</style>
