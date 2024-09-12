import {
    createI18n
} from 'vue-i18n';
import en from './locales/en.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';

const messages = {
    en,
    ja,
    zh
};

const i18n = createI18n({
    locale: 'zh', // 设置默认语言
    messages,
});

export default i18n;
