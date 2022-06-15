# Promise
## Promise 是一个对象，从它可以获取异步操作的消息
1. 两个特点
- 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败)
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果

2. 缺点
- 无法取消Promise，一旦新建它就会立即执行，无法中途取消
- 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
- pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

## Promise.prototype
#### Promise.prototype.then()
- resolve() 回调之后的产物，即 已成功 状态下的回调函数
#### Promise.prototype.catch()
- reject() 回调之后的产物, 即 失败 状态下的回调函数
#### Promise.prototype.finally()
- 无论返回结果成功或失败, 都会执行的回调函数

## 其他应用
#### Promise.all()
均为多个 Promise 实例，包装成一个新的 Promise 实例,所有请求状态都成功,结果才成功, 一个失败, 最终结果就失败

```javascript
const dataList = Promise.all([postData1(),postData2(),postData3()])
```

- 场景: 获取语文, 数学, 英语三个接口, 计算总分数, 全部获取成功, 才能计算总分数, 一个失败, 则走catch()

#### Promise.race()
  一个改变状态, 就取这个状态

```javascript
const dataList = Promise.race([postData1(),postData2(),postData3()])

const dataList2 = Promise.race([
  postData1(),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);
```
- 场景: 在Promise实例中，放入一个延时器函数setTimeout ，可以通过它来设置这个接口的，相当于 postData1() 必须在5秒内完成，否则会直接失败

#### Promise.any()
 只要参数实例有一个成功，包装实例就会变成成功状态；只有当所有参数实例都失败，包装实例才会变成失败状态

#### Promise.allSettled()
 只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，最终包装成一个数组返回。并且它无论参数实例是成功或失败，始终只会走 .then() ，没有 .catch() ，成功之后返回的结果如下所示
 
```javascript
 [
   { status: 'fulfilled', value: 42 },
   { status: 'rejected', reason: -1 }
]
```