<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link
          to="/history"
          class="breadcrumb">{{'title_history' | localizeFilter}}
        </router-link>
        <a class="breadcrumb" @click.prevent>{{breadcrumb}}</a>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="card"
               :class="{'red': (record.type === 'outcome'), 'green': (record.type === 'income')}">
            <div class="card-content white-text">
              <p>{{'title_description' | localizeFilter}}: {{record.description}}</p>
              <p>{{'sum' | localizeFilter}}: {{record.amount | currencyFilter}}</p>
              <p>{{'category' | localizeFilter}}: {{record.categoryName}}</p>
              <small>{{record.date | dateFilter('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>{{'message_record_not_found' | localizeFilter}}: <strong style="color: red">{{$route.params.recordID}}</strong></p>
  </div>
</template>

<script>
  import localizeFilter from '../filters/localize-filter.js';

  export default {
    name: 'DetailRecord',
    data: () => ({
      record: null,
      loading: true
    }),
    computed: {
      breadcrumb() {
        return (this.record.type === 'outcome') ? localizeFilter('outcome') : localizeFilter('income');
      }
    },
    async mounted() {
      const recordID = this.$route.params.recordID;
      const record = await this.$store.dispatch('fetchRecord', recordID);
      const category = await this.$store.dispatch('fetchCategory', record.categoryID);

      this.record = {
        ...record,
        date: new Date(record.date),
        categoryName: category.title
      };
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>