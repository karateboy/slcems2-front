<template>
  <div>
    <h2 class="display-4 text-danger">檔案下載</h2>
    <b-card
      img-left
      img-src="../assets/images/icons/file-icons/pdf.png"
      header-tag="h1"
      header="智慧地圖發用電資訊"
    />
    <b-card
      img-left
      img-src="../assets/images/icons/file-icons/pdf.png"
      header-tag="h1"
      header="檔案"
    />
    <h2 class="display-4 text-danger">友善連結</h2>
    <b-card
      class="p-1"
      img-left
      img-src="../assets/images/logo/logo.svg"
      img-height="100px"
      header="台南市政府"
      header-tag="h1"
    >
    </b-card>
    <b-card
      class="p-1"
      img-left
      img-src="../assets/images/logo/logo.svg"
      img-height="100px"
      header="台南市經發局"
      header-tag="h1"
    >
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style></style>
