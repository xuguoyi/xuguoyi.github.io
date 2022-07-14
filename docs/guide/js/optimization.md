# 性能优化
主要分网络层面和渲染层面，可扩展内容太多，本篇简单介绍大致分类及原理

## 网络层面
让资源体积更小加载更快

### 构建策略
基于构建工具： Webpack, Rollup, Gulp等，减少打包时间，减少打包体积

### 图像策略
- 选择正确图像类型： JPG, PNG, SVG, WebP, Base64，
- 图像压缩： 

### 分发策略
CDN: 内容分发网络, 指一组分布在各地存储数据副本并可根据就近原则满足数据请求的服务器。
- 其核心特征是缓存和回源，缓存是把资源复制到CDN服务器里，回源是资源过期/不存在就向上层服务器请求并复制到CDN服务器里。

### 缓存策略
![Image text](../../assets/js/2.png)

### 加载优化
#### 减少http请求
浏览器能够并行发出请求，但是每次并行发出请求的个数是有限制的，以chrome为例：
- 同一域名下，同一GET请求的并发数是1，也就是说上一个请求结束，才会执行下一个请求，否则置入队列等待发送；
- 同一域名下，不同GET/POST请求的并发数量是6。当发送的请求数量达到6个，并且都没有得到响应时，后面的请求会置入队列等待发送。

所以资源请求数过多肯定比请求数少更耗时，直接影响网页的加载速度；

#### 减少http数据请求大小
- 代码压缩
- 服务器开启gzip压缩
- 减少携带cookie

#### 避免重定向

#### http2.0
- 多路复用，在浏览器可并行发送 N 条请求。
- 首部压缩，更小的负载体积。
- 请求优先级，更快的关键请求

#### 异步加载第三方资源

#### 压缩文件
压缩代码，压缩图像体积，雪碧图等

#### 首屏体验
预解析，预加载，预渲染，懒加载，懒执行

## 渲染层面
### CSS
- 避免多层嵌套
- 使用更具体的选择器（id>class>标签>通配）

### DOM
- 避免DOM操作
- 缓存DOM计算属性

### 阻塞策略
- defer: 会在 HTML 解析完成后，按照脚本出现的次序再顺序执行
- async: 下载完成就立即开始执行，同时阻塞页面解析，不保证脚本间的执行顺序。
```html
- 脚本与DOM/其它脚本的依赖关系很强：对<script>设置defer
- 脚本与DOM/其它脚本的依赖关系不强：对<script>设置async
```

### 优化动画
- 优先使用css动画
- 合理开启GPU加速
- 合理使用canvas动画
- 合理使用requestAnimationFrame代替setTimeout

### 回流和重绘
- 浏览器重新渲染部分或全部文档的过程称为回流。
- 当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

导致回流的操作：
- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除可见的DOM元素
- 激活CSS伪类（例如：:hover）
- 查询某些属性或调用某些方法

> 回流必将引起重绘，重绘不一定会引起回流。

#### 如何避免
CSS
- 避免使用table布局。
- 尽可能在DOM树的最末端改变class。
- 避免设置多层内联样式。
- 将动画效果应用到position属性为absolute或fixed的元素上。
- 避免使用CSS表达式（例如：calc()）。

JS
- 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
- 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
- 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

### 优化高频事件：节流和防抖
防抖: 每次触发事件都重置定时器
```javascript
const debounce = function(fn, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, delay)
    }
}
```

节流: 定时器到时间后再清空定时器
```javascript
const throttle = function(fn, delay) {
    let timer = null;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.call(this, ...args);
            }, delay)
        }
    }
}
```

### 事件委托
子元素委托它们的父级代为执行事件
```javascript
<ul id="eUl">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>

const eUl = document.getElementById('eUl');
eUl.addEventListener('click', (e) => {
  console.log(e.target.innerHTML)
})
```