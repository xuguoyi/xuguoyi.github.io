# 数据类型
8种数据类型：undefined， null, Boolean, String, Number, Object, Symbol, BigInt

#### Number
- 分整数和浮点数

##### NaN
- 任何NaN的操作, 都会返回NaN
- NaN 不等于任何值, 包括NaN本身
```javascript
NaN === NaN   // false
```

##### 数值转换
1. Number(): 可用于任何数据类型
2. parseInt(): 字符串转换为数字
3. parseFloat(): 字符串转换为数字

#### null
- 表示空对象指针, typeof检测null返回'object'

#### undefined
- 表示不存在该值的定义

#### Symbol
创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。

#### BigInt
是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

## 原始数据类型和引用数据类型
- 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
- 堆：引用数据类型（对象、数组和函数）

#### 两种类型的区别在于存储位置不同
- 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：
- 在数据结构中，栈中数据的存取方式为先进后出。
- 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

在操作系统中，内存被分为栈区和堆区：
- 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。 
- 堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。


## null和undefined
#### 相同点：
```javascript
// 1. == 运算
undefined == null  // true
// 2. 转换Boolean的都是false
Boolean(undefined)  //false
Boolean(null) //false
```
#### 不同点：
```javascript
// === 运算
undefined === null  // false
// 转换为Number的类型值不同
Number(undefined)  // NaN
Number(null)  // 0
// 类型不同
typeof null   // 'undefined'
typeof undefined   // 'undefined'
```

## 数据类型的检测
#### typeof: 
- 只能检测出基本数据类型(除null)和function, 其余均返回'object'

```javascript
    typeof 1    // 'number'
    typeof '1'  // 'string'
    typeof undefined    // 'undefined'
    typeof true         // 'boolean'
    typeof Symbol()     // 'symbol'
    
    typeof null     // 'object'
    typeof []   // 'object'
    typeof {}   // 'object'
    typeof console  // 'object'
    typeof function() {}  // 'function'
```

#### instanceof: 
- 内部机制：判断在其原型链中能否找到该类型的原型
- 用来判断A是否是B的实例对象或者B子类的实例对象
- 可以准确地判断复杂引用数据类型，但不能正确判断基础数据类型

```javascript
    [] instanceof Array; //true
    {} instanceof Object;//true
    new Date() instanceof Date;//true
```

#### constructor
- constructor在其对应对象的原型下面，是自动生成的。当我们写一个构造函数的时候，程序会自动添加：构造函数名.prototype.constructor = 构造函数名
- null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断

```javascript
  var num = 123;
  alert(num.constructor == Number);//true
  var nul = null;
  alert(nul.constructor == Object);//报错
  var und = undefined;
  alert(und.constructor == Object);//报错
  var oDate = new Date();
  alert(oDate.constructor == Date);//true
  var reg = /a/;
  alert(reg.constructor == RegExp);//true
  var fun = function () { };
  alert(fun.constructor == Function);//true
  var error = new Error();
  alert(error.constructor == Error);//true
```
> 函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object

#### Object.prototype.toString.call()
```javascript
    Object.prototype.toString.call(1)  // '[object Number]'
    Object.prototype.toString.call(null)  // '[object Null]'
    Object.prototype.toString.call('1')  // '[object String]'
    Object.prototype.toString.call(undefined)  // '[object Undefined]'
    Object.prototype.toString.call(true)  // '[object Boolean]'

    let date = new Date();
    Object.prototype.toString.call(date)  // '[object Date]'

    let arr = [1,2,3];
    Object.prototype.toString.call(arr)  // '[object Array]'

    function fn() { console.log('function') };
    Object.prototype.toString.call(fn)  // '[object Function]'
```

