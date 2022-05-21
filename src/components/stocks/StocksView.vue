<template>
  <div>
    <app-stocks
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stocks>
  </div>
</template>
<script>
import Stocks from "./StockView.vue";
export default {
  components: {
    appStocks: Stocks,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
}
</style>
