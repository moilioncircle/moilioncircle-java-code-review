---
isOriginal: true
icon: selection
category:
  - 自学
tag:
  - 规则
  - 好书
---
# SW02.EffectiveJava

此书非常薄，实操性非常强，是我多年来首推的工具书，在不同的能力水平，会看到不同的理解和收益。

以下Repo是中英文对照版，推荐优先阅读英文，再对照中文理解，技术词汇语义以英文单词为准。
[https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual]

英文阅读能力，是程序猿进阶的必备技能。就当前而言，先进的技术和社区都是英文的，只有具有英文能力，
才能够保持不掉队，并且对代码的命名也有莫大的好处。

## SW02A.规则列表

<!-- markdownlint-disable MD013 -->
### Chapter02. 创建和销毁对象  [Creating and Destroying Objects](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Introduction.md)

- Item01: 考虑以静态工厂方法代替构造函数  [Consider static factory methods instead of constructors](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-1-Consider-static-factory-methods-instead-of-constructors.md)
- Item02: 在面对多个构造函数参数时，请考虑构建器  [Consider a builder when faced with many constructor parameters](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-2-Consider-a-builder-when-faced-with-many-constructor-parameters.md)
- Item03: 使用私有构造函数或枚举类型实施单例属性  [Enforce the singleton property with a private constructor or an enum type](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-3-Enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type.md)
- Item04: 用私有构造函数实施不可实例化  [Enforce noninstantiability with a private constructor](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-4-Enforce-noninstantiability-with-a-private-constructor.md)
- Item05: 依赖注入优于硬连接资源  [Prefer dependency injection to hardwiring resources](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-5-Prefer-dependency-injection-to-hardwiring-resources.md)
- Item06: 避免创建不必要的对象  [Avoid creating unnecessary objects](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-6-Avoid-creating-unnecessary-objects.md)
- Item07: 排除过时的对象引用  [Eliminate obsolete object references](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-7-Eliminate-obsolete-object-references.md)
- Item08: 避免使用终结器和清除器  [Avoid finalizers and cleaners](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-8-Avoid-finalizers-and-cleaners.md)
- Item09: 使用 try-with-resources 优于 try-finally  [Prefer try with resources to try finally](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-9-Prefer-try-with-resources-to-try-finally.md)

### Chapter03. 对象的通用方法  [Methods Common to All Objects](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-3/Chapter-3-Introduction.md)

- Item10: 覆盖 equals 方法时应遵守的约定  [Obey the general contract when overriding equals](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-3/Chapter-3-Item-10-Obey-the-general-contract-when-overriding-equals.md)
- Item11: 当覆盖 equals 方法时，总要覆盖 hashCode 方法  [Always override hashCode when you override equals](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-3/Chapter-3-Item-11-Always-override-hashCode-when-you-override-equals.md)
- Item12: 始终覆盖 toString 方法  [Always override toString](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-3/Chapter-3-Item-12-Always-override-toString.md)
- Item13: 明智地覆盖 clone 方法  [Override clone judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-3/Chapter-3-Item-13-Override-clone-judiciously.md)
- Item14: 考虑实现 Comparable 接口  [Consider implementing Comparable](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-3/Chapter-3-Item-14-Consider-implementing-Comparable.md)

### Chapter04. 类和接口  [Classes and Interfaces](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Introduction.md)

- Item15: 尽量减少类和成员的可访问性  [Minimize the accessibility of classes and members](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-15-Minimize-the-accessibility-of-classes-and-members.md)
- Item16: 在公共类中，使用访问器方法，而不是公共字段  [In public classes use accessor methods not public fields](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-16-In-public-classes-use-accessor-methods-not-public-fields.md)
- Item17: 减少可变性  [Minimize mutability](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-17-Minimize-mutability.md)
- Item18: 优先选择复合而不是继承  [Favor composition over inheritance](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-18-Favor-composition-over-inheritance.md)
- Item19: 继承要设计良好并且具有文档，否则禁止使用  [Design and document for inheritance or else prohibit it](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-19-Design-and-document-for-inheritance-or-else-prohibit-it.md)
- Item20: 接口优于抽象类  [Prefer interfaces to abstract classes](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-20-Prefer-interfaces-to-abstract-classes.md)
- Item21: 为后代设计接口  [Design interfaces for posterity](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-21-Design-interfaces-for-posterity.md)
- Item22: 接口只用于定义类型  [Use interfaces only to define types](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-22-Use-interfaces-only-to-define-types.md)
- Item23: 类层次结构优于带标签的类  [Prefer class hierarchies to tagged classes](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-23-Prefer-class-hierarchies-to-tagged-classes.md)
- Item24: 静态成员类优于非静态成员类  [Favor static member classes over nonstatic](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-24-Favor-static-member-classes-over-nonstatic.md)
- Item25: 源文件仅限有单个顶层类  [Limit source files to a single top level class](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-4/Chapter-4-Item-25-Limit-source-files-to-a-single-top-level-class.md)

### Chapter05. 泛型  [Generics](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Introduction.md)

- Item26: 不要使用原始类型  [Do not use raw types](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-26-Do-not-use-raw-types.md)
- Item27: 消除 unchecked 警告  [Eliminate unchecked warnings](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-27-Eliminate-unchecked-warnings.md)
- Item28: list 优于数组  [Prefer lists to arrays](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-28-Prefer-lists-to-arrays.md)
- Item29: 优先使用泛型  [Favor generic types](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-29-Favor-generic-types.md)
- Item30: 优先使用泛型方法  [Favor generic methods](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-30-Favor-generic-methods.md)
- Item31: 使用有界通配符增加 API 的灵活性  [Use bounded wildcards to increase API flexibility](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-31-Use-bounded-wildcards-to-increase-API-flexibility.md)
- Item32: 明智地合用泛型和可变参数  [Combine generics and varargs judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-32-Combine-generics-and-varargs-judiciously.md)
- Item33: 考虑类型安全的异构容器  [Consider typesafe heterogeneous containers](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-5/Chapter-5-Item-33-Consider-typesafe-heterogeneous-containers.md)

### Chapter06. 枚举和注解  [Enums and Annotations](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Introduction.md)

- Item34: 用枚举类型代替 int 常量  [Use enums instead of int constants](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-34-Use-enums-instead-of-int-constants.md)
- Item35: 使用实例字段替代序数  [Use instance fields instead of ordinals](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-35-Use-instance-fields-instead-of-ordinals.md)
- Item36: 用 EnumSet 替代位字段  [Use EnumSet instead of bit fields](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-36-Use-EnumSet-instead-of-bit-fields.md)
- Item37: 使用 EnumMap 替换序数索引  [Use EnumMap instead of ordinal indexing](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-37-Use-EnumMap-instead-of-ordinal-indexing.md)
- Item38: 使用接口模拟可扩展枚举  [Emulate extensible enums with interfaces](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-38-Emulate-extensible-enums-with-interfaces.md)
- Item39: 注解优于命名模式  [Prefer annotations to naming patterns](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-39-Prefer-annotations-to-naming-patterns.md)
- Item40: 坚持使用 @Override 注解  [Consistently use the Override annotation](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-40-Consistently-use-the-Override-annotation.md)
- Item41: 使用标记接口定义类型  [Use marker interfaces to define types](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-6/Chapter-6-Item-41-Use-marker-interfaces-to-define-types.md)

### Chapter07. λ 表达式和流  [Lambdas and Streams](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Introduction.md)

- Item42: λ 表达式优于匿名类  [Prefer lambdas to anonymous classes](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Item-42-Prefer-lambdas-to-anonymous-classes.md)
- Item43: 方法引用优于 λ 表达式  [Prefer method references to lambdas](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Item-43-Prefer-method-references-to-lambdas.md)
- Item44: 优先使用标准函数式接口  [Favor the use of standard functional interfaces](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Item-44-Favor-the-use-of-standard-functional-interfaces.md)
- Item45: 明智地使用流  [Use streams judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Item-45-Use-streams-judiciously.md)
- Item46: 在流中使用无副作用的函数  [Prefer side effect free functions in streams](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Item-46-Prefer-side-effect-free-functions-in-streams.md)
- Item47: 优先选择 Collection 而不是流作为返回类型  [Prefer Collection to Stream as a return type](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Item-47-Prefer-Collection-to-Stream-as-a-return-type.md)
- Item48: 谨慎使用并行流  [Use caution when making streams parallel](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-7/Chapter-7-Item-48-Use-caution-when-making-streams-parallel.md)

### Chapter08. 方法  [Methods](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Introduction.md)

- Item49: 检查参数的有效性  [Check parameters for validity](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-49-Check-parameters-for-validity.md)
- Item50: 在需要时制作防御性副本  [Make defensive copies when needed](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-50-Make-defensive-copies-when-needed.md)
- Item51: 仔细设计方法签名  [Design method signatures carefully](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-51-Design-method-signatures-carefully.md)
- Item52: 明智地使用重载  [Use overloading judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-52-Use-overloading-judiciously.md)
- Item53: 明智地使用可变参数  [Use varargs judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-53-Use-varargs-judiciously.md)
- Item54: 返回空集合或数组，而不是 null  [Return empty collections or arrays, not nulls](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-54-Return-empty-collections-or-arrays-not-nulls.md)
- Item55: 明智地的返回 Optional  [Return optionals judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-55-Return-optionals-judiciously.md)
- Item56: 为所有公开的 API 元素编写文档注释  [Write doc comments for all exposed API elements](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-8/Chapter-8-Item-56-Write-doc-comments-for-all-exposed-API-elements.md)

### Chapter09. 通用程序设计  [General Programming](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Introduction.md)

- Item57: 将局部变量的作用域最小化  [Minimize the scope of local variables](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-57-Minimize-the-scope-of-local-variables.md)
- Item58: for-each 循环优于传统的 for 循环  [Prefer for-each loops to traditional for loops](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-58-Prefer-for-each-loops-to-traditional-for-loops.md)
- Item59: 了解并使用库  [Know and use the libraries](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-59-Know-and-use-the-libraries.md)
- Item60: 若需要精确答案就应避免使用 float 和 double 类型  [Avoid float and double if exact answers are required](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-60-Avoid-float-and-double-if-exact-answers-are-required.md)
- Item61: 基本数据类型优于包装类  [Prefer primitive types to boxed primitives](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-61-Prefer-primitive-types-to-boxed-primitives.md)
- Item62: 其他类型更合适时应避免使用字符串  [Avoid strings where other types are more appropriate](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-62-Avoid-strings-where-other-types-are-more-appropriate.md)
- Item63: 当心字符串连接引起的性能问题  [Beware the performance of string concatenation](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-63-Beware-the-performance-of-string-concatenation.md)
- Item64: 通过接口引用对象  [Refer to objects by their interfaces](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-64-Refer-to-objects-by-their-interfaces.md)
- Item65: 接口优于反射  [Prefer interfaces to reflection](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-65-Prefer-interfaces-to-reflection.md)
- Item66: 明智地使用本地方法  [Use native methods judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-66-Use-native-methods-judiciously.md)
- Item67: 明智地进行优化  [Optimize judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-67-Optimize-judiciously.md)
- Item68: 遵守被广泛认可的命名约定  [Adhere to generally accepted naming conventions](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-9/Chapter-9-Item-68-Adhere-to-generally-accepted-naming-conventions.md)

### Chapter10. 异常  [Exceptions](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Introduction.md)

- Item69: 仅在确有异常条件下使用异常  [Use exceptions only for exceptional conditions](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-69-Use-exceptions-only-for-exceptional-conditions.md)
- Item70: 对可恢复情况使用 checked 异常，对编程错误使用运行时异常  [Use checked exceptions for recoverable conditions and runtime exceptions for programming errors](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-70-Use-checked-exceptions-for-recoverable-conditions-and-runtime-exceptions-for-programming-errors.md)
- Item71: 避免不必要地使用 checked 异常  [Avoid unnecessary use of checked exceptions](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-71-Avoid-unnecessary-use-of-checked-exceptions.md)
- Item72: 鼓励复用标准异常  [Favor the use of standard exceptions](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-72-Favor-the-use-of-standard-exceptions.md)
- Item73: 抛出能用抽象解释的异常  [Throw exceptions appropriate to the abstraction](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-73-Throw-exceptions-appropriate-to-the-abstraction.md)
- Item74: 为每个方法记录会抛出的所有异常  [Document all exceptions thrown by each method](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-74-Document-all-exceptions-thrown-by-each-method.md)
- Item75: 异常详细消息中应包含捕获失败的信息  [Include failure capture information in detail messages](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-75-Include-failure-capture-information-in-detail-messages.md)
- Item76: 尽力保证故障原子性  [Strive for failure atomicity](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-76-Strive-for-failure-atomicity.md)
- Item77: 不要忽略异常  [Don’t ignore exceptions](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-10/Chapter-10-Item-77-Don’t-ignore-exceptions.md)

### Chapter11. 并发  [Concurrency](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Introduction.md)

- Item78: 对共享可变数据的同步访问  [Synchronize access to shared mutable data](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Item-78-Synchronize-access-to-shared-mutable-data.md)
- Item79: 避免过度同步  [Avoid excessive synchronization](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Item-79-Avoid-excessive-synchronization.md)
- Item80: Executor、task、流优于直接使用线程  [Prefer executors, tasks, and streams to threads](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Item-80-Prefer-executors,-tasks,-and-streams-to-threads.md)
- Item81: 并发实用工具优于 wait 和 notify  [Prefer concurrency utilities to wait and notify](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Item-81-Prefer-concurrency-utilities-to-wait-and-notify.md)
- Item82: 文档应包含线程安全属性  [Document thread safety](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Item-82-Document-thread-safety.md)
- Item83: 明智地使用延迟初始化  [Use lazy initialization judiciously](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Item-83-Use-lazy-initialization-judiciously.md)
- Item84: 不要依赖线程调度器  [Don’t depend on the thread scheduler](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-11/Chapter-11-Item-84-Don’t-depend-on-the-thread-scheduler.md)

### Chapter12. 序列化  [Serialization](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-12/Chapter-12-Introduction.md)

- Item85: 优先选择 Java 序列化的替代方案  [Prefer alternatives to Java serialization](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-12/Chapter-12-Item-85-Prefer-alternatives-to-Java-serialization.md)
- Item86: 非常谨慎地实现 Serializable  [Implement Serializable with great caution](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-12/Chapter-12-Item-86-Implement-Serializable-with-great-caution.md)
- Item87: 考虑使用自定义序列化形式  [Consider using a custom serialized form](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-12/Chapter-12-Item-87-Consider-using-a-custom-serialized-form.md)
- Item88: 防御性地编写 readObject 方法  [Write readObject methods defensively](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-12/Chapter-12-Item-88-Write-readObject-methods-defensively.md)
- Item89: 对于实例控制，枚举类型优于 readResolve  [For instance control, prefer enum types to readResolve](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-12/Chapter-12-Item-89-For-instance-control-prefer-enum-types-to-readResolve.md)
- Item90: 考虑以序列化代理代替序列化实例  [Consider serialization proxies instead of serialized instances](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-12/Chapter-12-Item-90-Consider-serialization-proxies-instead-of-serialized-instances.md)

<!-- markdownlint-enable MD013 -->
