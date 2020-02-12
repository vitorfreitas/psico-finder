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

    <SearchBar @input="handleSearchBarInput" @place_changed="handlePlaceChange"/>

    <Map :visible="searchbarTyping" :place="place" @center="handleMarkerClick"/>
  </section>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Map from "../components/Map.vue";

export default {
  components: { SearchBar, Map },
  data() {
    return {
      place: null,
      searchbarTyping: false
    };
  },
  methods: {
    handleSearchBarInput({ value }) {
      this.searchbarTyping = value.length !== 0;
    },
    handlePlaceChange({ lat, lng }) {
      this.place = { lat, lng };
    },
    handleMarkerClick(marker) {
      const { lat, lng } = marker;
      this.place = { lat, lng };
    }
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
  visibility: hidden !important;
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
