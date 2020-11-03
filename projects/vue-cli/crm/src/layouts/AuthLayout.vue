<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>

<script>
  import localizeFilter from '../filters/localize-filter.js';

  export default {
    name: 'AuthLayout',
    computed: {
      error() {
        return this.$store.getters.error;
      }
    },
    watch: {
      error(firebaseError) {
        const key = `error_${firebaseError.code}`;
        const message = localizeFilter(key);

        this.$error(message || localizeFilter('error_default'))
      }
    }
  }
</script>

<style scoped>

</style>