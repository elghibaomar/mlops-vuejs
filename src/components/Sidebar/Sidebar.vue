<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
  <nav
    :class="{sidebar: true}"
  >
    <header class="logo">
      <router-link to="/dashboard"><img src="../../assets/pic/MLOPS.png" width="150" 
     height="150"/></router-link>
    </header>

 

    <ul class="nav">
      <h5 class="navTitle"></h5>
      <NavLink
        :activeItem="activeItem"
        header="Email Marketing"
        link="/Email_Marketing"
        iconName="flaticon-email"
        index="Email_Marketing"
        isHeader
      />

      <NavLink
        header="Facebook Ads"
        link="/Facebook_Ads"
        iconName="flaticon-shopping-bag"
        index="Facebook Ads"
        isHeader
      />
     
      <!-- <NavLink
        header="Email Marketing"
        link="/Email_Marketing"
        iconName="flaticon-email"
        index="Email Marketing"
        isHeader
      /> -->

      <NavLink
        header="Google Adwords"
        link="/Google_Ads"
        iconName="flaticon-charts"
        index="Google Ads"
        isHeader
      />

      <NavLink
        header="Customer Satisfaction"
        link="/Reviews"
        iconName="flaticon-message-circle"
        index="Reviews"
        isHeader
      />

    

      <!-- <NavLink
        header="Iot"
        link="/Iot"
        iconName="flaticon-core"
        index="Iot"
        isHeader
      /> -->

      <!-- <NavLink
        header="Monitoring"
        link="/Monitoring"
        iconName="flaticon-equal-3"
        index="Monitoring"
        isHeader
      /> -->

      <NavLink
        header="To Do"
        link="/todo"
        iconName="flaticon-documentation"
        index="To Do"
        isHeader
      />

      <NavLink
        header="Profile"
        link="/Profile"
        iconName="flaticon-person"
        index="Profile"
        isHeader
      />

    
      
      <NavLink
        header="Upload"
        link="/Upload"
        iconName="flaticon-extra"
        index="Upload"
        isHeader
      />
    </ul>
   

    
  </nav>
  </b-collapse>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'primary',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'danger',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
