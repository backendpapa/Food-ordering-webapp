<template>
  <div>
      <v-card v-for="i in 6" :key="i" class="pa-2 mb-2" height="16vh">
                        <v-row  align="center" justify="center" no-gutters>
                          <div>
                            <p class="text-left"><v-img style="border-radius:15px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" width="13vh" height="13vh" src="../../assets/bb.jpg"></v-img></p>
                            
                          </div>
                          <div class="ml-3">
                            <p class="text-caption font-weight-bold mt-n5">One Plus Bagel</p>
                            <p class="text-caption mt-n4">Seasoned bagel with chocolate</p>
                          </div>
                          <v-spacer></v-spacer>
                          <div>

                            <v-row class="mt-2 mr-4" no-gutters>
                              <v-btn rounded icon plain text class=""><v-icon>mdi-plus</v-icon></v-btn>
                              <v-text-field clear-icon="text" dense style="width:40px;" solo v-model="val"></v-text-field>
                               <v-btn plain rounded icon text class=""><v-icon>mdi-minus</v-icon></v-btn>
                            </v-row>
                          </div>
                          <p class="text-caption font-weight-bold ml-5  ">$700.94</p>
                          <v-btn class="mt-n4 ml-3" icon><v-icon>mdi-delete</v-icon></v-btn>

                          
                        </v-row>
                      </v-card>
  </div>
</template>

<script>
export default {
data(){
    return{
        val:1
    }
}
}
</script>

<style>

</style>