# BFC
(Block Formatting Context): 块级格式化上下文

### 形成BFC
1. float: 不为none
2. overflow: 不为visible
3. position: 不为relative和static
4. display: 为inline-block、table-cell、flex、table-caption或者inline-flex中的任何一个

### 特性
1. 内部box在垂直方向上一个一个放置
2. 盒子垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的上下margin会发生重叠。
3. BFC是独立区域, 内部box不影响外部, 外部也不影响内部box
4. 计算高度时, 也包括float元素的高度
5. BFC的区域不会与float的元素区域重叠
6. 每一个元素的左边，与包括的盒子的左边相接触，即使存在浮动也是如此。

### 作用
1. 清除浮动
2. 防止垂直margin重叠
3. 不和浮动元素重叠