<template>
  <div id="nav-btn">
    <svg  class="ham ham2" viewBox="0 0 100 100" width="80">
      <path
          class="line top"
          d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381" />
      <path
          class="line middle"
          d="m 30,50 h 40" />
      <path
          class="line bottom"
          d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381" />
    </svg>
    <div>
      MENU
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullPageNavBtn',
}
</script>

<style scoped>
#nav-btn{
  display: flex;
  place-items: center;
  justify-content: center;
}
svg{
  height: 50px;
}
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #e5e5e5;
  stroke-width: 5;

}

.ham2 .top {
  stroke-dasharray: 40 121;
}
.ham2 .bottom {
  stroke-dasharray: 40 121;
}
.ham2.active .top {
  stroke-dashoffset: -102px;
}
.ham2.active .bottom {
  stroke-dashoffset: -102px;
}

</style>