<template>
  <div class="#F5F9FF" style="background-color:#F5F9FF;height:90vh">
    <div class="" style="margin-top:10vh">

    </div>
    <v-container>

 
      <v-row class="" no-gutters style="height:80vh" >
       <v-col cols="12" xl="3" lg="3">

       </v-col>
       <v-col  cols="12" xl="6" lg="6">
          <v-card  flat height="80vh">
               <v-row   align="center" justify="center" no-gutters>
                 <v-radio-group
                 class="mt-n3"
               dense
      v-model="column"
      row
      
    >
      <v-radio
        color="black"
        value="radio-1"
      ></v-radio>
      <p class="ml-n5"><v-img  class="mt-4 mr-1" src="https://img.icons8.com/ios-filled/100/000000/visa.png" width="50"></v-img></p>
      <v-radio
      class="ml-3"
        color="black"
        value="radio-2"
      ></v-radio>
     <p class="ml-n5"> <v-img class="mt-4" width="50" src="https://img.icons8.com/ios-filled/100/000000/mastercard.png"/></p>
     <v-radio
     class="ml-3"
        color="black"
        value="radio-3"
      ></v-radio>
     <p class="ml-n5"> <v-img class="mt-4" width="50" src="https://img.icons8.com/external-justicon-lineal-justicon/100/000000/external-paypal-social-media-justicon-lineal-justicon.png"/></p>
    </v-radio-group>
               </v-row>

               <v-row class="mt-n4" align="center" justify="center" no-gutters>
                  <v-col cols="12" xl="6" lg="6" class="pa-2">
                    <p class="text-caption font-weight-bold">Card number *</p>
                    <v-text-field flat type="number" class="mt-n2 text-caption font-weight-bold" placeholder="Enter card number" dense color="black" outlined solo></v-text-field>
                  </v-col>
                   <v-col cols="12" xl="6" lg="6" class="pa-2">
                      <p class="text-caption font-weight-bold">Card holder *</p>
                    <v-text-field flat placeholder="Enter card name" class="mt-n2 text-caption font-weight-bold" dense color="black" outlined solo></v-text-field>
                  </v-col>
               </v-row>
               <v-row class="pa-2 mt-n5" align="center" justify="center" no-gutters>
                 <v-col cols="3">
                   <p class="text-caption font-weight-bold">Month*</p>
                    <v-select
          :items="['a','b','c']"
          solo
          outlined
          flat
          dense
        ></v-select>
       
                 </v-col>
                 <v-col class="pl-1" cols="3">
                   <p class="text-caption font-weight-bold">Year *</p>
                    <v-select
          :items="['a','b','c']"
          flat
          solo
          outlined
         
          dense
        ></v-select>
       
                 </v-col>
                  <v-col class="pl-1" cols="6">
                    <p class="text-caption font-weight-bold">CVC *</p>
                    <v-text-field placeholder="Enter card name" flat class=" text-caption font-weight-bold" dense color="black" outlined solo type="number"   ></v-text-field>
       
                 </v-col>
        
               </v-row>
               <v-row class="pa-2 mt-n6" no-gutters align="center" justify="center">
                 <v-checkbox dense class="mt-n1"></v-checkbox>
                  <p class="text-caption font-weight-bold" style="">  Save my current details for future purchases</p>
                  <v-spacer></v-spacer>
               </v-row>
              <div class="d-none d-sm-flex">
                <div style="width:100%" class="grey--text">
                   <div style="height:10vh;" class="grey lighten-3 ma-2 pa-2">
                      <v-row no-gutters>
                          <p class="text-caption font-weight-bold">Subtotal 3 items</p>
                          <v-spacer></v-spacer>
                          <p class="text-caption font-weight-bold">$40.56</p>
                      </v-row>
                      <v-row class="mt-n2" no-gutters>
                          <p class="text-caption font-weight-bold">Home delivery</p>
                          <v-spacer></v-spacer>
                          <p class="text-caption font-weight-bold">$5.5</p>
                      </v-row>
               </div>
               <div style="height:10vh" class="grey lighten-3 ma-2 pa-2">
                  <v-row style="height:100%" class="black--text" align="center" justify="center" no-gutters>
                          <p class="text-body-2 font-weight-bold">Home delivery</p>
                          <v-spacer></v-spacer>
                          <p class="text-body-2 font-weight-bold">$5.5</p>
                      </v-row>
               </div>
                </div>
              </div>
              <div class="pa-2">
                 <v-btn large block dark class="" color="black">Pay</v-btn>
              </div>
              
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