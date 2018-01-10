<template lang="html">
  <v-container fluid>
    <v-layout class="mt-5" row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-media class="grey darken-4" :src="travel.imageUrl" height="300px">
          </v-card-media>
          <v-card-title>
            <v-layout raw wrap>
              <v-flex xs12 text-xs-center>
                <v-card flat class="mr-5">
                  <v-card-text>
                    <h3 class="headline mb-0">{{travel.title}}</h3>
                    <p>{{travel.description}}</p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout raw wrap>
              <v-flex xs12 text-xs-center>
                  <gmap-map
                  :center="center"
                  :zoom="7"
                  style="width: 100%; height: 350px"
                  >
                  <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="{lat: 59.327, lng: 18.067}"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position"
                  @dragend="onDrag(marker.position)"
                  ></gmap-marker>
                </gmap-map>
              </v-flex>
            </v-layout>
          </v-card-title>
          <!-- <v-card-text>
            <h1>Yaaaii</h1>
          </v-card-text> -->
          <v-card-actions>
            <v-btn flat class="orange--text" @click="onLike" large>
              <v-icon>favorite</v-icon>
              <p>{{likes}}</p>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat class="orange--text">see more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      likes: 12,
      travel: '',
      center: {lat: 50, lng: 50},
      markers: [{
        position: {lat: 50, lng: 50}
      }]
    }
  },
  created () {
    console.log('ID : ' + this.id)
    this.travel = this.$store.getters.loadedTravel(this.id)
  },
  methods: {
    onDrag (arg) {
      console.log(arg)
    },
    onLike () {
      this.likes += 1
    }
  }
}
</script>

<style lang="css">
</style>
