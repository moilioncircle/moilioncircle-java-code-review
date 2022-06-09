import type { HopeThemeOptions } from 'vuepress-theme-hope';
import { navbar } from './navbar';
import { sidebar } from './sidebar';

function stylizeIt(key: string | RegExp, txt: string, type: string, ...tags: string[]) {
  return {
    matcher: key,
    replacer: ({ tag, content }) => {
      if (tags.includes(tag)) {
        let vertical = 'middle';
        if (tag === 'sup') {
          vertical = 'top';
        } else if (tag === 'sub') {
          vertical = 'bottom';
        }
        return {
          tag: 'Badge',
          attrs: { type, vertical },
          content: txt ? txt : content,
        };
      }
    },
  };
}

export const themeOption: HopeThemeOptions = {
  navbar,
  sidebar,

  hostname: 'https://java-code-review.moilioncircle.com',
  author: {
    name: 'trydofor',
    url: 'https://www.trydofor.com',
  },
  themeColor: {
    blue: '#2196f3',
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f',
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
      provider: 'Giscus',
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
      stylize: [
        stylizeIt(/^(?:MUST|必须)$/u, '', 'info', 'strong', 'sup'),
        stylizeIt(/^(?:SHOULD|推荐)$/u, '', 'tip', 'strong', 'sup'),
        stylizeIt(/^(?:MAY|可选)$/u, '', 'note', 'strong', 'sup'),
        stylizeIt(/^(?:NOT|慎用)$/u, '', 'warning', 'strong', 'sup'),
        stylizeIt('猿初', '🙈猿初', 'note', 'sup'),
        stylizeIt('猿中', '🙉猿中', 'note', 'sup'),
        stylizeIt('猿高', '🙊猿高', 'note', 'sup'),
        stylizeIt('狮初', '🦁狮初', 'tip', 'sup'),
      ],
    },
  },
};
