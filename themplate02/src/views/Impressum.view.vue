<template>
  <div id="impressum">
    <div class="title">
      <ViewTitleComponent :title="'impressum'"></ViewTitleComponent>
    </div>
    <div class="list">
      <div class="content main-info">
        <div class="name"> La Barberia Dortmund </div>
        <div class="address"> Hohe Str. 11 <br> 44139 Dortmund </div>
        <div class="tel"> 0231 / 95018336</div>
        <div class="email"> info@la-barberia.de </div>
        <div class="ceo"> Geschäftsführer: Thorben Bühne </div>
        <div class="fee-id">Umsatzsteuer-ID: 317/5026/2752div>
      </div>

      <div class="content">
        <div class="title"> Haftung für Inhalte </div>
        <div class="text">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </div>
      </div>

      <div class="content">
        <div class="title"> Haftung für Links </div>
        <div class="text">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
          zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </div>
      </div>

      <div class="content">
        <div class="title"> Urheberrecht </div>
        <div class="text">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
          die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
          als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
          Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </div>
      </div>

      <div class="content">
        <div class="title"> Verbraucherstreitbeilegung </div>
        <div class="text">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewTitleComponent from "@/components/home/ViewTitle.component";
export default {
  components: {
    ViewTitleComponent
  }
}
</script>

<style scoped>

#impressum{
  padding: 80px 30px;
  min-height: calc(100vh - 160px);
  color: var(--light-color);
}

#impressum > .title{
  margin: 50px 0;
}

#impressum .content .title{
  margin-top: 50px;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 1px;
  text-decoration: underline;
}

#impressum .content .text{
}

#impressum .list{
  max-width: 900px;
  min-height: 600px;
  width: 100%;
  margin: 0 auto;
}

.main-info .name{
  font-size: 22px;
  color: var(--palette-1-color-1);
}
</style>
