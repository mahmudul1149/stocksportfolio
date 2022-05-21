<template>
  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>
  <script>
import Header from "./header/HeaderView.vue";
export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>
  
<style>
.container {
  max-width: 1200px;
  margin: 30px auto;
}
</style>
