<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="input-field">
          <input id="createName"
                 type="text"
                 v-model="title"
                 :class="{invalid: ($v.title.$dirty && !$v.title.required)}">
          <label for="createName">Название</label>
          <span class="helper-text invalid"
                v-if="($v.title.$dirty && !$v.title.required)">
            Введите название категории
          </span>
        </div>
        <div class="input-field">
          <input id="createLimit"
                 type="number"
                 v-model.number="limit"
                 :class="{invalid: ($v.limit.$dirty && !$v.limit.minValue)}">
          <label for="createLimit">Лимит</label>
          <span class="helper-text invalid"
                v-if="($v.limit.$dirty && !$v.limit.minValue)">
            Минимальное знчение {{$v.limit.$params.minValue.min}}
          </span>
        </div>
        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import M from 'materialize-css';
  import {required, minValue} from 'vuelidate/lib/validators';

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
          this.$message(`Категория "${category.title}" была создана`);
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