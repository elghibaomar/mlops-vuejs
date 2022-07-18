<template>

    <div >

        <div >

            <div >

                <div >


                    <div >

                        


                        <b-form @submit.prevent="formSubmit" >
                   

                                <b-form-group id="input-group-2" >
                                    <b-form-textarea
                                    id="input-2"
                                    v-model="review"
                                    placeholder="Enter Your"
                                    class="input-transparent"
                                    required
                                    ></b-form-textarea>
                                </b-form-group>


                            

                   

                                <b-button type="submit" variant="danger">Submit</b-button>

                                
                        </b-form>

                                


                        {{score}}

                    

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios'

    export default {

        mounted() {

            console.log('Component mounted.')

        },

        data() {

            return {

              review: '',
              score: {},
              show : false


            };

        },

        methods: {

    //         formSubmit: function () {
    //     // reformat the payload from [{name: Age, value: 10}, ...] to {Age:10, ...}
    //                 axios.post("/predict", {text: this.review})
    //                     .then(resp => resp.data)
    //                     .then(data => {
    //                         this.score = data.score
    //                     })
    //                     .catch(e => console.log(e))
    // },

            formSubmit() {
                
                this.show = true
                axios
                     .post(
                        "/predict",{text:this.review},
                )
                     .then((response) => {
                            this.score = response.data.sentiment
                        })

            }

        }

    }

</script>
<style src="./Tables.scss" lang="scss" scoped />

