<template>
  <div id="about" class="view">

    <ViewTitleComponent :trigger-name="'about-us'" :title="'Über Uns'" ></ViewTitleComponent>

    <div class="container container1">

      <div class="flex-container">

        <transition appear name="fade-right">
          <div class="about-image" v-if="showContent1">
            <div class="title"> Geschäftsführer & Meister der Barbiere </div>
            <img src="@/assets/images/torben01.jpeg">
          </div>
        </transition>

        <transition appear name="fade-left">
          <div class="about-text" v-if="showContent1">
            <div class="about-title">ALTBEWÄHRTE PERFEKTION IN MODERNER INTERPRETATION</div>
            <div class="value">
              Yves BUBERT, MITTLERWEILE 30 JAHRE IM BERUF, HAT EIN GESPÜR FÜR DEN ZEITGEIST.
              SEIN UNERMÜDLICHES ENGAGEMENT UND SEIN EINSATZ FÜR DIE MODEWELT HAT SICH GELOHNT,
              DENN ER HAT SICH ALS „ENFANT TERRIBLE“ DER BRANCHE EINEN NAMEN GEMACHT.
              DIE ENTSCHEIDUNG SEINE KRAFT AUF SEIN UNTERNEHMEN ZU FOKUSSIEREN,
              WAR NACH 15 JAHREN AKTIVITÄT FÜR L’ORÉAL BEWUSST GEWÄHLT.
              <br> <br>
              DURCH SEIN GESPÜR FÜR DIE INDIVIDUELLE WIRKUNG DER PERSÖNLICHKEIT LEGT ER
              DEN SCHWERPUNKT BEI DER BERATUNG AUF DIE KOMMUNIKATION UND DIE KÖRPERSPRACHE.
              DIE FÄHIGKEIT, GEFÜHLE SICHTBAR ZU MACHEN, IST TEIL DES GANZEN. ES IST SEINE PASSION.
            </div>
          </div>
        </transition>
      </div>
    </div>
    {{ showContent1 }} , {{ showContent2 }} , {{deviceMode}}
    <div class="container container2">

      <div class="flex-container">
        <transition appear name="fade-right">
          <div class="about-image" v-if="showContent2">
            <div class="title"> Barbier </div>
            <img src="@/assets/images/buni02.jpeg">
          </div>
        </transition>

        <transition appear name="fade-left">
          <div class="about-text" v-if="showContent2">
            <div class="about-title">BÜNYAMIN AKSOY</div>
            <div class="value">
              Bunyamin Aksoy ist ein kreativer, fokussierter und immer freundlicher Barbier,
              der sein Handwerk liebt. Er ist spezialisiert auf Qualität und Wertschätzung für seine Gäste.
              Seine Selbstsicherheit und Kreativität machen ihn zu einem jungen, gutaussehenden Babier.
              Old school in seiner Ausstrahlung, ist er immer gesprächig und die Haare und Bärte, die er verleiht,
              sind von maximaler Frische. Die Stunde genießen ist für Bunyamin Aksoy keine Frage – es ist eine Aussage.
              <br> <br>
              DURCH SEIN GESPÜR FÜR DIE INDIVIDUELLE WIRKUNG DER PERSÖNLICHKEIT LEGT ER
              DEN SCHWERPUNKT BEI DER BERATUNG AUF DIE KOMMUNIKATION UND DIE KÖRPERSPRACHE.
              DIE FÄHIGKEIT, GEFÜHLE SICHTBAR ZU MACHEN, IST TEIL DES GANZEN. ES IST SEINE PASSION.
            </div>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import ViewTitleComponent from "@/components/home/ViewTitle.component";

export default {
  name: "AboutView",
  components: {
    ViewTitleComponent
  },
  data(){
    return{
      showContent1: false,
      showContent2: false,
    }
  },
  computed:{
    deviceMode(){
      return this.$store.getters['style/getDeviceMode'];
    }
  },
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {

      // If the element to watch is intersecting within the threshold
      if (entry && entry.isIntersecting) {
        if(entry.target.classList.contains('container1')){
          setTimeout( () => {

          }, 500);

          this.showContent1 = true;
        }

        if(entry.target.classList.contains('container2')){
          setTimeout( () => {

          }, 500);

          this.showContent2 = true;
        }

        //console.log("Intersection Observer entered -> ", this.title);
      }

      // If the element is not intersecting, run the (optional) unintersecting callback
      else {

        if(this.deviceMode.maxWidth === null){
          if(entry.target.classList.contains('container1')){
            this.showContent1 = false;
          }

          if(entry.target.classList.contains('container2')){
            this.showContent2 = false;
          }
        }

        //console.log("Intersection Observer leaved -> ", this.title);
      }
    }, {
      threshold: 0.3
    });

    let containers = document.querySelectorAll('#about .container');
    containers.forEach( container => {
      observer.observe(container);
    })
  }
}
</script>

<style scoped>
#about{
  display: flex;
  flex-direction: column;
  gap: 30px;

  min-height: 150vh;

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-evenly;


}

.container .title{
  background-color: #111c1c;
  padding: 15px 10px;
  font-size: 20px;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container1{
  width: calc(100% - 60px);
  min-height: 800px;
}

.container2{
  width: calc(100% - 60px);
  min-height: 400px;
}

.about-image{
  height: auto;
  flex: 1 300px;
}

.about-image img{
  height: auto;
  width: 100%;
}

.about-text{
  width: 100%;
  flex: 1 300px;
}

.about-text .about-title{
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--light-color);

}

.about-text .value{
  padding-top: 20px;
  color: var(--light-color);
  font-size: 16px;
  text-transform: uppercase;
}
</style>