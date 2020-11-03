<template>
  <ul class="sidenav app-sidenav"
      :class="{open: value}">
    <router-link v-for="link in links"
                 :key="link.url"
                 tag="li"
                 active-class="active"
                 :to="link.url"
                 :exact="link.exact">
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
  import localizeFilter from '../../filters/localize-filter.js';

  export default {
    name: 'Sidebar',
    props: ['value'],
    data: () => ({
      links: [
        {
          title: `${localizeFilter('title_bill')} ${localizeFilter("title_and")} ${localizeFilter('title_currency')}`,
          url: '/',
          exact: true
        },
        {
          title: localizeFilter('title_history'),
          url: '/history'
        },
        {
          title: localizeFilter('title_planning'),
          url: '/planning'
        },
        {
          title: localizeFilter('title_record'),
          url: '/record'
        },
        {
          title: localizeFilter('title_categories'),
          url: '/categories'
        }
      ]
    })
  }
</script>

<style scoped>

</style>