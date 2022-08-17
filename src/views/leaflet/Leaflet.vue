<template>
  <b-row>
    <b-col cols="12">
      <leaflet-geo-jSON />
      <leaflet-group />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';
import LeafletMarkerCirclePolygon from './LeafletMarkerCirclePolygon.vue';
import LeafletGeoJSON from './LeafletGeoJSON.vue';
import LeafletGroup from './LeafletGroup.vue';

export default {
  components: {
    BRow,
    BCol,

    LeafletGeoJSON,
    LeafletGroup,
  },
};
</script>

<style lang="scss">
@import '@core/scss/vue/libs/map-leaflet.scss';
</style>
