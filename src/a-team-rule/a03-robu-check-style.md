---
isOriginal: true
icon: plugin
date: 2022-05-23
category:
  - 规则
  - 健壮
  - 分析
---

# A03.静态分析和动态分析

静态代码分析(Static Code Analysis)^推荐^，可消除80%的低质量代码。

* [CheckStyle](https://checkstyle.org)
* [SpotBugs/FindBugs](https://spotbugs.github.io)  
* [PMD](https://pmd.github.io/)

动态代码分析(Dynamic Code Analysis)^可选^，或有AI智能加持的工具也有些威力。
这里不做推荐，因为在实际试用中，工具较重，其干扰，甚至误判，多于其输出的价值。

若使用IDEA开发，其自带的Inspect就很够用。检查并非越智能越好，规则也并非越多越好。
当工具和工具，规则和规则产生干扰和冲突时，要以团队规则为主，情绪干扰也算干扰。
