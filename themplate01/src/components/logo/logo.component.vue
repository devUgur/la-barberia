<template>
  <div id="logo">
    <div class="title" id="title">LA BARBERIA</div>
    <div id="container">
      <span id="text1"></span>
      <span id="text2"></span>
    </div>

    <svg id="filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
        </filter>
      </defs>
    </svg>
    <div style="margin: 0 30px;"><img class="head" src="@/assets/labarberia-logo-head.png"></div>
    <img class="undertitle" src="@/assets/labarberia-logo-untertitle.png">
  </div>
</template>

<script>
import CircleType from 'circletype';

export default {
  name: "logoComponent",
  mounted() {
    console.log("mounted");
    const circleType = new CircleType(document.getElementById('title'));

    circleType.radius(280);

    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
    };

    const texts = [
      "BEST",
      "STYLES",
      "CUTS",
      "SHAVES",
      "IN DORTMUND"
    ];

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }
}
</script>

<style scoped>
#logo{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  color: var(--logo-color);
}
.title{
  font-family: var(--abril-font-family);
  font-size: 70px;
  font-weight: bold;
  letter-spacing: 10px;
  object-fit: scale-down;
  font-size: clamp(3rem, 4.5vw, 4rem);

  /* 100 = viewport width, as 1vw = 1/100th of that
     So if the container is 50% of viewport (as here)
     then factor that into how you want it to size.
     Let's say you like 5vw if it were the whole width,
     then for this container, size it at 2.5vw (5 * .5 [i.e. 50%])
  */
}
.location{
  font-family: var(--abril-font-family);
  font-size: 22px;

  margin-bottom: 20px;
}
img.head{
  margin-top: -110px;
  max-width:100%;
  object-fit: scale-down;
}
img.undertitle{
  max-width: 100%;
  object-fit: scale-down;

}

#container {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  max-width: 300px;
  margin-top: -90px;

  filter: url(#threshold) blur(0.6px);
  height: 30px;
  width: 300px;
  display: flex;

}

#text1, #text2 {
  position: absolute;
  width: 100%;
  display: inline-block;

  font-family: 'Abril Fatface', cursive;
  font-size: 18pt;
  font-weight: bolder;
  user-select: none;

}
</style>