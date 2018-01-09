<template lang="html">
  <v-container>
    <v-layout text-xs-center>
      <v-flex xs12>
        <h1 class="blue-grey--text text--darken-2">Travels!</h1>
      </v-flex>
    </v-layout>
    <v-layout v-for="(travel, i) in travels" :key="i" class="mt-2">
      <v-flex xs12>
          <v-card color="pink darken-1" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">{{travel.title}}</div>
                    <div>{{travel.comment}}</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                    <v-card-media
                      :src="travel.imgLink[0]"
                      height="175px"
                      class="brightness"
                      contain
                    ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      travels: ''
    }
  },
  created () {
    this.travels = this.$store.getters.loadedTravels
    console.log(this.travels)
  }
}
</script>

<style lang="css" scoped>
.brightness {
   filter: brightness(40%);
}
.
</style>
