
<template :style="myStyle">
  <div >
    <b-container class="bv-example-row">


      <b-row>
         <b-col xxs="12">
            <h1 class="page-title">Reviews &nbsp;
              <small>
                <small>Review Prediction</small>
              </small>
           </h1>
         </b-col>
      </b-row>

             <b-row>

          <b-col lg="7">
         
            
                <Widget
                      title="<h6> MARITAL CUSTOMER NUMBER </h6>"
                        close collapse customHeader
                    >
                    
                     <Review_Form_Prediction/>
                    </widget>

                    


           
           
           </b-col>


           </b-row>





 




    </b-container>

            

    

  </div>
</template>

<script>
// @ is an alias to /src

import Review_Form_Prediction from '@/components/containers/reviews/Review_Form_Prediction.vue';



import store from '../../store'

console.log(store.state.token)
console.log(store.state.isAuthenticated)

export default {
  name: 'HomeView',
  data() {
    return {}},
  components: {


    Review_Form_Prediction,

  },
  
}
</script>
<style src="./Charts.scss" lang="scss" />
