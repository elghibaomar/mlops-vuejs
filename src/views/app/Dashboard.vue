<template>
  <div class="visits-page">
    <div >
      
  <b-navbar toggleable="lg" type="dark" variant="dark">

    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" >Email Marketing</b-nav-item>
        <b-nav-item href="#">Facebook Ads</b-nav-item>
        <b-nav-item href="#">Google Adword</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->

    </b-collapse>
  </b-navbar>
</div>


    <b-container class="bv-example-row">


            <b-row>
              <b-col xxs="12">
                <br>
      <br>
 
                  <h1 class="page-title">Email Marketing &nbsp;
                      <img src="http://localhost:8080/email.png"  width="40" height="40">
                </h1>
              </b-col>

              <br>
      <br>
      

              
            </b-row>

            <b-row>

                <b-col  lg = "4">
                    <Widget
                          title="<h6> Positive Reviews Percentage </h6>"
                          refresh close customHeader
                        >

                                <Reviews_Card_PSV/>

                    </Widget>

                </b-col>

                <b-col  lg = "4">
                    <Widget
                          title="<h6> Negative Reviews Percentage </h6>"
                          refresh close customHeader
                        >

                                <Reviews_Card_NGT/>

                    </Widget>

                </b-col>

                <b-col  lg = "4">
                    <Widget
                          title="<h6> Neutral Reviews Percentage </h6>"
                          refresh close customHeader
                        >

                                <Reviews_Card_NTR/>

                    </Widget>

                </b-col>
            </b-row>


            <b-row>

                <b-col  lg = "5">

                  <Widget
          title="<h6> Predict Your Review </h6>"
          refresh close customHeader
        >

                        <b-form @submit.prevent="formSubmit" >
                   

                                <b-form-group id="input-group-2" >
                                    <b-form-textarea style="background-color:#040620; border:#040620;"
                                    id="input-2"
                                    v-model="review"
                                    rows="13"
                                    background-color=#99FFFF;
                                    placeholder="Best and cutest headset I've ever owned. I've always been a turtle Beach kinda girl but I saw these and instantly fell in love. They are super quality, the noise cancellation is great and the overall quality is just so good. My only complaint and it's not really a complaint because I knew about it before I bought it, is that it's only compatible with pc. As it has a USB connection.
Update: ive had this headset replaced once already. And the replacement has done the exact same thing as the first one, after a little while the headset starts acting as though it has a short. It will randomly disconnect and reconnect. Awful popping sounds and other noise. Dont recommend."
                                    class="input-transparent"
                                    required
                                    ></b-form-textarea>
                                </b-form-group>



                            

                   

                                <b-button type="submit" variant="danger">Predict</b-button>

                                
                        </b-form>
                    </Widget>

                  </b-col>

                                                <b-col lg = "5">
        <Widget
          title="<h6> Prediction Result </h6>"
          close settings customHeader
        >
        
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Predcition</h6>
              <p style="color:#28a745;" class="value">{{score_sentiment}}</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Confidence</h6>
              <p style="color:#28a745;" class="value">{{score_confidence}}</p>
            </div>
          </div>
          <b-progress variant="dark" :value="score_confidence"
            :max="1" class="progress-xs" />

          

          

        </Widget>
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
                <b-col>
              
                        <Widget class="bg-transparent" close collapse customHeader>
                                    <Map/>
                        </Widget>

             </b-col>

              <b-col>
                                <Widget
          class="bg-transparent"
          title="<h5>Map<span class='fw-semi-bold'>&nbsp;Statistics</span></h5>"
          settings refresh close customHeader
        >
          <p>Status: <strong>Live</strong></p>
          <p>
            <span class="circle bg-primary text-white"><i class="la la-map-marker" /></span> &nbsp;
            146 Countries, 2759 Cities
          </p>
          <div class="row progress-stats">
            <div class="col-9">
              <h6 class="name">Foreign Visits</h6>
              <p class="description deemphasize mb-xs">Some Cool Text</p>
              <b-progress variant="primary" :value="60" :max="100" class="progress-xs" />
            </div>
            <div class="col-3 text-center">
              <span class="status rounded rounded-lg bg-widget mt-lg-0 mt-4">
                <span><AnimatedNumber :value="75" v-bind="animateNumberOptions"></AnimatedNumber>%</span>
              </span>
            </div>
          </div>
          <div class="row progress-stats">
            <div class="col-9">
              <h6 class="name">Local Visits</h6>
              <p class="description deemphasize mb-xs">P. to C. Conversion</p>
              <b-progress variant="danger" :value="39" :max="100" class="progress-xs" />
            </div>
            <div class="col-3 text-center">
              <span class="status rounded rounded-lg bg-widget mt-lg-0 mt-4">
                <span><AnimatedNumber :value="84" v-bind="animateNumberOptions"></AnimatedNumber>%</span>
              </span>
            </div>
          </div>
          <div class="row progress-stats">
            <div class="col-9">
              <h6 class="name">Sound Frequencies</h6>
              <p class="description deemphasize mb-xs">Average Bitrate</p>
              <b-progress variant="success" :value="80" :max="100" class="progress-xs" />
            </div>
            <div class="col-3 text-center">
              <span class="status rounded rounded-lg bg-widget mt-lg-0 mt-4">
                <span><AnimatedNumber :value="92" v-bind="animateNumberOptions"></AnimatedNumber>%</span>
              </span>
            </div>
          </div>
          <h6 class="fw-semi-bold mt">Map Distributions</h6>
          <p>Tracking: <strong>Active</strong></p>
          <p>
            <span class="circle bg-primary text-white"><i class="la la-cog" /></span>
            &nbsp; 391 elements installed, 84 sets
          </p>
          
        </Widget>
                 </b-col>

            </b-row>

            <b-row>

                  <b-col cols="7">
                        <Widget
                        title="<h5>Predict <span class='fw-semi-bold'>Customer Engagement</span></h5>"
                        close collapse customHeader> <br>
                                    <Customer_Engagement_Prediction/>
                        </widget>

                        



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






      

                </b-container>

    

            

    

  </div>
</template>

<script>
// @ is an alias to /src

import Customer_Bar_Chart from '@/components/containers/email_marketing/Customer_Bar_Chart.vue';
import Marital_Bar_Chart from '@/components/containers/email_marketing/Marital_Bar_Chart.vue';
import Repeat_Customer_Line_Chart from '@/components/containers/email_marketing/Repeat_Customer_Line_Chart.vue';
import ScatterChart from '@/components/containers/email_marketing/ScatterChart.vue';
import Top_Product_Table from '@/components/containers/email_marketing/Top_Product_Table.vue';
import PieChart from '@/components/containers/email_marketing/PieChart.vue';
import Marital_Age_Groupe_Bar_Chart from '@/components/containers/email_marketing/Marital_Age_Groupe_Bar_Chart.vue';
import Widget from '@/components/Widget/Widget';
import Map from '@/components/Map/Map';
import test from '@/components/containers/email_marketing/test.vue';
import Age_Box_Plot from '@/components/containers/email_marketing/Age_Box_Plot.vue';
import test2 from '@/components/containers/email_marketing/test2.vue';
import test3 from '@/components/containers/email_marketing/test3.vue';
import test4 from '@/components/containers/email_marketing/test4.vue';
import Gender_Rate_Pie from '@/components/containers/email_marketing/Gender_Rate_Pie.vue';
import Review_Form_Prediction from '@/components/containers/reviews/Review_Form_Prediction.vue';
import Reviews_Card_PSV from '@/components/containers/reviews/Reviews_Card_PSV.vue';
import Reviews_Card_NGT from '@/components/containers/reviews/Reviews_Card_NGT.vue';
import Reviews_Card_NTR from '@/components/containers/reviews/Reviews_Card_NTR.vue';
import Customer_Engagement_Prediction from '@/components/containers/email_marketing/Customer_Engagement_Prediction.vue';
import Customer_Engagement_Result from '@/components/containers/email_marketing/Customer_Engagement_Result.vue';













import axios from 'axios'
import store from '../../store'


console.log(store.state.token)
console.log(store.state.isAuthenticated)

export default {
  name: 'HomeView',
  data() {
    return {
      visibleComponent: 6,
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
    Review_Form_Prediction,
    Reviews_Card_PSV,
    Reviews_Card_NGT,
    Reviews_Card_NTR,
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














