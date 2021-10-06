<template>
  <div>
          <p class=" text-caption" style="font-weight:bold;color:grey;"><v-icon class="mt-n1" size="15">mdi-map-marker</v-icon>Abuja</p>
          <p class="text-h3 font-weight-bold mt-n2" style="color:#0F2245" >Discover restaurants that delivers near you.</p>
          <v-text-field v-model="input" class="text-caption font-weight-bold" placeholder="Enter your delivery address" solo rounded append-icon="mdi-magnify" @click:append="alertme" />
    
     
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            dialog:true,
            mobile:false,
            input:""
        }
    },
    methods:{
      alertme(){
        alert("search")
       
      }
    },
    mounted(){
        this.mobile=navigator.userAgentData.mobile
    }
}
</script>

<style>

</style>