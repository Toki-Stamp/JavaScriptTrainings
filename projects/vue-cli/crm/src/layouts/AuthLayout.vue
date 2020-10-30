<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>

<script>
  import messages from '../utils/messages.js';

  export default {
    name: 'AuthLayout',
    computed: {
      error() {
        return this.$store.getters.error;
      }
    },
    watch: {
      error(firebaseError) {
        this.$error(messages[firebaseError.code] || messages.default)
      }
    }
  }
</script>

<style scoped>

</style>