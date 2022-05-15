import { hopeTheme } from 'vuepress-theme-hope';

export default hopeTheme({
  hostname: 'https://java-code-review.moilioncircle.com',
  author: {
    name: 'trydofor',
    url: 'https://www.trydofor.com',
  },

  iconPrefix: 'iconfont icon-',
  logo: '/logo.png',
  repo: 'moilioncircle/moilioncircle.java-code-review',

  navbar: [
    '/',
    { text: '团队规则', icon: 'support', link: '/01-team-rule/' },
    { text: '自学成才', icon: 'study', link: '/02-self-work/' },
    { text: '技术债务', icon: 'debug', link: '/03-code-debt/' },
  ],
  sidebar: {
    '/01-team-rule/': 'structure',
    '/02-self-work/': 'structure',
    '/03-code-debt/': 'structure',
    '/': 'structure',
  },
  footer: 'MIT licensed and Powered by Vuepress-Theme-Hope',
  copyright: 'Copyright © 攻城狮朋友圈',
  displayFooter: true,
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  blog: {
    description: '提高个人能力，团队水准，工程质量',
    intro: '/about.html',
    name: 'Mr.NotBad',
    medias: {
      Gitee: 'https://gitee.com/trydofor/moilioncircle.java-code-review',
      GitHub: 'https://github.com/trydofor',
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: 'giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69',

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
});
