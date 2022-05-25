import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { hopeTheme } from 'vuepress-theme-hope';
import { themeOption } from './configs/theme';
import { markdownStylizePlugin } from './plugins/md-stylize';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Java Code Review',
  description: 'Java新手和小队长都说好的项目规范及代码审查',
  base: '/',
  theme: hopeTheme(themeOption),
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
  ],
  markdown: {
    linkify: true,
  },
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
    }),
    markdownStylizePlugin({
      MUST: { tag: ['strong', 'sup'], attr: [['class', 'badge info']] },
      SHOULD: { tag: ['strong', 'sup'], attr: [['class', 'badge tip']] },
      MAY: { tag: ['strong', 'sup'], attr: [['class', 'badge note']] },
      NOT: { tag: ['strong', 'sup'], attr: [['class', 'badge warning']] },
      必须: { tag: ['strong', 'sup'], attr: [['class', 'badge info']] },
      推荐: { tag: ['strong', 'sup'], attr: [['class', 'badge tip']] },
      可选: { tag: ['strong', 'sup'], attr: [['class', 'badge note']] },
      慎用: { tag: ['strong', 'sup'], attr: [['class', 'badge warning']] },
      猿初: { tag: ['sup'], attr: [['class', 'badge note']], text: '🙈猿初' },
      猿中: { tag: ['sup'], attr: [['class', 'badge note']], text: '🙉猿中' },
      猿高: { tag: ['sup'], attr: [['class', 'badge note']], text: '🙊猿高' },
      狮初: { tag: ['sup'], attr: [['class', 'badge tip']], text: '🦁狮初' },
    }),
  ],
});
