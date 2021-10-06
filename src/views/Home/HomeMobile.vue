<template>
  <div>
          <p style="font-weight:bold;color:grey;font-size:13px;"><v-icon class="mt-n1" size="19">mdi-map-marker</v-icon>Abuja</p>
          <p class="text-h3 font-weight-bold" style="color:#0F2245" >Discover restaurants that delivers near you.</p>
          <v-text-field v-model="input" class="text-caption font-weight-bold" placeholder="Enter your delivery address" solo rounded append-icon="mdi-magnify" @click:append="alertme" />
    
     <div v-if="mobile==true && input.length>0" class="animate__animated animate__fadeInUpBig">
         <v-dialog
     
     
     
      v-model="dialog"
     transition="scroll-y-reverse-transition"
      width="500"
      fullscreen
    >
      

      <v-card class="pt-2">
          <br>
        <v-card-text>
            <v-text-field autofocus v-model="input" class="text-caption font-weight-bold" placeholder="Enter your delivery address" solo rounded append-icon="mdi-magnify" @click:append="alertme" />
        </v-card-text>

        <v-card-text>
          <v-row  style="width:100%" no-gutters>
              <div style="width:100%">
                  <p class="text-center"><v-icon size="80" color="grey">mdi-store</v-icon></p>
                  <p class="text-center">This section is under development</p>
              </div>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        
      </v-card>
    </v-dialog>
     </div>
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