<template>
  <div  class="animate__animated animate__fadeIn animate__slower">
     <v-row no-gutters>
         <v-col cols="12" xl="8" lg="8" >
             
              <GmapMap
      :center='center'
      :zoom='12'
      :options="{
   zoomControl: false,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUI: false
 }"
      style='width:100%;  height: 100vh;'
    >
    <GmapMarker
        :key="index"
        
        :position="center"
        @click="center=center"
      />
    </GmapMap>
         </v-col>
         <v-col class="d-none d-sm-flex" cols="12" xl="4" lg="4">

         </v-col>
         <v-col class="d-flex d-sm-none"  cols="12" xl="4" lg="4">
             <div>
                 <div  v-if="toggle==false" style="height:10vh;width:100%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);position:absolute;bottom:0;" class="white pa-2 ">
                        <v-btn style="text-transform:none" class="text-caption" @click="toggle=!toggle" block color="black" large dark>More details</v-btn>
                 </div>
                 <div  v-else style="height:40vh;width:100%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);position:absolute;bottom:0;" class="white pa-2  ">
                    <v-btn icon @click="toggle=!toggle"  plain> <v-icon>mdi-close</v-icon></v-btn>
             </div>
             </div>
         </v-col>
         
     </v-row>
  </div>
</template>

<script>
export default {
    data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      toggle:false,
       currentPlace: null,
    }
  },
   mounted() {
    this.geolocate();
  },
  methods: {
      setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
     
    },
  },
}
</script>

<style>

</style>