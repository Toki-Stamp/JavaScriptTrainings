<template>
  <div>
    <div class="page-title">
      <h3>{{'title_history' | localizeFilter}}</h3>
    </div>
    <div class="history-chart">
      <canvas ref="canvas"></canvas>
    </div>

    <Loader v-if="loading"/>
    <p v-else-if="!records.length" class="center">{{'title_no_records' | localizeFilter}}
      <router-link to="/record">{{'button_create_record' | localizeFilter}}</router-link>
    </p>
    <section v-else>
      <Table :records="items"/>
      <div class="center">
        <Paginate
          v-model="page"
          :page-count="pageCount"
          :click-handler="handlePageChange"
          :prev-text="back"
          :next-text="forward"
          :container-class="'pagination'"
          :page-class="'waves-effect'">
        </Paginate>
      </div>
    </section>
  </div>
</template>

<script>
  import Table from '../components/history/Table.vue';
  import paginationMixin from '../mixins/pagination-mixin.js';
  import {Pie} from 'vue-chartjs';
  import localizeFilter from '../filters/localize-filter.js';

  export default {
    name: 'History',
    metaInfo() {
      return {
        title: this.$title('title_history')
      }
    },
    extends: Pie,
    mixins: [paginationMixin],
    data: () => ({
      loading: true,
      records: [],
    }),
    computed: {
      back() {
        return localizeFilter('title_pagination_back');
      },
      forward() {
        return localizeFilter('title_pagination_forward');
      }
    },
    components: {Table},
    methods: {
      setup(categories) {
        this.setupPagination(this.records.map(record => ({
          ...record,
          date: new Date(record.date),
          categoryName: categories.find(c => c.id === record.categoryID).title,
          typeClass: (record.type === 'income') ? 'green' : 'red',
          typeText: (record.type === 'income') ? localizeFilter('income') : localizeFilter('outcome')
        })));
        this.renderChart({
          labels: categories.map(c => c.title),
          datasets: [{
            data: categories.map(c => {
              return this.records.reduce((total, r) => {
                if ((r.categoryID === c.id) && r.type === 'outcome') {
                  total += parseInt(r.amount, 10);
                }

                return total;
              }, 0)
            }),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        });
      }
    },
    async mounted() {
      const categories = await this.$store.dispatch('fetchCategories');

      this.records = await this.$store.dispatch('fetchRecords');
      this.setup(categories);
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>