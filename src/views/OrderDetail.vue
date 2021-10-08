<template>
  <div  class="animate__animated animate__fadeIn animate__slower">
     <v-row no-gutters>
         <v-col cols="12" xl="8" lg="8" >
             
              <GmapMap
      :center='center'
      :zoom='14'
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
       
        
        :position="center"
      />
    </GmapMap>
         </v-col>
         <v-col class="d-none d-sm-flex" cols="12" xl="4" lg="4">
            <div class="pa-2 mt-10">
                        <p class="text-h4">Order#58392</p>
                        <p class="mt-n4"><i>In transit</i><v-icon color="pink" size="20">mdi-taxi</v-icon></p>
                        <p class="text-body-2 font-weight-bold mt-n3">45 min</p>
                        <p style="font-size:11px" class="mt-n4">Arrival time(approx).</p>
                        <p class="text-caption mt-n3">Bagel,Grilled Chicken,Malt,Salad</p>
                    </div>
                    <v-row no-gutters align="center" justify="center" class="pa-2">
                         <div>
                             <v-rating
      v-model="rating"
      background-color="grey"
      color="black"
      dense
      small
      large
    ></v-rating>
    
    <p class=" mb-2" style="font-size:7px">Rate now!</p>
                         </div>
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn plain  icon><v-icon>mdi-phone</v-icon></v-btn>
                            <p class=" mt-n1" style="font-size:7px">Report</p>
                        </div>
                        <div>
                            <v-btn plain  icon><v-icon>mdi-close-circle-multiple-outline</v-icon></v-btn>
                            <p class=" mt-n1" style="font-size:7px">Cancel order</p>
                        </div>
                    </v-row>
         </v-col>
         <v-col class="d-flex d-sm-none"  cols="12" xl="4" lg="4">
             <div>
                 <div  v-if="toggle==false" style="height:10vh;width:100%;position:absolute;bottom:30px;" class=" pa-2 ">
                        <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="pink"
                dark
                absolute
                top
                right
                fab
                @click="toggle=!toggle"
              >
                <v-icon>mdi-compass</v-icon>
              </v-btn>
            </v-fab-transition>
                 </div>
                 <div  v-else style="height:40vh;width:100%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);position:absolute;bottom:0;" class="white pa-2 animate__animated animate__fadeIn ">
                    <v-btn icon @click="toggle=!toggle"  plain> <v-icon>mdi-close</v-icon></v-btn>
                    <div class="pa-2">
                        <p class="text-h4">Order#58392</p>
                        <p class="mt-n4"><i>In transit</i><v-icon color="pink" size="20">mdi-taxi</v-icon></p>
                        <p class="text-body-2 font-weight-bold mt-n3">45 min</p>
                        <p style="font-size:11px" class="mt-n4">Arrival time(approx).</p>
                        <p class="text-caption mt-n3">Bagel,Grilled Chicken,Malt,Salad</p>
                    </div>
                    <v-row no-gutters align="center" justify="center" class="pa-2">
                         <div>
                             <v-rating
      v-model="rating"
      background-color="grey"
      color="black"
      dense
      small
      large
    ></v-rating>
    
    <p class=" mb-2" style="font-size:7px">Rate now!</p>
                         </div>
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn plain  icon><v-icon>mdi-phone</v-icon></v-btn>
                            <p class=" mt-n1" style="font-size:7px">Report</p>
                        </div>
                        <div>
                            <v-btn plain  icon><v-icon>mdi-close-circle-multiple-outline</v-icon></v-btn>
                            <p class=" mt-n1" style="font-size:7px">Cancel order</p>
                        </div>
                    </v-row>
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
      center: { lat: 8.9868, lng: 7.3626 },
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
      console.log("hello")
    },
  },
}
</script>

<style>

</style>