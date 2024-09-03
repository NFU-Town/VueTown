<template>
  <div>
    <!-- 饼图容器 -->
    <div ref="chartContainer1" style="width: 80%; height: 300px; margin-bottom: 20px;"></div>
    <!-- 柱状图和折线图容器 -->
    <div style="display: flex; justify-content: space-between;">
      <div ref="chartContainer2" style="width: 49%; height: 400px;"></div>
      <div ref="chartContainer3" style="width: 49%; height: 400px;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart } from '@antv/g2';

const chartContainer1 = ref(null);
const chartContainer2 = ref(null);
const chartContainer3 = ref(null);

// 动态数据
const pieChartData = ref([
  { type: '日网站访问量', percent: 56.4, color: '#0a9afe' },
  { type: '女性', percent: 43.6, color: '#f0657d' },
]);

const barChartData = ref([
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
  { year: '1963 年', sales: 65 },
  { year: '1964 年', sales: 122 },
  { year: '1967 年', sales: 132 },
  { year: '1968 年', sales: 144 },
]);

const lineChartData = ref([
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
]);

let chart1, chart2, chart3;

onMounted(() => {
  // 饼图
  chart1 = new Chart({
    container: chartContainer1.value,
    autoFit: true,
  });

  const renderPieChart = (data) => {
    chart1.clear();

    const facetRect = chart1
      .facetRect()
      .data(data)
      .encode('x', 'type')
      .axis(false)
      .legend(false)
      .view()
      .attr('frame', false)
      .coordinate({ type: 'theta', innerRadius: 0.5, outerRadius: 0.8 });

    facetRect
      .interval()
      .encode('y', 100)
      .scale('y', { zero: true })
      .style('fill', '#e8e8e8')
      .tooltip(false)
      .animate(false);

    facetRect
      .interval()
      .encode('y', 'percent')
      .encode('color', 'color')
      .scale('color', { type: 'identity' })
      .tooltip((data) => ({
        name: data.type,
        value: data.percent,
      }))
      .animate('enter', { type: 'waveIn', duration: 1000 });

    facetRect
      .text()
      .encode('text', 'type')
      .style('textAlign', 'center')
      .style('textBaseline', 'middle')
      .style('fontSize', 20)
      .style('color', '#8c8c8c')
      .style('x', '50%')
      .style('y', '50%')
      .style('dy', -20);

    facetRect
      .text()
      .encode('text', 'percent')
      .style('textAlign', 'center')
      .style('textBaseline', 'middle')
      .style('fontSize', 30)
      .style('fontWeight', 500)
      .style('color', '#000')
      .style('x', '50%')
      .style('y', '50%')
      .style('dy', 20);

    chart1.render();
  };

  // 初始渲染
  renderPieChart(pieChartData.value);

  // 监听数据变化
  watch(pieChartData, (newData) => {
    renderPieChart(newData);
  });

  // 柱状图
  chart2 = new Chart({
    container: chartContainer2.value,
    autoFit: true,
  });

  const renderBarChart = (data) => {
    chart2.clear();
    chart2.data(data);
    chart2
      .interval()
      .encode('x', 'year')
      .encode('y', 'sales')
      .scale('x', { padding: 0.3 });
    chart2.render();
  };

  renderBarChart(barChartData.value);

  watch(barChartData, (newData) => {
    renderBarChart(newData);
  });

  // 折线图
  chart3 = new Chart({
    container: chartContainer3.value,
    autoFit: true,
  });

  const renderLineChart = (data) => {
    chart3.clear();
    chart3
      .data(data)
      .encode('x', 'year')
      .encode('y', 'value')
      .scale('x', { range: [0, 1] })
      .scale('y', { domainMin: 0, nice: true });
    chart3.line().label({
      text: 'value',
      style: { dx: -10, dy: -12 },
    });
    chart3.point().style('fill', 'white').tooltip(false);
    chart3.render();
  };

  renderLineChart(lineChartData.value);

  watch(lineChartData, (newData) => {
    renderLineChart(newData);
  });
});
</script>