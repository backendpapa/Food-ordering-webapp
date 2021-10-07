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
     <v-btn plain small text icon class="mt-1 d-none d-sm-flex" @click="dialog=!dialog" > <v-icon size="20">mdi-shopping</v-icon></v-btn>

     <v-btn rounded  color="#F64B6B" dark  class="text-caption mt-1 font-weight-bold d-none d-sm-flex" style="text-transform:none">Confirm Order</v-btn>
     <v-btn plain small text icon class="d-flex d-sm-none " @click="dialog=!dialog" > <v-icon size="20">mdi-shopping</v-icon></v-btn>
     <v-btn plain small text icon class="d-flex d-sm-none " > <v-icon size="23">mdi-menu</v-icon></v-btn>
    
     </div>



    </v-app-bar>
    <v-dialog
      v-model="dialog"
     
      fullscreen
    >
      

      <div class="white" style="height:100%;width:100%" >
        <v-row no-gutters>
          <v-btn @click="dialog=!dialog" text icon><v-icon>mdi-close</v-icon></v-btn>
        </v-row>
        <v-container >
           <v-row no-gutters class=""   >
           <v-col cols="12" xl="9" lg="9" class="">
             <v-row no-gutters class="mt-5">
               <p class="text-h5 font-weight-bold">Shopping Cart</p>
               <v-spacer></v-spacer>
               <p class="text-h5 font-weight-bold">3 items</p>
              
             </v-row>
             <hr style="opacity:0.2;" class="grey">
             <div style="height:75vh;overflow-y:scroll" class="pa-2 nana">
               <v-row no-gutters align="center" justify="center">
                  <v-col cols="5">
                    <p class="text-caption font-weight-bold">PRODUCT DETAILS</p>
                  </v-col>
                  <v-col cols="3">
                   <p class="text-caption text-center font-weight-bold"> QUANTITY</p>
                  </v-col>
                  <v-col cols="2">
                    <p class="text-caption font-weight-bold">PRICE</p>
                  </v-col>
                  <v-col cols="2">
                    <p class="text-caption font-weight-bold">TOTAL</p>
                  </v-col>
               </v-row>
               <v-row no-gutters v-for="i in 3" :key="i" align="center" justify="center">
                 <v-col class="" cols="5">
                   <v-row no-gutters >
                      <p><v-img width="100"  height="100" src="./assets/bb.jpg"></v-img></p>
                      
                      <div class="ml-2 d-none d-sm-flex">
                        <div>
                          <p class="font-weight-bold">Solid bagel</p>
                        <p class="text-caption mt-n2">Bagels</p>

                        <router-link class="text-caption" to="/" @click="remv"><p>remove</p></router-link>  
                        </div>
                      </div>
                       <div class="ml-2 d-flex d-sm-none">
                        <div>
                          <p class="font-weight-bold ">Solid bagel</p>
                        <p class="text-caption mt-n4 mb-n2">Bagels</p>

                        <router-link class="text-caption " to="/" @click="remv"><p>remove</p></router-link>
                        </div>
                      </div>
                   </v-row>
                 </v-col>
                 <v-col  cols="3">
                   <v-row class=" d-none d-sm-flex "  no-gutters>
                     <v-spacer></v-spacer>
                     
                        <v-btn icon plain   text>
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>

                       <v-text-field background-color="grey lighten-3" style="width:10px"  v-model="val"  dense solo ></v-text-field>

                        <v-btn icon plain text>
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                
                      <v-spacer></v-spacer>
                   </v-row>
                   <v-row class=" d-flex d-sm-none "  no-gutters>
                     <v-spacer></v-spacer>
                     
                       <div>
                          <v-btn class="ml-n1" icon plain   text>
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>

                       <v-text-field background-color="grey lighten-3" style="width:30px"  v-model="val"  dense solo ></v-text-field>

                        <v-btn class="mt-n5 ml-n1" icon plain text>
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                       </div>
                
                      <v-spacer></v-spacer>
                   </v-row>
                 </v-col>
                <v-col  cols="2">
                    <p class="text-caption mt-4 font-weight-bold">$44.54</p>
                 </v-col>
                 <v-col  cols="2">
                   <p class="text-caption mt-4 font-weight-bold">$44.54</p>
                 </v-col>
               </v-row>
             </div>
           </v-col>
           
       </v-row>
        </v-container>
       <v-navigation-drawer
       class="d-none d-sm-flex"
      absolute
      color="#F5F5F6"
      permanent
      width="350"
      right
       fixed
    >
      

     
    </v-navigation-drawer>
     
      </div>
    </v-dialog>
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
    dialog:false,
    val:1
  }),
};
</script>
<style>
.v-navigation-drawer__border {
  width: 0px!important;
  background-color: red!important;
}
  ::-webkit-scrollbar {
    display: none;
  }

</style>
