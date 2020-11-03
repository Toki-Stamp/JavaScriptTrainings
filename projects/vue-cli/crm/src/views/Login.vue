<template>
  <form class="card auth-card" @submit.prevent="handleSubmit">
    <div class="card-content">
      <span class="card-title">{{'title_application' | localizeFilter}}</span>
      <div class="input-field">
        <input id="email"
               v-model.trim="email"
               type="text"
               :class="{invalid: (($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email))}">
        <label for="email">{{'email' | localizeFilter}}</label>
        <small v-if="$v.email.$dirty && !$v.email.required"
               class="helper-text invalid">{{'message_enter_email' | localizeFilter}}</small>
        <small v-else-if="$v.email.$dirty && !$v.email.email"
               class="helper-text invalid">{{'error_email_incorrect' | localizeFilter}}</small>
      </div>
      <div class="input-field">
        <input id="password"
               v-model.trim="password"
               type="password"
               :class="{invalid: (($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength))}">
        <label for="password">{{'password' | localizeFilter}}</label>
        <small v-if="$v.password.$dirty && !$v.password.required"
               class="helper-text invalid">{{'message_enter_password' | localizeFilter}}</small>
        <small v-else-if="$v.password.$dirty && !$v.password.minLength"
               class="helper-text invalid">
          {{'error_password_length_1' | localizeFilter}} {{$v.password.$params.minLength.min}}
          {{'error_password_length_2' | localizeFilter}}.
          {{'error_password_length_3' | localizeFilter}}: {{password.length}}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit"
                type="submit">{{'button_login' | localizeFilter}}
          <i class="material-icons right">login</i>
        </button>
      </div>
      <p class="center">
        {{'title_no_account' | localizeFilter}}
        <router-link to="/register">{{'button_create_account' | localizeFilter}}</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators';
  import localizeFilter from '../filters/localize-filter.js';

  export default {
    name: 'Login',
    metaInfo() {
      return {
        title: this.$title('title_login')
      }
    },
    data: () => ({
      email: '',
      password: ''
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    },
    methods: {
      async handleSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();

          return false;
        }

        try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          });
          await this.$router.push('/');
        } catch (e) {
          /* empty */
        }
      }
    },
    mounted() {
      const key = `message_${this.$route.query.message}`;
      const message = this.$route.query.message ? localizeFilter(key) : null;

      if (message) {
        this.$message(message);
      }
    }
  }
</script>

<style scoped>

</style>