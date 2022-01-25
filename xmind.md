# 程序员必备的思维能力：逻辑思维

- 目的
  - 在面对“杠精”的时候，能发现对方的逻辑谬误
  - 在思考问题的时候，能尽量做到逻辑完整
  - 在表达的时候，能尽量做到逻辑清晰
- 目标
  - 当别人对你说“你这逻辑不对！”的时候，你能知道他是在说什么
  - 当你对他人说“你这逻辑不对！”的时候，也知道自己在说什么
- 什么是逻辑
  - 逻辑就是关系
  - 无逻辑就是没有建立起事物之间的正确关系，换句话说有逻辑就是能建立事物之间的正确关系
  - 逻辑学就是研究语句之间关系的学问
  - 例子
    - 今天的天气真不错。 -> 天气让人心情都变好了 ✔️
    - 今天的天气真不错。 -> 我肚子好饿啊 ❌（答非所问，毫无逻辑）
- 逻辑思维的要素
  - 逻辑思维基本包含三个方面：
    - 概念
    - 判断（在逻辑学中，也叫命题，英文是 proposition）
    - 推理（在逻辑学中，也叫论证，英文是 argument）
  - 概念是思维的基本单位；通过概念对事物是否具有某种属性进行肯定或否定的回答，这就是判断；由一个或几个判断推出另一判断的思维形式，就是推理 -> 想想`if else`
  - 例子：
    - 《如何阅读一本书》：分析阅读
      - 如何通过提炼一本书的关键字词（概念），关键句子（判断），以及关键论述（推理）来分析一本书的主旨
  - 逻辑思维的要义
    - 在于正确运用概念、判断、推理的思维形式
    - 想要正确掌握逻辑思维，就必须从这三方面学起
- 概念
  - 有很多事物，我们通过我们的思维去赋予它们意思或意义的，然后通过语言符号呈现出来
  - 这些意思或意义，就是概念的思维内显形式。语言是概念的外显形式，也就是说一个名词
  - 例子
    - 在经济学中，“稀缺”是经济学中的基本概念
    - 在讨论产业政策的时候，先搞清楚大家所理解的「产业政策」是不是同一个意思
    - 在分享 DDD（Domain Driven Design：领域驱动设计）的时候，需要先对通用语言这个概念有一个统一的认识
  - 建议
    - 对于任何领域，都应该有一份核心领域词汇表，方便团队在这些核心概念的表达和命名上达成共识
    - 提高我们的逻辑思维能力，要从懂清楚每一个概念所表达的具体内容（内涵和外延）开始
- 判断
  - 判断（也叫命题）是推理的建筑基块
  - 一个判断就是一个断言（Assert），它断定了一个事情是这样或者不是这样
  - 每一个判断都是或真或假的
  - 一个问题没有断言任何东西，就不是判断
  - 判断一般都是用陈述句作为表达的
  - 例子
    - 世界上的所有人都是善良的
  - 关系
    - 判断是概念的展开，没有判断，就不能揭示和说明概念。同时，判断也是推理的前提，是正确运用各种推理的必要条件
- 逻辑推理
  - **逻辑就是关系。所谓的推理，就是研究语句、判断、命题之间相互关系的学问**
  - 演绎推理
    - 意思
      - 旨在阐明前提和结论之间的关系，为评估演绎论证是否有效提供方法
      - 一个从一般到特殊的过程
      - 方法：三段论（大前提、小前提、结论）
    - 两种理论
      - **古典逻辑和符号逻辑，都是研究推理的形式（form），所以也被称之为形式逻辑**
      - 古典逻辑
        - 主要处理的是不同对象的类之间关系的论证
        - 类与类之间的三种关联方式：
          - 全包含（wholly included）例如狗的类和哺乳动物的类
          - 部分包含（partially included）例如运动员的类和女人的类
          - 互斥（exclude），例如三角形的类和圆形的类
        - 基于类和类之间的关系，有四种直言命题：
          - 全称肯定命题。所有 S 是 P。例如所有政客都是说谎者。也叫 A 命题
          - 全称否定命题。没有 S 是 P。例如没有政客是说谎者。叫 E 命题
          - 特称肯定命题。有 S 是 P。例如有政客是说谎者。叫 I 命题
          - 特称否定命题。有 S 不是 P。例如有政客不是说谎者。叫 O 命题
        - 15 个有效的三段论形式
          - 基于这些命题和谓项，组成了很多形式
      - 符号逻辑
        - 利用符号来表示逻辑中的各种概念
        - 布尔代数
        - 逻辑代数也叫做开关代数，它的基本运算是逻辑加、逻辑乘和逻辑非
        - 也就是命题演算中的“或”、“与”、“非”
        - 运算对象只有两个数 0 和 1，相当于命题演算中的“真”和“假”
        - 场景：
          - 论证形式无效
            - 肯定后件谬误、否定前件谬误
    - 对于一个推理来说，首先要保证在形式上是有效的
      - “真”和“假”的概念适用于命题，“有效性”和“无效性”适用于逻辑形式
  - 归纳推理
    - 以一类事物中若干个别对象的具体知识为前提，推出有关该类事物的普遍性知识的结论的过程
    - **建模是一个归纳工作，我们通过抽象问题域里具有共同特性的类来建立模型。为了验证模型的有效性，我们会使用演绎的方法，去推演不同的业务场景，看看是否能满足业务的需要**
  - 溯因推理
    - 我先知道了答案，再去追溯原因的推理 -> 还原推理模式
    - 溯因推理是解释已知事物的过程
    - 如何进行溯因推理？
      - 大胆假设，小心求证
    - 例子：故障排查、因果链
    - **凡事我们要多问几个“为什么”，任何问题，如果你能扛得住 5 个“为什么”，说明你是真正理解了这个问题。有个著名的提问法就叫 5Why 提问法**
    - **凡事要多问几个为什么，要知其然知其所以然，这种本质思考会极大的提升我们的认知水平和解决问题的能力**
- 逻辑谬误
  - **所谓谬误（fallacy），就是推理中的欺骗手段，常见的花招有错误假设，理由和结论不相关（偷换概念）等**
  - 非形式逻辑
    - 不依赖于形式逻辑概念
    - 不依赖形式逻辑的主要评价功能——有效性
    - 非形式逻辑可以在日常生活中，辅助我们进行逻辑分析和批判性思考
  - 逻辑谬误分类
    - **拿这些谬误分类作为武器，为我们的批判、分析、讨论进行“防卫”**
    - **这些谬误包括偷换概念、错误假设、以偏概全、转移话题、人身攻击、以势压人、以众压人、循环论证、不适当地诉诸权威、不适当地诉诸情感、窃取论题、 得寸进尺等等 -> 了解更多，可看「学会提问」**
    - 偷换概念
      - 当你看到一个关键词在论证中不止一次出现，要注意其意义有没有发生改变，如果意思发生改变，就要警惕偷换概念谬误
      - 表现
        - 任意改变一个概念的内涵和外延．使之变成另一个概念
        - 利用多义词可以表达几个不同概念的特点，故意把不同的概念混淆起来
        - 抓住概念之间的某些相似之处，抹杀不同概念的本质区别
      - 例子
        - 小王说：“Frank 真不是男人，竟然会怕老鼠。”
        - 小张说：“Frank 怎么不是男人，他不是男人，怎么会有鼓鼓的二头肌呢？”
        - 小王说的“男人”是指男子汉气概，而小张说的“男人”是指生理男人，两个“男人”指向的不是同一个概念。
    - 错误假设
      - 在所有的论证中，都有一些作者认为是理所当然的特定假设，通常情况下他们却不会明说出来。
      - 这些假设在不同立场、不同价值观的人看来，这论证是不成立的
      - 例子
        - 一个小学没有毕业的人早早地混社会挣了很多钱，一个博士毕业但是没有挣到太多钱。所以读书无用，小学没有毕业可以比博士更成功。 -> 暗含金钱至上这个价值观的假设
        - 马老师说 996 是福报，也是带有自己利益团体价值观倾向的
    - 循环论证
      - 一个结论会自己证明自己，只不过措辞有所改变
      - 例子
        - 论证“逃课不好”，因为“逃课是不对的”，不好和不对是一个意思，等于没有论证，是在同义反复
        - 你为什么长得胖？ -> 因为我吃得多 -> 你为什么吃得多？ -> 因为我长得胖
        - 人这辈子绝大多数时候都在做没意义的事情 -> 有意义就是好好活 -> 什么是好好活呢？ -> 好好活就是做有意义的事情。做很多很多有意义的事情
    - 以偏概全
      - 指依据不充分的例证得出普遍的结论
      - 例子
        - 你不能说看到 3 个意大利人很有情调，就说所有的意大利人都是浪漫的
        - 用一张什么偏方，治好了某个人的某种疾病，如果就据此得出“这张偏方具有治疗该疾病的作用”
        - 关于“读书无用论”的论证，除了有价值观假设的问题，也有以偏概全的问题。毕竟即使在经济上，不读书能成功的也是极少数，从概率上来讲，更多高学历的人比低学历的人在经济上要优越
    - 滑坡谬误
      - 不合理使用连串因果关系
      - 通过一个起因 A，引发多米诺效应，带来一些列负面事情。A 并不是很糟糕，但是 A 导致 B，B 导致 C，C 导致 D，D 简直糟糕透顶
      - 例子
        - 现在的教育内卷，实际上也是一种滑坡谬误，很多家长不想让小孩输在起跑线上，认为没有好的幼儿园就上不了好小学，没有好小学就上不了好中学，没有好中学就上不了好大学，上不了好大学这辈子就没有希望了
- 总结
  - 逻辑思维需要理性的思考。但是，我们人类并不是纯粹理性的动物。
  - 正如丹尼尔。卡尼曼在《快思慢想》所说：**“人类都是主观性的动物，别说客观公正了，很多时候，连理性都没有，都是感觉直观。”**
  - 逻辑思维是我们最重要、也是最底层的思维能力。特别是对程序员，因为软件是一个纯思维的创造活动，没有清晰的逻辑思维，不可能创造出漂亮的作品
  - 在生活上，有时候我们还是可以“傻”一点，没必要凡事都上纲上线、理性分析。特别是在家庭生活中，你要相信老婆很多时候都是“有道理的”
- 💡：Q&A
  - 有效性？
    - 简单来说就是你这样做的起作用程度
    - 在逻辑中，如果一个论证不能从真前提中得出假结论，则论证的形式是完全有效的。
    - [思维的有效性](https://vd3.bdstatic.com/mda-ki3n09daf6w9qqpj/hd/mda-ki3n09daf6w9qqpj.mp4)
  - 主旨？
    - 指主要的意义、用意或目的；也指主张，主意
  - SKU？
    - Stock Keeping Unit
    - 存货单位，也翻译为库存单元，是一个会计学名词，定义为库存管理中的最小可用单元，例如纺织品中一个 SKU 通常表示规格、颜色、款式，而在连锁零售门店中有时称单品为一个 SKU
    - 简单来说就是 ID
    - SPU：standard product unit （标准化产品单元） -> 更抽象，如 IPhone6（与商家无关，与颜色、款式、套餐也无关，属性值、特性相同的商品就可以称为一个 spu）
    - SKU：stock keeping unit（库存量单位） -> 更具体，如 64G IPhone6
    - [SKU 到底是什么意思？大白话说一下，最好举个例子，谢谢 ？ - 知乎](https://www.zhihu.com/question/292246379)
  - 充分条件和必要条件
    - 或
    - 和
    - [充分条件和必要条件怎么区分 ？ - 知乎](https://www.zhihu.com/question/30469121)
  - 谓项
    - [主项，谓项，周延不周延是怎么回事？ - 知乎](https://www.zhihu.com/question/264751423)
  - 周延
    - 形式逻辑上指一个判断的主词或宾词包括了其全部外延
    - eg：全称判断的主词是 周延的
    - 周延不周延，是指用直言判断句谈论事物时是否涉及到相关概念的外延全部。
    - [逻辑学当中的周延是什么意思？- 知乎](https://www.zhihu.com/question/359045460/answer/923971776)
    - [如何学习逻辑中的各种周延性？- 知乎](https://www.zhihu.com/question/25074942)
    - [无聊的逻辑学：周延性 - 知乎](https://zhuanlan.zhihu.com/p/117582109)
  - 直言命题？
    - 量词（quantifier）+主词（subject term）+联词（copula）+谓词（predicate term）
    - 量词只有“所有”和“有的”两种，“所有”又叫全称量词，“有的”则叫特称量词
    - 联词只有“是”和“不是”两种，“是”表示肯定，“不是”表示否定
    - A、E、I、O 才分别表示全称肯定、全称否定、特称肯定、特称否定
    - S 和 P，也就是主项和谓项的简称，它们俩则有无数种。毕竟，世界上的范畴也有无数种，而 S 和 P 都指某个范畴
    - [无聊的逻辑学：直言命题 - 知乎](https://zhuanlan.zhihu.com/p/116122333)
    - [欧拉图 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E6%AC%A7%E6%8B%89%E5%9B%BE)
    - [【连载】文恩图：最直观的论证工具 - 简书](https://www.jianshu.com/p/cf6f767bcd10)
  - 直言命题的文恩图如何理解？
    - [如何理解直言命题的文恩图？ - 知乎](https://www.zhihu.com/question/491144352)
    - [文恩图怎样表示两个特称前提不能得结论？ - 知乎](https://www.zhihu.com/question/22488704)
    - [文恩图检验三段论_如何用文恩图来判断下列三段论是否有效？_三人行教育网_www.3rxing.org](https://www.3rxing.org/question/3d1cbcf043250356588.html)
  - 肯定前件和肯定后件
    - [肯定前件和肯定后件什么意思？ - 知乎](https://www.zhihu.com/question/53427672)
  - 命题是啥？
    - [p→q = 非 p 或 q 的逻辑涵义如何解读 ？ - 知乎](https://www.zhihu.com/question/28722331)
    - [數學命題 p q 是什麼意思，數學中 p q 和 p q 是什麼意思？](https://www.stdans.com/a/202103/489879.html)