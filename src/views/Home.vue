<template>
  <div>
    <b-row>
      <b-col cols="3">
        <b-card
          class="p-1"
          img-src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg"
          img-height="120"
          img-bottom
          img-fluid
          header="天氣"
          header-tag="h1"
        >
          <b-card-text
            >多雲。降雨機率
            30%。溫度攝氏25度。舒適。偏東風。相對濕度99%。</b-card-text
          >
        </b-card>
      </b-col>
      <b-col cols="9"
        ><b-card header="全區概要" header-tag="h1">
          <b-row class="text-center">
            <b-col class="bg-warning m-1 rounded">
              <b-icon icon="graph-up" font-scale="4" class="m-1"></b-icon>
              <p><i>12%</i></p>
              <h2><strong>目前使用率</strong></h2>
            </b-col>
            <b-col class="bg-info m-1 rounded">
              <b-icon icon="power" font-scale="4" class="m-1"></b-icon>
              <p><i>12%</i></p>
              <h2><strong>目前發電量</strong></h2>
            </b-col>
            <b-col class="bg-success m-1 rounded">
              <b-icon icon="lightbulb" font-scale="4" class="m-1"></b-icon>
              <p><i>12%</i></p>
              <h2><strong>目前用電量</strong></h2>
            </b-col>
            <b-col class="bg-secondary m-1 rounded">
              <b-icon icon="clock-history" font-scale="4" class="m-1"></b-icon>
              <p><i>12%</i></p>
              <h2><strong>預估備轉容量率</strong></h2>
            </b-col>
          </b-row>
        </b-card></b-col
      >
      <b-col cols="9"
        ><b-card header="區域用電概要" header-tag="h1">
          <b-table :items="powerUsage" :fields="fields">
            <template #cell(percentage)="row">
              <b-progress
                :value="row.item.percentage"
                :max="100"
                show-progress
                animated
              ></b-progress>
            </template>
            <template #cell(status)="row">
              <b-button block active :disabled="!row.item.status">{{
                row.item.status ? '正常' : 'N/A'
              }}</b-button>
            </template>
          </b-table>
        </b-card></b-col
      >
      <b-col cols="3">
        <b-card
          img-src="../assets/images/map.png"
          img-fluid
          img-bottom
          header="區域概覽"
          header-tag="h1"
        ></b-card>
      </b-col>
      <b-col cols="3"><card-analytic-goal-overview /></b-col>
      <b-col cols="9"><card-analytic-revenue /></b-col>
    </b-row>
  </div>
</template>
<style scoped></style>
<script lang="ts">
import Vue from 'vue';
import useAppConfig from '../@core/app-config/useAppConfig';
import CardAnalyticGoalOverview from './card-analytic/CardAnalyticGoalOverview.vue';
import CardAnalyticRevenue from './card-analytic/CardAnalyticRevenue.vue';

interface PowerEntry {
  code: string;
  name: string;
  percentage: number;
  status?: boolean;
}
export default Vue.extend({
  components: {
    CardAnalyticGoalOverview,
    CardAnalyticRevenue,
  },
  data() {
    let powerUsage: PowerEntry[] = [
      {
        code: '1',
        name: '臺灣智駕測試實驗室',
        percentage: 50,
        status: true,
      },
      {
        code: '2',
        name: '智慧綠能循環住宅園區',
        percentage: 70,
        status: true,
      },
      {
        code: 'A',
        name: '會展中心',
        percentage: 40,
        status: true,
      },
      {
        code: 'B',
        name: '產業專用區',
        percentage: 30,
        status: true,
      },
      {
        code: 'C',
        name: '資安暨智慧科技研發大樓',
        percentage: 80,
        status: true,
      },
      {
        code: 'D',
        name: '示範場域',
        percentage: 100,
      },
      {
        code: 'E',
        name: '中研院南部院區',
        percentage: 90,
      },
    ];
    let fields = [
      {
        key: 'code',
        label: '編號',
      },
      {
        key: 'name',
        label: '名稱',
      },
      {
        key: 'percentage',
        label: '即時用電量',
      },
      {
        key: 'status',
        label: '狀態',
      },
    ];
    return {
      fields,
      powerUsage,
    };
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
