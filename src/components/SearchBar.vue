<template>
  <div class="input__wrapper">
    <input type="text" class="input__text" placeholder="Digite sua cidade...">
    <a href="#" class="input__btn">
      Buscar
      <img src="../assets/search.png" alt="Magnifying Glass" class="input__btn__icon">
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input__wrapper {
  width: 50%;
  min-width: 35rem;
  transition: all 0.3s;

  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.input__wrapper,
.input__wrapper > * {
  z-index: 3;
}

.input__text {
  border: 0;
  width: 100%;
  font-size: 2rem;
  color: #555;
  padding: 0.8rem 2rem;
}

.input__text::placeholder {
  color: #c0c0c0;
}

.input__text:focus {
  outline: 0;
}

.input__wrapper:focus-within {
  width: 55%;
}

.input__btn {
  color: #fff;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  background: #17374e;
  text-decoration: none;

  display: flex;
  align-items: center;
}

.input__btn__icon {
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
}
</style>
