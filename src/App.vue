<template>
      <div>



        <div id="app">
          <router-view />
        </div>
      </div>
    </template>
    
    <script>
    import Layout from './components/Layout/Layout.vue'

    
    export default {
      components: {
        Layout: Layout,
      },
      name: 'App'
    }
    </script>
    
  <style src="./styles/theme.scss" lang="scss" />
