<template>
  <section class="main">
    <div class="main__video__overlay"></div>
    <video autoplay muted loop class="main__video">
      <source src="../assets/people.mp4" type="video/mp4">
    </video>

    <header class="main__header" :class="{'main__header--disappear' : searchbarTyping}">
      <img src="http://basicfunction.com/til/images/brain.png" alt="Brain" class="main__logo">
      <h1 class="main__title">
        <span class="main__title--bold">Psico</span>finder
      </h1>
      <p class="main__slogan">Procure psicologos perto de você!</p>
    </header>

    <SearchBar @input="handleSearchBarInput"/>

    <GmapMap :center="center" :zoom="18" class="map" :class="{'map--visible' : searchbarTyping}"></GmapMap>
  </section>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  components: { SearchBar },
  data() {
    return {
      center: { lat: 0, lng: 0 },
      searchbarTyping: false
    };
  },
  methods: {
    handleSearchBarInput({ value }) {
      this.searchbarTyping = value.length !== 0;
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(position => {
      const {
        coords: { latitude, longitude }
      } = position;

      this.center = {
        lat: latitude,
        lng: longitude
      };
    });
  }
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
}

.main__video__overlay {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
}

.main__video {
  z-index: 1;
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
}

.main__header {
  display: flex;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: center;

  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.main__header--disappear {
  z-index: 4;
  opacity: 0;
  margin-bottom: -20rem;
  transform: translateY(-10rem);
}

.main__header > * {
  z-index: 2;
}

.main__logo {
  width: 16rem;
  margin: 2rem 0 0;
}

.main__title {
  color: #fff;
  font-size: 4rem;
  font-weight: 300;
  font-family: "Lato";
}

.main__title--bold {
  font-weight: bold;
}

.main__slogan {
  color: #eee;
  font-size: 2rem;
  font-family: "Lato";
}

.map {
  opacity: 0;
  z-index: 40;
  width: 80rem;
  height: 0rem;
  visibility: hidden;
  transition: all 0.2s;
  margin: 10rem auto 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.map--visible {
  height: 40rem;
  opacity: 1;
  visibility: visible;
}

@keyframes disappearToTop {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
