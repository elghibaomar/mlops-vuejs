<template>
    <div>
        <Topnav/>
       <Sidebar/>
       <router-view/>
    </div>
</template>

<script>
    import Topnav from '../../components/navs/Topnav.vue'
    import Sidebar from '../../components/navs/Sidebar.vue'
    export default {
        components: {
            Topnav,
            Sidebar
  }
    }
</script>

<style lang="scss" scoped>

</style>