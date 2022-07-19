<template>
  <div >
    <b-row>
         <b-col xxs="12">
            <h1 class="page-title">Facebook Ads &nbsp;
              <small>
                <img src="../../assets/pic/facebook_ads.png"  width="40" height="40"></small>
             
           </h1>
         </b-col>
      </b-row>

                  <b-row>
                <b-col>
              
                        <Widget class="bg-transparent" close collapse customHeader>
                                    <Map/>
                        </Widget>

             </b-col>

              <b-col>
                 <Widget
                        title="<h5>Predict <span class='fw-semi-bold'>Customer Engagement</span></h5>"
                        close collapse customHeader> <br>
                                    <Marital_Age_Groupe_Bar_Chart/>
                        </widget>

                 </b-col>

            </b-row>

                  <b-row>
                  

                  <b-col  lg = "4">
                     
                      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Choose Your Analytics</h3>" customHeader>
                        <form class="mt" > 
                                <b-form-select style="background-color:#040620; border:#040620;"
                                          v-model="visibleComponent"
                                          :options="Componentsx"
                                          ref="review"
                                          class="form-control input-transparent pl-3"
                                          type="input"
                                          required
                                          placeholder="Review"></b-form-select>

                                
                        </form>

                              </Widget>

                              <Widget class="bg-transparent"
                          title="<h6><span class='badge badge-danger mr-2'>Product Id</span> 3 Top Product</h6>"
                          refresh close customHeader>
                                <Top_Product_Table />
                        </Widget>



                      
                  </b-col>

                  <b-col  v-if="visibleComponent == 1">
                      <Widget
                          title="<h6> MARITAL CUSTOMER NUMBER </h6>"
                            close collapse customHeader>
                                    <Marital_Bar_Chart/>
                        </widget>
                  </b-col>

                  

                 <b-col lg = "8" v-if="visibleComponent == 3">
                        <Widget
                              title="<h6> TRAFFIC VALUES </h6>"
                                customHeader>
                          
                                <test2/>
                       </widget>
                 </b-col>

                 <b-col v-if="visibleComponent == 4">
                        <Widget class="bg-transparent"
                          title="<h6><span class='badge badge-danger mr-2'>Product Id</span> 3 Top Product</h6>"
                          refresh close customHeader>
                                <Top_Product_Table />
                        </Widget>
                 </b-col>

                 <b-col v-if="visibleComponent == 5">
                        <Widget
                              title="<h6> TRAFFIC VALUES </h6>"
                              customHeader>
                                <Customer_Bar_Chart/>
                         </widget>
                 </b-col>
                  
                 <b-col v-if="visibleComponent == 6">
                        <Widget
                              title="<h6> TRAFFIC VALUES </h6>"
                              customHeader>
                                  <Marital_Age_Groupe_Bar_Chart/>
                        </widget>
                 </b-col>


                 <b-col v-if="visibleComponent == 7">
                        <Widget
                        title="<h5>Apex <span class='fw-semi-bold'>Column Chart</span></h5>"
                        close collapse customHeader>
                                    <test3/>
                        </widget>
                 </b-col>

                  


            </b-row>



            <b-row>

                  <b-col cols="7">
                       

                        



                  </b-col>
<!-- 

                  <b-col lg = "5">
                        <Widget
                        title="<h5>Predict <span class='fw-semi-bold'>Customer Engagement</span></h5>"
                        close collapse customHeader> <br>
                                    <Customer_Engagement_Result/>
                        </widget>

                        



                  </b-col> -->


                  



            </b-row>


            

    

  </div>
</template>

<script>
// @ is an alias to /src

import Customer_Bar_Chart from '@/components/containers/facebook_ads/Customer_Bar_Chart.vue';
import Marital_Bar_Chart from '@/components/containers/facebook_ads/Marital_Bar_Chart.vue';
import Repeat_Customer_Line_Chart from '@/components/containers/facebook_ads/Repeat_Customer_Line_Chart.vue';
import ScatterChart from '@/components/containers/facebook_ads/ScatterChart.vue';
import Top_Product_Table from '@/components/containers/facebook_ads/Top_Product_Table.vue';
import PieChart from '@/components/containers/facebook_ads/PieChart.vue';
import Marital_Age_Groupe_Bar_Chart from '@/components/containers/facebook_ads/Marital_Age_Groupe_Bar_Chart.vue';
import Widget from '@/components/Widget/Widget';
import Map from '@/components/containers/facebook_ads/Map/Map';
import test from '@/components/containers/facebook_ads/test.vue';
import Age_Box_Plot from '@/components/containers/facebook_ads/Age_Box_Plot.vue';
import test2 from '@/components/containers/facebook_ads/test2.vue';
import test3 from '@/components/containers/facebook_ads/test3.vue';
import test4 from '@/components/containers/facebook_ads/test4.vue';
import Gender_Rate_Pie from '@/components/containers/facebook_ads/Gender_Rate_Pie.vue';
import Customer_Engagement_Prediction from '@/components/containers/facebook_ads/Customer_Engagement_Prediction.vue';
import Customer_Engagement_Result from '@/components/containers/facebook_ads/Customer_Engagement_Result.vue';













import axios from 'axios'
import store from '../../store'


console.log(store.state.token)
console.log(store.state.isAuthenticated)

export default {
  name: 'HomeView',
  data() {
    return {
      visibleComponent: 5,
      Componentsx: [{ text: 'MARITAL CUSTOMER NUMBER', value: 1 }, { text: 'Map', value: 2 }, { text: 'Monthly Customer Purchase', value: 3 }
      , { text: 'Customer Purchase', value: 5 }, { text: 'Marital Purchase', value: 6 }, { text: 'Customer Gender', value: 7 }],
      review: '',
      score: {},
      show : false,
      score_sentiment : "positive",
      score_confidence : 0.7765687227249146


    }},

            methods: {

            formSubmit() {
                
                this.show = true
                axios
                     .post(
                        "/predict",{text:this.review},
                )
                     .then((response) => {
                            this.score = response.data;
                            this.score_confidence = response.data.confidence;
                            this.score_sentiment = response.data.sentiment

                        })

            }

        },
  components: {


    Customer_Bar_Chart,
    Marital_Age_Groupe_Bar_Chart,
    Top_Product_Table,
    Marital_Bar_Chart,
    Repeat_Customer_Line_Chart,
    Widget,
    Map,
    ScatterChart,
    PieChart,
    test,
    Age_Box_Plot,
    test2,
    test3,
    test4,
    Gender_Rate_Pie,
    Customer_Engagement_Prediction,
    Customer_Engagement_Result,
  },
  
}
</script>
<style src="./Charts.scss" lang="scss" />
<style src="./Visits.scss" lang="scss" />


<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #000!important;
 }

 .navbar-dark .navbar-nav .nav-link{
      color:#fff!important
    }


</style>
