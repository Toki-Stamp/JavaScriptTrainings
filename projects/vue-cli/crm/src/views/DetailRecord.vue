<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link
          to="/history"
          class="breadcrumb">История
        </router-link>
        <a class="breadcrumb" @click.prevent>
          {{record.type === 'outcome' ? 'Расход' : 'Доход'}}
        </a>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="card"
               :class="{'red': (record.type === 'outcome'), 'green': (record.type === 'income')}">
            <div class="card-content white-text">
              <p>Описание: {{record.description}}</p>
              <p>Сумма: {{record.amount | currencyFilter}}</p>
              <p>Категория: {{record.categoryName}}</p>

              <small>{{record.date | dateFilter('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>Запись с ID=<strong style="color: red">{{$route.params.recordID}}</strong> не найдена</p>
  </div>
</template>

<script>
  export default {
    name: 'DetailRecord',
    data: () => ({
      record: null,
      loading: true
    }),
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