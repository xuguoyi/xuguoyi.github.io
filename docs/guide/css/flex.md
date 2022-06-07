# Flex
[阮一峰: Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 容器的属性
### flex-direction
- 主轴的方向（即项目的排列方向）
- 4个值
1. row（默认值）：主轴为水平方向，起点在左端。
2. row-reverse：主轴为水平方向，起点在右端。
3. column：主轴为垂直方向，起点在上沿。
4. column-reverse：主轴为垂直方向，起点在下沿。
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### flex-wrap
- 如果一条轴线排不下，如何换行。
- 3个值
1. nowrap(默认): 不换行
2. wrap: 换行，第一行在上方。
3. wrap-reverse: 换行, 第一行在下方
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### flex-flow
- 是flex-direction和flex-wrap的简写, 默认 row nowrap
```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

### justify-content
- 项目在主轴上的对齐方式
- 5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
1. flex-start（默认值）：左对齐
2. flex-end：右对齐
3. center： 居中
4. space-between：两端对齐，项目之间的间隔都相等。
5. space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

### align-items
- 项目在交叉轴上的对齐方式
- 5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下
1. flex-start：交叉轴的起点对齐。
2. flex-end：交叉轴的终点对齐。
3. center：交叉轴的中点对齐。
4. baseline: 项目的第一行文字的基线对齐。
5. stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

### align-content
- 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
- 6个值
1. flex-start：与交叉轴的起点对齐。
2. flex-end：与交叉轴的终点对齐。
3. center：与交叉轴的中点对齐。
4. space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
5. space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
6. stretch（默认值）：轴线占满整个交叉轴。
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

## 项目的属性
### order
- 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css
.item {
  order: <integer>;
}
```

### flex-grow
- 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

### flex-shrink
- 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

### flex-basis
- 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
- 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

### flex
- 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
- 两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

### align-self
- 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```