import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { hopeTheme } from 'vuepress-theme-hope';
import { themeOption } from './configs/theme';
import { markdownSupModPlugin } from './plugins/md-sup-mod';

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
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
    }),
    registerComponentsPlugin({
      // componentsDir: resolveComponent(),
      components: {
        // https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/1844
        Icon: '@theme-hope/components/Icon',
      },
    }),
    markdownSupModPlugin({
      必须: { attr: [['class', 'badge info']] },
      推荐: { attr: [['class', 'badge tip']] },
      可选: { attr: [['class', 'badge note']] },
      慎用: { attr: [['class', 'badge warning']] },
      猿初: { attr: [['class', 'badge note']], text: '🙈猿初' },
      猿中: { attr: [['class', 'badge note']], text: '🙉猿中' },
      猿高: { attr: [['class', 'badge note']], text: '🙊猿高' },
      狮初: { attr: [['class', 'badge tip']], text: '🦁狮初' },
    }),
  ],
});
