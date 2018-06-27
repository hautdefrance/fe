# CSS Tricks

## 清除浮动

- 为什么要清楚浮动？

当一个内层元素是浮动的时候，如果没有关闭浮动，其父元素也就不会再包含这个浮动的内层元素，因为此时浮动元素已经脱离了文档流——这将导致外层元素不能被撑开，从而可能导致视图塌陷。

### 不清除浮动演示

- Output:

- <css-clear-floats/>
<br>
<br>
<br>
<br>

- Source Code:

<<< @/docs/.vuepress/components/css/clear-floats.vue


### 清除浮动演示

- Output:

<css-clear-floats-fixed/>
<br>
<br>

- Source Code:

<<< @/docs/.vuepress/components/css/clear-floats-fixed.vue

**See also:**

- [BootStrap > Clearfix](https://getbootstrap.com/docs/4.0/utilities/clearfix/)

## CSS Modules

- [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [React CSS Modules](https://github.com/gajus/react-css-modules)


## 使用CSS画各种形状

### 自适应正方形

三种方式：

1. 用css3的新单位 vh、vw
2. padding-bottom = width = 某百分比
	- 缺点1：不能有文字填充
	- 缺点2：由于该块状元素没有高度，因为设置`max-height`失效
3. 利用伪类来撑开父容器，父容器设置为某百分比后，添加一个伪类设置`margin-top: 100%`。注意，由于`margin-collapse(外边距塌陷)`的问题，
	- 缺点：内部仍然无法包含文字。但是可以设置`max-height`
	
- Input:

<<< @/docs/.vuepress/components/css/square.vue

- Output:

<css-square/>

**Tip**: 试试缩小浏览器视口试试看~

### 三角形

- Input:

<<< @/docs/.vuepress/components/css/triangle.vue

- Output:

<css-triangle/>

**See also:**

- [CSS三角形產生器](http://apps.eky.hk/css-triangle-generator/zh-hant)

## 关于CSS百分比的疑问

### 相对于父元素宽度

- width
- left
- right
- padding
- margin 

::: tip
ps: `max-/min-`也包括在内。
:::

### 相对于父元素高度

- height
- top
- bottom

::: tip
ps: `max-/min-`也包括在内。
:::

### 相对于父元素字体大小

- font-size

### 相对于自身字体大小

- line-height

### 相对于自身宽高

- border-radius
- background-size
- transform: translate()
- transform-origin
- zoom
- clip-path

### 特殊算法

- background-position（方向长度 / 该方向除背景图之外部分总长度 * 100）
- filter
- position: fixed（相对视口）
- position: absolute（相对于距离它最近的祖先positioned元素 ）

::: tip 
- 什么是`positioned`元素?

将position设置为static以外的值的元素称为'positioned'元素
:::
   
## 
   
