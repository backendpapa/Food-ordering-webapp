<template>
  <div class="#F5F9FF animate__animated animate__fadeIn animate__slower">
       <v-container>
          <div style="margin-top:10vh"></div>
      <p class="text-h4 font-weight-bold ma-4">Orders <br></p>
        <div>
            <v-text-field rounded append-icon="mdi-magnify" @click:append="searchit" dense solo class="d-flex d-sm-none ml-4 mr-4 mb-n3 text-caption font-weight-bold" placeholder="Search through your orders"></v-text-field>
        </div>
     <div style="height:60vh;overflow-y:scroll" class="pa-2">
          <v-row no-gutters >
          <v-col class="pa-3" v-for="i in 3" :key="i" cols="12" sm="6" lg="3" xl="3" >
              <v-card  hover  color="">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>