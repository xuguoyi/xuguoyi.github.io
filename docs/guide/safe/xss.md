# XSS
## 什么是XSS
Cross-Site Scripting， 跨站脚本攻击, 侵入者将恶意脚本植入页面窃取用户信息等

## 原理
页面渲染的数据中包含可运行的脚本

## 为什么不是CSS
区别于层叠样式表CSS(Cascade Style Sheet)

## 注入点
```html
// HTML节点内容
<div><script>alert(1)</script></div>

// DOM属性注入
<img src='1.png' onerror='alert(1)'/>

// js代码
<script>alert(1)</script>

//富文本: 是html标签, 文字, 以及样式的集合, 很容易实现html节点内容注入和dom属性注入, 有被攻击的风险
```

## 类型
### 非存储型
url参数注入脚本代码或链接，引导用户点击
### 存储型
通过类似于留言板或者评论这样的输入框写入，存储到目标网站的数据库中，在其它用户访问该页面时，这个恶意的脚本就会执行

## 防范手段
### 服务端设置HEAD
```javascript
//  现在主流浏览器都支持，并且默认都开启了XSS保护，设置为0可以关闭
res.set('X-XSS-Protection', 1)
```

### CSP
内容安全策略Content Security Policy，是一个附加的安全层
```javscript
// 在http Header设置
// 只允许加载本站资源
​Content-Security-Policy: default-src 'self'
// 只允许加载 HTTPS 协议图片
​Content-Security-Policy: img-src https://*
// 不允许加载任何来源框架
​Content-Security-Policy: child-src 'none'

// 在HTML上使用
<meta http-equiv='content-security-policy' content='策略'/>
```

### HTTP-only Cookie
服务端设置httpOnly, 被设置了httpOnly的cookie字段无法通过js获取, 从而降低XSS攻击时用户凭据隐私泄露的风险
```javascript
// 即使被XSS攻击，但是可以保障最重要的用户信息不被窃取
​response.addHeader("Set-Cookie", "uid=112; Path=/; HttpOnly")
```

### 对输出进行html编码
- 使用HTML转义
- 避免使用innerHTML, document.write, outerHTML, eval等, 使用安全性更高的textContent, setAttribute等做替代

