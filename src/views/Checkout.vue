<template>
  <div class="#F5F9FF" style="background-color:#F5F9FF;height:90vh">
    <div class="" style="margin-top:10vh">

    </div>
    <v-container>

 
      <v-row no-gutters style="height:80vh" >
       <v-col cols="12" xl="3" lg="3">

       </v-col>
       <v-col  cols="12" xl="6" lg="6">
          <v-card  flat height="80vh">
               <v-row align="center" justify="center" no-gutters>
                 <v-radio-group
               dense
      v-model="column"
      row
    >
      <v-radio
        
        value="radio-1"
      ></v-radio>
      <p><v-img  class="mt-4 mr-1" src="https://img.icons8.com/ios-filled/100/000000/visa.png" width="50"></v-img></p>
      <v-radio
       
        value="radio-2"
      ></v-radio>
     <p> <v-img class="mt-4 " width="50" src="https://img.icons8.com/ios-filled/100/000000/mastercard.png"/></p>
    </v-radio-group>
               </v-row>
          </v-card>
       </v-col>
       <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>