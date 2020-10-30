<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else class="app-main-layout">
      <Navbar @menuClick="menuOpen = !menuOpen"/>
      <Sidebar v-model="menuOpen"/>
      <FixedButton/>
      <main class="app-content"
            :class="{full: !menuOpen}">
        <div class="app-page">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/app/Navbar.vue';
  import Sidebar from '../components/app/Sidebar.vue';
  import FixedButton from '../components/app/FixedButton.vue';

  export default {
    name: 'MainLayout',
    data: () => ({
      menuOpen: true,
      loading: true
    }),
    components: {
      Navbar,
      Sidebar,
      FixedButton
    },
    async mounted() {
      if (!Object.keys(this.$store.getters.userInfo).length) {
        await this.$store.dispatch('fetchUserInfo');
      }

      this.loading = false;
    }
  }
</script>

<style scoped>

</style>