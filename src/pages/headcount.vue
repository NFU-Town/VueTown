<template>
  <div class="nei_left" style="position:relative">
    <p class="shou"><a>古镇实时人数</a>
      </p>
    <!-- 饼图容器 -->
    <div ref="chartContainer1" style="width: 80%; height: 300px; margin-bottom: 20px;"></div>
    <!-- 柱状图和折线图容器 -->
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart } from '@antv/g2';
import axios from 'axios';

const chartContainer1 = ref(null);

// 动态数据
const pieChartData = ref([
  { type: '日访问量', count: 0, color: '#0a9afe' },
  { type: '月访问量', count: 0, color: '#0a9afe' },
]);

let chart1;

const fetchVisitData = async () => {
  try {
    const response = await axios({method:'get',url:'/apis/visitstats'});
    const { dailyVisits, monthlyVisits } = response.data;
    // 更新饼图数据
    pieChartData.value = [
      { type: '当日人数访问量', count: dailyVisits, color: '#0a9afe' },
      { type: '当月人数访问量', count: monthlyVisits, color: '#0a9afe' },
    ];
  } catch (error) {
    console.error('获取访问数据失败:', error);
  }
};

onMounted(async () => {
  await fetchVisitData(); // 页面加载时获取动态数据 
// 饼图
  chart1 = new Chart({
    container: chartContainer1.value,
    autoFit: true,
  });

  const renderPieChart = (data) => {
    chart1.clear();

    const totalCount = data.reduce((sum, item) => sum + item.count, 0); // 计算总访问量
    const facetRect = chart1
      .facetRect()
      .data(data)
      .encode('x', 'type')
      .axis(false)
      .legend(false)
      .view()
      .attr('frame', false)
      .coordinate({ type: 'theta', innerRadius: 0.5, outerRadius: 0.75 });

    facetRect
      .interval()
      .encode('y', 100)
      .scale('y', { zero: true })
      .style('fill', '#e8e8e8')
      .tooltip(false)
      .animate(false);

    facetRect
      .interval()
      .encode('y', (d) => (d.count / totalCount) * 100) // 使用访问量比例
      .encode('color', 'color')
      .scale('color', { type: 'identity' })
      .tooltip((data) => ({
        name: data.type,
        value: data.count, // 显示具体的访问量
      }))
      .animate('enter', { type: 'waveIn', duration: 1000 });

    facetRect
      .text()
      .encode('text', 'type')
      .style('textAlign', 'center')
      .style('textBaseline', 'middle')
      .style('fontSize', 17)
      .style('color', '#8c8c8c')
      .style('x', '50%')
      .style('y', '50%')
      .style('dy', -20);

    facetRect
      .text()
      .encode('text', 'count') // 显示具体的访问量数字
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
});
</script>
<style scoped>
  .nei_left {
    width: 800px;
    float: left;
    padding: 13px 25px;
    background: #fff;
    min-height: 800px;
    height: auto;
    padding-bottom: 30px;
    font-size: 16px;
  }
  .nei_left .shou {
      font-size: 16px;
      color: #785f4b;
      padding-bottom: 8px;
      border-bottom: 1px #785f4b solid;
      font-weight: 500;
  }
</style>


