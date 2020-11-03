<template>
  <div class="fixed-action-btn"
       v-tooltip="{html: text, position: 'left'}"
       :key="locale">
    <router-link class="btn-floating btn-large blue"
                 to="/record">
      <i class="large material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  import localizeFilter from '../../filters/localize-filter.js';

  export default {
    name: 'FixedButton',
    computed: {
      text() {
        return localizeFilter('button_create_record');
      },
      locale() {
        return this.$store.getters.userInfo.locale
      }
    }
  }
</script>

<style scoped>

</style>