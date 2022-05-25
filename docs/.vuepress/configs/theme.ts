import { HopeThemeOptions } from 'vuepress-theme-hope';
import { navbar } from './navbar';
import { sidebar } from './sidebar';

export const themeOption: HopeThemeOptions = {
  navbar,
  sidebar,

  hostname: 'https://java-code-review.moilioncircle.com',
  author: {
    name: 'trydofor',
    url: 'https://www.trydofor.com',
  },

  iconPrefix: 'iconfont icon-',
  logo: '/logo.png',
  repo: 'moilioncircle/moilioncircle.java-code-review',
  docsDir: 'docs',
  footer: 'MIT licensed, Vuepress-Theme-Hope powered',
  copyright: 'Copyright© 攻城狮朋友圈',
  displayFooter: true,
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  blog: {
    description: '提升个人能力，团队水准，工程质量',
    intro: '/about.html',
    name: 'Mr.NotBad',
    medias: {
      GitHub: 'https://github.com/moilioncircle/moilioncircle.java-code-review',
      Gitee: 'https://gitee.com/trydofor/moilioncircle.java-code-review',
      Zhihu: 'https://www.zhihu.com/column/c_1509821594431655936',
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      type: 'giscus',
      repo: 'moilioncircle/moilioncircle.java-code-review',
      repoId: 'R_kgDOHVWlGQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHVWlGc4CPK4C',
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
};
