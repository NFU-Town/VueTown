// 1. 引入
import { createStore } from 'vuex';
// 2. 创建store对象
const store = createStore({
    // 3. 定义state
    state: () => ({
        // 4. 定义数据
        towninfo: "",
        town: "凤二客家文创小镇"
    }),
    // 5. 定义mutations
    mutations:
    {
        updatetowninfo(state, payload) {
            state.towninfo = payload
        },
        updatetownname(state, payload) {
            state.town = payload
        },
    },
    getters: {
        gettowninfo(state) {
            return state.towninfo
        },
        gettownname(state) {
            return state.town
        }
    }
}
);
// 5. 导出
export default store;