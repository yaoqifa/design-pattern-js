# design-pattern-js
some design pattern of javascript

# Linux/Unix设计哲学

Unix哲学的几条准则看似简单。事实上，它们简单到会容易使人们忽略其重要性。这就是它们颇具欺骗性的地方。其实，简单的外表下掩盖着一个事实：如果人们能够始终如一的贯彻它们，这些准则可是非常行之有效的。

以下这份清单会让你对Unix哲学的准则有初步的认识。

## 小即是美。
相对于同类庞然大物，小巧的事物有着其无可比拟的巨大优势。其中一点就是它们能够以独特有效的方式结合其他小事务，而且这种方式往往是最初的设计者没能预见的。
## 让每一个程序只做好一件事情。
通过集中精力应对单一任务，程序可以减少冗余代码，从而避免过高的开销、不必要的复杂性和缺乏灵活性。
## 尽快建立原型。
大多数人认同“建立原型是任何项目的一个重要组成部分。在其他方法论中，建立原型只是设计中一个不太重要的组成部分，然而，在Unix环境下它却是达成完美设计的主要工具。
## 舍高效率而取可移植性。
当Unix作为第一个可移植系统而开创先河时，它曾经掀起过轩然大波。今天，可移植性早被视作现代软件设计中一个理所当然的特性，这更加充分说明这条Unix准则早就在Unix之外的系统中获得了广泛认可。
## 使用纯文本文件来存储数据。
舍高效率而取可移植性强调了可移植代码的重要性。其实可移植性数据的重要性绝不亚于可移植代码。在关于可移植性的准则中，人们往往容易忽视可移植性数据。
## 充分利用软件的杠杆效应。
很多程序员对可重用代码模块的重要性只有一些肤浅认识。代码重用能帮助人们充分利用软件的杠杆效应。一些Unix的开发人员正是遵循这个强大的理念，在相对较短的时间内编写出了大量应用程序。
## 使用shell脚本来提高杠杆效应和可移植性。
shell脚本在软件设计中可谓是一把双刃剑，它可以加强软件的可重用性和可移植性。无论什么时候，只要有可能，编写shell脚本来替代C语言程序都不失为一个良好的选择。
## 避免强制性的用户界面。
Unix开发人员非常了解，有一些命令用户界面为什么会被称为是“强制性的"用户界面。这些命令在运行的时候会阻止用户去运行其他命令，这样用户就会成为这些系统的囚徒。在图形用户界面中，这样的界面被称为”模态“。
## 让每一个程序都成为过滤器。
所有软件程序共有的最基本特性就是，它们只是修改而从不创造数据。因此，基于软件的过滤器本质，人们就应该把它们编写成执行过滤器任务的程序。

以上列出Unix开发人员所奉行的信条。这些都是大家公认的Unix基本理念。如果你也采用这些标准，那么人们就会认为你是一个”Unix人“。

# SOLID 五大设计原则

S 单一职责原则 一个程序只做好一件事，如果功能复杂就拆分开，每个部分保持独立
O 开放封闭原则 对扩展开放，对修改封闭。增加需求时，扩展新代码而不是修改已有代码
L 李氏置换原则 子类能覆盖父类，父类能出现的地方子类就能出现
I 接口独立 保持接口的单一独立，避免出现“胖接口” ts里有interface
D 依赖倒置原则 面向抽象编程，依赖于抽象不依赖于具体，不关注具体的实现