<template>
  <Main/>
</template>

<script>
import Main from "./pages/Main.vue";

export default {
  components: {
    Main: Main
  }
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-family: Arial;
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
}

@media only screen and (max-width: 425px) {
  html {
    font-size: 50%;
  }
}
</style>
