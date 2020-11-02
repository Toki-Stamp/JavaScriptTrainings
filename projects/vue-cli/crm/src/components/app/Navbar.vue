<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#"
           @click.prevent="$emit('menuClick')">
          <i class="material-icons black-text">menu</i>
        </a>
        <span class="black-text">{{date | dateFilter('datetime')}}</span>
      </div>
      <ul class="right hide-on-small-and-down">
        <li>
          <a ref="dropdown-trigger"
             href="#"
             class="dropdown-trigger black-text"
             data-target="dropdown">
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">person</i>{{'title_profile' | localizeFilter}}
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">exit_to_app</i>{{'title_exit' | localizeFilter}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import M from 'materialize-css';

  export default {
    name: 'Navbar',
    data: () => ({
      date: new Date(),
      interval: null,
      dropdown: null
    }),
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/login?message=logout');
      }
    },
    computed: {
      name() {
        return this.$store.getters.userInfo.name;
      }
    },
    mounted() {
      this.interval = setInterval(() => {
        this.date = new Date()
      }, 1000);
      this.dropdown = M.Dropdown.init(this.$refs['dropdown-trigger'], {
        coverTrigger: false
      })
    },
    beforeDestroy() {
      clearInterval(this.interval);

      if (this.dropdown && this.dropdown.destroy) {
        this.dropdown.destroy();
      }
    }
  }
</script>

<style scoped>

</style>