/**
 * 对<tag>text</tag>形式的token组合(inline)，进行显示增强：
 * ①对tag增加属性（如class样式）②对text进行替换（如Emoji后缀）。
 * 其主要目的是使特定词汇具在render后，变得更醒目或生动。
 * 可以通过front matter设置 noStylize:[t1,t2]禁用t1和t2的增强。
 * 注意，所有配置项都区分大小写。
 *
 * @author trydofor
 * @since 2022-05-20
 * @see https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/1881
 * @see https://markdown-it.github.io
 */

import { Plugin } from 'vuepress';
import * as Token from 'markdown-it/lib/token';

export type StylizeOption = Record<
  /**
   * 增强的关键词，token.content，暂不提供正则功能。
   * 默认全局增强，看通过front matter的noStylize单篇禁用关键词。
   */
  string,
  {
    /**
     * 所在标签，token.tag，如['strong','sup']。
     */
    tag: string[];
    /**
     * 标签属性，[attr, value]的数组（二维），如[['class':'badge tip']]。
     * class和style属性会join，其他属性则覆盖。
     */
    attr?: [string, string][];
    /**
     * truthy时，替换原token.content
     */
    text?: string | ((str: string) => string);
  }
>;

function scan(tokens: Token[], skips: string[], options: StylizeOption) {
  for (let i = 0, len = tokens.length - 2; i < len; i++) {
    const txt = tokens[i + 1];
    if (txt.type !== 'text') continue;

    const kw = txt.content;
    if (skips.includes(kw)) {
      // front matter contains
      continue;
    }

    const tagOpen = tokens[i];
    const tagClose = tokens[i + 2];
    const opt = options[kw];
    if (
      opt != null &&
      opt.tag.includes(tagOpen.tag) &&
      tagOpen.type.endsWith('_open') &&
      tagOpen.tag === tagClose.tag &&
      tagClose.type.endsWith('_close')
    ) {
      i += 2; // deal and skip
    } else {
      continue;
    }

    if (opt.attr) {
      for (let ar of opt.attr) {
        if (ar[0] === 'class' || ar[0] === 'style') {
          tagOpen.attrJoin(ar[0], ar[1]);
        } else {
          tagOpen.attrSet(ar[0], ar[1]);
        }
      }
    }

    if (opt.text) {
      if (typeof opt.text === 'string') {
        txt.content = opt.text;
      } else {
        const str = opt.text(kw);
        if (str) {
          txt.content = str;
        }
      }
    }
  }
}

export function markdownStylizePlugin(options: StylizeOption): Plugin {
  return {
    name: 'vuepress-plugin-stylize-tag',
    extendsMarkdown: md => {
      if (options == null || Object.keys(options).length == 0) return;

      md.core.ruler.push('stylize-tag', state => {
        const matter = state.env?.frontmatter?.noStylize;
        const skips = (Array.isArray(matter) ? matter : []) as string[];

        for (let token of state.tokens) {
          if (token.type === 'inline') {
            scan(token.children, skips, options);
          }
        }
      });
    },
  };
}
