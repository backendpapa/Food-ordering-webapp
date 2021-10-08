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
  <router-link to="/" style="text-decoration:none">
     <v-row align="center" justify="center"  no-gutters class=" mt-1 pa-3" style="height:100%;width:150px;margin:0">
     <p><v-icon color="#F64B6B">mdi-baguette</v-icon></p>
     <p class="ml-1" style="font-weight:bold;font-size:20px;color:#F64B6B">belleful.</p>
   </v-row>
  </router-link>
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
     <v-btn plain small text icon class="d-flex d-sm-none " @click="drawer=!drawer" > <v-icon size="27">mdi-menu</v-icon></v-btn>
    
     </div>



    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="pa-4"
    >
     <div >
       <v-row no-gutters align="center"  style="height:40vh">
        <div>
           <v-avatar size="120">
         <v-img src="https://images.unsplash.com/photo-1567037782848-d0fe9a51ec4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjB3b21lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ></v-img>
       </v-avatar>
       <p class="text-h5 font-weight-bold">Jane Doe</p>
       <p class="mt-n5" style="font-size:12px"><i>janedoe@gmail.com</i></p>
        </div>
       </v-row>


     </div>

    

      <v-list dense>
        <v-list-item
         v-for="i in menu"
         :key="i.name"
          link
          :to="i.to"
        >
          <v-list-item-icon>
            <v-icon>{{i.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{i.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-dialog
      v-model="dialog"
     style="background-color:#F6F6F6"
      fullscreen
      class="animate__animated animate__fadeIn animate__slower"
    >
      

      <div class=" pa-2" style="height:100%;width:100%;background-color:#F6F6F6" >
        <v-container>
            <v-row no-gutters align="center" justify="center">
              <v-col  cols="12" xl="7" lg="7" >
                  <v-btn  @click="dialog=!dialog" text plain class="ml-n5 mb-2" style="text-transform:none"><v-icon>mdi-arrow-left</v-icon>Continue Shopping</v-btn>
                  <hr style="opacity:0.3;color:grey">
                  <p class="mt-2 font-weight-bold">Shopping Cart</p>
                  <v-row class="mt-n3" no-gutters>
                    <p class="font-weight-bold text-caption">You have 4 items in your cart.</p>
                    <v-spacer></v-spacer>
                    <p class="text-caption">Sort by</p>
                  </v-row>
                  <div class="pa-2 d-flex d-sm-none ">
                  
                      <v-btn block color="black" dark style="text-transform:none" to="/payment/checkout" class="text-caption " @click="dialog=!dialog">Proceed to Checkout <v-icon>mdi-arrow-right</v-icon></v-btn>
                    
                  </div>
                  <div class="pa-2 d-none d-sm-flex d-md-none ">
                  
                      <v-btn block color="black" to="/payment/checkout" @click="dialog=!dialog" dark style="text-transform:none" class="text-caption ">Proceed to Checkout <v-icon>mdi-arrow-right</v-icon></v-btn>
                   
                  </div>
                  <div class="pa-2" style="height:70vh;overflow-y:scroll">
                    <!-- desktop configuration -->
                    <div style="width:100%" class="d-none d-sm-flex">
                      <div style="width:100%">
                        <cart-desktop  />
                      </div>
                      
                    </div>
                    <!-- mobile configuration -->
                    <div style="width:100%" class="d-flex d-sm-none">
                        <div style="width:100%" class="">
                          <cart-mobile />
                        </div>
                    </div>
                  </div>
              </v-col>
              <v-col cols="12"  xl="5" lg="5" class="pl-10 pr-10 d-sm-none d-md-flex">
                <div style="width:100%" class="d-none d-sm-flex">
                    <div style="width:100%" class="" >
                      <v-card style="border-radius:15px"  flat class="pa-2"  height="90vh">
                        <p><v-img src="./assets/food.png"></v-img></p>
                        <p class="text-center font-weight-bold">Its time to place your order, Yummy!</p>
                        <p class="text-caption red--text text-center">Flash sales discount soon</p>
                        <v-btn color="black" class="text-caption" block large dark style="text-transform:none" to="/payment/checkout" @click="dialog=!dialog">Proceed to Checkout <v-icon>mdi-arrow-right</v-icon></v-btn>
                  </v-card>
                    </div>
                </div>
                  
              </v-col>
            </v-row>
            
        </v-container>
       
     
      </div>
    </v-dialog>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import CartDesktop from './views/Cart/CartDesktop.vue'
import CartMobile from './views/Cart/CartMobile.vue'
import "./App.css"
export default {
  name: 'App',
  components:{
    CartDesktop,
    CartMobile
  },

  data: () => ({
    //
    dialog:false,
    drawer:false,
    val:1,
    items:[
      'Standard Delivery - $5.00','Bounty Delivery - $15.00'
    ],
    delivery:"Standard Delivery - $5.00",
    menu:[
      {name:'Categories',icon:"mdi-category",to:'/categories'},
      {name:'Profile',icon:"mdi-account",to:'/profile'},
      {name:'Orders',icon:"mdi-account",to:'/account/order'},
      {name:'wallet',icon:"mdi-account",to:'/account/wallet'},
      {name:'signup',icon:"mdi-account",to:'/user/signup'},
    ]
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
