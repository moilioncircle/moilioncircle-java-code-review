const e=JSON.parse('{"key":"v-1bd77b8a","path":"/c-code-debt/c003.html","title":"C003.22届0913怪","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"debug","category":["技债"],"description":"C003.22届0913怪 1.URLClassPath.java 631-638 java/11.0.2-open 2019-01-18 16:22:01 /java.base/jdk/internal/loader/URLClassPath.java Resource getResource(final String name, boolean check) { final URL url; try { url = new URL(base, ParseUtil.encodePath(name, false)); } catch (MalformedURLException e) { throw new IllegalArgumentException(\\"name\\"); } // .... }","head":[["meta",{"property":"og:url","content":"https://java-code-review.moilioncircle.com/c-code-debt/c003.html"}],["meta",{"property":"og:site_name","content":"Java Code Review"}],["meta",{"property":"og:title","content":"C003.22届0913怪"}],["meta",{"property":"og:description","content":"C003.22届0913怪 1.URLClassPath.java 631-638 java/11.0.2-open 2019-01-18 16:22:01 /java.base/jdk/internal/loader/URLClassPath.java Resource getResource(final String name, boolean check) { final URL url; try { url = new URL(base, ParseUtil.encodePath(name, false)); } catch (MalformedURLException e) { throw new IllegalArgumentException(\\"name\\"); } // .... }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-24T09:24:45.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-05-24T09:24:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C003.22届0913怪\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-24T09:24:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"1.URLClassPath.java 631-638","slug":"_1-urlclasspath-java-631-638","link":"#_1-urlclasspath-java-631-638","children":[{"level":3,"title":"异常缺少有用信息","slug":"异常缺少有用信息","link":"#异常缺少有用信息","children":[]}]},{"level":2,"title":"2.BalanceAccountsServiceImpl.java 107-118","slug":"_2-balanceaccountsserviceimpl-java-107-118","link":"#_2-balanceaccountsserviceimpl-java-107-118","children":[{"level":3,"title":"May The false be with you","slug":"may-the-false-be-with-you","link":"#may-the-false-be-with-you","children":[]},{"level":3,"title":"消息文字的等宽性","slug":"消息文字的等宽性","link":"#消息文字的等宽性","children":[]}]},{"level":2,"title":"3.StringTemplate.java 106-118","slug":"_3-stringtemplate-java-106-118","link":"#_3-stringtemplate-java-106-118","children":[{"level":3,"title":"不用搭特殊方法的便车","slug":"不用搭特殊方法的便车","link":"#不用搭特殊方法的便车","children":[]},{"level":3,"title":"ThreadLocal的内存泄露","slug":"threadlocal的内存泄露","link":"#threadlocal的内存泄露","children":[]},{"level":3,"title":"ThreadLocal的方法泄露","slug":"threadlocal的方法泄露","link":"#threadlocal的方法泄露","children":[]},{"level":3,"title":"ThreadLocal的线程切换","slug":"threadlocal的线程切换","link":"#threadlocal的线程切换","children":[]}]},{"level":2,"title":"4.MetricAspect.java 23-24","slug":"_4-metricaspect-java-23-24","link":"#_4-metricaspect-java-23-24","children":[{"level":3,"title":"Spring AOP 和 Full AspectJ","slug":"spring-aop-和-full-aspectj","link":"#spring-aop-和-full-aspectj","children":[]}]},{"level":2,"title":"5.AddressCache.java 46-54","slug":"_5-addresscache-java-46-54","link":"#_5-addresscache-java-46-54","children":[{"level":3,"title":"缓存可能爆栈","slug":"缓存可能爆栈","link":"#缓存可能爆栈","children":[]},{"level":3,"title":"避免select *","slug":"避免select","link":"#避免select","children":[]}]},{"level":2,"title":"6.BasicsOfferCache.java 39-40","slug":"_6-basicsoffercache-java-39-40","link":"#_6-basicsoffercache-java-39-40","children":[{"level":3,"title":"log的性能及可采集性","slug":"log的性能及可采集性","link":"#log的性能及可采集性","children":[]},{"level":3,"title":"不知哪个师傅教的","slug":"不知哪个师傅教的","link":"#不知哪个师傅教的","children":[]}]},{"level":2,"title":"7.FinanceAccountCache.java 30-34","slug":"_7-financeaccountcache-java-30-34","link":"#_7-financeaccountcache-java-30-34","children":[{"level":3,"title":"jooq误用及select *","slug":"jooq误用及select","link":"#jooq误用及select","children":[]}]},{"level":2,"title":"8.OrderUsServiceImpl.java 476-483","slug":"_8-orderusserviceimpl-java-476-483","link":"#_8-orderusserviceimpl-java-476-483","children":[{"level":3,"title":"用心想问题，用脑写代码","slug":"用心想问题-用脑写代码","link":"#用心想问题-用脑写代码","children":[]}]},{"level":2,"title":"9.BalanceActsDetailController.java 208-234","slug":"_9-balanceactsdetailcontroller-java-208-234","link":"#_9-balanceactsdetailcontroller-java-208-234","children":[{"level":3,"title":"Controller不要写业务逻辑","slug":"controller不要写业务逻辑","link":"#controller不要写业务逻辑","children":[]},{"level":3,"title":"不要在循环中查数据库","slug":"不要在循环中查数据库","link":"#不要在循环中查数据库","children":[]},{"level":3,"title":"要理解数据结构的特性","slug":"要理解数据结构的特性","link":"#要理解数据结构的特性","children":[]},{"level":3,"title":"要有逻辑判断及变量提取思想","slug":"要有逻辑判断及变量提取思想","link":"#要有逻辑判断及变量提取思想","children":[]}]}],"git":{"createdTime":1684920285000,"updatedTime":1684920285000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":1}]},"readingTime":{"minutes":5.07,"words":1520},"filePathRelative":"c-code-debt/c003.md","localizedDate":"2023年5月24日","excerpt":"<h1> C003.22届0913怪</h1>\\n<!-- markdownlint-disable MD013 -->\\n<h2> 1.URLClassPath.java 631-638</h2>\\n<p>java/11.0.2-open 2019-01-18 16:22:01\\n/java.base/jdk/internal/loader/URLClassPath.java</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">Resource</span> <span class=\\"token function\\">getResource</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">boolean</span> check<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">URL</span> url<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n        url <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">URL</span><span class=\\"token punctuation\\">(</span>base<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ParseUtil</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">encodePath</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">MalformedURLException</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">IllegalArgumentException</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"name\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">// ....</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};