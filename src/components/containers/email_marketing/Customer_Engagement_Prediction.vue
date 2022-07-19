<template>

    <div >

        <div >

            <div >

                <div >


                    <div >

                        

                    
                                               
                         <b-form @submit.prevent="formSubmit">
                   

                                <b-form-group id="input-group-1">
                                    <b-form-select style="background-color:#000; border:#000;" :horizontal="true"
                                    id="input-1"
                                    v-model="Countries"
                                    placeholder="Select"
                                    class="input-transparent"
                                    required
                                    :options="Countriesx"
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-2" >
                                    <b-form-select style="background-color:#000; border:#000;"
                                    id="input-2"
                                    v-model="Gender"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    :options="Genderx"
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-3" >
                                    <b-form-select style="background-color:#000; border:#000;"
                                    id="input-3"
                                    v-model="Template"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    :options="Templatex"
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-4" >
                                    <b-form-select style="background-color:#000; border:#000;"
                                    id="input-4"
                                    v-model="Marital"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    :options="Maritalx"
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-5" >
                                    <b-form-select style="background-color:#000; border:#000;"
                                    id="input-5"
                                    v-model="Provider"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    :options="Providerx"
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-6" >
                                    <b-form-select style="background-color:#000; border:#000;"
                                    id="input-6"
                                    v-model="Esp"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    :options ="Espx"
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-7" >
                                    <b-form-select style="background-color:#000; border:#000;"
                                    id="input-7"
                                    v-model="Age"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    :options="Agex"
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-8" >
                                    <b-form-select style="background-color:#000; border:#000;"
                                    id="input-8"
                                    v-model="Dates"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    :options="Datex"
                                    ></b-form-select>
                                </b-form-group>


                            

                   

                                <b-button type="submit" variant="info">Predict</b-button>

                                
                                
                        </b-form>   

                        <div>
                <div class="stats-row">
                    <div class="stat-item">
                        <br><br>
                        <h6 class="name">Predcition</h6>
                        <p style="color:#fff;" class="value">{{score}}</p>
                    </div>
                    <img v-if="score == 1" src="../../assets/pic/yes.png"  width="40" height="40">
                     <img v-if="score == 0" src="../../assets/pic/no.png"  width="40" height="40"></img>
          </div>


            
          </div>



                                



                    

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios'
import Customer_Engagement_Result from '@/components/containers/email_marketing/Customer_Engagement_Result.vue';

    export default {


        data() {

            return {


              Countriesx : [{ text: 'Tanger - Tetouan - Al Houceima', value: 'Belgium' }, { text: 'Rabat - Sale - Kenitra', value: 'France' }, { text: 'Fes - Meknes', value: 'Germany' }
                , { text: 'Casablanca - Settat', value: 'Italy' }, { text: 'Marrakech - Safi', value: 'Netherlands' }, { text: 'Oriental', value: 'Portugal' }, { text: 'Laayoune', value: 'Spain' }
                , { text: 'Souss - Massa', value: 'United Kingdom' }],
              Countries: 'Belgium',


              Genderx : [{ text: 'Femal' , value : 'F'} , { text: 'Male' , value : 'M'}],
              Gender : 'F',

              Templatex : [{ text: 'Template 1' , value : 1} , { text: 'Template 2' , value : 2}],
              Template : 1,

              Maritalx : [{ text: 'Married' , value : 'married'} , { text: 'Single' , value : 'single'},
                          { text: 'Divorced' , value : 'divorced'} , { text: 'Unknown' , value : 'unknown'}],
              Marital : 'married',

              Providerx : [{ text: 'Provider 13' , value : 'prv-13'} , { text: 'Provider 21' , value : 'prv-21'},
                          { text: 'Provider 37' , value : 'prv-37'} , { text: 'Provider 19' , value : 'prv-19'},
                          { text: 'Provider 5' , value : 'prv-5'} , { text: 'Provider 11' , value : 'prv-11'},
                          { text: 'Provider 22' , value : 'prv-22'}],
              Provider : 'prv-13',

              Espx : [{ text: 'Gmail' , value : 'Gmail'} , { text: 'Outlook' , value : 'Outlook'},
                          { text: 'Yahoo' , value : 'Yahoo'} , { text: 'Aol' , value : 'Aol'},
                          { text: 'Icloud' , value : 'Icloud'}],
              Esp : 'Gmail',

              Agex : [{ text: '[18, 30)' , value : '[18, 30)'} , { text: '[30, 40)' , value : '[30, 40)'},
                          { text: '[40, 50)' , value : '[40, 50)'} , { text: '[50, 60)' , value : '[50, 60)'},
                          { text: '[60, 70)' , value : '[60, 70)'} , { text: '70+' , value : '70+'}],
              Age : '[18, 30)',

              Datex : [{ text: 'January' , value : 1} , { text: 'February' , value : 2},
                          { text: 'March' , value : 3} , { text: 'April ' , value : 4},
                          { text: 'May' , value : 5} , { text: 'June' , value : 6},
                          { text: 'July' , value : 7} , { text: 'August' , value : 8},
                          { text: 'September' , value : 9} , { text: 'October' , value : 10},
                          { text: 'November' , value : 11} , { text: 'December' , value : 12},],
              Dates : 1,

              show : false,
              engagement:{},
              score : 1,

            };

        },



        methods: {

            formSubmit() {
                
                this.show = true
                axios
                     .post(
                        "/predict_engagement",{dct: {"Date":this.Dates,"Template":this.Template,"Age_Group":this.Age,"Gender":this.Gender,"Countries":this.Countries,"Marital":this.Marital,"provider":"prv-37","esp":this.Esp}},
                )
                     .then((response) => {
                            this.score = response.data.engagement
                        })

            }

        },
        components: {
            Customer_Engagement_Result
        }

    }

</script>

