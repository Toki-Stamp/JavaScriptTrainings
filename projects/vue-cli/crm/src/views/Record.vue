<template>
  <div>
    <div class="page-title">
      <h3>{{'title_record' | localizeFilter}}</h3>
    </div>
    <Loader v-if="loading"/>
    <p v-else-if="!categories.length" class="center">Категорий нет, но Вы можете её
      <router-link to="/categories">создать</router-link>
    </p>
    <form class="form" v-else @submit.prevent="handleSubmit">
      <div class="input-field">
        <select ref="category-select" v-model="category">
          <option v-for="category in categories"
                  :key="category.id"
                  :value="category.id">{{category.title}}
          </option>
        </select>
        <label>Выберите категорию</label>
      </div>
      <p>
        <label>
          <input class="with-gap"
                 name="type"
                 type="radio"
                 value="income"
                 v-model="type"/>
          <span>Доход</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap"
                 name="type"
                 type="radio"
                 value="outcome"
                 v-model="type"/>
          <span>Расход</span>
        </label>
      </p>
      <div class="input-field">
        <input id="amount"
               type="number"
               v-model.number="amount"
               :class="{invalid: ($v.amount.$dirty && !$v.amount.minValue)}">
        <label for="amount">Сумма</label>
        <span class="helper-text invalid"
              v-if="($v.amount.$dirty && !$v.amount.minValue)">
            Минимальное знчение {{$v.amount.$params.minValue.min}}
          </span>
      </div>
      <div class="input-field">
        <input id="description"
               type="text"
               v-model.trim="description"
               :class="{invalid: ($v.description.$dirty && !$v.description.required)}">
        <label for="description">Описание</label>
        <span class="helper-text invalid"
              v-if="($v.description.$dirty && !$v.description.required)">
          Введите описание записи
          </span>
      </div>
      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">add_box</i>
      </button>
    </form>
  </div>
</template>

<script>
  import M from 'materialize-css';
  import {required, minValue} from 'vuelidate/lib/validators';
  import {mapGetters} from 'vuex';

  export default {
    name: 'Record',
    data: () => ({
      loading: true,
      categories: [],
      category: null,
      select: null,
      type: 'outcome',
      amount: 1,
      description: ''
    }),
    computed: {
      ...mapGetters(['userInfo']),
      canCreateNewRecord() {
        if (this.type === 'income') {
          return true;
        }

        return (this.userInfo.bill >= this.amount);
      }
    },
    methods: {
      async handleSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();

          return false;
        }

        if (this.canCreateNewRecord) {
          try {
            const bill = (this.type === 'income')
              ? this.userInfo.bill + this.amount
              : this.userInfo.bill - this.amount;
            await this.$store.dispatch('createRecord', {
              categoryID: this.category,
              amount: this.amount,
              description: this.description,
              type: this.type,
              date: new Date().toJSON()
            });
            await this.$store.dispatch('updateUserInfo', {bill});
            this.$message('Запись успешно создана');
            this.$v.$reset();
            this.amount = 1;
            this.description = '';
          } catch (e) {
            /* nothing here */
          }
        } else {
          this.$message(`Недостаточно средств на счёте (${this.amount - this.userInfo.bill})`);
        }
      }
    },
    validations: {
      amount: {required, minValue: minValue(1)},
      description: {required}
    },
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories');
      this.loading = false;

      if (this.categories.length) {
        this.category = this.categories[0].id;
      }

      setTimeout(() => {
        this.select = M.FormSelect.init(this.$refs['category-select']);
        M.updateTextFields();
      }, 0);
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