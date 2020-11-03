<template>
  <div>
    <div class="page-title">
      <h3>{{'title_categories' | localizeFilter}}</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div class="row" v-else>
        <Create @created="addCategory"/>
        <Edit v-if="categories.length"
              :categories="categories"
              :key="(categories.length + updateCount)"
              @updated="updateCategory"/>
        <p v-else class="center">{{'title_empty_categories' | localizeFilter}}</p>
      </div>
    </section>
  </div>
</template>

<script>
  import Create from '../components/categories/Create.vue'
  import Edit from '../components/categories/Edit.vue'

  export default {
    name: 'Categories',
    components: {
      Create,
      Edit
    },
    data: () => ({
      categories: [],
      loading: true,
      updateCount: 0
    }),
    methods: {
      addCategory(category) {
        this.categories.push(category);
      },
      updateCategory(category) {
        const index = this.categories.findIndex(c => c.id === category.id);

        this.categories[index].title = category.title;
        this.categories[index].limit = category.limit;
        this.updateCount += 1;
      }
    },
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories');
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>