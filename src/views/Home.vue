<template>
  <div  >
    <v-row no-gutters align="center" justify="center" style="height:100vh" class="bg">
      <v-col cols="12" xl="7" lg="7"> 
        <v-container class="" style="padding:0 17%" >
          <p style="font-weight:bold;color:grey;font-size:13px;"><v-icon class="mt-n1" size="19">mdi-map-marker</v-icon>Abuja</p>
          <p class="text-h3 font-weight-bold" style="color:#0F2245" >Discover restaurants that delivers near you.</p>
          <v-text-field class="text-caption font-weight-bold" placeholder="Enter your delivery address" solo rounded append-icon="mdi-magnify" @click:append="alertme">

          </v-text-field>
        </v-container>
      </v-col>
      <v-col cols="12" xl="5" lg="5"></v-col>
    </v-row>
  </div>
</template>

<script>
  

  export default {
    name: 'Home',

    components: {
      
    },
    methods:{
      alertme(){
        alert("search")
      }
    }
  }
</script>
<style >
.bg{
  background-image: url('../assets/b1.jpg');
  background-size: cover;
}
</style>
