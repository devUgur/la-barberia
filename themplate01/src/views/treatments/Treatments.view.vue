<template>
  <div id="treatments-view">
    <div class="treatments-list">
      <div class="header title"> Unsere Behandlungen</div>
      <div v-for="treatment in treatments" :key="treatment.id" class="treatment">
        <div class="name">{{treatment.name}}</div>
        <div class="trimmer"></div>
        <div class="price">{{treatment.price}}€</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreatmentsView",
  data(){
    return {
      treatments: [
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

#treatments-view{

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  max-width: 900px;
  width: 100%;

  color: #e1e1e1;

  margin: 200px auto;
}

.treatments-list{
  max-width: 900px;
  width: 100%;

  padding: 20px;
}
.treatment{
  display: flex;
  justify-content: space-between;
  font-family: var(--raleway-font-family);
  font-size: 22px;

  max-width: 900px;


  margin: 10px 20px;
  width: calc(100% - 40px);
}

.treatment .name{
  font-family: 'Spectral', serif;
  text-transform: uppercase;
}

.treatment .trimmer{
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