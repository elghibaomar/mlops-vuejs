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
                <b-col lg= "3">
          
                  <Widget
                      title="<h6> Created </h6>"
                       customHeader
                    >   
                    <Created/>
                    
                    </widget>

                    </b-col>

                    
               <b-col lg= "3">
          
                  <Widget
                      title="<h6> In progress </h6>"
                       customHeader
                    >   
                    <InProgress/>
                    
                    </widget>
           
               </b-col>
                <b-col lg= "3">
          
                  <Widget
                      title="<h6> Testing </h6>"
                       customHeader
                    >   
                    <Testing/>
                    
                    </widget>
           
               </b-col>

               <b-col lg= "3">

                    <Widget
                      title="<h6> Done </h6>"
                       customHeader
                    >   
                    <Done/>
                    
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