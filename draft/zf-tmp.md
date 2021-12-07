## 9. var 和 let

- JS 中作用域有：全局作用域、函数作用域。没有块作用域的概念。ECMAScript 6（简称 ES6) 中新增了块级作用域
- 块作用域由 `{ }` 包括，`if`语句和`for`语句里面的`{ }`也属于块作用域

### 9.1 ES5 问题

#### 9.1.1 全局变量

- 在 if 或者 for 循环中声明的变量会变成全局变量

```js
for(var i=0;i<=5;i++){
    console.log("hello");
}
console.log(i); //5
```

#### 9.1.2 内层变量可能会覆盖外层变量

```js
var a = 1;
function fn() {
  console.log(a);
  if (false) {
      var a = 2;
  }
}
fn(); //undefined
```

> `var a` 会变量提升

### 9.2 let

- 允许块级作用域任意嵌套
- 外层作用域无法读取内层作用域的变量
- 内层作用域可以定义外层作用域的同名变量
- 函数本身的作用域在其所在的块级作用域之内

```js
'use strict'
function fn() {
    console.log("out");
}
(function () {
    if (false) {
        function fn() {
            console.log("in");
        }
    }
    fn(); // out
}());
```

> 去掉 `'use strict'` 的话，`Uncaught TypeError: fn is not a function`，因为 `fn` 是 `undefined` 值 -> 疑惑：为啥 `fn` 是默认就一个 `undefined` 值呢？难道 `fn` 已经提升了？可如果提升了，难道 `fn` 不是一个函数值吗？

### 9.3 var&let&const

- var 定义的变量没有块的概念，可以跨块访问，不能跨函数访问，有变量提升，可重复声明
- let 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明
- let 声明的变量只在块级作用域内有效，不存在变量提升，而是**绑定**在暂时性死区
- 或者说 let 变量提升了，但是在 let 声明变量前不能使用该变量，这特性叫暂时性死区 (temporal dead zone)
- 如果有重复变量`let`会在编译阶段报错

> `let` 声明的变量是提升了，只是完成了变量的创建阶段罢了！你不能在还未初始化它之前使用它！

### 9.3.1 暂时性死区

```js
// 不存在变量提升
'use strict';
function func(){
    console.log(i);
    let i;
};
func(); // 报错：Uncaught ReferenceError: Cannot access 'i' before initialization
```

### 9.3.2 全局变量

- ES5 声明变量只有两种方式：var 和 function
- ES6 有`let、const、import、class`再加上 ES5 的`var、function`共有六种声明变量的方式
- 浏览器环境中顶层对象是 window，Node 中是 global 对象
- ES5 中 顶层对象的属性等价于全局变量
- ES6 中`var、function`声明的全局变量，依然是顶层对象的属性；`let、const、class`声明的全局变量不属于顶层对象的属性

> `import` 声明的变量也不属于顶层对象的属性

### 9.3.3 题目

- [严格模式 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

```js
'use strict' 
var a = 1;
console.log(a);//1
{
    console.log(a);// function a() {}
    function a() {
        console.log(1);
    }
}
console.log(a);// 1
```

非严格模式：

```js
var a = 1;
console.log(a);//1
{
    console.log(a);// function a() {}
    function a() {
        console.log(1);
    }
}
console.log(a);// function a() {}
```

## 10. this

- 当前函数的 this 是在被调用的时候才能确定的
- 如果当前的执行上下文处于调用栈的栈顶，这个时候变量对象变成了活动对象，THIS 指针才能确定

### 10.0 全局对象

- 全局对象 this 指向本身

```js
var a=1; // 声明绑定变量对象，但在全局环境中，变量对象就是全局对象
this.b=2; // this 绑定全局对象
c=3; // 赋值操作 隐式绑定
```

### 10.1 用点调用

- 在一个函数上下文中，this 由函数的调用者提供，由调用函数的方式来决定指向
- 如果是函数执行，如果前面有点，那么点前面是谁`this`就是谁

```js
let obj = {
    getName(){
        console.log(this);
    }
};
obj.getName();
```

### 10.2 直接调用

- 如果没有`.` ,this 就是 window（严格模式下是 undefined), 自执行函数中的 this 一般都是 window

```js
let obj = {
    getName(){
        console.log(this);
    }
};
let getName = obj.getName;
getName();
```

### 10.3 绑定事件

- 给元素绑定事件的时候，绑定的方法中的 this 一般是元素本身

```js
container.addEventListener('click',function(){
    console.log(this);
});
```

### 10.4 箭头函数

- 箭头函数没有自己的 this
- 也没有 prototype
- 也没有 arguments
- 无法创建箭头函数的实例

```js
let fn = () => {
    console.log(this);
    console.log(arguments);//Uncaught ReferenceError: arguments is not defined
}
console.log(fn.prototype);//undefined
fn();
new fn();//Uncaught TypeError: fn is not a constructor
```

### 10.5 构造函数

- 构造函数中的 THIS 是当前类的实例

```js
function fn(){

}
let obj = new fn();
```

### 10.6 call/apply/bind

- call/apply/bind 可以改变函数中 this 的指向
- 第一个参数是改变 this 指向（非严格模式下，传递 null/undefined 指向也是 window)
- call 参数是依次传递，apply 是以数组的方式传递

```js
!function (proto) {
    function getContext(context) {
        context = context || window;
        var type = typeof context;
        if (['number', 'string', 'boolean', 'null'].includes(type)) {
            context = new context.constructor(context);
        }
        return context;
    }
    function call(context, ...args) {
        context = getContext(context);
        context._fn = this;
        let result = context._fn(...args);
        delete context._fn;
        return result;
    }
    function apply(context, args) {
        context = getContext(context);
        context._fn = this;
        let result = context._fn(...args);
        delete context._fn;
        return result;
    }

    function bind(context, ...bindArgs) {
        return (...args) => this.call(context, ...bindArgs, ...args);
    }
    proto.call = call;
    proto.apply = apply;
    proto.bind = bind;
}(Function.prototype)
```

## 11. 面向对象

- 对象为无序属性的集合，其属性可以包含基本值、对象和函数
- [Inheritance_and_the_prototype_chain](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### 11.1 原型链

- [jsinstanceof](https://www.ibm.com/developerworks/cn/web/1306_jiangjj_jsinstanceof/figure1.jpg)

#### 11.1.1 一切皆对象

- 对象就是一些属性的集合
- 方法也是一种属性
- 一切（引用类型）都是对象，对象是属性的集合
- 函数和数组也是对象
- 为什么 `typeof function='function'`

##### 11.1.1.1 typeof

- 检测数据类型 `typeof`返回的都是字符串
- 基本数据类型 number string boolean undefined symbol
- 引用类型 `null {} [] /&$/ Date => object`

```js
console.log(typeof a);    // undefined
console.log(typeof 1);   // number
console.log(typeof 'zhufeng'); // string
console.log(typeof true);  // boolean
console.log(typeof Symbol('a'));  // symbol

console.log(typeof function () { });  //function

console.log(typeof [1, 2, 3]);  //object
console.log(typeof { name: 'zhufeng' });  //object
console.log(typeof null);  //object
console.log(typeof new Number(1));  //object
```

#### 11.1.2 函数

- 对象是通过函数创建的
- 批量生产对象的函数`Object`
- 实现私有和公有属性的封装

```js
let obj = new Object();
obj.name='zhufeng';
obj.age = 10;
```

#### 11.1.3 隐式原型

##### 11.1.3.1 proto

- 每个对象都有一个`__proto__`属性，指向创建该对象的函数的`prototype`
- `Object.prototype.__proto__`指向的是`null`

 ![image-20210518155721567](https://gitee.com/ppambler/blog-images/raw/master/fe/20210518155721.png)

![object_prototypes](https://gitee.com/ppambler/blog-images/raw/master/fe/20210518155916.png)

> `o1` 与 `Object`是透过什么关联起来的？

##### 11.1.3.2 自定义函数的 prototype

-  自定义函数的`prototype`的`__proto__`指向的就是`Object.prototype`

![customefuntionprototype](https://gitee.com/ppambler/blog-images/raw/master/fe/20210518160304.png)

##### 11.1.3.3 自定义函数

- 自定义函数`Foo.__proto__`指向`Function.prototype`
- `Function`的`prototype`和`__proto__`都指向`Function.prototype`

```js
Function.__proto__ === Function.prototype // true -> 都是函数对象
let add = new Function('a','b','return a+b');
console.log(add(1,2));
```

> 所有构造函数的 `__proto__` 都指向 `Function.prototype`

![2functionprotype](https://gitee.com/ppambler/blog-images/raw/master/fe/20210518161117.png)

![3functionprotype](https://gitee.com/ppambler/blog-images/raw/master/fe/20210518161152.png)

#### 11.1.4 instanceof

- instanceof 运算符的第一个参数是一个对象，第二个参数一般是一个函数
- instanceof 的判断规则是：沿着对象的`__proto__`这条链来向上查找，如果能找到函数的`prototype`则返回 true, 否则返回 false

![prototypechain](https://gitee.com/ppambler/blog-images/raw/master/fe/20210518161605.jpeg)

### 11.2 批量创建对象

- 通过`new`来调用一个函数，这个函数就成为了构造函数，构造函数里可以对实例对象的私有属性赋值
- 每个函数会有一个`prototype`属性，此原型对象上存放所有实例的公有方法
- 若 new 的构造函数自己返回引用值，则以自己返回的为主，否则 返回创建的实例
- [create](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

```js
function Person(name) {
    // 自有属性，也叫私有属性，而 private 类型的属性，叫为不可被外界访问的属性比较恰当
    // 私有 即 只有自己这个实例能访问的属性
    this.name = name;
}
// 公有属性
Person.prototype.getName = function () {
    console.log(this.name);
}
let person = new Person('zhufeng');
person.getName();
```

模拟 `new` 的操作：

```js
Object.create = function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
};
function _new(clazz, ...args) {
    let _this = Object.create(clazz.prototype);
    let result = clazz.call(_this, ...args);
    if ((result != null && typeof result === 'object') || typeof result === 'function') {
        return result;
    }
    return _this;
}
```

### 11.3 继承

```ts
class Father {
  static staticFatherName = 'FatherName';
  static staticGetFatherName = function () {
    console.log(1, Father.staticFatherName);
  };
  constructor(public name:any) {
    this.name = name;
  }
  getName() {
    console.log(2, this.name);
  }
}
class Child extends Father {
  static staticChildName = 'ChildName';
  static staticGetChildName = function () {
    console.log(3, Child.staticChildName);
  };
  constructor(public name:any, public age:any) {
    super(name);
    this.age = age;
  }
  getAge() {
    console.log(4, this.age);
  }
}
let child = new Child('zhufeng', 10);
child.getName();
child.getAge();
Child.staticGetFatherName();
Child.staticGetChildName();
```

```txt
[LOG]: 2,  "zhufeng" 
[LOG]: 4,  10 
[LOG]: 1,  "FatherName" 
[LOG]: 3,  "ChildName" 
```

```js
var _extends = (function () {
    var extendStatics = function (Child, Father) {
        return Object.setPrototypeOf(Child, Father);
    }
    return function (Child, Father) {
        extendStatics(Child, Father);
        function Temp() {
            this.constructor = Child;
        }
        Temp.prototype = Father.prototype;
        Child.prototype = new Temp();
    };
})();

var Father = (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.getName = function () {
        console.log(this.name);
    };
    Father.staticFatherName = "FatherName";
    Father.staticGetFatherName = function () {
        console.log(Father.staticFatherName);
    };
    return Father;
}());
//_super 父类构造函数
var Child = (function (_super) {
    _extends(Child, _super);

    function Child(name, age) {
        _super.call(this, name);//继承父类的实例私有属性
        this.age = age;
        return this;
    }
    Child.prototype.getAge = function () {
        console.log(this.age);
    };
    Child.staticChildName = "ChildName";
    Child.staticGetChildName = function () {
        console.log(Child.staticChildName);
    };
    return Child;
}(Father));

let child = new Child('zhufeng', 10);
console.log(child);

child.getName();
child.getAge();
Child.staticGetFatherName();
Child.staticGetChildName();
```

```js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.getName = function () {
        console.log(this.name);
    };
    Father.staticFatherName = "FatherName";
    Father.staticGetFatherName = function () {
        console.log(Father.staticFatherName);
    };
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Child.prototype.getAge = function () {
        console.log(this.age);
    };
    Child.staticChildName = "ChildName";
    Child.staticGetChildName = function () {
        console.log(Child.staticChildName);
    };
    return Child;
}(Father));
var child = new Child('zhufeng', 10);
child.getName();
child.getAge();
Child.staticGetFatherName();
Child.staticGetChildName();
```

#### 11.3.6 原型链面试题

- [Operator_Precedence](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```js
function Foo() {
  getName = function () {
      console.log(1);
  }
  return this;
}
Foo.getName = function () {
  console.log(2);
}
Foo.prototype.getName = function () {
  console.log(3);
}
var getName = function () {
  console.log(4);
}
function getName() {
  console.log(5);
}
Foo.getName();
getName();
Foo().getName();
getName();//1
new Foo.getName();
new Foo().getName();
new new Foo().getName();
// 2 4 1 1 2 3 3
```

#### 11.3.7 异步面试题

```js
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')
```

```tex
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

## 12. ES6

- 词法环境 VS 静态作用域
- 变量环境 (variableEnvironment) 和词法环境 (Lexical Environment)
- 闭包

### 12.1 词法环境

- let 原理

```js
function fn() {
    var a = 1;
    let b = 2;
    {
        let b = 3;
        var c = 4;
        let d = 5;
        //console.log(a, b, c, d);//TODO
    }
    {
        let b = 6;
        let d = 7;
        //console.log(a, b, c, d);
    }
}
fn();

/**
 * 1.global 编译阶段
 */

let globalEC = {
    this: globalThis,
    outer: null,//外部的执行上下文，词法作用域就是静态作用域，就是指作用域是由代码中函数声明的位置来决定的
    variableEnvironment: {
        fn() { console.log(a, b, c, d) }
    },
    lexicalEnvironment: {}
}

/**
 * 2.fn 编译阶段
 */
let fnEC = {
    this: globalThis,
    outer: globalEC,
    variableEnvironment: { a: undefined, c: undefined },
    lexicalEnvironment: [{ b: undefined }]
}
/**
 * 3. 编译代码块 1
 */
fnEC.variableEnvironment.a = 1;
fnEC.lexicalEnvironment.b = 2;
fnEC.lexicalEnvironment.push({
    b: undefined,
    d: undefined
});
/**
 * 4. 执行代码块 1
 */

fnEC.lexicalEnvironment[1].b = 3;
fnEC.variableEnvironment.c = 4;
fnEC.lexicalEnvironment[1].d = 5;

console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC), getValue('d', fnEC));
function getValue(name, ec) {
    for (let i = ec.lexicalEnvironment.length - 1; i >= 0; i--) {
        if (name in ec.lexicalEnvironment[i]) {
            return ec.lexicalEnvironment[i][name];
        }
    }
    let currentVariableEnvironment = ec.variableEnvironment;
    while (currentVariableEnvironment) {
        if (name in currentVariableEnvironment) {
            return currentVariableEnvironment[name];
        }
        currentVariableEnvironment = currentVariableEnvironment.outer;
    }
    return null;
}

/**
 * 5. 编译代码块 2
 */
fnEC.lexicalEnvironment.pop();
fnEC.lexicalEnvironment.push({
    b: undefined,
    d: undefined
});
/**
 * 5. 执行代码块 2
 */
fnEC.lexicalEnvironment[1].b = 6;
fnEC.lexicalEnvironment[1].d = 7;
console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC), getValue('d', fnEC));
```

> 是边执行，边编译吗？

### 12.2 静态作用域

```js
/* let name = 'zhufeng'
{
    //ReferenceError: Cannot access 'name' before initialization
    console.log(name)
    let name = 'jiagou'
} */

function two() {
    console.log(a);
}
function one() {
    var a = 2;
    two();
}
var a = 1;
one();

let globalEC = {
    a: 1,
    one() { },
    two() { }
}
let twoEC = {
    this: globalThis,
    outer: globalEC,
    variableEnvironment: { a: 1, two() { console.log(a) } } //出生的地方
}
var twoEc = { outer: globalEC };
console.log(twoEC.outer.a);
```

### 12.3 闭包

```js
function one() {
    var a = 1;
    var name = 'one';
    function two() {
        var b = 2;
        var name = 'two';
        function three() {
            var c = 3;
            var name = 'three';
            return () => console.log(a, b, c);

        }
        return three();
    }
    return two();
}
var fn = one();
fn();
let globalEC = {
    this: globalThis,
    outer: null,
    variableEnvironment: { one() { } }
}
let oneEC = {
    this: globalThis,
    outer: globalEC.variableEnvironment,
    variableEnvironment: { a: 1, two() { }, name: 'one' }
}
let twoEC = {
    this: globalThis,
    outer: oneEC.variableEnvironment,
    variableEnvironment: { b: 2, three() { }, name: 'two' }
}
let threeEC = {
    this: globalThis,
    outer: twoEC.variableEnvironment,
    variableEnvironment: { c: 3, name: 'three' }
}
let fnEC = {
    this: globalThis,
    outer: globalEC,
    //Closure(three) Closure(two) Closure(one)
    closures: [{ a: 1 }, { b: 2 }, { c: 3 }],
    variableEnvironment: { c: 3 }
}
console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC));

function getValue(name, ec) {
    for (let i = ec.closures.length - 1; i >= 0; i--) {
        if (name in ec.closures[i]) {
            return ec.closures[i][name];
        }
    }
    let currentVariableEnvironment = ec.variableEnvironment;
    while (currentVariableEnvironment) {
        if (name in currentVariableEnvironment) {
            return currentVariableEnvironment[name];
        }
        currentVariableEnvironment = currentVariableEnvironment.outer;
    }
    return null;
}
```

> 这就是闭包的本质吗？
