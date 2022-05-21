/**
 * 为 sup标准增加文本替换及属性能力
 *
 * @author trydofor
 * @since 2022-05-20
 * @see {@link http://github.com/trydofor | trydofor}
 */

import type { RuleInline2 } from 'markdown-it/lib/parser_inline';
import { Plugin } from 'vuepress';
import { PluginWithOptions } from 'markdown-it/lib';

export type SupModOpt = Record<
  string,
  {
    /**
     * [attr, value]数组，如['class':'notbad']
     */
    attr: [string, string][];
    /**
     * truthy时，替换原sup内text
     */
    text?: string;
  }
>;

export function markdownSupModPlugin(opt: SupModOpt): Plugin {
  return {
    name: 'vuepress-plugin-notbad-supmod',
    extendsMarkdown: md => {
      md.use(sup, opt);
    },
  };
}

function supMod(opt: SupModOpt): RuleInline2 {
  return state => {
    const tokens = state.tokens;
    for (let i = 0, len = tokens.length - 1; i < len; i++) {
      const sup = tokens[i];
      if (sup.tag.toLowerCase() !== 'sup') continue;

      const txt = tokens[i + 1];
      const rep = opt[txt.content];
      if (!rep) continue;

      for (let ar of rep.attr) {
        sup.attrPush(ar);
      }
      if (rep.text) {
        txt.content = rep.text;
      }
      i++;
    }

    return false;
  };
}

export const sup: PluginWithOptions = (md, opt) => {
  if (opt) {
    md.inline.ruler2.after('emphasis', 'supmod', supMod(opt));
  }
};
