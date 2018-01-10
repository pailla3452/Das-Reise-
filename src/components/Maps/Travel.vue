<template lang="html">
  <v-container fluid>
    <v-layout class="mt-5" row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text class="grey darken-4">
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(image,i) in travel.imgLink" :src="image" :key="i"></v-carousel-item>
            </v-carousel>
          </v-card-text>
          <v-card-title>
            <v-layout raw wrap>
              <v-flex xs12 text-xs-center>
                <!-- <v-card dark color="green">
                  <v-card-text class="px-0">12</v-card-text>
                </v-card> -->
                <v-card flat class="mr-5">
                  <v-card-text>
                    <h3 class="headline mb-0">{{travel.title}}</h3>
                    <p>{{travel.comment}}</p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout raw wrap>
              <v-flex xs12 text-xs-center>
                <!-- <v-card dark color="green">
                  <v-card-text class="px-0">12</v-card-text>
                </v-card> -->
                <!-- <v-card>
                  <v-card-text>
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
                  </v-card-text>
                </v-card> -->
                  <gmap-map
                  :center="center"
                  :zoom="7"
                  style="width: 100%; height: 350px"
                  map-type-id="satellite"
                  >
                  <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="{lat: 59.327, lng: 18.067}"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position"
                  @dragend="onDrag(marker.position)" // no functina :(
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
  // props: ['idTravel'],
  data () {
    return {
      idTravel: 'ysgdcjzhtgrfeyrgfhcfrygx',
      likes: 12,
      travel: '',
      center: {lat: 50, lng: 50},
      markers: [{
        position: {lat: 50, lng: 50}
      }]
    }
  },
  created () {
    this.travel = this.$store.getters.loadedTravel(this.idTravel)
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
