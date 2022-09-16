<template>
  <div id="devtool" :class="{ 'active': isActive }">
    <div class="devtool-header">

      <div></div>

      <div class="devtool-title"  @click="toggle()">
        devtool <img src="./tool.png">
      </div>

      <div class="devtool-settings-bar" v-if="isActive">
        <img class="bigger" src="@/assets/bigger-window.png">
        <img class="smaller" src="@/assets/smaller-window.png" @click="smallWindowSize()">
        <img class="cancle" src="@/assets/cancle-window.png" @click="toggle()">
      </div>
    </div>




    <div class="devtoolBody" v-if="isActive">
      <div class="devtoolContentItem">
        <div class="title">Devices</div>
        <div class="contentItem">
          <div class="device smallDevice" :class="{'active-device': activeDevice === 'small'}">Mobile Devices: 320px — 480px</div>
        </div>
        <div class="contentItem">
          <div class="device mediumDevice" :class="{'active-device': activeDevice === 'medium'}">iPads, Tablets: 481px — 768px</div>
        </div>
        <div class="contentItem">
          <div class="device largeDevice" :class="{'active-device': activeDevice === 'large'}">Small screens, laptops: 769px — 1024px</div>
        </div>
        <div class="contentItem">
          <div class="device desktopDevice" :class="{'active-device': activeDevice === 'desktop'}">Desktops, large screens: 1025px — 1200px</div>
        </div>
      </div>
      <div class="devtoolContentItem">

        <div class="title">Window Sizes</div>
        <div class="contentItem">
          Current client Height:
          <div class="value">{{this.currentWindowHeight}}</div> px
        </div>
        <div class="contentItem">
          Current client Width:
          <div class="value">{{this.currentWindowWidth}}</div> px
        </div>
      </div>

      <div class="devtoolContentItem">
        <div class="title">Eventlisteners</div>
        <div class="contentItem">
          <pre v-if="targetEvent">
            <code>
              {{targetEvent}}
            </code>
          </pre>
        </div>
      </div>

      <div class="devtoolContentItem">

        <div class="title">View Scroll Value</div>
        <div class="contentItem">
          Scroll Top:
          <div class="value">{{this.currentScrollTop}}</div> px
        </div>
        <div class="contentItem">
          Scroll Bottom:
          <div class="value">{{this.currentScrollBottom}}</div> px
        </div>
      </div>

      <div class="devtoolContentItem">
        <div class="title">Page Transition</div>
        <div class="contentItem">
          <div class="check">
            <label>
              <input type="radio" name="anim" value="fade" v-model="anim" /> Fade
            </label>
            <label>
              <input type="radio" name="anim" value="slide" v-model="anim" /> Slide
            </label>
            <label>
              <input type="radio" name="anim" value="slide-down" v-model="anim" /> Slide down
            </label>
            <label>
              <input type="radio" name="anim" value="grow-in" v-model="anim" /> Grow in
            </label>
            <label>
              <input type="radio" name="anim" value="grow-out" v-model="anim" /> Grow out
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:"uDevtoolComponent",
  data(){
    return{
      isActive: false,
      windowWidth: 0,
      windowHeight: 0,
      targetEvent: null,
      anim: null,
    }
  },
  methods:{
    toggle(){
      this.isActive = !this.isActive;
    },
    listenWindowsSize(){
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
      })
    },
    listenClick(){
      /*
      document.addEventListener('click', (event) => {
        //this.targetEvent = JSON.stringify(event);
        //console.log(event.target.)
      })
       */
    },
    smallWindowSize(){
      let devWindow = document.getElementById('devtool');
      devWindow.classList.remove('big-window');
      devWindow.classList.add('small-window');

    },
    bigWindowSize(){
      let devWindow = document.getElementById('devtool');
      devWindow.classList.remove('small-window');
      devWindow.classList.add('big-window');
    }
  },
  computed: {
    activeDevice(){
      if(this.windowWidth < 480){
        return 'small';
      }
      if(this.windowWidth < 768){
        return 'medium'
      }
      if(this.windowWidth < 1024){
        return 'large'
      }
      if(this.windowWidth >= 1025){
        return 'desktop'
      }
      return false;
    },

    currentWindowHeight(){
      return this.$store.getters['style/getWindowHeight'];
    },

    currentWindowWidth(){
      return this.$store.getters['style/getWindowWidth'];
    },

    currentScrollTop(){
      return this.$store.getters['style/getScrollTop'];
    }
  },
  mounted() {
    this.listenWindowsSize();
    this.listenClick();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');

:root {
  --activeGreenColor: springgreen;
  --white: #ffffff;
}
#devtool{
  color: white;
  position: fixed;
  background-color: rgba(21, 20, 20, 0.98);
  top: 100px;
  z-index: 2000;
  transition: all 0.5s;
  height: 30px;
  width: 100px;

  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  font-family: 'Cairo', sans-serif;

  text-align: center;


  left: 0;
  top: 50%;

  padding: 20px;

}
#devtool ::-webkit-scrollbar {
  width: 8px;


}
#devtool ::-webkit-scrollbar-thumb {
  background-color: lightgrey;
  border: 3px solid lightgrey;
  border-radius: 10px;
  height: 50%;
}

#devtool:hover{
  border-radius: 10px;
}
.devtoolBtn:hover{
  cursor: pointer;
}
.devtool-header{
  display: flex;
  justify-content: space-between;
  place-items: center;
  background-color: rgb(7, 7, 7);
  font-weight: bold;
  height: 30px;
  padding: 10px;
}
.devtool-title{
  display: flex;
  place-items: center;
}
.devtool-header img{
  height: 17px;
  margin: 5px;
}

.devtool-settings-bar{
  display: flex;
  place-items: center;
}

.devtool-settings-bar img{
  height: 22px;
  margin: 5px;
  padding: 3px;
}

.devtool-settings-bar img:hover{
  background-color: #275eb2;
  cursor: pointer;
  border-radius: 5px;
}

.devtool-settings-bar .cancle{
  height: 20px;
}
.active{
  height: calc(100% - 10px) !important;
  width: calc(100% - 10px) !important;
  background-color: orangered;
  margin: 0 auto;
  border-radius: 10px;

  left: 50% !important;
  top: 50%;
  transform: translate(-50%, -50%);
}

.small-window{
  height: calc(100% - 200px) !important;
  width: calc(100% - 20%) !important;
}
.big-window{

}

.devtoolBody{
  height: calc(100% - 40px);
  overflow-y: auto;
  padding: 10px;

}
.devtoolContentItem{
  padding: 10px;
  color: #e5e5ea;
  border-bottom: 2px solid rgb(45, 44, 44);

  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
}
.devtoolContentItem .title{
  font-weight: lighter;
  font-size: 18px;
  text-transform: uppercase;
}
.devtoolContentItem .contentItem{
  font-size: 17px;
  margin-top: 5px;
  padding-left: 10px;
  max-width: 800px;
  width: 100%;
}
.active-device{
  color: var(--activeGreenColor);
}
.contentItem{
  display: flex;
}
.contentItem .value{
  padding-left: 3px;
  padding-right: 3px;
  color: var(--activeGreenColor);
}
.device{
  transition: all 0.5s !important;
}
</style>