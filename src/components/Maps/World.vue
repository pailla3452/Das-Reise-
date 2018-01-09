<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 100%; height: 780px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
// import Vue from 'vue'
export default {
  data () {
    return {
      center: {lat: 52.0, lng: 13.0},
      markers: [
        {
          position: {lat: 10.0, lng: 13.0}
        },
        {
          position: {lat: 52.0, lng: 13.0}
        }
      ]
    }
  }
  // watch: {
  //   '$route' (to, from) {
  //     // Call resizePreserveCenter() on all maps
  //     Vue.$gmapDefaultResizeBus.$emit('resize')
  //   }
  // }
}

</script>
