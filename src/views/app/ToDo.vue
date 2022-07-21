<template>
    <div>  
         <b-container class="bv-example-row">
            <b-row>
                <b-col xxs="12">
                    <h1 class="page-title">To Do List &nbsp;
                    <small>
                        <small>View Your To Do List</small>
                    </small>
                </h1>
                </b-col>
            </b-row>
        
            <b-row>

                <b-col lg= "5">
          
                  <Widget
                      title="<h6> Add Your Task </h6>"
                       customHeader
                    >   
                    <Created/>
                    
                    </widget>
           
               </b-col>

               <b-col lg= "5">

                    <Widget
                      title="<h6> Tasks </h6>"
                       customHeader
                    >   
                    <Testing/>
                    
                    </widget>
           
               </b-col>
               
               
            </b-row>
    </b-container>

    </div>
</template>

<script>

    import Widget from '@/components/Widget/Widget';
    import Created from '@/components/Todo/Created';
    import InProgress from '@/components/Todo/InProgress';
    import Testing from '@/components/Todo/Testing';
    import Done from '@/components/Todo/Done';
    export default {
        components: {
            Created,
            InProgress,
            Widget,
            Testing,
            Done,
  }
        
    }
</script>

<style lang="scss" scoped>

</style>