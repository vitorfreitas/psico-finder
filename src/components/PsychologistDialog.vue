<template>
  <div class="modal">
    <h2 class="modal__title">{{ data.name }}</h2>
    <h4 class="modal__address">{{data.address}}</h4>
    <h4 class="modal__phone">{{ data.phone }}</h4>
    <h4 class="modal__pricing">{{ transformPricingToString(data.pricing) }}</h4>
    <a href="#" class="modal__email">Enviar email</a>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    transformPricingToString(pricingCount) {
      const count = new Array(pricingCount).fill("$");
      return count.length === 1 ? "Grátis" : count.join("");
    }
  }
};
</script>

<style scoped>
.modal {
  padding: 0 2rem;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  align-items: center;
  flex-direction: column;
}

.modal__title,
.modal__address,
.modal__phone {
  text-align: center;
  line-height: 150%;
}

.modal__address,
.modal__phone {
  color: #999;
  font-weight: 300;
  font-size: 1rem;
}

.modal__title {
  color: #252525;
  font-size: 2rem;
}

.modal__pricing {
  margin-top: 0.6rem;
  margin-bottom: 2rem;
}

.modal__email {
  color: #17374e;
  font-weight: 600;
  font-size: 1rem;
  font-style: italic;
  text-decoration: none;
  border-bottom: 2px solid #17374e;

  margin: auto 0 1rem;
}
</style>
