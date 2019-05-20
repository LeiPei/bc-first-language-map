<template>
  <div class="home">
    <ExploreHeader></ExploreHeader>
    <Map></Map>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map/Map.vue'
import ExploreHeader from '@/components/Map/ExploreHeader.vue'

export default {
  name: 'home',
  components: {
    ExploreHeader,
    Map
  }
}
</script>
