<template>
  <v-container fluid>

  <!--  <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel delimiter-icon="stop">
          <v-carousel-item
            v-for="ville in villes"
            :src="ville.imageUrl"
            :key="ville.id">
            <div class="title">
              {{ ville.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout> -->
  <!--  <div >
      <img src="https://static1.visitestonia.com/images/2920525/weekendfestivalbaltic.jpg" >
     </div>
-->
    </div>
    <v-layout id="opacidad">
      <v-flex sm12>
        <v-card>
          <v-card-media class="white--text" src="https://static1.visitestonia.com/images/2920525/weekendfestivalbaltic.jpg"  height="700px" >
            <span>Pruebas</span>
          </v-card-media>
        </v-card>
      </v-flex>
      <!--  <img src="https://static1.visitestonia.com/images/2920525/weekendfestivalbaltic.jpg" id="opacidad">  -->

    </v-layout>



    <v-layout row wrap>
      </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn large router to="/place" class="info">Suchen Land</v-btn>
        </v-flex>
        <v-flex xs12 sm4 class="text-xs-center text-sm-right">
          <v-btn large router to="/ville/new" class="info">Suchen Stadt</v-btn>
      </v-flex>
      <v-flex xs12 sm1 class="text-xs-center text-sm-right">
        <v-btn large router to="/ville/new" class="info">Hinzufügen Stadt</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap  class="mt-0">
      <v-flex xs12 class="text-xs-center">
       <h2>Reisen der Welt mit uns !!!!</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        villes: [
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Marzahn_Baerensteinstr08-2015_abandoned_retail_building.jpg/1423px-Marzahn_Baerensteinstr08-2015_abandoned_retail_building.jpg', id: 'Berlin', title: 'Berlin Stadt' },
          { imageUrl: 'http://parisbanlieue.blog.lemonde.fr/files/2009/12/clichy-sous-bois-la-foresti.1260725706.jpg', id: 'Paris', title: 'Paris Stadt' },
          { imageUrl: 'https://farm5.static.flickr.com/4049/5154044346_f8f3dd4d38_b.jpg', id: 'Barcelona', title: 'Barcelona Stadt' },
          { imageUrl: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/WUS5VgH/queens-new-york-city-ghetto-projects-nyc-poverty-projects-graffiti-hood-subway_v1ueli_o__F0000.png', id: 'aadsfhbkhlk1241', title: 'New York Stadt' }
        ]
      }
    }
  }
</script>

<style scoped>
  #opacidad {
    filter: brightness(70%);

  }
</style>
