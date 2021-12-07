(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{579:function(t,s,e){"use strict";e.r(s);var a=e(12),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("原文："),e("a",{attrs:{href:"https://juejin.cn/post/6844903597436747784",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 深入系列４：组件的生命周期"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("React 深入系列，深入讲解了 React 中的重点概念、特性和模式等，旨在帮助大家加深对 React 的理解，以及在项目中更加灵活地使用 React。")])]),t._v(" "),e("p",[t._v("组件是构建 React 应用的基本单位，组件需要具备数据获取、业务逻辑处理、以及 UI 呈现的能力，而这些能力是要依赖于组件不同的生命周期方法的。组件的生命周期分为 3 个阶段：挂载阶段、更新阶段、卸载阶段，每个阶段都包含相应的生命周期方法。因为是深入系列文章，本文不会仔细介绍每个生命周期方法的使用，而是会重点讲解在使用组件生命周期时，经常遇到的疑问和错误使用方式。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ppambler/blog-images/raw/master/images/image-20210311180038602.png",alt:"image-20210311180038602"}})]),t._v(" "),e("h2",{attrs:{id:"服务器数据请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器数据请求"}},[t._v("#")]),t._v(" 服务器数据请求")]),t._v(" "),e("p",[t._v("初学者在使用 React 时，常常不知道何时向服务器发送请求，获取组件所需数据。对于组件所需的初始数据，最合适的地方，是在 "),e("code",[t._v("componentDidMount")]),t._v(" 方法中，进行数据请求，这个时候，组件完成挂载，其代表的 DOM 已经挂载到页面的 DOM 树上，即使获取到的数据需要直接操作 DOM 节点，这个时候也是绝对安全的。有些人还习惯在 "),e("code",[t._v("constructor")]),t._v(" 或者 "),e("code",[t._v("componentWillMount")]),t._v(" 中，进行数据请求，认为这样可以更快的获取到数据，但它们相比 "),e("code",[t._v("componentDidMount")]),t._v(" 的执行时间，提前的时间实在是太微乎其微了。另外，当进行服务器渲染时（SSR)，"),e("code",[t._v("componentWillMount")]),t._v(" 是会被调用两次的，一次在服务器端，一次在客户端，这时候就会导致额外的请求发生。")]),t._v(" "),e("blockquote",[e("p",[t._v("在 "),e("code",[t._v("componentDidMount")]),t._v(" 这个钩子里边使用能力 -> 发送请求获取数据")])]),t._v(" "),e("p",[t._v("组件进行数据请求的另一种场景：由父组件的更新导致组件的 "),e("code",[t._v("props")]),t._v(" 发生变化，如果组件的数据请求依赖 "),e("code",[t._v("props")]),t._v("，组件就需要重新进行数据请求。例如，新闻详情组件 NewsDetail，在获取新闻详情数据时，需要传递新闻的 "),e("code",[t._v("id")]),t._v(" 作为参数给服务器端，当 NewsDetail 已经处于挂载状态时，如果点击其他新闻，NewsDetail 的 componentDidMount 并不会重新调用，因而 componentDidMount 中进行新闻详情数据请求的方法也不会再次执行。这时候，应该在 "),e("code",[t._v("componentWillReceiveProps")]),t._v(" 中，进行数据请求：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillReceiveProps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" nextProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newsId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchNewsDetailById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newsId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据最新的新闻 id，请求新闻详情数据")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("如果进行数据请求的时机是由页面上的交互行为触发的，例如，点击查询按钮后，查询数据，这时只需要在查询按钮的事件监听函数中，执行数据请求即可，这种情况一般是不会有疑问的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ppambler/blog-images/raw/master/images/image-20210311181522037.png",alt:"image-20210311181522037"}})]),t._v(" "),e("h2",{attrs:{id:"更新阶段方法的调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段方法的调用"}},[t._v("#")]),t._v(" 更新阶段方法的调用")]),t._v(" "),e("p",[t._v("组件的更新是组件生命周期中最复杂的阶段，也是涉及到最多生命周期方法的阶段。")]),t._v(" "),e("p",[t._v("正常情况下，当组件发生更新时，组件的生命周期方法的调用顺序如下：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("componentWillReceiveProps "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" shouldComponentUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentWillUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" render "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentDidUpdate\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件收到新的 props（props 中的数据并不一定真正发生变化）-> 决定是否需要继续执行更新过程 -> 组件代表的虚拟 DOM 即将更新 -> 组件重新计算出新的虚拟 DOM -> 虚拟 DOM 对应的真实 DOM 更新到真实 DOM 树中")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("父组件发生更新或组件自身调用 setState，都会导致组件进行更新操作。父组件发生更新导致的组件更新，生命周期方法的调用情况同上所述。如果是组件自身调用 setState，导致的组件更新，其生命周期方法的调用情况如下：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("shouldComponentUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentWillUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" render "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentDidUpdate\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("可见，这种情况下 componentWillReceiveProps 并不会被调用。")]),t._v(" "),e("p",[t._v("当组件的 shouldComponentUpdate 返回 false 时，组件会停止更新过程，这时候生命周期方法的调用顺序如下：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("componentWillReceiveProps "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" shouldComponentUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 结束\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("或（组件自身调用 setState，导致的组件更新）：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("shouldComponentUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 结束\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("blockquote",[e("p",[t._v("让组件 UI 更新有两种路径 -> 一种是父组件管控的 "),e("code",[t._v("props")]),t._v(" 更新，另一种则是子组件自己维护的 "),e("code",[t._v("state")]),t._v(" 更新了 -> 前者相较于后者多了一个叫 "),e("code",[t._v("componentWillReceiveProps")]),t._v(" 的钩子，而 "),e("code",[t._v("shouldComponentUpdate")]),t._v("这个钩子决定了我们是否真得要更新 UI？毕竟有时候数据并没有发生变化啊！")])]),t._v(" "),e("h2",{attrs:{id:"setstate-的时机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setstate-的时机"}},[t._v("#")]),t._v(" setState 的时机")]),t._v(" "),e("p",[t._v("组件的生命周期方法众多，哪些方法中可以调用 setState 更新组件状态？哪些方法中不可以呢？")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("可以的方法")])]),t._v(" "),e("p",[t._v("componentWillMount、componentDidMount、componentWillReceiveProps、componentDidUpdate")]),t._v(" "),e("p",[t._v("这里有几个注意点：")]),t._v(" "),e("ol",[e("li",[t._v("componentWillMount 中"),e("strong",[t._v("同步")]),t._v("调用 setState 不会导致组件进行额外的渲染，组件经历的生命周期方法依次是 "),e("code",[t._v("componentWillMount -> render -> componentDidMount")]),t._v("，组件并不会因为 componentWillMount 中的 setState 调用再次进行更新操作。如果是"),e("strong",[t._v("异步")]),t._v("调用 setState，组件是会进行额外的更新操作。不过实际场景中很少在 componentWillMount 中调用 setState，一般可以通过直接在 "),e("code",[t._v("constructor")]),t._v(" 中定义 state 的方式代替。")]),t._v(" "),e("li",[t._v("一般情况下，当调用 setState 后，组件会执行一次更新过程，componentWillReceiveProps 等更新阶段的方法会再次被调用，但如果在 componentWillReceiveProps 中调用 setState，并不会额外导致一次新的更新过程，也就是说，当前的更新过程结束后，componentWillReceiveProps 等更新阶段的方法"),e("strong",[t._v("不会")]),t._v("再被调用一次。（注意，这里仍然指"),e("strong",[t._v("同步")]),t._v("调用 setState，如果是异步调用，则会导致组件再次进行渲染）")]),t._v(" "),e("li",[t._v("componentDidUpdate 中调用 setState 要格外小心，在 setState 前必须有条件判断，只有满足了相应条件，才 setState，否组组件会不断执行更新过程，进入死循环。因为 setState 会导致新一次的组件更新，组件更新完成后，componentDidUpdate 被调用，又继续 setState，死循环就产生了。")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("不可以的方法")])]),t._v(" "),e("p",[t._v("其他生命周期方法都不能调用 setState，主要原因有两个：")]),t._v(" "),e("ol",[e("li",[t._v("产生死循环。例如，shouldComponentUpdate、componentWillUpdate 和 render 中调用 setState，组件本次的更新还没有执行完成，又会进入新一轮的更新，导致不断循环更新，进入死循环。")]),t._v(" "),e("li",[t._v("无意义。componentWillUnmount 调用时，组件即将被卸载，setState 是为了更新组件，在一个即将卸载的组件上更新 state 显然是无意义的。实际上，在 componentWillUnmount 中调用 setState 也是会抛出异常的。")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("你应该在哪个钩子里边使用「更新状态（"),e("code",[t._v("this.setState")]),t._v("）」这个能力？")])]),t._v(" "),e("h2",{attrs:{id:"render-次数-浏览器界面更新次数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render-次数-浏览器界面更新次数"}},[t._v("#")]),t._v(" render 次数 != 浏览器界面更新次数")]),t._v(" "),e("p",[t._v("先看下面的一个例子：")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      bgColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bgColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div style "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("backgroundColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bgColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n        Test\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      bgColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yellow"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br")])]),e("p",[t._v("当我们观察浏览器渲染出的页面时，页面中 Test 所在 div 的背景色，是先显示红色，再变成黄色呢？还是直接就显示为黄色呢？")]),t._v(" "),e("p",[t._v("答案是：直接就显示为黄色！")]),t._v(" "),e("p",[t._v("这个过程中，组件的生命周期方法被调用的顺序如下：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("constructor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentWillMount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" render "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentDidMount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" shouldComponentUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentWillUpdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" render "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" componentDidUpdate\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("组件在挂载完成后，因为 setState 的调用，将立即执行一次更新过程。虽然 render 方法被调用了两次，但这并不会导致浏览器界面更新两次，实际上，两次 DOM 的修改会合并成一次浏览器界面的更新。React 官网介绍 componentDidMount 方法时也有以下说明：")]),t._v(" "),e("blockquote",[e("p",[t._v("Calling "),e("code",[t._v("setState()")]),t._v(" in this method will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the "),e("code",[t._v("render()")]),t._v(" will be called twice in this case, the user won’t see the intermediate state.")])]),t._v(" "),e("p",[t._v("这说明，组件 render 的次数 "),e("strong",[t._v("不一定等于")]),t._v(" 浏览器界面更新次数。虽然 JS 的执行和 DOM 的渲染分别由浏览器不同的线程完成，但 JS 的执行会阻塞 DOM 的渲染，而上面的两次 render 是在一个 JS 事件周期内执行的，所以在两次 render 结束前，浏览器不会更新界面。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ppambler/blog-images/raw/master/images/image-20210311192617215.png",alt:"image-20210311192617215"}})]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("render()")]),t._v("后屏幕不会立即更新 -> 这是 "),e("code",[t._v("componentDidMount")]),t._v(" 的特殊之处吗？ -> 个人理解，"),e("code",[t._v("componentDidMount")]),t._v(" 是挂载阶段的最后一个钩子，显然是需要执行的，这意味着 "),e("code",[t._v("render()")]),t._v("后 JS 代码并咩有结束，所以屏幕立刻更新还不行，接着在"),e("code",[t._v("componentDidMount")]),t._v(" 里边看到需要 "),e("code",[t._v("setState")]),t._v("，意味着要更新组件呗（这不是我们与屏幕交互所产生的更新操作，而且这是在挂载阶段最后来搞的）！ -> 又是一次更新虚拟 DOM -> 屏幕正式开始更新")])]),t._v(" "),e("h2",{attrs:{id:"了解更多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解更多"}},[t._v("#")]),t._v(" 了解更多")]),t._v(" "),e("p",[t._v("➹："),e("a",{attrs:{href:"https://github.com/aooy/blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 event loop 规范探究 javaScript 异步及浏览器更新渲染时机 · Issue #5 · aooy/blog"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("➹："),e("a",{attrs:{href:"https://harttle.land/2017/08/15/browser-render-frame.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的 16ms 渲染帧 - Harttle Land"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);