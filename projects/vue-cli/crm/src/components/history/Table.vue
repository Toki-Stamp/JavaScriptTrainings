<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th>{{'amount' | localizeFilter}}</th>
      <th>{{'date' | localizeFilter}}</th>
      <th>{{'category' | localizeFilter}}</th>
      <th>{{'type' | localizeFilter}}</th>
      <th>{{'open' | localizeFilter}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(record, index) in records"
        :key="record.id">
      <td>{{(index + 1)}}</td>
      <td>{{record.amount | currencyFilter('BYN')}}</td>
      <td>{{record.date | dateFilter('datetime')}}</td>
      <td>{{record.categoryName}}</td>
      <td>
        <span class="white-text badge red"
              :class="[record.typeClass]">{{record.typeText}}
        </span>
      </td>
      <td>
        <button class="btn-small btn"
                @click="$router.push(`/detail-record/${record.id}`)"
                v-tooltip="tooltip">
          <i class="material-icons">open_in_new</i>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import localizeFilter from '../../filters/localize-filter.js';

  export default {
    name: 'Table',
    props: {
      records: {
        type: Array,
        required: true
      }
    },
    computed: {
      tooltip() {
        return localizeFilter('button_view_record_details');
      }
    }
  }
</script>

<style scoped>

</style>