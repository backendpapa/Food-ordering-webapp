<template>
<div>
    <div class="" style="margin-top:10vh;background-color:#F9F9F9;">

    </div>
    <v-row no-gutters align="center" style="height:80vh" justify="center">
        <v-col cols="12" xl="4" lg="4">
            <v-card flat class="ma-4 pa-4">
                <v-row no-gutters>
                <v-spacer></v-spacer>
                <v-avatar  style="border-radius:50%" color="#F64B6B" size="80">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="64" height="64"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,36.28125c-17.06562,0 -30.90625,13.84062 -30.90625,30.90625c0,17.06562 13.84063,30.90625 30.90625,30.90625c17.06562,0 30.90625,-13.84063 30.90625,-30.90625c0,-17.06563 -13.84063,-30.90625 -30.90625,-30.90625zM86,44.34375c12.63125,0 22.84375,10.2125 22.84375,22.84375c0,12.63125 -10.2125,22.84375 -22.84375,22.84375c-12.63125,0 -22.84375,-10.2125 -22.84375,-22.84375c0,-12.63125 10.2125,-22.84375 22.84375,-22.84375zM86,108.84375c-22.0375,0 -42.46145,11.95885 -53.34583,31.0401c-1.075,1.88125 -0.40417,4.43385 1.61145,5.50885c0.67188,0.40312 1.34375,0.53802 2.01563,0.53802c1.34375,0 2.82135,-0.67187 3.49322,-2.01562c9.40625,-16.6625 27.14428,-27.00885 46.22553,-27.00885c19.08125,0 36.81875,10.34635 46.35938,27.00885c1.075,1.88125 3.6276,2.5526 5.50885,1.4776c1.88125,-1.075 2.5526,-3.6276 1.4776,-5.50885c-10.88438,-19.08125 -31.30833,-31.0401 -53.34583,-31.0401z"></path></g></g></svg>
                </v-avatar>
                <v-spacer></v-spacer>
              </v-row>

              <p style="font-weight:bold" class="text-center text-caption ">Sign in</p>
              <p class="text-center text-caption mt-n4 mb-4">Enter your credentials below</p>

              <v-row class="" no-gutters>
                <v-col cols="12"  class="">
                  <v-text-field solo rounded dense placeholder="Username" flat outlined color="grey" class="text-caption font-weight-bold"></v-text-field>
                  
                </v-col>
              </v-row>
                <v-row class="" no-gutters>
                <v-col cols="12"  class="">
                  <v-text-field solo rounded dense placeholder="Password" flat outlined color="grey" class="text-caption font-weight-bold"></v-text-field>
                </v-col>
                </v-row>

                <v-btn block dark class="text-caption" style="text-transform:none" rounded color="#F64B6B">
                    Login
                </v-btn>

            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>