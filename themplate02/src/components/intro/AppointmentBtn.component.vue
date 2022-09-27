<template>
  <div id="appointmentBtn" class="booking">
    <a class="router-link" onclick="return false;" @click="openPopup">Termin buchen</a>
  </div>
</template>
<script>
export default {
  methods: {
    openPopup(){
      window.open('http://localhost:8080/booking','popup','width=600,height=600');
    }
  }
}
</script>
<style scoped>

#appointmentBtn{
  max-width: 200px;
  width: 100%;
}

.booking{
  text-align: center;
  border: 2px solid #eed37a;
}
.booking a{
  font-size: 22px;
}
</style>