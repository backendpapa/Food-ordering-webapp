<template>
  <div class="animate__animated animate__fadeIn animate__faster" >
    <v-row no-gutters  align="center" justify="center" style="height:100vh" :class="mobile==false?'bg':'bg2'">
      <v-col cols="12" xl="7" lg="7" > 
        <div class="d-flex d-sm-none pa-4 animate__animated animate__fadeIn animate__slower">
          <HomeMobile class="animate__animated  animate__bounce  mt-8"  />
        </div>
        

       <div class="animate__animated animate__fadeIn animate__slower">
          <HomeDesktop class="d-none d-sm-flex animate__animated animate__bounce" />
       </div>
       <br>
        <carousel class="animate__animated animate__fadeIn animate__slower" style="" :nav="false" autoWidth   >

    <v-card flat v-for="i in 13"  :key="i.i" width="200" height="25vh"   class=" ma-1 pa-2 card">
       <div style="height:100%;position:relative">
         <div style="height:6vh;margin-top:50%" class="white">
           <v-row class="ma-2" style="height:100%" no-gutters align="center" justify="center">
             <v-icon color="#F64B6B">mdi-cookie</v-icon>
             <span class="text-caption ml-1 font-weight-bold ">Pizza</span>
             <v-spacer></v-spacer>
             <v-btn icon ><v-icon color="#F64B6B">mdi-arrow-right</v-icon></v-btn>
           </v-row>
       </div>
       </div>
    </v-card>

</carousel>
        
      </v-col>
      <v-col cols="12" xl="5" lg="5"></v-col>
    </v-row>

    
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import HomeMobile from './Home/HomeMobile.vue'
import HomeDesktop from './Home/HomeDesktop.vue'
  export default {
    name: 'Home',

    components: {
      HomeMobile,
      HomeDesktop,
      carousel
    },
    data(){
      return {
        mobile:false
      }
    },
    methods:{
      alertme(){
        alert("search")
      }
    },
    mounted(){
      // alert(navigator.userAgentData.mobile)
      if(navigator.userAgentData.mobile==false){
        this.mobile=false;
      }else{
        this.mobile=true;
      }
    }
  }
</script>
<style >
.bg{
  background-image: url('../assets/b1.jpg');
  background-size: cover;
}
.bg2{
  background-image: url('../assets/b2.jpg');
  background-size: cover;
}
.card{
  background-image: url('../assets/bb.jpg');
  background-size: cover;
}
</style>
