<template>
  <div id="mapid" ref="map"></div>
</template>

<script>
const POINTS = [
  { lat: 48.346474, lng: -123.599572, name: 'Scia\'new (Beecher Bay)' },
  { lat: 48.387189, lng: -123.711758, name: 'T\'Sou-ke Nation' },
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
    }).setView([48.741820, -123.032211], 9) // 13

    // eslint-disable-next-line
    let myIcon = L.icon({
      iconUrl: '../../assets/map-pin-silhouette.png',
      iconSize: [30, 30]
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
      L.marker([p.lat, p.lng], {icon: myIcon}).addTo(mymap).bindPopup(p.name) //eslint-disable-line
    })

    // add polygon
    // eslint-disable-next-line
    L.polygon([
      [48.441883, -124.145295],
      [48.313350, -123.676739],
      [48.309815, -123.565201],
      [48.340761, -123.003724],
      [48.454504, -122.928034],
      [48.537149, -122.810257],
      [48.604994, -122.661563],
      [48.640044, -122.607742],
      [48.859472, -121.679234],
      [48.882065, -121.907392],
      [49.003429, -122.444464],
      [49.036700, -122.790217],
      [49.003499, -123.058013],
      [49.003499, -123.058013],
      [48.989754, -123.298196],
      [48.856091, -123.555531]
    ], { color: '#521170' }).addTo(mymap)
  }
}
</script>

<style lang="less" scoped>
#mapid { height: 200px; }
</style>
