<template>
  <form class="card auth-card" @submit.prevent="handleSubmit">
    <div class="card-content">
      <span class="card-title">{{'title_application' | localizeFilter}}</span>
      <div class="input-field">
        <input id="email"
               v-model.trim="email"
               type="text"
               :class="{invalid: (($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email))}"/>
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
               :class="{invalid: (($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength))}"/>
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
      <div class="input-field">
        <input id="name"
               type="text"
               v-model.trim="name"
               :class="{invalid: ($v.name.$dirty && !$v.name.required)}">
        <label for="name">{{'name' | localizeFilter}}</label>
        <small v-if="$v.name.$dirty && !$v.name.required"
               class="helper-text invalid">{{'message_enter_name' | localizeFilter}}</small>
      </div>
      <p>
        <label>
          <input type="checkbox"
                 v-model="agree"/>
          <span>{{'title_agree' | localizeFilter}}</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit"
                type="submit">
          {{'button_create_account' | localizeFilter}}
          <i class="material-icons right">person_add</i>
        </button>
      </div>
      <p class="center">
        {{'title_has_account' | localizeFilter}}
        <router-link to="/login">{{'button_login' | localizeFilter}}</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, minLength, required} from "vuelidate/lib/validators";

  export default {
    name: 'Register',
    data: () => ({
      email: '',
      password: '',
      name: '',
      agree: false
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)},
      name: {required},
      agree: {checked: v => v}
    },
    methods: {
      async handleSubmit() {
        if (this.$v.$invalid) {
          this.$v.$touch();

          return false;
        }

        const formData = {
          email: this.email,
          password: this.password,
          name: this.name
        };

        try {
          await this.$store.dispatch('register', formData);
          await this.$router.push('/');
        } catch (e) {
          /* empty */
        }
      }
    }
  }
</script>

<style scoped>

</style>