<template>
  <div >
                <b-form-group>
                    <b-form-file @change="onFileChange" id="file-default"></b-form-file>
                </b-form-group>
  </div>
</template>

<script>

import axios from 'axios'




export default {
  name: 'Chart',
  data: function() {
    return {
      loaded : false,
      
    
   
      }
    },
    methods: {
    onFileChange(e) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      axios
        .post("http://143.198.251.214/upload", formData)
        .then(() => {
          console.log("SUCCESS");
        })
        .catch(() => {
          console.log("FAILED");
        });
    },
  },

   
}
</script>