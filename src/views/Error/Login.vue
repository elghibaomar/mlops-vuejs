<template>
  <div class="auth-page">
    <b-container>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>
        <br><br>
         <img src="../../assets/pic/MLOPS.png"  width="200" height="200" class="center">

          <p style="color:#fff;">User : test@mlops.ma</p>
           <p style="color:#fff;">Password : test1234</p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}

           
          </b-alert>
          <b-form-group >
            <b-input-group>
              <b-input-group-text slot="prepend" style="background-color:#000; border:#000;"><i class="la la-user text-white"></i></b-input-group-text>
              <input style="background-color:#000; border:#000;"
                      id="email" 
                     ref="email"
                     class="form-control input-transparent pl-3"
                     type="email"
                     required
                     placeholder="Email"/>
            </b-input-group>
          </b-form-group>
          <b-form-group >
            <b-input-group>
              <b-input-group-text slot="prepend" style="background-color:#000; border:#000;"><i class="la la-lock text-white"></i></b-input-group-text>
              <input style="background-color:#000; border:#000;"
                      id="password"
                     ref="password"
                     class="form-control input-transparent pl-3"
                     type="password"
                     required
                     placeholder="Password"/>
            </b-input-group>
          </b-form-group>
          <div class="bg-widget auth-widget-footer">
            <b-button type="submit" variant="danger" class="auth-btn" size="sm">
              <!-- <span class="auth-btn-circle">
                <i class="la la-caret-right"></i>
              </span> -->
              Login
            </b-button>
            <p class="widget-auth-info mt-4">
  
            </p>

          </div>
        </form>
      </Widget>
    </b-container>
    <!-- <footer class="auth-footer">
      Light Blue Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" target="_blank">Flatlogic</a>
    </footer> -->
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'LoginPage',
  components: { Widget },
  data() {
    return {
      errorMessage: null,
    };
  },
  methods: {
    login() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if (email.length !== 0 && password.length !== 0) {
        window.localStorage.setItem('authenticated', true);
        this.$router.push('email_marketing');
      }
    },
  },
  created() {
    if (window.localStorage.getItem('authenticated') === 'true') {
      this.$router.push('email_marketing');
    }
  },
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* width: 50%; */
}
</style>
