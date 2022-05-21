import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Portfolio from "../components/portfolio/PortfolioView.vue";
import Stocks from "../components/stocks/StocksView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/stocks",
    component: Stocks,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
