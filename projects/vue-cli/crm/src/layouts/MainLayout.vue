<template>
  <div class="app-main-layout">
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
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import Sidebar from '../components/Sidebar.vue';
  import FixedButton from "../components/FixedButton.vue";

  export default {
    name: 'MainLayout',
    data: () => ({
      menuOpen: true
    }),
    components: {
      Navbar,
      Sidebar,
      FixedButton
    }
  }
</script>

<style scoped>

</style>