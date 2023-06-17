import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as d,b as e,d as n,e as s,w as t,a as p}from"./app-f2170f21.js";const u={},h=p('<h1 id="b01-如何参与此项目" tabindex="-1"><a class="header-anchor" href="#b01-如何参与此项目" aria-hidden="true">#</a> B01.如何参与此项目</h1><p>在我看来，有幸看到此项目，就是你我莫大的缘分了，在看代码笑话，让身边人别犯蠢即算参与了。 互动的话，提交Issue或PR到Github上，因此项目优先考虑国内玩家的速度和面子问题。 若以上还不能满足，那么需要你有一定的动手能力和情绪控制能力，因为后面全是自助式的，没有保姆。</p><h2 id="b01a-目录和文件的命名" tabindex="-1"><a class="header-anchor" href="#b01a-目录和文件的命名" aria-hidden="true">#</a> B01A.目录和文件的命名</h2><p>考虑到OS差异，Url和File的兼容性，简化为以下要点，</p><ul><li>字符集统一<code>UTF8</code>。</li><li><code>README.md</code>必须大写，在vuepress中有特殊含义。</li><li>目录和文件，<code>烤串</code>命名法。统一<code>小写</code>以<code>-</code>分隔单词</li><li>一级目录，有<code>字母</code>和<code>单词</code>构成，<code>x-xxx</code></li><li>文件，扁平化于一级目录，采用<code>x00-xxx</code>格式</li></ul><p>项目的前3个目录有特别要求和目的，以下分别说明。</p><ul><li><code>team-rule</code>是团队规则，是CodeReview的执行标准，要求清晰，便于理解和执行。</li><li><code>self-work</code>是自学资料，用来对齐不同人员的知识盲区。大部分是行业内认可的权威资料。</li><li><code>code-debt</code>是技术债务，主要是对私有项目的审查和重构，需要注意隐私或机密内容。</li><li><code>f-z</code>，规划为公开项目的Review，包括低质量的重构和高质量的学习。</li></ul><h2 id="b01b-工程的结构和技术" tabindex="-1"><a class="header-anchor" href="#b01b-工程的结构和技术" aria-hidden="true">#</a> B01B.工程的结构和技术</h2><p>整个工程使用的是<code>vuepress</code>技术和官方的<code>hope</code>主题，以下官方文档有详解。</p>',9),v={href:"https://v2.vuepress.vuejs.org/zh",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vuepress-theme-hope.github.io/v2",target:"_blank",rel:"noopener noreferrer"},m=p('<p>首先<code>fork</code>本repo成为自己的git项目，然后<code>clone</code>到本地，重点关注docs目录。 可以手工生成对应目录的文件，也可以使用idea体系下的<code>Any2dto</code>插件复制review。</p><p>目前VuePress2和theme-hope2都是beta版，需要注意版本的兼容性。</p><p>对vuepress的开发，简单遵循prettier的格式化就好。</p><h2 id="b01c-编写markdown文章" tabindex="-1"><a class="header-anchor" href="#b01c-编写markdown文章" aria-hidden="true">#</a> B01C.编写Markdown文章</h2><p>以<code>GFM</code>语法为主，但vuepress对MD有很多增强，且解析为vue模板。 所以需要遵守约定，并避免在代码块外误用无法识别的闭合tag。</p><h3 id="标题-8-10中文长" tabindex="-1"><a class="header-anchor" href="#标题-8-10中文长" aria-hidden="true">#</a> 标题，8-10中文长</h3><p>格式为<code>编号</code>+<code>序号</code>+<code>小节</code>+<code>.</code>+<code>内容</code>，其中以<code>.</code>分隔。</p><ul><li>编号 - 1位大写字母①，</li><li>序号 - 数字序号，2-4位②</li><li>小节 - 1位大写字母③</li></ul><p>标题长度应该控制在20字符，每级标题使用上一级标记+序号</p><ul><li>顶级README，为①<code>.#</code>，例如<code>A</code>, <code>A.1</code></li><li>一级标题为①②，例如<code>B01</code></li><li>二级标题为①②③，如rule常被外部引用，例如<code>B01A</code></li><li>三级以下标题，可无序号或以③为前缀编号</li></ul><h3 id="配置-做好分类和标签" tabindex="-1"><a class="header-anchor" href="#配置-做好分类和标签" aria-hidden="true">#</a> 配置，做好分类和标签</h3><p>以<code>Frontmatter</code>标记，主要设置以下几个。</p><ul><li>author:trydofor - 作者，默认trydofor</li><li>isOriginal:true - 是否原创，默认false</li><li>icon:java - 图标，使用iconfont，无默认值。</li><li>category - 分类，中文，一般为所属目录，推荐一个，可多个。</li><li>tag - 标签，中文，多个文章关键词。</li></ul><h3 id="正文-合适的文本模式可读性" tabindex="-1"><a class="header-anchor" href="#正文-合适的文本模式可读性" aria-hidden="true">#</a> 正文，合适的文本模式可读性</h3><p>可以使用<code>VsCode</code>编辑，使用<code>markdownlint</code>格式化。</p><ul><li>标点，中文中使用中文标点，英文中使用英文。</li><li>换行，推荐手动断行，保持markdown的文本形态可读性。</li><li>空白，中文与英数间可不增加空格（prettier会强制增加）</li><li>链接，使用相对路径<code>./</code>，<code>/</code>为publish资源，裸链接用<code>&lt;&gt;</code>括起来。</li><li>列表，无序列表，层级关系一级<code>*</code>，二级<code>+</code>，三级<code>-</code></li></ul><h3 id="增强-上标增强或图标组件" tabindex="-1"><a class="header-anchor" href="#增强-上标增强或图标组件" aria-hidden="true">#</a> 增强，上标增强或图标组件</h3><p>在vuepress和theme-hope在存在markdown(MD)的增强，如在MD中使用Vue组件。 但这样有一个缺点，就是MD本身在文本状态下的可读性，尤其标签在浏览器中标签不显示。</p><p>所以NotBad对sup标记有进行了增强，增加了Icon组件。</p>',19),b=e("code",null,"^必须^",-1),_=e("code",null,"^推荐^",-1),y=e("code",null,"^可选^",-1),f=e("code",null,"^慎用^",-1),g=e("code",null,"^猿初^",-1),x=e("code",null,"^猿中^",-1),q=e("code",null,"^猿高^",-1),w=e("code",null,"^狮初^",-1),B=e("code",null,'<FontIcon icon="preview"/>',-1),j=e("h2",{id:"b01d-开发者的常见问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#b01d-开发者的常见问题","aria-hidden":"true"},"#"),n(" B01D.开发者的常见问题")],-1),E=e("p",null,"此项目采用pnpm做包管理，因此不会显示的传递依赖。基本上，需要保证以下核心依赖的版本一致。 该死的json不支持注释，并且npm体系，还不打算支持json5等支持注释的配置格式。",-1),M=e("ul",null,[e("li",null,"vuepress - 核心科技"),e("li",null,"vuepress-theme-hope - 主题核心，与前者一致。"),e("li",null,"vue - 必须保持唯一版本，建议和hope一致。"),e("li",null,"vue-router - 同上。")],-1),V=e("p",null,"碰到问题时，如果不是因为自定义功能引起的，可以，",-1),I={href:"https://vuepress-theme-hope.github.io/v2/zh/faq/",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,"到github上，搜索Issue",-1),D=p('<h3 id="dev正常但build失败" tabindex="-1"><a class="header-anchor" href="#dev正常但build失败" aria-hidden="true">#</a> dev正常但build失败</h3><p>清一下缓存试试：<code>rm -rf docs/.vuepress/{.cache/,.temp/}</code></p><h3 id="usexxx-without-provider" tabindex="-1"><a class="header-anchor" href="#usexxx-without-provider" aria-hidden="true">#</a> useXXX() without provider</h3><blockquote><p>useXXX() is called without provider</p></blockquote><p>保证 vuepress，theme-hope，vue和vue-router的版本<strong>一致且唯一</strong>。</p><h3 id="如何配置docsearch" tabindex="-1"><a class="header-anchor" href="#如何配置docsearch" aria-hidden="true">#</a> 如何配置docsearch</h3><p>按theme-hope的指南，去申请和配置，申请过程可能需要等待一周以上，注意收邮件。</p>',7),F={href:"https://crawler.algolia.com/admin/crawlers",target:"_blank",rel:"noopener noreferrer"},C=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token comment">// 默认即可，咱们改成了奇怪的数字</span>
<span class="token literal-property property">schedule</span><span class="token operator">:</span> <span class="token string">&quot;at 12:34 every 5 day&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&quot;java-code-review-moilioncircle&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathsToMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://java-code-review.moilioncircle.com/**&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 先匹配，再Extractor</span>
    <span class="token function-variable function">recordExtractor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $<span class="token punctuation">,</span> helpers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> helpers<span class="token punctuation">.</span><span class="token function">docsearch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">recordProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lvl0</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">selectors</span><span class="token operator">:</span> <span class="token string">&quot;.navbar .nav-link.active&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 分类</span>
            <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">&quot;其他类别&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 未匹配时的默认值</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lvl1</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h1&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 必须是 theme-hope-content</span>
          <span class="token literal-property property">lvl2</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h2&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lvl3</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h3&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lvl4</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h4&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lvl5</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h5&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lvl6</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h6&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content p, .theme-hope-content li&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 正文</span>
          <span class="token literal-property property">tags</span><span class="token operator">:</span> <span class="token string">&quot;.category&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 标签</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">indexHeadings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">aggregateContent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">recordVersion</span><span class="token operator">:</span> <span class="token string">&quot;v3&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(X,R){const o=l("ExternalLinkIcon"),a=l("Badge"),c=l("FontIcon");return i(),d("div",null,[h,e("ul",null,[e("li",null,[e("a",v,[n("https://v2.vuepress.vuejs.org/zh"),s(o)])]),e("li",null,[e("a",k,[n("https://vuepress-theme-hope.github.io/v2"),s(o)])])]),m,e("ul",null,[e("li",null,[n("执行级别 - "),b,n(),s(a,{type:"info",vertical:"top"},{default:t(()=>[n("必须")]),_:1}),n("，"),_,s(a,{type:"tip",vertical:"top"},{default:t(()=>[n("推荐")]),_:1}),n("，"),y,s(a,{type:"note",vertical:"top"},{default:t(()=>[n("可选")]),_:1}),n("，"),f,s(a,{type:"warning",vertical:"top"},{default:t(()=>[n("慎用")]),_:1})]),e("li",null,[n("能力水准 - "),g,s(a,{type:"note",vertical:"top"},{default:t(()=>[n("🙈猿初")]),_:1}),n("，"),x,s(a,{type:"note",vertical:"top"},{default:t(()=>[n("🙉猿中")]),_:1}),n("，"),q,s(a,{type:"note",vertical:"top"},{default:t(()=>[n("🙊猿高")]),_:1}),n("，"),w,s(a,{type:"tip",vertical:"top"},{default:t(()=>[n("🦁狮初")]),_:1})]),e("li",null,[n("图标 - 增加文本乐趣 "),B,n(),s(c,{icon:"preview"})])]),j,E,M,V,e("ul",null,[e("li",null,[n("首先查看"),e("a",I,[n("常见错误"),s(o)])]),A]),D,e("p",null,[n("获取apiKey后，登录并配置"),e("a",F,[n("爬虫控制台"),s(o)]),n(" 需要注意以下片段中有注释的配置，其他默认即可。")]),C])}const T=r(u,[["render",N],["__file","b01-join-this-project.html.vue"]]);export{T as default};
