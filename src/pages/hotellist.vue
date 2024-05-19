<template>
    <div>
        <div style="padding-bottom: 20px;">
            <p class="shou"><span>
                </span>官方客栈
            </p>
        </div>
        <el-row>
            <el-col :span="12">
                <el-card :body-style="{ padding: '10px' }" shadow="hover">
                    <el-image :src="Data.officalbook.picurl" style="width: 320px;height: 200px;" fit="fill" />

                    <div style="padding: 14px">
                        <h2 style="color: brown;">{{ Data.officalbook.name }}</h2>
                        <div>
                            <span>{{ Data.officalbook.info }}</span>
                            <div class="bottom" style="padding-top: 10px">

                                <el-button type="success"
                                    @click="$router.push(`/entryinfo/bookhotel?id=${Data.officalbook.id}`)">订购</el-button>
                            </div>
                        </div>

                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div style="padding-bottom: 20px;">
            <p class="shou"><span>
                </span>推荐客栈
            </p>
        </div>
        <el-row>

            <el-col v-for="(item, index) in Data.hotellist" :key="item" :span="12">

                <el-card :body-style="{ padding: '10px' }" shadow="hover">
                    <el-image :src="item.picurl" style="width: 320px;height: 200px;" fit="fill" />

                    <div style="padding: 14px">
                        <h2>{{ item.name }}</h2>
                        <div v-if="item.info != ''">
                            <span>{{ item.info }}</span>
                            <div class="bottom" style="padding-top: 10px">

                                <el-button type="success">订购</el-button>
                            </div>
                        </div>
                        <span v-if="item.info == ''" style="font-weight: bold;color: brown;">地址:{{ item.address }}</span>
                        <br>
                        <span v-if="item.info == ''" style="font-weight: bold;">热线:{{ item.phone }}</span>

                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { reactive, ref, watch, onMounted, onUnmounted } from 'vue'
export default {
    setup() {
        const Data = reactive({
            officalbook: {
                name: "官方订购入口",
                info: "丽江赵公府邸客栈位于丽江大研古城内，占地面积1200平方米，有古朴雅致的客房30余间，客栈古色古香、闹中取静，庭院小景错落有致、门窗木刻精雕细琢；清新的庭院、人性化的设计、独立管家细致的服务，让心灵驻足，让每一位旅人把来时疲...",
                url: "https://www.scery.com",
                qrcode: "https://www.scery.com",
                picurl: "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202401091339924.jpg",
                id: 13
            },
            hotellist: [{
                name: "美团平台",
                info: "丽江赵公府邸客栈位于丽江大研古城内，占地面积1200平方米，有古朴雅致的客房30余间，客栈古色古香、闹中取静，庭院小景错落有致、门窗木刻精雕细琢；清新的庭院、人性化的设计、独立管家细致的服务，让心灵驻足，让每一位旅人把来时疲...",
                url: "https://www.scery.com",
                qrcode: "https://www.scery.com",
                picurl: "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202401091339920.jpg"
            }, {
                name: "大众点评",
                info: "丽江赵公府邸客栈位于丽江大研古城内，占地面积1200平方米，有古朴雅致的客房30余间，客栈古色古香、闹中取静，庭院小景错落有致、门窗木刻精雕细琢；清新的庭院、人性化的设计、独立管家细致的服务，让心灵驻足，让每一位旅人把来时疲...",
                url: "https://www.scery.com",
                qrcode: "https://www.scery.com",
                picurl: "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202401091339919.jpg"
            }, {
                name: "携程旅行",
                info: "丽江赵公府邸客栈位于丽江大研古城内，占地面积1200平方米，有古朴雅致的客房30余间，客栈古色古香、闹中取静，庭院小景错落有致、门窗木刻精雕细琢；清新的庭院、人性化的设计、独立管家细致的服务，让心灵驻足，让每一位旅人把来时疲...",
                url: "https://www.scery.com",
                qrcode: "https://www.scery.com",
                picurl: "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202401091339923.jpg"
            },
            {
                name: "云端客栈在水一方店",
                info: "",
                address: "广州市古城区新义街百岁坊64号",
                phone: "0888-5333344,0888-5103244",
                url: "https://www.scery.com",
                qrcode: "https://www.scery.com",
                picurl: "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202401091339923.jpg"
            },
            {
                name: "南诏公馆",
                info: "",
                address: "广州市古城区新义街天堂坊11号",
                phone: "0888-51113344,0888-5123244",
                url: "https://www.scery.com",
                qrcode: "https://www.scery.com",
                picurl: "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202401091339923.jpg"
            }, {
                name: "光隐设计师酒店（义尚府店）",
                info: "",
                address: "广州市古城区新义街天堂坊11号",
                phone: "12385791827",
                url: "https://www.scery.com",
                qrcode: "https://www.scery.com",
                picurl: "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202401091339923.jpg"
            }]
        });
        return {
            Data
        };

    }
}
</script>

<style scoped>
.shou {
    font-family: '微软雅黑';
    outline: none;
    padding: 0 10px;
    margin: 0;
    font-size: 16px;
    color: #944708;
    padding-bottom: 8px;
    border-bottom: 1px #785f4b solid;
    font-weight: 500;
}

.shou span {
    line-height: 12px;
    float: right;
    margin-top: 5px;
}

.el-col {
    border-radius: 4px;
    padding: 10px;
}
</style>