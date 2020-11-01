<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>
    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader v-if="loading"/>
    <p v-else-if="!records.length" class="center">Записей нет, но Вы можете их
      <router-link to="/record">добавить здесь</router-link>
    </p>
    <section v-else>
      <Table :records="records"/>
    </section>
  </div>
</template>

<script>
  import Table from '../components/history/Table.vue';

  export default {
    name: 'History',
    data: () => ({
      loading: true,
      records: [],
      categories: []
    }),
    components: {
      Table
    },
    async mounted() {
      const records = await this.$store.dispatch('fetchRecords');
      this.categories = await this.$store.dispatch('fetchCategories');
      this.records = records.map(record => ({
        ...record,
        date: new Date(record.date),
        categoryName: this.categories.find(c => c.id === record.categoryID).title,
        typeClass: (record.type === 'income') ? 'green' : 'red',
        typeText: (record.type === 'income') ? 'Доход' : 'Расход'
      }));
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>