---
isOriginal: true
icon: git
category:
  - 自学
tag:
  - 规则
  - 项目
---

# B03.纹丝不忒工程实践

WingsBoot是SpringBoot的脚手架 <https://wings.fessional.pro>

## B03A.防御式风格概要

* 静态优于动态，能编码的就不反射
* 强类型优于弱类型，能class就不map，能enum就不const
* 编译时优于运行时，能在编译时解决的必须解决
* IDE优于editor，IDE能提供语法分析，上下文解析
* 命名规约中，可读性优先。不怕长，不怕怪异
* 奥卡姆剃刀，能简单就不搞复杂，能明示的就别暗示
* 边界外参数不可信，边界上验证和转换，边界内均可信。

详细文档 <https://wings.fessional.pro/0-wings/0a-code-style.html>
