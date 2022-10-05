<template>
  <div id="footer">
    <div class="content">
      <div class="top">
        <div class="logo">
          <CurvedLogoComponent></CurvedLogoComponent>
          <div><router-link to="/impressum">Impressum</router-link></div>
          <div><router-link to="/datenschutz">Datenschutz</router-link></div>
        </div>
        <div class="opening">
          <div class="title"> Öffnungszeiten </div>
          <div class="date" v-for="date in oeffnungszeiten">
            <div class="day">{{ date.tag }}</div>
            <div class="time">{{ date.uhrzeit }}</div>
          </div>
        </div>
        <div class="address">
          <div>
            <div class="title"> Adresse </div>
            <div class="content">Hohe Str. 11, <br> 44139 Dortmund</div>
          </div>

          <div>
            <div class="title"> Telefon </div>
            <div class="content">0231 95018336</div>
          </div>

          <div>
            <div class="title"> Mobile & Whatsapp </div>
            <div class="content">0231 95018336</div>
          </div>
        </div>
        <div class="socialmedia">
          <div>
            <div class="title"> Sozialmedia </div>
            <div class="content">0231 95018336</div>
          </div>


          <div>
            <div class="title"> Email </div>
            <a href = 'mailto:my@email?body="Yourbody"&subject="a subject".com'>service@la-barberia.de</a>
          </div>



          <AppointmentBtnComponent :show="true"></AppointmentBtnComponent>
        </div>
      </div>
      <div class="bottom">
        <div class="text">
          ©2020 Fort Worth Barber Shop.
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CurvedLogoComponent from "@/components/logo/CurvedLogo.component";
import AppointmentBtnComponent from "@/components/intro/AppointmentBtn.component";
import Oeffnungszeiten from "@/objects/oeffnungszeiten";
export default {
  name: "FooterComponent",
  components: {
    CurvedLogoComponent,
    AppointmentBtnComponent
  },
  data(){
    return{
      oeffnungszeiten: Oeffnungszeiten,
    }
  }
}
</script>

<style scoped>
#footer{
  position: relative;
  width: calc(100% - 80px);
  padding: 40px;
  background-color: #111c1c;
}
.content{
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
.top {
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 40px;

  margin: 40px 0;
}

.top > div{
  position: relative;
  min-height: 200px;
  max-width: 160px;
  width: 100%;
  flex: 1 1 200px;
  padding: 20px;
}

.bottom{
  width: 100%;
  border-top: 1px solid var(--light-color);
}


.bottom .text{
  margin-bottom: 40px;
  margin-top: 40px;
}

.logo:first-child{

}
.logo{
  display: flex;
  flex-direction: column;
  place-items: center;
}
.logo a {
  color: var(--light-color);
}
.opening .title , .address .title , .socialmedia .title{
  color: var(--light-color);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: underline;
}
.opening .date{
  display: flex;
  justify-content: space-between;

}

.address{
  display: flex;
  flex-direction: column;
}

.address > div{
  margin-bottom: 20px;
}

.socialmedia{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>