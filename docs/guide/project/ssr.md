# SSR和CSR

## CSR
Client Side Rendering ，代表的是客户端渲染。

eg: vue，react等框架开发的项目，都是先下载html文档（不是最终的完全的html），然后下载js来执行渲染出页面结果。

```html
<!-- 以react为例，客户端渲染初始化的html一般如下 -->
<!DOCTYPE html>
<html lang="en">
 <head> 
  <title data-react-helmet="true">react app</title> 
  <noscript> 
  </noscript>
 </head>
 <body>
  <noscript>
   You need to enable JavaScript to run this app.
  </noscript> 
  <div id="root"></div>
  <script type="text/javascript" src="/static/js/bundle.js" defer=""></script> 
  <script type="text/javascript" src="/static/js/main.chunk.js" defer=""></script> 
 </body>
</html>

<!-- 可以看出当前页面除了 <div id="root"></div> 元素，没有其他的元素，然后通过加载 bundle.js , main.chunk.js 来执行渲染。整个渲染过程包括，生成DOM节点，注入样式，交互事件绑定，数据获取等等。 -->
```

### 优点
- 前后端分离。前端专注于界面开发，后端专注于api开发，且前端有更多的选择性，可以使用vue，react框架开发，而不需要遵循后端特定的模板。
- 服务器压力变轻了，渲染工作在客户端进行，服务器直接返回不加工的html
- 用户在后续访问操作体验好，（首屏渲染慢）可以将网站做成SPA，可以增量渲染

### 缺点
- 不利于SEO（搜索引擎优化），因为搜索引擎不执行JS相关操作，无法获取渲染后的最终html。
- 首屏渲染时间比较长，因为需要页面执行ajax获取数据来渲染页面，如果请求接口多，不利于首屏渲染

## SSR
Server Side Rendering，代表的是服务端渲染。

SSR输出的是一个渲染完成的html，整个渲染过程是在服务器端进行的。例如传统的JSP，PHP都是服务端渲染

### 优点
- 有利于SEO，由于页面在服务器生成，搜索引擎直接抓取到最终页面结果。
- 有利于首屏渲染，html所需要的数据都在服务器处理好，直接生成html，首屏渲染时间变短。

### 缺点
- 占用服务器资源，渲染工作都在服务端渲染
- 用户体验不好，每次跳转到新页面都需要在重新服务端渲染整个页面，不能只渲染可变区域
