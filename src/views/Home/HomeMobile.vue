<template>
  <div>
          <p style="font-weight:bold;color:grey;font-size:13px;"><v-icon class="mt-n1" size="19">mdi-map-marker</v-icon>Abuja</p>
          <p class="text-h3 font-weight-bold" style="color:#0F2245" >Discover restaurants that delivers near you.</p>
          <v-text-field class="text-caption font-weight-bold" placeholder="Enter your delivery address" solo rounded append-icon="mdi-magnify" @click:append="alertme" />
    
  </div>
</template>

<script>
export default {
    methods:{
      alertme(){
        alert("search")
       
      }
    }
}
</script>

<style>

</style>