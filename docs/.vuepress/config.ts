import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Java Code Review',
  description: 'Java新手和小队长都说好的项目规范及代码审查',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
  ],
  theme,
});
