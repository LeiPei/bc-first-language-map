<template>
  <div id="mapid" ref="map"></div>
</template>

<script>
const POINTS = [
  { lat: 48.441883, lng: -124.145295 },
  { lat: 48.309815, lng: -123.565201 },
  { lat: 48.313350, lng: -123.676739 },
  { lat: 48.454504, lng: -122.928034 },
  { lat: 49.246292, lng: -123.116226 },
  { lat: 49.056801, lng: -122.285042 },
  { lat: 48.604994, lng: -122.661563 },
  { lat: 48.640044, lng: -122.607742 },
  { lat: 48.859472, lng: -121.679234 },
  { lat: 49.003429, lng: -122.444464 },
  { lat: 49.036700, lng: -122.790217 },
  { lat: 49.003499, lng: -123.058013 },
  { lat: 48.856091, lng: -123.555531 }
]
export default {
  mounted () {
    // set height first
    const footPos = document.getElementById('copyright').getBoundingClientRect()
    const leafPos = this.$refs.map.getBoundingClientRect()
    const offSetHeight = footPos.top - leafPos.top
    $('#mapid').height(offSetHeight) //eslint-disable-line

    let mymap = L.map('mapid', { //eslint-disable-line
      zoomControl: false
    }).setView([49.146292, -123.116226], 10) // 13

    // eslint-disable-next-line
    let myIcon = L.icon({
      iconUrl: '../../assets/map-pin-silhouette.png',
      iconSize: [38, 95]
    })

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

    // process the points
    POINTS.forEach(p => {
      L.marker([p.lat, p.lng]).addTo(mymap) //eslint-disable-line
    })

    // add polygon
    // eslint-disable-next-line
    L.polygon([
      [49.36672, -123.16652],
      [49.074329, -122.559319],
      [49.09, -123.133568]
    ], { color: '#521170' }).addTo(mymap)
  }
}
</script>

<style lang="less" scoped>
#mapid { height: 200px; }
</style>
