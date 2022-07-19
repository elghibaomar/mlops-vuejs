<template>
  <div>
              <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>divorced</th>
                  <th>married</th>
                  <th>single</th>
                  <th>unknown</th>
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


  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
  name: 'Customer_Bar_Chart',
  data() {
    return {

      tableStyles: [
        {
          id: '70+',
        },
         {
          id: '[18, 30)',
        },
        {
          id: '[30, 40)',
        },
         {
          id: '[40, 50)',
        },
         {
          id: '[50, 60)',
        },
         {
          id: '[60, 70)',
        },
        
      ]
      

    }
  },
  async created(){
     await axios
                .get('http://143.198.251.214/Conversion_Age_Marital')
                .then(response => {
                    this.tableStyles[0]['divorced'] = response.data['divorced'];
                    this.tableStyles[0]['married'] = response.data[0];
                    this.tableStyles[0]['single'] = response.data[0];
                    this.tableStyles[0]['unknown'] = response.data[0];
}
                );
  },
}
</script>