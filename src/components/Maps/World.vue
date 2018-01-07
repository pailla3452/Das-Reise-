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
      :editable="true"
      @click="onSelect(m)"
      @dragend="onNewPosition(m)"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
// import Vue from 'vue'
export default {
  data () {
    return {
      center: {lat: 52.5170365, lng: 13.3888599},
      markers: [
        {
          position: {lat: 52.5170365, lng: 13.3888599}
        },
        {
          position: {lat: 39.0046949, lng: 125.7358714}
        }
      ]
    }
  },
  methods: {
    onSelect (m) {
      console.log(m.getPosition())
      this.center = m.position
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
