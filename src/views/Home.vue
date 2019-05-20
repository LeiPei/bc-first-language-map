<template>
  <div class="home">
    <MapControl></MapControl>
    <ExploreHeader></ExploreHeader>
    <Map></Map>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map/Map.vue'
import ExploreHeader from '@/components/Map/ExploreHeader.vue'
import MapControl from '@/components/Map/MapControl.vue'

export default {
  name: 'home',
  components: {
    ExploreHeader,
    MapControl,
    Map
  }
}
</script>
