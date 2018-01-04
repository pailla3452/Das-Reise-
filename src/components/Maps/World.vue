<template>
  <gmap-map
    :center="center"
    :zoom="3"
    style="width: 10%; height: 100%; "
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
</template>

<script>
export default {
  data () {
    return {
      center: {lat: 52.5170365, lng: 13.3888599},
      markers: [{
        position: {lat: 52.5170365, lng: 13.3888599}
      }, {
        position: {lat: 39.0046949, lng: 125.7358714}
      }]
    }
  }
}
</script>
