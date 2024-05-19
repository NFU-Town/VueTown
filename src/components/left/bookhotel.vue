<template>
    <div class="nei_left" style="position:relative">
        <el-carousel :interval="4000" height="500px">
            <el-carousel-item v-for="(item, index) in Data.lunbotu" :key="index">
                <el-image :src="item" fit="fill" style="height: 500px;"/>
            </el-carousel-item>
        </el-carousel>

        <div class="head">
            <span>Lac-Beauport · 袖珍小屋 · 2室4床1.0卫 · 可住4人</span>
            <h1 class="title">
                MICA -魁北克市附近的全景
            </h1>
            <el-tag class="ml">5.0分 · 237条评论</el-tag>
            <el-tag class="ml" type="success">超赞房东</el-tag>
            <el-tag class="ml" type="info">自助入住</el-tag>
            <el-tag class="ml" type="warning">免费停车</el-tag>
            <el-tag class="ml" type="danger">可以做饭</el-tag>
            <el-divider />
        </div>
        <el-card class="box-card info">
            <span>「MICA」高端微型房源坐落在北部森林的中心地带。 体验距离魁北克老城仅25分钟路程的沉浸式大自然体验。 在博波特湖（ Beauport Lake ）最高峰欣赏劳伦蒂安公园（ Laurentian Park
                ）的全景，欣赏令人惊叹的日落。</span>
        </el-card>
        <el-divider />

        <el-row :gutter="12">
            <el-col :span="8">
                <el-card shadow="hover"> 卧室 1<br>
                    <div class="icon"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                            style="height: 24px; width: 24px; fill: currentcolor;">
                            <path
                                d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z"
                                fill-rule="evenodd"></path>
                        </svg></div>
                    1 张约 1.5 米宽双人床
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover"> 卧室 2<br>
                    <div class="icon"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                            style="height: 24px; width: 24px; fill: currentcolor;">
                            <path
                                d="m19.5 8a .5.5 0 0 0 -.5.5v.4l-2-5v-2.52c0-.76-.62-1.38-1.4-1.38h-7.2c-.77 0-1.4.62-1.4 1.38v2.51l-2.96 6.91-.04.2v12.5a.5.5 0 0 0 1 0v-.61c.16.07.33.11.5.11h6.5v.5a.5.5 0 0 0 1 0v-.5h5.5c.17 0 .34-.04.5-.11v.61a.5.5 0 0 0 1 0v-15a .5.5 0 0 0 -.5-.5zm-11.5-6.62c0-.2.18-.38.4-.38h7.21c.22 0 .4.17.4.38v2.62h-1v-.62c-.01-.76-.63-1.38-1.4-1.38h-3.21c-.78 0-1.4.62-1.4 1.38v.62h-1zm6 2v1.23c0 .21-.17.38-.39.38h-3.21a.39.39 0 0 1 -.4-.37v-1.24c0-.21.17-.38.39-.38h3.21c.22 0 .39.17.39.38zm-9 11.56c.13.04.26.06.39.06h.34l-.73 1.64v-1.71zm7 7.06h-6.5c-.22 0-.5-.28-.5-.5v-1.5h7zm0-3h-6.95l1.78-4h5.17zm0-5h-6.61a.39.39 0 0 1 -.39-.38v-1.62h7zm .5-6a .5.5 0 0 0 -.5.5v2.5h-6.96l2.57-6h1.45c.17.58.7 1 1.33 1h3.21c.64 0 1.17-.42 1.33-1h1.42l2.4 6h-5.75v-2.5a.5.5 0 0 0 -.5-.5zm6.5 13.5c.02.22-.27.5-.5.5h-5.5v-2h6zm0-2.5h-6v-2h6zm0-3h-6v-1h5.61c.14 0 .27-.03.39-.06zm0-2.38a.39.39 0 0 1 -.39.38h-5.61v-2h6z"
                                fill-rule="evenodd"></path>
                        </svg></div>
                    1张双层床
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover"> 客厅<br>
                    <div class="icon"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                            style="height: 24px; width: 24px; fill: currentcolor;">
                            <path
                                d="m22.95 16.29v-.01l-.95-1.9-.01-5.38c0-1.47-1.46-2.77-2.99-2.97v-1.53a2.5 2.5 0 0 0 -2.51-2.5h-9.98a2.5 2.5 0 0 0 -2.51 2.5v1.55c-1.57.21-3 1.48-3 2.96v5.38l-.95 1.89v.01a.49.49 0 0 0 -.05.21v3a .5.5 0 0 0 .5.5h.5v1.5a.5.5 0 0 0 1 0v-1.5h19v1.5a.5.5 0 0 0 1 0v-1.5h.5a.5.5 0 0 0 .5-.5v-3a .49.49 0 0 0 -.05-.21zm-3.95-9.25c1.02.19 1.99 1.08 1.99 1.97v3.37l-1.99-4zm-7-4.04h4.49c.83 0 1.51.67 1.51 1.5v3.5h-6zm0 6h6.19l3.5 7h-20.38l3.5-7zm-7-4.5a1.5 1.5 0 0 1 1.51-1.5h4.49v5h-6zm-3 4.51c0-.89.94-1.76 2-1.96v1.33l-2 4zm20 9.99h-21v-2h21z"
                                fill-rule="evenodd"></path>
                        </svg>
                    </div>1张沙发床，1张小型沙发床
                </el-card>
            </el-col>
        </el-row>

        <el-divider />


        <el-row>
    <el-col
      v-for="(o, index) in 3"
      :key="o"
      :span="6"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>美味蟹黄包</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>







        <el-divider />

        <el-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <el-descriptions-item label="整套房源">独享所有空间，无需与他人共用</el-descriptions-item>
    <el-descriptions-item label="超赞房东">超赞房东经验丰富、评分很高，致力于为房客提供优质的住宿体验。</el-descriptions-item>
    <el-descriptions-item label="入住/退房" :span="2">入住时间 下午3:00后、退房时间 上午11:00</el-descriptions-item>
    <el-descriptions-item label="自助入住">
      <el-tag size="small">通过密码钥匙盒自助入住</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="地址"
      >The Chalets Micro-Élément位于Lac-Beauport的Maelström私人休闲森林庄园
    </el-descriptions-item>
  </el-descriptions>






        <div class="book">
            <el-card :body-style="{ width: '20vw', padding: '0px' }">
                <!-- 上面 -->

                <el-row :gutter="16">
                    <el-col :span="10">
                        <div class="statistic-card">
                            <el-statistic :value="98500">
                                <template #title>
                                    <div style="display: inline-flex; align-items: center">
                                        价格
                                        <el-tooltip effect="dark"
                                            content="Number of users who logged into the product in one day"
                                            placement="top">
                                            <el-icon style="margin-left: 4px" :size="12">
                                                <Warning />
                                            </el-icon>
                                        </el-tooltip>
                                    </div>
                                </template>
                            </el-statistic>
                            <div class="statistic-footer">
                                <div class="footer-item">
                                    <span>相比       <br>昨日</span>
                                    <span class="green">
                                        24%
                                        <el-icon :size="14">
                                            <ArrowRight />
                                        </el-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <!-- <el-col :span="6">
                        <div class="rate">
                            <el-rate :v-model="3" disabled show-score text-color="#ff9900"
                                score-template="{value} points" />
                        </div>

                    </el-col> -->

                </el-row>
                <el-divider />
                <el-form :model="form">
                    <el-form-item label="入住时间" style="padding-left:10px;">
                        <el-col :span="10">
                            <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date"
                                style="width: 100%" />
                        </el-col>
                        <el-col :span="1" class="text-center">
                            <span class="text-gray-500">-</span>
                        </el-col>
                        <el-col :span="10">
                            <el-date-picker v-model="form.date2" type="date" placeholder="Pick a date"
                                style="width: 100%" />
                        </el-col>

                    </el-form-item>
                    <el-form-item label="入住人数" style="padding-left:10px;">
                        <el-col :span="22">

                        <el-select v-model="form.region" placeholder="选择人数">
                            <el-option label="一人" value="1" />
                            <el-option label="二人" value="2" />
                        </el-select>
                    </el-col>

                    </el-form-item>
                </el-form>
                <el-divider />
                <div style="padding: 14px">
                    <span>确定入住</span>
                    <div class="bottom">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="success">入住</el-button>
                    </div>
                </div>
            </el-card>
        </div>

    </div>
</template>
  
<script>
import { reactive, ref, watch, onMounted, onUnmounted } from 'vue'
import {
    ArrowRight,
    CaretBottom,
    CaretTop,
    Warning,
} from '@element-plus/icons-vue'
export default {
    name: 'bookhotel',
    props: {
    },
    setup() {
        //数据
        const Data = reactive({
            lunbotu: ["https://z1.muscache.cn/im/pictures/miso/Hosting-46695796/original/9bd67185-dc83-4473-a191-9486c62aec66.jpeg?aki_policy=xx_large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-46695796/original/088a6251-1a8c-459c-9f14-6d131fdb1a68.jpeg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/f58c28d5-52d5-4c58-928e-ef00bf7164a3.jpg?aki_policy=large",
                "https://z1.muscache.cn/im/pictures/miso/Hosting-46695796/original/9bd67185-dc83-4473-a191-9486c62aec66.jpeg?aki_policy=xx_large"],
        });
        const form = reactive({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        })
        const currentDate = ref(new Date())
        return {
            Data, currentDate, form
        };
    },
}
</script>
<style scoped>
.nei_left {
    width: 800px;
    float: left;
    padding: 13px 25px;
    background: #fff;
    margin-left: -70px;
    min-height: 1108px;
    height: auto;
    padding-bottom: 52px;
    font-size: 16px;
}

.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.image {
    width: 100%;
    display: block;
}

.book {
    float: left;
    position: fixed;
    left: 20px;
    top: 2rem;
}

:global(h2#card-usage ~ .example .example-showcase) {
    background-color: var(--el-fill-color) !important;
}

.el-statistic {
    --el-statistic-content-font-size: 28px;
}

.statistic-card {
    padding: 20px;
    border-radius: 4px;
    background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 16px;
}

.statistic-footer .footer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.statistic-footer .footer-item span:last-child {
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
}

.green {
    color: var(--el-color-success);
}

.red {
    color: var(--el-color-error);
}

.rate {
    padding: 50px;
}

.title {
    margin: 0px !important;
}

.el-tag {
    margin-right: 10px;
}

.head {
    margin-top: 20px;
}

.info {
    width: 100%;
    background: rgb(248, 248, 248) !important;
}

.icon {
    padding: 20px 0px;
}

</style>