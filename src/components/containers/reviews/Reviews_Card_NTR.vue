<template>

           <div>
                <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Predcition</h6>
              <p style="color:#fff;" class="value">Neutral</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Percentage %</h6>
              <p style="color:#28a745;" class="value">{{ntr}}</p>
            </div>
          </div>
          <b-progress variant="info" :value="ntr"
            :max="1" class="progress-xs" />
            
          </div>

   

</template>

<script>
import axios from 'axios'

    export default {


        data() {

            return {

              ntr: 0,


            };

        },

        async created(){
            await axios
                .get('/predictall')
                .then(response => {
                    this.ntr = response.data.ntr;}
                );

  },

    }

</script>