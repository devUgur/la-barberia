<template>
  <div id="gsapGallery1">
    <div class='demo-wrapper'>
      <header class='df aic jcc'>
        <div>
          <h1>Folgen Sie unserer Reise</h1>
          <h2>demo</h2>
        </div>
      </header>
      <section class='demo-text'>
        <div class='wrapper text'>
          #ONLYCLASSICNOSHIT
        </div>
      </section>
      <section class='demo-text'>
        <div class='wrapper text down'>
          #BARBERSHOP#DORTMUND
        </div>
      </section>
      <br> <br>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='@/assets/instagram/01.jpg' width='1240'>
          </li>
          <li>
            <img height='874' src='@/assets/instagram/02.jpg' width='1240'>
          </li>
          <li>
            <img height='874' src='@/assets/instagram/03.jpg' width='1240'>
          </li>
          <li>
            <img height='874' src='@/assets/instagram/04.jpg' width='1240'>
          </li>
        </ul>
      </section>
      <section class='demo-text'>
        <div class='wrapper text down'>
          #BARBERSHOP#DORTMUND
        </div>
      </section>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='@/assets/instagram/05.jpg' width='1240'>
          </li>
          <li>
            <img height='874' src='@/assets/instagram/06.jpg' width='1240'>
          </li>
          <li>
            <img height='874' src='@/assets/instagram/08.jpg' width='1240'>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=87' width='1240'>
          </li>
        </ul>
      </section>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=100' width='1240'>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=126' width='1240'>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=52' width='1240'>
          </li>
        </ul>
      </section>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=122' width='1240'>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=136' width='1240'>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=66' width='1240'>
          </li>
        </ul>
      </section>
      <section class='demo-text'>
        <div class='wrapper text'>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>
      <footer class='df aic jcc'>
        <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
      </footer>
    </div>

  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import imagesLoaded from "imagesloaded";
export default {
  name: "GsapGallery1",
  mounted() {

    const images = gsap.utils.toArray('img');
    const loader = document.querySelector('.loader--text');
    const updateProgress = (instance) =>
        loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

    const showDemo = () => {
      //document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

      gsap.utils.toArray('#gsapGallery1 section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.innerWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5 }
        });
      });
    };

    showDemo();
  }
}
</script>

<style scoped>

#gsapGallery1{
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

:root { font-size: 16px }


@media (max-width: 500px) { :root { font-size: 14px } }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-moz-selection {
  background: #87cd33;
  color: white;
}

::selection {
  background: #87cd33;
  color: white;
}
/*
body {
  overflow: hidden;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
 */
h1 { font-size: 2rem }
h2 { font-size: 1rem }

img {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;

}

ul {
  padding-left: 1rem;
  list-style: none;
}

li {
  flex-shrink: 0;
  width: clamp(300px, 50vw, 600px);
  padding-right: 1rem;
}

header {height: 100vh}
footer {height: 50vh}

:-webkit-any-link { color: #4e9815; }

:-moz-any-link { color: #4e9815; }

:any-link { color: #4e9815; }

.df {display: flex}
.aic {align-items: center}
.jcc {justify-content: center}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  color: white;
}

.demo-wrapper {

  overflow-x: hidden;
  max-width: 1200px;
  width: 100%;
}

.wrapper {
  display: flex;
  max-width: 1200px;
  width: 100%;
}

.demo-gallery:not(.last) {
  padding-bottom: 1rem;
}

.demo-text .text {
  width: 100%;
  display: flex;
  justify-content: right;
  font-size: clamp(1.5rem, 6vw, 8rem);
  line-height: 1;
  font-weight: 900;
  font-style: italic;
  color: var(--light-color);
}
section{
  position: relative;
  max-width: 1200px;
  width: 100%;
}
.wrapper.text.down{
  display: flex;
  justify-content: left;
}
</style>