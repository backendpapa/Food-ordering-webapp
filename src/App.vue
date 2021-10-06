<template>
  <v-app>
    <v-app-bar
      
      color="transparent"
      flat
      fixed
    class="animate__animated animate__fadeIn"
      style="padding:0"
   
     
    >
  <div style="height:100%;margin:0;margin-left:-16px" class="mt-n2" >
   <v-row align="center" justify="center"  no-gutters class=" mt-1 pa-3" style="height:100%;width:150px;margin:0">
     <p><v-icon color="#F64B6B">mdi-baguette</v-icon></p>
     <p class="ml-1" style="font-weight:bold;font-size:20px;color:#F64B6B">esweet.</p>
   </v-row>
  </div>
  <v-spacer></v-spacer>
  <div class="d-none d-sm-flex">
    <div class="d-flex align-center ">
      <!-- Find food button -->
      <div class="align-center">
        <v-btn text plain to="/" class="text-caption font-weight-bold" style="text-transform:none;">Find food</v-btn>
        <hr v-if="$route.path=='/'" class="animate__animated animate__fadeInLeft" style="width:25px;margin:0 34%;border: 2px solid red;border-radius:15px;margin-top:-8px">
        <p v-else style="margin-top:-20px"> </p>
      </div>
      <!-- Category button -->
      <div class="align-center">
        <v-btn text plain to="/categories" class="text-caption font-weight-bold" style="text-transform:none;">Categories</v-btn>
        <hr v-if="$route.path=='/categories'" class="animate__animated animate__fadeInLeft" style="width:25px;margin:0 34%;border: 2px solid red;border-radius:15px;margin-top:-8px">
        <p v-else style="margin-top:-20px"> </p>
      </div>

      <!-- Restaurants -->
      <div class="align-center">
        <v-btn text plain to="/restaurants" class="text-caption font-weight-bold" style="text-transform:none;">Restaurants</v-btn>
        <hr v-if="$route.path=='/restaurants'" class="animate__animated animate__fadeInLeft" style="width:25px;margin:0 34%;border: 2px solid red;border-radius:15px;margin-top:-8px">
        <p v-else style="margin-top:-20px"> </p>
      </div>
      <!-- About -->
      <div class="align-center">
        <v-btn text plain to="/about" class="text-caption font-weight-bold" style="text-transform:none;">About us</v-btn>
        <hr v-if="$route.path=='/about'" class="animate__animated animate__fadeInLeft" style="width:25px;margin:0 34%;border: 2px solid red;border-radius:15px;margin-top:-8px">
        <p v-else style="margin-top:-20px"> </p>
      </div>
      <p class="ml-4 mr-4" style="font-size:40px">.</p>
     <p class="text-caption font-weight-bold mt-6" style="color:#F64B6B">+234 0002221114</p>

     
    </div >
  </div>
    
     <v-spacer></v-spacer>
     <div class="d-flex align-center animate__animated animate__fadeInRight">
     <p class="text-caption font-weight-bold mt-6 d-none d-sm-flex" >Account <v-icon size="20">mdi-chevron-down</v-icon></p>
     <v-btn plain small text icon class="mt-1 d-none d-sm-flex" to="/cart"> <v-icon size="20">mdi-shopping</v-icon></v-btn>

     <v-btn rounded  color="#F64B6B" dark  class="text-caption mt-1 font-weight-bold d-none d-sm-flex" style="text-transform:none">Confirm Order</v-btn>
     <v-btn plain small text icon class="d-flex d-sm-none " to="/cart"> <v-icon size="20">mdi-shopping</v-icon></v-btn>
     <v-btn plain small text icon class="d-flex d-sm-none " to="/cart"> <v-icon size="23">mdi-menu</v-icon></v-btn>
    
     </div>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import "./App.css"
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
