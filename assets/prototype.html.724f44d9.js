import{_ as n,o as s,c as a,a as e}from"./app.485b96fd.js";var t="/assets/1.892ba640.jpg";const p={},o=e(`<h1 id="\u539F\u578B-\u6784\u9020\u51FD\u6570-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B-\u6784\u9020\u51FD\u6570-\u5B9E\u4F8B" aria-hidden="true">#</a> \u539F\u578B\uFF0C\u6784\u9020\u51FD\u6570\uFF0C\u5B9E\u4F8B</h1><h2 id="\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA\u5BF9\u8C61</h2><ol><li>new Object()</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5BF9\u8C61\u5B57\u9762\u91CF</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u6784\u9020\u51FD\u6570Constructor</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">play</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u6253\u7403\u8D3C\u5389\u5BB3&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> James <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;\u8A79\u59C6\u65AF&#39;</span>\uFF0C<span class="token number">37</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h2><ul><li>\u6784\u9020\u51FD\u6570\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u65F6\uFF0C\u51FD\u6570\u540D\u9996\u5B57\u6BCD\u5927\u5199</li><li>\u6784\u9020\u51FD\u6570\u8981\u548Cnew\u4E00\u8D77\u7528\u624D\u6709\u610F\u4E49</li></ul><h2 id="new\u5728\u6267\u884C\u65F6\u505A\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#new\u5728\u6267\u884C\u65F6\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> new\u5728\u6267\u884C\u65F6\u505A\u4E86\u4EC0\u4E48</h2><ol><li>\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u5BF9\u8C61</li><li>\u8BBE\u7F6E\u539F\u578B\uFF0C\u5C06\u5BF9\u8C61\u7684\u539F\u578B\u8BBE\u7F6E\u4E3A\u51FD\u6570\u7684prototype\u5BF9\u8C61</li><li>\u8BA9this\u6307\u5411\u8FD9\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u6267\u884C\u6784\u9020\u51FD\u6570\u91CC\u9762\u7684\u4EE3\u7801\uFF0C\u7ED9\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5</li><li>\u5224\u65AD\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u503C\u7C7B\u578B\uFF0C\u8FD4\u56DE\u521B\u5EFA\u7684\u5BF9\u8C61\u3002\u5982\u679C\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5BF9\u8C61\uFF08\u6240\u4EE5\u6784\u9020\u51FD\u6570\u91CC\u9762\u4E0D\u8981return\uFF09</li></ol><h2 id="\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B" aria-hidden="true">#</a> \u539F\u578B</h2><ul><li>\u6BCF\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u90FD\u6709\u4E00\u4E2Aprototype\u5C5E\u6027\uFF0C\u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\u3002</li><li>\u8FD9\u91CC\u7684prototype\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u6240\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u88AB\u6784\u9020\u51FD\u6570\u6240\u62E5\u6709\u3002</li></ul><h2 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h2><ol><li>\u5F53\u8BBF\u95EE\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027(\u5305\u62EC\u65B9\u6CD5)\u65F6\uFF0C\u9996\u5148\u67E5\u627E\u8FD9\u4E2A\u5BF9\u8C61\u81EA\u8EAB\u6709\u6CA1\u6709\u8BE5\u5C5E\u6027\u3002</li><li>\u5982\u679C\u6CA1\u6709\u5C31\u67E5\u627E\u5B83\u7684\u539F\u578B(\u4E5F\u5C31\u662F__proto__ \u6307\u5411\u7684prototype\u539F\u578B\u5BF9\u8C61)\u3002</li><li>\u5982\u679C\u8FD8\u6CA1\u6709\u5C31\u67E5\u627E\u539F\u578B\u5BF9\u8C61\u7684\u539F\u578B( Object\u7684\u539F\u578B\u5BF9\u8C61)\u3002</li><li>\u4F9D\u6B64\u7C7B\u63A8\u4E00\u76F4\u627E\u5230Object\u4E3A\u6B62 ( null)\u3002</li></ol><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><ul><li>new \u751F\u6210\u7684\u5BF9\u8C61\u53EB\u5B9E\u4F8B</li><li>\u5B9E\u4F8B\u7684__proto__\uFF0C\u6307\u5411\u539F\u578B\u5BF9\u8C61</li></ul><h2 id="\u5173\u7CFB\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5173\u7CFB\u793A\u4F8B" aria-hidden="true">#</a> \u5173\u7CFB\u793A\u4F8B</h2><p><img src="`+t+`" alt="Image text"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6784\u9020\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u539F\u578B</span>
<span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">play</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u6253\u7403\u5F88\u5389\u5BB3\uFF01&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9E\u4F8B</span>
<span class="token keyword">var</span> James <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9E\u4F8B\u7684__proto__\u6307\u5411\u539F\u578B</span>
James<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Star</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
<span class="token comment">// \u539F\u578B\u7684constructor\u6307\u5411\u6784\u9020\u51FD\u6570</span>
<span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Star <span class="token comment">// true</span>
<span class="token comment">// \u5B9E\u4F8B\u5BF9\u8C61\u53EF\u4EE5\u7EE7\u627F\u539F\u578B\u5BF9\u8C61\u7684constructor\u5C5E\u6027</span>
<span class="token class-name">James</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Star <span class="token comment">// true</span>

<span class="token comment">// \u539F\u578B\u5BF9\u8C61\u91CC\u7684__proto__ \u6307\u5411Object.prototype</span>
<span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
<span class="token comment">// Object.prototype\u7684__proto__ \u6700\u7EC8\u6307\u5411null</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[o];function l(i,r){return s(),a("div",null,c)}var d=n(p,[["render",l],["__file","prototype.html.vue"]]);export{d as default};
