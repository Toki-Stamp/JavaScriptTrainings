<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p v-for="cur of currencies"
           :key="cur"
           class="currency-line">
          <span>{{getCurrency(cur) | currencyFilter(cur)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bill',
    props: ['rates'],
    data: () => ({
      currencies: ['BYN', 'RUB', 'USD', 'EUR']
    }),
    computed: {
      base() {
        return this.$store.getters.userInfo.bill / (this.rates['BYN'] / this.rates['EUR']);
      }
    },
    methods: {
      getCurrency(currency) {
        // return Math.floor(this.base * this.rates[currency]);
        return (this.base * this.rates[currency]).toFixed(2);
      }
    }
  }
</script>

<style scoped>

</style>