<template>
  <div id="about" class="view">

    <ViewTitleComponent :title="'Über Uns'" ></ViewTitleComponent>

    <div class="container">

      <div class="flex-container">
        <div class="about-image">
          <div class="title"> Geschäftsführer & Master of Barbiers </div>
          <img src="@/assets/images/torben01.jpeg">
        </div>

        <div class="about-text">
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
      </div>
    </div>

    <div class="container">

      <div class="flex-container">
        <div class="about-image">
          <div class="title"> Barbier </div>
          <img src="@/assets/images/buni02.jpeg">
        </div>

        <div class="about-text">
          <div class="about-title">BÜNYAMIN AKSOY</div>
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
  mounted() {

  }
}
</script>

<style scoped>
#about{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.container .title{
  background-color: #111c1c;
  padding: 15px 10px;
  font-size: 20px;
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
  font-size: 15px;
}
</style>