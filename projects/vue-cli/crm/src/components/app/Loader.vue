<template>
  <div>
    <div class="app-loader">
      <div class="preloader-wrapper active">
        <div class="spinner-layer" :class="color">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
    <p class="center">{{'message_loading' | localizeFilter}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    computed: {
      color() {
        const colours = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only'];

        return colours[Math.floor(Math.random() * 3)];
      }
    }
  }
</script>

<style scoped>

</style>