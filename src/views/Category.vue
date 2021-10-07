<template>
  <div class="#F5F9FF animate__animated animate__fadeIn animate__slower" >
      <v-container>
          <div style="margin-top:10vh"></div>
      <p class="text-h4 font-weight-bold ma-4">Explore by <br>category</p>
        <div>
            <v-text-field rounded append-icon="mdi-magnify" @click:append="searchit" dense solo class="d-flex d-sm-none ml-4 mr-4 mb-n3 text-caption font-weight-bold" placeholder="Search for your favourite"></v-text-field>
        </div>
     <div style="height:60vh;overflow-y:scroll" class="pa-2">
          <v-row no-gutters >
          <v-col class="pa-3" v-for="i in 12" :key="i" cols="12" sm="6" lg="3" xl="3" >
              <v-card @click="dialog=true" hover  color="">
                  <v-img height="250" src="../assets/bb.jpg"></v-img>
                  <div style="position:absolute;bottom:0;width:95%" class="white ma-2 pa-2">
                     
                      <p class="text-caption font-weight-bold text-right mb-n1" style="color:orange">$40.50</p>
                      <v-row align="center" class="mb-n3" justify="center" no-gutters>
                          <p class="font-weight-bold mt-2">Solid Bagel</p>
                          <v-spacer></v-spacer>
                          <v-btn class="mt-n2" icon><v-icon>mdi-arrow-right</v-icon></v-btn>
                      </v-row>

                  </div>
              </v-card>
          </v-col>
      </v-row>
     </div>
      </v-container>
      <v-dialog
      v-model="dialog"
      width="500"
    >
     

      <v-card class="white" flat>
          <v-row no-gutters style="height:60vh">
              <v-col cols="12" xl="6" lg="6">
                <div class="d-sm-none d-md-flex">
                    <v-img class="d-none d-sm-flex" height="60vh" src="../assets/bb.jpg"></v-img>
                </div>
                <v-img class="d-flex d-sm-none" height="30vh" src="../assets/bb.jpg"></v-img>
                <v-img class="d-none d-sm-flex d-md-none" height="40vh" src="../assets/bb.jpg"></v-img>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <div class="pa-2">
                    <v-row no-gutters>
                        <p class="font-weight-bold text-h6">Solid Bagel</p>
                        <v-spacer></v-spacer>
                        <p style="font-size:14px;color:orange" class="font-weight-bold">$45.60</p>
                    </v-row>
                    <v-rating
      v-model="rating"
      x-small
      class="mt-n5 ml-n2"
      background-color="grey"
      color="black"
      large
    ></v-rating>
    <p style="font-size:10px"><span style="color:orange">3.5k</span> reviews</p>
                    <p class="text-caption mt-n2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur natus sequi, fugiat doloribus ea dolore sint cupiditate. Ipsam, libero.</p>
                     <v-btn block outlined class="text-caption mt-n3 " style="text-transform:none" plain>Add to Cart <v-icon size="15" class="ml-1">mdi-cart-plus</v-icon></v-btn>
                     <div class="d-none d-sm-flex">
                         <div style="width:100%" class="d-sm-none d-md-flex mt-2">
                             <div style="width:100%">
                                 <p style="font-weight:bold" class="text-body-2">Reviews</p>
                            <v-row style="width:100%"  no-gutters>
                                <v-spacer></v-spacer>
                                 <p><v-icon size="70" color="grey lighten-2">mdi-delete-empty-outline</v-icon></p>
                                 <v-spacer></v-spacer>
                            </v-row>
                            <p class="text-center text-caption grey--text">No review yet for this product</p>
                             </div>
                         </div>
                     </div>
                     
                </div>
              </v-col>
          </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return {
            dialog:false
        }
    },
    methods:{
        searchit(){
            alert("searching")
        }
    }
}
</script>

<style>

</style>