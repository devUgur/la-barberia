<template>
  <div id="services-view">
    <div class="services-list">
      <div class="header title"> Unsere Behandlungen</div>
      <div v-for="service in services" :key="service.id" class="service">
        <div class="name">{{service.name}}</div>
        <div class="trimmer"></div>
        <div class="service">{{service.price}}€</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreatmentsView",
  data(){
    return {
      services: [
        { name: 'Haarschnitt' , price: 35 },
        { name: 'Bartrasur' , price: 30 },
        { name: 'Nassrasur' , price: 20 },
        { name: 'Fadecut' , price: 20 },
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap');

#services-view{

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  max-width: 900px;
  width: 100%;

  color: #e1e1e1;

  margin: 200px auto;
}

.services-list{
  max-width: 900px;
  width: 100%;
  padding: 20px;
}
.service{
  display: flex;
  justify-content: space-between;
  place-items: center;
  font-family: var(--raleway-font-family);
  font-size: 22px;

  margin: 5px 20px;

}

.service .name{
  font-family: 'Spectral', serif;
  text-transform: uppercase;
}

.service .trimmer{
  border-bottom: 2px solid;
  width: 100%;
  margin: 0 15px;
  height: 18px;

}
.title{
  text-align: left;
  font-family: var(--abril-font-family);
  font-size: 300%;
  margin: 20px;
}
</style>