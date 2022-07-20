<template>
  <div class="widget-body p-0">
            <div class="list-group list-group-lg">
             


             <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../../assets/people/box.png" alt="..." />
                </span>
                <div>
                  <h6 class="m-0">{{Top_Product_Index[0]}}</h6>
                  <p class="help-block text-ellipsis m-0">
                    Total Purchase : {{Top_Product[0]}}
                  </p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../../assets/people/box.png" alt="..." />
                </span>
                <div>
                  <h6 class="m-0">{{Top_Product_Index[1]}}</h6>
                  <p class="help-block text-ellipsis m-0">
                    Total Purchase : {{Top_Product[1]}}
                  </p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../../assets/people/box.png" alt="..." />
                </span>
                <div>
                  <h6 class="m-0">{{Top_Product_Index[2]}}</h6>
                  <p class="help-block text-ellipsis m-0">Total Purchase : {{Top_Product[2]}}</p>
                </div>
              </a>
             

             




            </div>
          </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Top_Product_Table',
  data() {
    return {
      Top_Product_Index: ["85123A",
        "22834",
        "22837",],
      Top_Product: [34,
        25,
        22],
    }
  },
  async created(){
     await axios
                .get('http://143.198.251.214/Product_Purchase' , {headers: { 'Accept': 'application/json' }})
                .then(response => {this.Top_Product = [response.data[1]];
                this.Top_Product_Index = [response.data[0]] }
                );
  },
}
</script>