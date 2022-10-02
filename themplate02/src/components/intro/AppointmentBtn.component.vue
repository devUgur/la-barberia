<template>
  <div id="appointmentBtn" class="booking">
    <transition name="bounce">
      <a v-if="show" class="router-link" onclick="return false;" @click="openPopup">Termin buchen</a>
    </transition>
  </div>
</template>
<script>
export default {
  props: ['show'],
  methods: {
    openPopup(){
      window.open('http://localhost:8080/booking','popup','width=600,height=600');
    }
  }
}
</script>
<style scoped>

#appointmentBtn{
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 35px;
  min-width: 100px;
}


.booking{
  text-align: center;

}
.booking a{
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  font-size: 14px;
  color: var(--light-text-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: #111c1c;

  display: flex;
  justify-content: center;
  place-items: center;

  border: 2px solid var(--light-color);
}

.booking a:hover{
  cursor: pointer;
  color: #eed37a;
}


a{
  /*transition-delay: 1s;*/
}


</style>