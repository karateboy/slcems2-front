<template>
  <div>
    <leaflet-group />
    <leaflet-custom-icon />
  </div>
</template>
<style lang="scss">
@import '@core/scss/vue/libs/map-leaflet.scss';
</style>
<script>
import LeafletGroup from './LeafletGroup.vue';
import LeafletCustomIcon from './LeafletCustomIcon.vue';

export default {
  components: {
    LeafletGroup,
    LeafletCustomIcon,
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style></style>
