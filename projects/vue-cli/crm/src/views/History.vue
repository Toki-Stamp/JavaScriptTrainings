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
      <Table :records="items"/>
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="handlePageChange"
        :prev-text="'Назад'"
        :next-text="'Вперёд'"
        :container-class="'pagination'"
        :page-class="'waves-effect'">
      </Paginate>
    </section>
  </div>
</template>

<script>
  import Table from '../components/history/Table.vue';
  import paginationMixin from '../mixins/pagination-mixin.js';

  export default {
    name: 'History',
    mixins: [paginationMixin],
    data: () => ({
      loading: true,
      records: [],
    }),
    components: {Table},
    async mounted() {
      const categories = await this.$store.dispatch('fetchCategories');
      this.records = await this.$store.dispatch('fetchRecords');
      this.setupPagination(this.records.map(record => ({
        ...record,
        date: new Date(record.date),
        categoryName: categories.find(c => c.id === record.categoryID).title,
        typeClass: (record.type === 'income') ? 'green' : 'red',
        typeText: (record.type === 'income') ? 'Доход' : 'Расход'
      })));
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>