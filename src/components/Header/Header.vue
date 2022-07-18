<template>
  <b-navbar toggleable="md" class="app-header d-print-none">
    <b-navbar-nav class="navbar-nav-mobile ml-auto">
    
        <b-nav-item-dropdown no-caret right class="mr-2" menu-class="dropdown-menu-settings">
          <template slot="button-content">
            <i class="fi flaticon-core" />
          </template>
          <b-dropdown-item-button @click="profile()">
            <i class="la la-user" /> My Account
          </b-dropdown-item-button>
          
         
          <b-dropdown-divider />
          <b-dropdown-item-button @click="logout()">
            <i class="la la-sign-out" /> Log Out
          </b-dropdown-item-button>
        </b-nav-item-dropdown>

         <b-nav-item class="d-md-down-none" @click="todo()">
          <i class="fi flaticon-documentation" />
        </b-nav-item>

         <b-nav-item class="d-md-down-none" @click="logout()">
          <i class="fi flaticon-equal-3" />
        </b-nav-item>
        <b-nav-item class="d-md-none" @click="switchSidebarMethod" >
          <i class="fi flaticon-grid" />
        </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import store from '../../store'

export default {
  name: 'Header',
  data() {
    return {
      showNavbarAlert: true
    }
  },
  computed: {
    ...mapState('layout', {
      sidebarClose: state => state.sidebarClose,
      sidebarStatic: state => state.sidebarStatic,
    }),
  },
  methods: {
    ...mapActions('layout', ['switchSidebar', 'changeSidebarActive']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout() {
      // window.localStorage.setItem('authenticated', false);
      this.$router.push('/login');
    },
    profile() {
      this.$router.push('/profile');
    },
    todo() {
      this.$router.push('/todo');
    },
  },
};
</script>

<style src="./Header.scss" lang="scss" />

<!-- <style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #e94702!important;
 }
</style> -->
