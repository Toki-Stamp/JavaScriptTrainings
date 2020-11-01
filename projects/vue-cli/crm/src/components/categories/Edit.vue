<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="input-field">
          <select ref="category-select" v-model="currentCategory">
            <option v-for="category of categories"
                    :key="category.id"
                    :value="category.id">{{category.title}}
            </option>
          </select>
          <label>Выберите категорию</label>
        </div>
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
          Обновить
          <i class="material-icons right">edit</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import M from 'materialize-css';
  import {required, minValue} from 'vuelidate/lib/validators';

  export default {
    name: 'Edit',
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
    data: () => ({
      select: null,
      title: '',
      limit: 1,
      currentCategory: null
    }),
    methods: {
      async handleSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();

          return false;
        }
        try {
          const payload = {
            id: this.currentCategory,
            title: this.title,
            limit: this.limit
          };
          await this.$store.dispatch('updateCategory', payload);
          this.$message(`Категория "${this.title}" была обновлена`);
          this.$emit('updated', payload);
        } catch (e) {
          /* nothing here */
        }
      }
    },
    watch: {
      currentCategory(categoryID) {
        const {title, limit} = this.categories.find(c => c.id === categoryID);

        this.title = title;
        this.limit = limit;
      }
    },
    validations: {
      title: {required},
      limit: {minValue: minValue(1)}
    },
    created() {
      const {id, title, limit} = this.categories[0];
      this.title = title;
      this.limit = limit;
      this.currentCategory = id;
    },
    mounted() {
      M.updateTextFields();
      this.select = M.FormSelect.init(this.$refs['category-select']);
    },
    destroyed() {
      if (this.select && this.select.destroy) {
        this.select.destroy();
      }
    }
  }
</script>

<style scoped>

</style>