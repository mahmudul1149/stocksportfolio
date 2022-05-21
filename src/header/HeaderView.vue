<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/stocks">Stocks</router-link>
          </li>
        </ul>
      </nav>
      <div class="other-nav">
        <ul>
          <li><a href="#" @click="endDay">End Day</a></li>
          <strong class="funds">Funds: {{ funds }}</strong>
        </ul>
      </div>
      <ul class="dropdown" role="button" @click="dropDown">
        <li><a href="#">Save & Load</a></li>
        <br />
        <div class="dropdown-menu" v-if="visible">
          <li><a href="#" @click="saveData">Save data</a></li>
          <li><a href="#" @click="loadData">Load Data</a></li>
        </div>
      </ul>
    </header>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "../data/axios";

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    loadData() {
      this.fetchData();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };

      axios.put("data.json", data);
    },
    dropDown() {
      this.visible = !this.visible;
    },
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  border-radius: 10px;
  padding: 0.5rem;
  border: 1px solid gray;
}
nav ul {
  display: flex;
  list-style: none;
}
li {
  list-style: none;
}
.other-nav ul {
  display: flex;
  align-items: center;
}
.other-nav {
  margin-left: auto;
}
li a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  color: black;
}
.dropdown {
  display: flex;
  align-items: center;
  position: relative;
}
.dropdown-menu {
  margin-top: 2.1rem;
  background: rgb(253, 238, 238);
  position: absolute;
  right: 0;
  top: 0;
}
.funds {
  font-size: 1.3rem;
  margin-right: 1rem;
}
@media (max-width: 700px) {
  div .other-nav {
    display: none;
  }
}
</style>