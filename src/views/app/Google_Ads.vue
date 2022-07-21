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

          <b-col lg="6">
         
            
                <Widget
                      title="<h6>  </h6>"
                        customHeader
                    >
                    
                     <index/>
                    </widget>
           
           
           </b-col>
       </b-row>
      



    </b-container>

            

    

  </div>
</template>

<script>
// @ is an alias to /src

import index from '@/components/containers/google_ads/index.vue';
import Widget from '@/components/Widget/Widget';
import Map from '@/components/Map/Map';


import store from '../../store'

console.log(store.state.token)
console.log(store.state.isAuthenticated)

export default {
  name: 'HomeView',
  data() {
    return {
      }},
  components: {


    index,
    Widget,

  },
  
}
</script>
