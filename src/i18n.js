// src/i18n.js
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'zh', // 设置默认语言
    fallbackLocale: ['en', 'ja'],
    messages: {}  // 初始为空，可以动态添加
})

export const addLocaleMessages = (locale, messages) => {
    i18n.global.setLocaleMessage(locale, messages)
}
export default i18n
