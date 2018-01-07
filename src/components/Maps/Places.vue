<template lang="html">
  <v-container>
    <v-layout v-for="place in places" :key="place.userId" class="mt-5">
      <v-flex xs12>
        <v-card>
          <v-card-media
          :src="place.imgLink[0]"
          height="200px">
          </v-card-media>
          <v-card-title>
            <div>
              <h3 class="headline mb-0">{{place.title}}</h3>
              <p>{{place.comment}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat class="orange--text">see more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // props: ['idPlace'],
  data () {
    return {
      idPlace: 'tqgesfdw4eefs',
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
