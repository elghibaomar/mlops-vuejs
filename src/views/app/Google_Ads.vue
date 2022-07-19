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
                      title="<h6> TRAFFIC VALUES </h6>"
                        customHeader
                    >
                    
                     <Marital_Bar_Chart/>
                     <a href="Facebook_Ads"><img src="http://localhost:8080/facebook_ads.png"  width="20" height="20"></a>
                    </widget>
           
           
           </b-col>


           <b-col lg="6">
           
          
                <Widget
                      title="<h6> TRAFFIC VALUES </h6>"
                        customHeader
                    >
                  <Repeat_Customer_Line_Chart/>
                     
                     <a href="Email_Marketing"><img src="http://localhost:8080/gmail.png"  width="20" height="20"></a>
                    </widget>
           
           
           </b-col>

           </b-row>
      <b-row>


   
              <b-col lg="7">
              
                  <Widget class="bg-transparent">
                    <Map />
                    <a href="Facebook_Ads"><img src="http://localhost:8080/facebook_ads.png"  width="20" height="20"></a>
                  </Widget>
                </b-col>


                       <b-col lg="4" xs="12">
                      
        <Widget
          title="<h6><span class='badge badge-danger mr-2'>Product Id</span> 5 Top Product</h6>"
          refresh close customHeader
        >
           <Top_Product_Table />
         
           <a href="Google_Ads"><img src="http://localhost:8080/adwords.png"  width="20" height="20"></a>
        </Widget>
      </b-col>
                
            

      
           

           

                        
              


       </b-row>
       <b-row>

       <b-col xl="4" xs="12">
        <Widget
          title="<h6> USERBASE GROWTH </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Overall Growth</h6>
              <p class="value">76.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Montly</h6>
              <p class="value">10.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">24h</h6>
              <p class="value">3.38%</p>
            </div>
          </div>
          <b-progress variant="success" :value="60"
            :max="100" class="progress-xs" />
          <p>
            <small>
              <span class="circle bg-primary text-white mr-2">
                <i class="la la-angle-up" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;17% higher</span>
            &nbsp;than last month
          </p>
        </Widget>

         <Widget
          title="<h6> USERBASE GROWTH </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Overall Growth</h6>
              <p class="value">76.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Montly</h6>
              <p class="value">10.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">24h</h6>
              <p class="value">3.38%</p>
            </div>
          </div>
          <b-progress variant="danger" :value="60"
            :max="100" class="progress-xs" />
          <p>
            <small>
              <span class="circle bg-primary text-white mr-2">
                <i class="la la-angle-up" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;17% higher</span>
            &nbsp;than last month
          </p>
        </Widget>

      </b-col>




       <b-col lg="8">
                    <Widget
                          title="<h6> TRAFFIC VALUES </h6>"
                          customHeader
                        >
                        <Customer_Bar_Chart/>
                        </widget>
              </b-col>

              

          
      </b-row>

        
      <b-row>
      <b-col>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          customHeader settings close
        >
        
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Picture</th>
                  <th>Description</th>
                  <th class="hidden-sm-down">Info</th>
                 
                  <th class="hidden-sm-down">Size</th>
                  <th class="hidden-sm-down">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableStyles" :key="row.id">
                  <td>{{row.id}}</td>
                  <td>
                    <img class="img-rounded" :src="row.picture" alt="" height="50" />
                  </td>
                  <td>
                    {{row.description}}
                    <div v-if="row.label">
                      <b-badge :variant="row.label.colorClass">{{row.label.text}}</b-badge>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0">
                      <small>
                        <span class="fw-semi-bold">Type:</span>
                        <span class="text-muted">&nbsp; {{row.info.type}}</span>
                      </small>
                    </p>
                    <p>
                      <small>
                        <span class="fw-semi-bold">Dimensions:</span>
                        <span class="text-muted">&nbsp; {{row.info.dimensions}}</span>
                      </small>
                    </p>
                  </td>
                 
                  <td class="text-muted">
                    {{row.size}}
                  </td>
                  <td class="width-150">
                    <b-progress
                      :variant="row.progress.colorClass" :value="row.progress.percent" :max="100"
                      class="progress-sm mb-xs"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" class="mr-3" size="sm">Send to...</b-button>
              <b-dropdown variant="inverse" class="mr-xs" size="sm" text="Clear" right>
                <b-dropdown-item>Clear</b-dropdown-item>
                <b-dropdown-item>Move ...</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
            <p>Basic table with styled content</p>
          </div>
        </Widget>
      </b-col>


       <b-col lg="4">
          
                <Widget
                      title="<h6> TRAFFIC VALUES </h6>"
                        customHeader
                    >
                     <PieChart/>
                    </widget>
           
           
           </b-col>
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


import store from '../../store'

console.log(store.state.token)
console.log(store.state.isAuthenticated)

export default {
  name: 'HomeView',
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: require('../../assets/tables/1.jpg'), // eslint-disable-line global-require
          description: 'Palo Alto',
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2018'),
          size: '45.6 KB',
          progress: {
            percent: 29,
            colorClass: 'success',
          },
        },
        {
          id: 2,
          picture: require('../../assets/tables/2.jpg'), // eslint-disable-line global-require
          description: 'The Sky',
          info: {
            type: 'PSD',
            dimensions: '2400x1455',
          },
          date: new Date('November 14, 2018'),
          size: '15.3 MB',
          progress: {
            percent: 33,
            colorClass: 'warning',
          },
        },
        {
          id: 3,
          picture: require('../../assets/tables/3.jpg'), // eslint-disable-line global-require
          description: 'Down the road',
          label: {
            colorClass: 'danger',
            text: 'INFO!',
          },
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2018'),
          size: '49.0 KB',
          progress: {
            percent: 38,
            colorClass: 'inverse',
          },
        },
        {
          id: 4,
          picture: require('../../assets/tables/4.jpg'), // eslint-disable-line global-require
          description: 'The Edge',
          info: {
            type: 'PNG',
            dimensions: '210x160',
          },
          date: new Date('September 15, 2018'),
          size: '69.1 KB',
          progress: {
            percent: 17,
            colorClass: 'danger',
          },
        },
        {
          id: 5,
          picture: require('../../assets/tables/5.jpg'), // eslint-disable-line global-require
          description: 'Fortress',
          info: {
            type: 'JPEG',
            dimensions: '1452x1320',
          },
          date: new Date('October 1, 2018'),
          size: '2.3 MB',
          progress: {
            percent: 41,
            colorClass: 'primary',
          },
        },
      ],}},
  components: {


    Customer_Bar_Chart,
    Top_Product_Table,
    Marital_Bar_Chart,
    Repeat_Customer_Line_Chart,
    Widget,
    Map,
    ScatterChart,
    PieChart,
  },
  
}
</script>
