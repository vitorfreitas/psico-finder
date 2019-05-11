<template>
  <section class="main">
    <header class="main__header">
      <img src="http://basicfunction.com/til/images/brain.png" alt="Brain" class="main__logo">
      <h1 class="main__title">Psico Finder</h1>
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
  background: #d1d1d1;
}

.main__header {
  display: flex;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: center;
}

.main__logo {
  width: 16rem;
  margin: 2rem 0;
}

.main__title {
  font-size: 4rem;
}

.main__slogan {
  font-size: 2rem;
  color: #9b9b9b;
}
</style>
