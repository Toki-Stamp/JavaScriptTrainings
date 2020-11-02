<template>
  <div>
    <div class="page-title">
      <h3>{{'title_profile' | localizeFilter}}</h3>
    </div>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="input-field">
        <input id="description"
               type="text"
               v-model.trim="name"
               :class="{invalid: ($v.name.$dirty && !$v.name.required)}">
        <label for="description">{{'name' | localizeFilter}}</label>
        <small v-if="$v.name.$dirty && !$v.name.required"
               class="helper-text invalid">{{'message_enter_name' | localizeFilter}}</small>
      </div>
      <div class="switch">
        <label>
          English
          <input type="checkbox" v-model="isRuLocale">
          <span class="lever"></span>
          Русский
        </label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">
        {{'button_edit' | localizeFilter}}
        <i class="material-icons right">edit</i>
      </button>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import M from 'materialize-css';
  import {required} from 'vuelidate/lib/validators';
  import localizeFilter from '../filters/localize-filter.js';

  export default {
    name: 'Profile',
    data: () => ({
      name: '',
      isRuLocale: true
    }),
    computed: {
      ...mapGetters(['userInfo'])
    },
    methods: {
      ...mapActions(['updateUserInfo']),
      async handleSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();

          return false;
        }

        try {
          await this.updateUserInfo({
            name: this.name,
            locale: (this.isRuLocale ? 'ru-RU' : 'en-US')
          });
          this.$message(localizeFilter('message_edit_success'));
        } catch (e) {
          /* empty */
        }
      }
    },
    validations: {
      name: {required}
    },
    mounted() {
      this.name = this.userInfo.name;
      this.isRuLocale = (this.userInfo.locale === 'ru-RU');
      setTimeout(() => {
        M.updateTextFields();
      });
    }
  }
</script>

<style scoped>
  .switch {
    margin-bottom: 2rem;
  }
</style>