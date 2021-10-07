<template>
  <div class="#F5F9FF animate__animated animate__fadeIn animate__slower" >
      <v-container>
          <div style="margin-top:10vh"></div>
      <p class="text-h4 font-weight-bold ma-4">Explore by <br>category</p>

     <div style="height:70vh;overflow-y:scroll" class="pa-2">
          <v-row no-gutters >
          <v-col class="pa-3" v-for="i in 12" :key="i" cols="12" sm="6" lg="3" xl="3" >
              <v-card hover  color="">
                  <v-img height="130" src="../assets/bb.jpg"></v-img>
                  <div class="pa-2">
                      <p class="font-weight-bold">Solid Bagel</p>
                      <p class="text-caption mt-n3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta nulla in.</p>
                      <v-row align="center" justify="center" no-gutters>
                          <v-btn text class="text-caption" style="text-transform:none" plain>Add to Cart <v-icon size="15" class="ml-1">mdi-cart-plus</v-icon></v-btn>
                          <v-spacer></v-spacer>
                          <v-btn icon><v-icon>mdi-arrow-right</v-icon></v-btn>
                      </v-row>

                  </div>
              </v-card>
          </v-col>
      </v-row>
     </div>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>