<template :style="myStyle">
  <div >
    <b-container class="bv-example-row">


      <b-row>
         <b-col xxs="12">
            <h1 class="page-title">Email Marketing &nbsp;
              <small>
                <img src="http://localhost:8080/gmail.png"  width="50" height="50"></small>
             
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
                  
                  <PieChart/>
                     
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

       




       <b-col lg="12">
                    <Widget
                          title="<h6> TRAFFIC VALUES </h6>"
                          customHeader
                        >
                        <Customer_Bar_Chart/>
                        </widget>
              </b-col>

              

          
      </b-row>

        
      <b-row>
      


       <b-col lg="8">
          
                <Widget
                      title="<h6> TRAFFIC VALUES </h6>"
                        customHeader
                    >
                     <Repeat_Customer_Line_Chart/>
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
