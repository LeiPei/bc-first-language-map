<template>
  <div id="mapid" ref="map"></div>
</template>

<script>
export default {
  mounted () {
    // set height first
    const footPos = document.getElementById('copyright').getBoundingClientRect()
    const leafPos = this.$refs.map.getBoundingClientRect()
    const offSetHeight = footPos.top - leafPos.top
    $('#mapid').height(offSetHeight) //eslint-disable-line

    let mymap = L.map('mapid', { //eslint-disable-line
      zoomControl: false
    }).setView([51.505, -0.09], 13)
    // add zoom control with your options
    L.control.zoom({ //eslint-disable-line
      position: 'topright'
    }).addTo(mymap)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //eslint-disable-line
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibHBlaSIsImEiOiJjanZ2a2NxdGIwem4yM3pwMWFmdDBsYzQ2In0.N7-edRWRWJ5f33kGyB9SNw'
    }).addTo(mymap)
  }
}
</script>

<style lang="less" scoped>
#mapid { height: 200px; }
</style>
