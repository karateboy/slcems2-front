<template>
  <div>
    <b-row class="match-height">
      <b-col lg="9" sm="12">
        <b-jumbotron header="能源管理大數據平台" header-tag="h2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <b-button variant="primary" href="#">進一步了解</b-button>
        </b-jumbotron>

        <b-jumbotron header="本市節電願景" header-tag="h2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </b-jumbotron>
      </b-col>
      <b-col lg="3" sm="12">
        <b-img
          src="../assets/images/pages/coming-soon.svg"
          fluid-grow
          class="p-1"
        ></b-img>
      </b-col>
      <b-col lg="3" sm="6">
        <b-card border-variant="danger">
          <strong
            ><h1>10 處</h1>
            <p>本市所推動之太陽能光電結合儲能之為電網資源</p></strong
          >
        </b-card>
      </b-col>
      <b-col lg="3" sm="6">
        <b-card border-variant="danger">
          <strong
            ><h1>9,99瓩</h1>
            <p>即時發電量</p></strong
          >
        </b-card>
      </b-col>
      <b-col lg="3" sm="6">
        <b-card border-variant="danger">
          <strong
            ><h1>9,99瓩</h1>
            <p>即時用電量</p></strong
          >
        </b-card>
      </b-col>
      <b-col lg="3" sm="6">
        <b-card border-variant="danger">
          <strong
            ><h1>-</h1>
            <p>結合本市所推動之太陽光電結合儲能之微電網資源</p></strong
          >
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped></style>
<script lang="ts">
import Vue from 'vue';
import useAppConfig from '../@core/app-config/useAppConfig';
export default Vue.extend({
  data() {
    return {};
  },
  computed: {},
  async mounted() {
    this.$ability.update([
      {
        action: 'manage',
        subject: 'all',
      },
    ]);
    const { skin } = useAppConfig();
    const me = this;
  },
  beforeDestroy() {},
  methods: {},
});
</script>
