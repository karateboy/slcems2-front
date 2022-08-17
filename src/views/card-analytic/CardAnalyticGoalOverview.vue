<template>
  <b-card no-body>
    <b-card-header>
      <h1 class="mb-0">綠能滲透率</h1>
      <b-card-text class="font-medium-5 mb-0">
        <feather-icon
          icon="HelpCircleIcon"
          size="21"
          class="text-muted cursor-pointer"
        />
      </b-card-text>
    </b-card-header>

    <!-- apex chart -->
    <vue-apex-charts
      type="radialBar"
      height="245"
      :options="goalOverviewRadialBar.chartOptions"
      :series="goalOverviewRadialBar.series"
    />
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BRow, BCol, BCardText } from 'bootstrap-vue';
import VueApexCharts from 'vue-apexcharts';
import { $themeColors } from '@themeConfig';

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BCardText,
  },
  data() {
    return {
      goal_overview: {},
      goalOverviewRadialBar: {
        series: [83],
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
          colors: ['#51e5a8'],
          plotOptions: {
            radialBar: {
              offsetY: -10,
              startAngle: -150,
              endAngle: 150,
              hollow: {
                size: '77%',
              },
              track: {
                background: '#ebe9f1',
                strokeWidth: '50%',
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  color: '#5e5873',
                  fontSize: '2.86rem',
                  fontWeight: '600',
                },
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [$themeColors.success],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          grid: {
            padding: {
              bottom: 30,
            },
          },
        },
      },
    };
  },
  created() {
    this.$http.get('/card/card-analytics/goal-overview').then(res => {
      this.goal_overview = res.data;
    });
  },
};
</script>
