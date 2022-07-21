<template>
    <div>  
         <b-container class="bv-example-row">
            <b-row>
                <b-col xxs="12">
                    <h1 class="page-title">Profile &nbsp;
                    <small>
                        <small>Edite Your Profile</small>
                    </small>
                </h1>
                </b-col>
            </b-row>

        
        
            <b-row align-h="center">
                <b-col cols="6" > 
                <Widget
                      
                       customHeader
                    >
                      <ProfileCard/>
                    </widget>
                
                </b-col>
                <b-col cols="6" lg = "5">
          
                <Widget
                      title="<h6> </h6>"
                       customHeader
                    >
                     <ProfileForm/>
                    </widget>
           
           
           </b-col>
            </b-row>
    </b-container>

    </div>
</template>

<script>
    import ProfileCard from '@/components/containers/ProfileCard.vue'
    import ProfileForm from '@/components/containers/ProfileForm.vue'
    import Widget from '@/components/Widget/Widget';
    export default {
        components: {
            ProfileCard,
            ProfileForm,
            Widget,
  }
        
    }
</script>

<style lang="scss" scoped>

</style>