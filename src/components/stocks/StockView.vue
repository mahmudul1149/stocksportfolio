<template>
  <div>
    <div class="container-box">
      <div class="panel-heading">
        <h3>
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="text"
            class="form-control"
            placeholder="Quaintity"
            :class="{ danger: insufficiantFunds }"
            v-model="quantity"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn-primary"
            @click="buyStock"
            :disabled="quantity <= 0 || insufficiantFunds"
          >
            {{ insufficiantFunds ? "Not enough funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
    },
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficiantFunds() {
      return this.stock.price * this.quantity > this.funds;
    },
  },
};
</script>

<style scoped>
.panel-body {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: rgb(129, 243, 129);
  justify-content: space-between;
}
.form-control {
  outline: none;
  padding: 0.4rem;
  width: 50%;
}
.panel-heading h3 {
  padding: 0.5rem 1rem;
  background-color: rgb(228, 93, 52);
  color: #fff;
}
button {
  background: green;
  color: white;
  padding: 0.4rem 0.7rem;
  outline: none;
  border: none;
  border-radius: 5px;
}
button[disabled],
button[disabled]:hover,
button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: rgb(243, 131, 131);
  cursor: not-allowed;
}
.danger {
  border: 1px solid red;
}
</style>