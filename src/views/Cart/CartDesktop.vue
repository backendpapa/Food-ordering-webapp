<template>
  <div>
      <v-card v-for="i in 6" :key="i" class="pa-2 mb-2 " height="16vh" style="">
                        <v-row  align="center" justify="center" style="width:100%" no-gutters>
                          <div>
                            <p class="text-left"><v-img style="border-radius:15px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" width="13vh" height="13vh" src="../../assets/bb.jpg"></v-img></p>
                            
                          </div>
                          <div class="ml-3">
                            <p class="text-caption font-weight-bold mt-n5">One Plus Bagel</p>
                            <p class="text-caption mt-n4">Seasoned bagel with chocolate</p>
                            <v-row class="mt-n2" no-gutters> 
                                <v-btn x-small icon><v-icon>mdi-arrow-left</v-icon></v-btn>
                                <v-btn x-small icon><v-icon>mdi-arrow-right</v-icon></v-btn>
                                <v-spacer></v-spacer>
                              
                            </v-row>
                          </div>
                          <v-spacer></v-spacer>
                          
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