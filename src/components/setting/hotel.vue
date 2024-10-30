<template>
  <div>
    <!-- 客栈日咨询量折线图容器 -->
    <div ref="chartContainerDay" style="width: 100%; height: 400px; margin-bottom: 20px;"></div>
    <!-- 客栈月咨询量折线图容器 -->
    <div ref="chartContainerMonth" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart } from '@antv/g2';
import axios from 'axios';

const chartContainerDay = ref(null);
const chartContainerMonth = ref(null);

const dailyConsultationData = ref([
  { date: '16号', hostel: '客栈A', number: 20 },
  { date: '16号', hostel: '客栈B', number: 35 },
  { date: '16号', hostel: '客栈C', number: 45 },
  { date: '16号', hostel: '客栈D', number: 50 },
  { date: '16号', hostel: '客栈E', number: 60 },
  { date: '16号', hostel: '客栈F', number: 70 },
  { date: '17号', hostel: '客栈A', number: 40 },
  { date: '17号', hostel: '客栈B', number: 55 },
  { date: '17号', hostel: '客栈C', number: 65 },
  { date: '17号', hostel: '客栈D', number: 70 },
  { date: '17号', hostel: '客栈E', number: 75 },
  { date: '17号', hostel: '客栈F', number: 85 },
  // ... 继续添加更多天和客栈的数据
]);

const monthlyConsultationData = ref([
  { month: '1月', number: 300 },
  { month: '2月', number: 450 },
  { month: '3月', number: 500 },
  { month: '4月', number: 700 },
  { month: '5月', number: 600 },
  { month: '6月', number: 750 },
  { month: '7月', number: 820 },
  // ... 添加更多月份的数据
]);

let chartDay, chartMonth;

onMounted(() => {
  // 客栈日咨询量折线图
  chartDay = new Chart({
    container: chartContainerDay.value,
    autoFit: true,
  });

  const renderDailyConsultationChart = (data) => {
    chartDay.clear();
    chartDay
      .data(data)
      .encode('x', 'date')  // 横轴显示日期
      .encode('y', 'number')  // 纵轴显示咨询量
      .encode('color', 'hostel')  // 不同颜色表示不同客栈
      .scale('x', { range: [0, 1] })
      .scale('y', { domainMin: 0, nice: true });
    chartDay.line().label({
      text: 'number',
      style: { dx: -10, dy: -12 },
    });
    chartDay.point().style('fill', 'white').tooltip(true);
    chartDay.render();
  };

  renderDailyConsultationChart(dailyConsultationData.value);

  watch(dailyConsultationData, (newData) => {
    renderDailyConsultationChart(newData);
  });

  // 客栈月咨询量折线图
  chartMonth = new Chart({
    container: chartContainerMonth.value,
    autoFit: true,
  });

  const renderMonthlyConsultationChart = (data) => {
    chartMonth.clear();
    chartMonth
      .data(data)
      .encode('x', 'month')  // 横轴显示月份
      .encode('y', 'number')  // 纵轴显示咨询量
      .scale('x', { range: [0, 1] })
      .scale('y', { domainMin: 0, nice: true });
    chartMonth.line().label({
      text: 'number',
      style: { dx: -10, dy: -12 },
    });
    chartMonth.point().style('fill', 'white').tooltip(true);
    chartMonth.render();
  };

  renderMonthlyConsultationChart(monthlyConsultationData.value);

  watch(monthlyConsultationData, (newData) => {
    renderMonthlyConsultationChart(newData);
  });
});
</script>
