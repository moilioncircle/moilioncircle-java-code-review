---
isOriginal: true
icon: git
date: 2022-05-24
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

## B03B.阿里风格黄山版

与[阿里风格](https://github.com/alibaba/p3c)有以下冲突，以Wings为准。

* 行业黑话 - 无明确因为词汇的，可中文命名
* 特殊标记 - 配置项，codegen，可以`$`分隔或前缀
* 无连续大写 - 如DO/PO/DTO等，一律Do/Po/Dto
* 枚举类/常量 - 推荐大驼峰法，不推荐全大写
* 序列化前缀 - 不可单字母，boolean避免`is`前缀
* 常量为复数 - consts/constants
* 一行短if - 一行短if一般用作短路处理

此外，阿里风格也并非能够全部应用或适用，量力而行，实事求是。

一定要高度重视团队约定和编码风格，很多规则成于血的教训，百万学费。
