<template>
  <div>
    <app-stock
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
    ></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./StocksView.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  components: {
    appStock: Stock,
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