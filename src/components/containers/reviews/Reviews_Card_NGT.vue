<template>

           <div>
                <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Predcition</h6>
              <p style="color:#fff;" class="value">Negative</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Percentage %</h6>
              <p style="color:#28a745;" class="value">0.33</p>
            </div>
          </div>
          <b-progress variant="danger" :value="0.33"
            :max="1" class="progress-xs" />
            
          </div>

   

</template>

<script>
import axios from 'axios'

    export default {


        data() {

            return {

              ngt: 0,


            };

        },

        async created(){
            await axios
                .get('/predictall')
                .then(response => {
                    this.ngt = response.data.ngt;}
                );
  },

    }

</script>