<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">{{'title_currency' | localizeFilter}}</span>
        </div>
        <table>
          <thead>
          <tr>
            <th>{{'currency' | localizeFilter}}</th>
            <th>{{'rate' | localizeFilter}}</th>
            <th>{{'date' | localizeFilter}}</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="cur in currencies"
              :key="cur">
            <td>{{cur}}</td>
            <td>{{rates[cur]}}</td>
            <td>{{date | dateFilter('date')}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Currency',
    props: ['rates', 'date'],
    data: () => ({
      currencies: ['BYN', 'RUB', 'USD', 'EUR']
    })
  }
</script>

<style scoped>

</style>