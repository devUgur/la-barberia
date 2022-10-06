<template>
  <div id="appointment-btn-component">
    <!-- <transition name="bounce"> -->
      <a class="router-link" onclick="return false;" @click="openPopup">Termin buchen</a>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "AppointmentBtnComponent"
}
</script>


<style scoped>
#appointment-btn-component{
  position: relative;
  width: 100%;
  max-width: 320px;
  min-height: 45px;
  text-align: center;
  background-color: #eed37a;
}

#appointment-btn-component a{
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
</style>