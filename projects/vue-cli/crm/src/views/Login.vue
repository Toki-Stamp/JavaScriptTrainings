<template>
  <form class="card auth-card" @submit.prevent="handleSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email"
               v-model.trim="email"
               type="text"
               :class="{invalid: (($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email))}">
        <label for="email">Email</label>
        <small v-if="$v.email.$dirty && !$v.email.required"
               class="helper-text invalid">Поле email обязательно для заполнения и не может быть пустым</small>
        <small v-else-if="$v.email.$dirty && !$v.email.email"
               class="helper-text invalid">Введите корректный email</small>
      </div>
      <div class="input-field">
        <input id="password"
               v-model.trim="password"
               type="password"
               :class="{invalid: (($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength))}">
        <label for="password">Пароль</label>
        <small v-if="$v.password.$dirty && !$v.password.required"
               class="helper-text invalid">Введите пароль</small>
        <small v-else-if="$v.password.$dirty && !$v.password.minLength"
               class="helper-text invalid">Пароль не может быть меньше {{$v.password.$params.minLength.min}} символов. Сейчас введено:
          {{password.length}}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit"
                type="submit">Войти
          <i class="material-icons right">login</i>
        </button>
      </div>
      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators';

  export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: ''
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    },
    methods: {
      handleSubmit() {
        console.log(this.$v);

        if (this.$v.$invalid) {
          this.$v.$touch();

          return;
        }

        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>