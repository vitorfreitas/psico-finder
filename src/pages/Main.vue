<template>
  <section class="main">
    <div class="main__video__overlay"></div>
    <video autoplay muted loop class="main__video">
      <source src="../assets/people.mp4" type="video/mp4">
    </video>

    <header class="main__header">
      <img src="http://basicfunction.com/til/images/brain.png" alt="Brain" class="main__logo">
      <h1 class="main__title">
        <span class="main__title--bold">Psico</span>finder
      </h1>
      <p class="main__slogan">Procure psicologos perto de você!</p>
    </header>

    <SearchBar/>
  </section>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    SearchBar: SearchBar
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
  width: 100%;
  height: 100%;
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
</style>
