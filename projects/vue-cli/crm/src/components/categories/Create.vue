<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{'create' | localizeFilter}}</h4>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="input-field">
          <input id="createName"
                 type="text"
                 v-model="title"
                 :class="{invalid: ($v.title.$dirty && !$v.title.required)}">
          <label for="createName">{{'name2' | localizeFilter}}</label>
          <span class="helper-text invalid"
                v-if="($v.title.$dirty && !$v.title.required)">
            {{'message_enter_name2' | localizeFilter}}
          </span>
        </div>
        <div class="input-field">
          <input id="createLimit"
                 type="number"
                 v-model.number="limit"
                 :class="{invalid: ($v.limit.$dirty && !$v.limit.minValue)}">
          <label for="createLimit">{{'limit' | localizeFilter}}</label>
          <span class="helper-text invalid"
                v-if="($v.limit.$dirty && !$v.limit.minValue)">
            {{'error_min_value' | localizeFilter}} {{$v.limit.$params.minValue.min}}
          </span>
        </div>
        <button class="btn waves-effect waves-light" type="submit">
          {{'button_create_category' | localizeFilter}}
          <i class="material-icons right">add_box</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import M from 'materialize-css';
  import {required, minValue} from 'vuelidate/lib/validators';
  import localizeFilter from '../../filters/localize-filter.js';

  export default {
    name: 'Create',
    data: () => ({
      title: '',
      limit: 1
    }),
    methods: {
      async handleSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();

          return false;
        }
        try {
          const category = await this.$store.dispatch('createCategory', {
            title: this.title,
            limit: this.limit
          });

          this.title = '';
          this.limit = 1;
          this.$v.$reset();
          this.$message(`${localizeFilter('message_new_category_success')}: "${category.title}"`);
          this.$emit('created', category);
        } catch (e) {
          /* nothing here */
        }
      }
    },
    mounted() {
      M.updateTextFields();
    },
    validations: {
      title: {required},
      limit: {minValue: minValue(1)}
    }
  }
</script>

<style scoped>

</style>