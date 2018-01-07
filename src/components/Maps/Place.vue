<template lang="html">
  <v-container fluid>
    <v-layout class="mt-5" row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-media>
            <v-carousel>
              <v-carousel-item v-for="(image,i) in place.imgLink" :src="image" :key="i"></v-carousel-item>
            </v-carousel>
          </v-card-media>
          <v-card-text>
            <v-layout raw wrap>
              <v-flex xs12 sm6 text-xs-center>
                <v-card dark color="green">
                  <v-card-text class="px-0">12</v-card-text>
                </v-card>
                <!-- <h3 class="headline mb-0">{{place.title}}</h3>
                <p>{{place.comment}}</p> -->
              </v-flex>
            </v-layout raw wrap>
            <v-layout>
              <v-flex xs12 sm6 text-xs-center>
                <v-card dark color="green">
                  <v-card-text class="px-0">12</v-card-text>
                </v-card>
                <!-- <h3>Where?</h3>
                <gmap-map
                  :center="center"
                  :zoom="7"
                  style="width: 100%; height: 257px"
                >
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                  ></gmap-marker>
                </gmap-map> -->
              </v-flex>
            </v-layout>
          </v-card-text>
          <!-- <v-card-text>
            <h1>Yaaaii</h1>
          </v-card-text> -->
          <v-card-actions>
            <v-btn flat class="orange--text">see more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <!-- <v-flex xs12>
        <v-card>
          <v-card-media>
            <gmap-map
              :center="center"
              :zoom="7"
              style="width: 100%; height: 257px"
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </v-card-media>
          <v-card-title>
            <div>
              <h3>fuuck</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // props: ['idPlace'],
  data () {
    return {
      idPlace: 'dyvxgrfesdyxbdefs',
      place: '',
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  },
  created () {
    this.place = this.$store.getters.loadedPlace(this.idPlace)
  }
}
</script>

<style lang="css">
</style>
