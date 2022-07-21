<template :style="myStyle">
  <div >
    <b-container class="bv-example-row">


      <b-row>
         <b-col xxs="12">
            <h1 class="page-title">Google Adwords &nbsp;
              <small>
                <img src="../../assets/pic/adwords.png"  width="40" height="40"></small>
           </h1>
         </b-col>
      </b-row>

             <b-row>

          <b-col>
         
            
                <Widget
                      title="<h6>  </h6>"
                        customHeader
                    >
                    
                     <Error/>
                    </widget>
           
           
           </b-col>
       </b-row>
      



    </b-container>

            

    

  </div>
</template>

<script>

import Error from '@/components/containers/google_ads/Error.vue';
import Widget from '@/components/Widget/Widget';
import Map from '@/components/Map/Map';


// import store from '../../store'

// console.log(store.state.token)
// console.log(store.state.isAuthenticated)

export default {
  name: 'HomeView',
  data() {
    return {
      }},
  components: {


    Error,
    Widget,

  },
  
}
</script>
