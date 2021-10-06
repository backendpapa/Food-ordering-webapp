<template>
  <div class="animate__animated animate__fadeIn animate__faster" >
    <v-row no-gutters  align="center" justify="center" style="height:100vh" :class="mobile==false?'bg':'bg2'">
      <v-col cols="12" xl="7" lg="7"> 
        <div class="d-flex d-sm-none pa-4 animate__animated animate__fadeIn animate__slower">
          <HomeMobile class="animate__animated  animate__bounce"  />
        </div>
        

       <div class="animate__animated animate__fadeIn animate__slower">
          <HomeDesktop class="d-none d-sm-flex animate__animated animate__bounce" />
       </div>
        
      </v-col>
      <v-col cols="12" xl="5" lg="5"></v-col>
    </v-row>

    
  </div>
</template>

<script>
  
import HomeMobile from './Home/HomeMobile.vue'
import HomeDesktop from './Home/HomeDesktop.vue'
  export default {
    name: 'Home',

    components: {
      HomeMobile,
      HomeDesktop
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
</style>
