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
  data () {
    return {
      // TODO define in store
      places: [
        {
          // TODO OCUPAR USARIOS QUE FUNCIONEN
          userId: 'iuhaefiushgiuer325i2wurh',
          title: 'Cool ice creams',
          // Carousel
          imgLink: [
            'http://www.pointsnearmenow.com/wp-content/uploads/2017/02/image-12.jpg',
            'http://www.seriouseats.com/images/2014/06/20140627-best-ice-cream-chicago-margies-candies-matt-kirouac.jpg',
            'http://bluemonkbflo.com/wp-content/uploads/2017/04/ice-cream.jpg'
          ],
          comment: 'Meilleures glaces du monde :D',
          position: {lat: 0, lng: 0},
          commentSection: [
            {username: 'Paillita32', comment: 'lol u mad?', replies: []}
          ]
        },
        {
          userId: 'clqui3hrbow57tge5',
          title: 'Place for 3D printing! Plain Palais',
          // Carousel
          imgLink: [
            'https://www.fablabs.io/media/W1siZiIsIjIwMTcvMDEvMjgvMTMvNDcvNDMvN2E3MTg3MTMtNTA0Yi00ZWQ5LWJlZDctMjI0ODdjODBhOGNlL0ZhYmxhYiBCcnVzc2Vscy5qcGciXSxbInAiLCJ0aHVtYiIsIjgwMHgiXV0/Fablab%20Brussels.jpg?sha=aa0dc0dd0796319f',
            'https://www.onefm.ch/wp-content/uploads/2017/12/geneva-lux-1000x600.jpg',
            'http://www.fablabni.com/sites/default/files/styles/mobilecustom_user_desktop_1x/public/field/image/DSC04835-itok=Q7M-l3ak.JPG'
          ],
          comment: 'Build Objects for FREE! Spaceships and stuff',
          position: {lat: 0, lng: 0},
          commentSection: [
            {username: 'DanielQliao_42', comment: '', replies: []}
          ]
        },
        {
          userId: 'oiajfoijergksen',
          title: 'Cat invasion D: (Gare Cornavin)',
          // Carousel
          imgLink: [
            'https://cdn.theatlantic.com/assets/media/img/photo/2015/03/aoshima-japans-cat-island/c11_RTR4RUIQ/main_900.jpg?1425394297',
            'https://i.pinimg.com/736x/73/62/a0/7362a0857539769fed98af2001d37135--space-cat-original-version.jpg',
            'https://i.ytimg.com/vi/uwmeH6Rnj2E/hqdefault.jpg'
          ],
          comment: 'HELP! A group of cats have taken the west coast D:',
          position: {lat: 0, lng: 0},
          commentSection: [
            {username: 'LosMech@dD', comment: 'Bull***, u mad?', replies: []}
          ]
        }
      ],
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
}
</script>

<style lang="css">
</style>
