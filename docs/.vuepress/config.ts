import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';
import { hopeTheme } from 'vuepress-theme-hope';
import { themeOption } from './configs/theme';

function resolveComponent(p:string=''){
  return path.resolve(__dirname, './components', p);
}

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Java Code Review',
  description: 'Java新手和小队长都说好的项目规范及代码审查',
  base: '/',
  theme:hopeTheme(themeOption),
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
      componentsDir: resolveComponent(),
      components:{
        MUST: resolveComponent('Must.vue'),
        SHOULD: resolveComponent('Should.vue'),
        MAY: resolveComponent('May.vue'),
        NOT: resolveComponent('Not.vue'),
        // https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/1844
        // Icon : '@theme-hope/components/Icon',
      }
    }),
  ],
});
