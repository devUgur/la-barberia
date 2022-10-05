<template>
  <div id="ContactView" class="view">
    <ViewTitleComponent :title="title" :trigger-name="'contact'"></ViewTitleComponent>
    <div class="container layout">
      <div class="text-call"> Sie haben uns was zum Mitteilen?</div>
      <div class="flex-layout">
        <form class="form" method="post" action="https://formsubmit.co/ugur44ist@gmail.com">
          <div class="form-input">
            <div class="input-name">Name*</div>
            <input type="text" name="Name" class="input-value" required>
          </div>
          <div class="form-input">
            <div class="input-name">Email*</div>
            <input type="email" name="Email" class="input-value" required>
          </div>
          <div class="form-input">
            <div class="input-name">Nachricht*</div>
            <textarea type="text" name="Message" class="input-value" required></textarea>
          </div>
          <div class="form-submit">
            <button> senden </button>
          </div>
        </form>
        <div class="image">
          <!-- <img src="@/assets/instagram/09.jpg"> -->
        </div>
      </div>
    </div>

    <InstagramGalleryComponent></InstagramGalleryComponent>
    <!-- <GsapGallery1></GsapGallery1> -->
    <div class="section-icon">
      <img src="@/assets/icons/worldwide.png">
    </div>
    <div class="leaflet">
      <LeafletComponent></LeafletComponent>
    </div>


  </div>
</template>

<script>
import ViewTitleComponent from "@/components/home/ViewTitle.component";
import LeafletComponent from "@/components/leaflet/Leaflet.component";
import InstagramGalleryComponent from "@/components/instagram/InstagramGallery.component";
import GsapGallery1 from "@/components/gallery/GsapGallery1";
export default {
  name: "ContactView",
  components: {
    ViewTitleComponent,
    LeafletComponent,
    InstagramGalleryComponent,
    GsapGallery1
  },
  data(){
    return{
      title: 'Kontakt'
    }
  }
}
</script>
<style scoped>
.layout{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.flex-layout{
  display: flex;
  justify-content: center;
  gap: 30px;

  width: 100%;
  flex-wrap: wrap;

  min-height: 500px;
}

.form{
  position: relative;

  width: 100%;

  max-height: 500px;
  height: 100vh;
  flex: 1 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image{
  max-width: 540px;
  width: 100%;
  min-height: 500px;
  background-image: url("@/assets/images/eingang01.jpeg");
  background-size: cover;
  background-position: center;
  flex: 1 200px;
}

.image:hover{
  filter: var(--green-img-filter);
}

.leaflet{
  width: calc(100% - 60px);
  height: 500px;
  background-color: #111c1c;

  margin: 30px auto;
  margin-top: 0;

  /*border: 2px solid var(--light-color);*/
}

.section-icon{
  height: 100px;
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;

  margin-top: 100px;
}

.section-icon img{
  margin: 0 auto;
  height: 32px;
  padding: 15px;
  border-radius: 50%;
  border: 2px solid var(--light-color);
}

textarea, input{
  background: #111c1c;
  color: var(--light-color);
  border: none;
  border-radius: 0;
  font-family: var(--abril-font-family);
  border-bottom: 1px solid #111c1c;
  font-size: 16px;
}

textarea:focus, input:focus{
  outline: none;
  border-bottom: 1px solid var(--light-color);
  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}

.form-input{
  margin: 10px 0;
}

.form-input input{
  padding: 10px;
  width: calc(100% - 25px);
}

textarea{
  padding: 10px;
  width: calc(100% - 25px);
  resize: none;

  height: 100px;
}

button{
  background-color: #111c1c;
  border: none;
  padding: 10px 30px;
  color: #eed37a;
  cursor: pointer;
  margin: 10px 0;

  font-family: var(--abril-font-family);
  font-size: 16px;

  text-transform: uppercase;
}

button:hover{

  text-decoration: underline;
}
</style>