<template>
  <div>
    <!-- 商店日点击量折线图容器 -->
    <div ref="chartContainerDay" style="width: 100%; height: 400px; margin-bottom: 20px;"></div>
    <!-- 商店月点击量折线图容器 -->
    <div ref="chartContainerMonth" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart } from '@antv/g2';

const chartContainerDay = ref(null);
const chartContainerMonth = ref(null);

// 商店日点击量数据
const dailyClickData = ref([
  { date: '16号', store: '商店A', number: 30 },
  { date: '16号', store: '商店B', number: 25 },
  { date: '16号', store: '商店C', number: 40 },
  { date: '17号', store: '商店A', number: 45 },
  { date: '17号', store: '商店B', number: 30 },
  { date: '17号', store: '商店C', number: 55 },
  { date: '18号', store: '商店A', number: 50 },
  { date: '18号', store: '商店B', number: 45 },
  { date: '18号', store: '商店C', number: 65 },
  { date: '19号', store: '商店A', number: 80 },
  { date: '19号', store: '商店B', number: 60 },
  { date: '19号', store: '商店C', number: 55 },
  // ... 继续添加更多天和商店的数据
]);

// 商店月点击量数据（恢复为每月总点击量）
const monthlyClickData = ref([
  { month: '1月', number: 500 },
  { month: '2月', number: 650 },
  { month: '3月', number: 700 },
  { month: '4月', number: 850 },
  { month: '5月', number: 900 },
  { month: '6月', number: 1100 },
  { month: '7月', number: 1200 },
  // ... 添加更多月份的数据
]);

let chartDay, chartMonth;

onMounted(() => {
  // 商店日点击量折线图
  chartDay = new Chart({
    container: chartContainerDay.value,
    autoFit: true,
  });

  const renderDailyClickChart = (data) => {
    chartDay.clear();
    chartDay
      .data(data)
      .encode('x', 'date')  // 横轴显示日期
      .encode('y', 'number')  // 纵轴显示点击量
      .encode('color', 'store')  // 不同颜色表示不同商店
      .scale('x', { range: [0, 1] })
      .scale('y', { domainMin: 0, nice: true });
      
    chartDay.line().label({
      text: 'number',
      style: { dx: -10, dy: -12 },
    });
    
    chartDay.point().style('fill', 'white').tooltip(true);
    chartDay.render();
  };

  renderDailyClickChart(dailyClickData.value);

  watch(dailyClickData, (newData) => {
    renderDailyClickChart(newData);
  });

  // 商店月点击量折线图（恢复为每月总点击量）
  chartMonth = new Chart({
    container: chartContainerMonth.value,
    autoFit: true,
  });

  const renderMonthlyClickChart = (data) => {
    chartMonth.clear();
    chartMonth
      .data(data)
      .encode('x', 'month')  // 横轴显示月份
      .encode('y', 'number')  // 纵轴显示点击量
      .scale('x', { range: [0, 1] })
      .scale('y', { domainMin: 0, nice: true });
      
    chartMonth.line().label({
      text: 'number',
      style: { dx: -10, dy: -12 },
    });
    
    chartMonth.point().style('fill', 'white').tooltip(true);
    chartMonth.render();
  };

  renderMonthlyClickChart(monthlyClickData.value);

  watch(monthlyClickData, (newData) => {
    renderMonthlyClickChart(newData);
  });
});
</script>

<style scoped>
</style>
