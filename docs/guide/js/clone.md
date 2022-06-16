# 深浅克隆

## 浅克隆
创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

## 深克隆
将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。

## 赋值
当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。

## 浅拷贝的实现
#### 1. Object.assign()
#### 2. lodash中的_.clone
#### 3. 展开运算符...
#### 4. Array.prototype.concat()
#### 5. Array.prototype.slice()

## 深拷贝的实现
#### 1. JSON.parse(JSON.stringify())

不完全准确
1. 如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式
2. 如果obj里有RegExp(正则表达式的缩写)、Error对象，则序列化的结果将只得到空对象；
3. 如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；
4. 如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
5. JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
6. 如果对象中存在循环引用的情况也无法正确实现深拷贝；

#### 2. lodash中的_.cloneDeep

#### 3. jQuery.extend()方法
```javascript
$.extend(deepCopy, target, object1, [objectN]) //第一个参数为true,就是深拷贝
```

#### 4. 手写递归
```javascript
function deepClone(obj, hash = new WeakMap()) {
  // 如果是null或者undefined就不进行拷贝操作
  if (obj === null) return obj; 
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```
