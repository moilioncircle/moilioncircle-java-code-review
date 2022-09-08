---
isOriginal: true
icon: support
category:
  - 摘要
---

# A.团队规则

团队规则，通用由行业规范，框架约定，最佳实践等构成，是团队或项目的最高执行法则。
代码审查，以团队约定为基础，在具体条件和场景内，偿还技术债务或改善代码。

代码审查需要持续进行，自我审查，同行审查都可，改良后代码在就近的迭代中测试和发布。
这个过程，不但可以持续改良代码结构，更可以使知识和经验在团队中共享。

## A.1.审查和重构的基准

代码审查，通常伴随着重构，通常3-5次审查后，等于或伴随着一次较大的重构。
日拱一卒的审查，一般是方法，类，继承树的内部改良，不应该具有外部破坏性。
而不破不立的重构，经常伴有结构性调整，通常需要回归测试。

本项目的审查和重构不会涉及大的变更或较重的设计及场景，主要着眼于以下方面，

* 易读性/`read`<FontIcon icon="preview"/> - 规范命名，代码拆分，顺序或结构调整等。
* 健壮性/`robu`<FontIcon icon="plugin"/> - 低复杂度，无副作用，异常控制，错误定位等。
* 安全性/`safe`<FontIcon icon="safe"/> - 内存安全，线程安全，业务安全等。
* 结构性/`arch`<FontIcon icon="config"/> - 数据结构和模型，业务架构，框架，设计等。
* 其他类/`elze`<FontIcon icon="speed"/> - 暂无归类者，简单，踏实。

用人话来说，一段能运行的代码在眼前，以后还会加功能，出了问题还要30分钟对应。
那么，①花多少脑力能读懂，②用多少精力能调查和修改，③上线后有没隐患和限制。

## A.2.审查和重构的级别

规则有轻重缓急和适用场景，打破规则时，必须注释原因。若经常打破，则考虑修改或取消此规则。
为了规避常见错误和反模式，减少细枝末节的纠结，这里根据RFC2119将规则分为4个执行级别。

* `MUST`^必须^ - 可规避常见错误，属于行业经验或事实标准。
* `SHOULD`^推荐^ - 可改善可读性和开发体验，不影响代码运行。
* `MAY`^可选^ - 有多种最佳实践，以当前项目一致的节奏感和习惯。
* `NOT`^慎用^ - `MUST NOT`及`SHOULD NOT`，如过时的，特殊的。

## A.3.代码审查的心态

说起来，写代码的都有读书人的破脾气，而且层次越低，年纪越轻，越容易搞对抗或人身攻击。
英文Review，行业内通常翻译为『审查』或『评审』，其实叫『回顾』更贴切吧。

所以在代码审查中，如果能理解Review的字面意思，那么非常好，后面的交流也会非常愉快。

这里有一个比较客观的事实，就是创业团队的项目，总是在资源不足，渐进明细的，
所以，不可能存在完美设计，只能依靠经验选择当前最优解，并在之后的每次迭代中，
偿还技术债务，才能使得堆砌的代码变得完善，但这不等于糊弄，也叫牺牲质量。

## A.4.代码重构的危险

重构必须有测试用例保证，并且要做回归测试。理论上，重构不改变原语义和行为，但实际上较难保证。
以我的经验，可以这样说，审查依赖团队规则和编码经验。而重构依赖于个人能力及业务经验。

『子昆弟三人其孰最善为医？』审查治未病，重构治欲病，重搞治已病。