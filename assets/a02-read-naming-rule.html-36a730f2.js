import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as d,b as e,d as t,e as l,w as n}from"./app-e4c63cd7.js";const c={},_=e("h1",{id:"a02-项目词汇与编程命名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a02-项目词汇与编程命名","aria-hidden":"true"},"#"),t(" A02.项目词汇与编程命名")],-1),r=e("p",null,"命名，我认为的程序猿三大头痛问题之一。为此，我励志说把4-8字母的单词都背下来。 但实际情况是，很多业务代码中，命名会造成思路卡顿，要个查字典，看下近义词。",-1),h={id:"a02a-拼写错误零容忍必须",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#a02a-拼写错误零容忍必须","aria-hidden":"true"},"#",-1),f=e("p",null,"编辑器中都有拼写检查，一般以波浪线标在下面。当有提示时必须处理。",-1),p=e("ul",null,[e("li",null,"是拼写错误的立即改正。但公开api中的错误，要兼容性保留。"),e("li",null,[t("非拼写的词汇，放到字典中，如"),e("code",null,"elze"),t("，"),e("code",null,"clazz"),t("。")])],-1),m={id:"a02b-项目词汇不可污染必须",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#a02b-项目词汇不可污染必须","aria-hidden":"true"},"#",-1),b=e("p",null,"项目词汇，包括行业词汇，业务字典等，有明确的上下文和业务含义界定。",-1),v=e("ul",null,[e("li",null,"需要表达业务含义时，不可以使用相近词代替。"),e("li",null,"不可以把明确的业务词汇，用到非词汇场景的地方。")],-1),B={id:"a02c-前后缀2字母以上必须",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#a02c-前后缀2字母以上必须","aria-hidden":"true"},"#",-1),g=e("p",null,[t("在老风格或sql命名中，有单字母前缀表示数据类型的习惯，如"),e("code",null,"i"),t(","),e("code",null,"s"),t("等。")],-1),N=e("ul",null,[e("li",null,"单字母前缀，有些lib处理反射时构造setter错误。"),e("li",null,"单字母后缀，在展示字段时，有些突兀和奇怪。")],-1);function y(z,C){const a=s("Badge");return i(),d("div",null,[_,r,e("h2",h,[u,t(" A02A.拼写错误零容忍"),l(a,{type:"info",vertical:"top"},{default:n(()=>[t("必须")]),_:1})]),f,p,e("h2",m,[x,t(" A02B.项目词汇不可污染"),l(a,{type:"info",vertical:"top"},{default:n(()=>[t("必须")]),_:1})]),b,v,e("h2",B,[A,t(" A02C.前后缀2字母以上"),l(a,{type:"info",vertical:"top"},{default:n(()=>[t("必须")]),_:1})]),g,N])}const w=o(c,[["render",y],["__file","a02-read-naming-rule.html.vue"]]);export{w as default};
