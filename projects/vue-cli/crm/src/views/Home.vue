<template>
  <div>
    <div class="page-title">
      <h3>{{'title_bill' | localizeFilter}} {{'title_and' | localizeFilter}} {{'title_currency' | localizeFilter}}</h3>
      <button class="btn waves-effect waves-light"
              v-tooltip="{position: 'left', html: text}"
              @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading"/>
    <div v-else class="row">
      <Bill :rates="currency.rates"/>
      <Currency :rates="currency.rates"
                :date="new Date(currency.date)"/>
    </div>
  </div>
</template>

<script>
  import Bill from '../components/home/Bill.vue'
  import Currency from '../components/home/Currency.vue'
  import localizeFilter from '../filters/localize-filter.js';

  export default {
    name: 'Home',
    metaInfo() {
      const app = process.env.VUE_APP_TITLE;

      return {
        title: `${localizeFilter('title_bill')} ${localizeFilter('title_and')} ${localizeFilter('title_currency')} | ${app}`
      }
    },
    data: () => ({
      loading: true,
      currency: null
    }),
    components: {
      Bill,
      Currency
    },
    computed: {
      text() {
        return localizeFilter('button_refresh_bill');
      }
    },
    methods: {
      async refresh() {
        this.loading = true;
        this.currency = await this.$store.dispatch('fetchCurrency');
        this.loading = false;
      }
    },
    async mounted() {
      this.currency = await this.$store.dispatch('fetchCurrency');
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>