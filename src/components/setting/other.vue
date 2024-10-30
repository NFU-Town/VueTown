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
import axios from 'axios';

const chartContainer1 = ref(null);
const chartContainer2 = ref(null);
const chartContainer3 = ref(null);

// 动态数据
const pieChartData = ref([
  { type: '日访问量', count: 0, color: '#0a9afe' },
  { type: '月访问量', count: 0, color: '#0a9afe' },
]);


const barChartData = ref([]);

const lineChartData = ref([
  { date: '16号', number: 20 },
  { date: '17号', number: 40 },
  { date: '18号', number: 32 },
  { date: '19号', number: 68 },
  { date: '20号', number: 130 },
  { date: '21号', number: 99 },
  { date: '22号', number: 7 },
])

let chart1, chart2, chart3;

const fetchVisitData = async () => {
  try {
    const response = await axios({method:'get',url:'/apis/visitstats'});
    const { dailyVisits, monthlyVisits } = response.data;
    // 更新饼图数据
    pieChartData.value = [
      { type: '日访问量', count: dailyVisits, color: '#0a9afe' },
      { type: '月访问量', count: monthlyVisits, color: '#0a9afe' },
    ];
  } catch (error) {
    console.error('获取访问数据失败:', error);
  }
};

const fetchTownArticleCounts = async () => {
  try {
    const response = await axios({method:'get',url:'/apis/townarticlecounts'});
    const townArticleCounts = response.data; 
    barChartData.value = townArticleCounts.map(town => ({
      town: town.town,
      number: town.count,
    }));
  } catch (error) {
    console.error('获取小镇文章数目失败:', error);
  }
};
onMounted(async () => {
  await fetchVisitData(); // 页面加载时获取动态数据 
  await fetchTownArticleCounts(); //一样

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
      .style('fontSize', 20)
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
      .encode('x', 'town')
      .encode('y', 'number')
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
      .encode('x', 'date')
      .encode('y', 'number')
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