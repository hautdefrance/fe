# CSS Tricks

[[TOC]]

## vertical-align

**See also:**

- [张鑫旭 > CSS深入理解vertical-align和line-height的基友关系](https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)
- [张鑫旭 > vertical-align属性测试实验面板](https://www.zhangxinxu.com/study/201005/verticle-align-test-demo.html)

## table-cell

- [张鑫旭 > 我所知道的几种display:table-cell的应用](https://www.zhangxinxu.com/wordpress/2010/10/%E6%88%91%E6%89%80%E7%9F%A5%E9%81%93%E7%9A%84%E5%87%A0%E7%A7%8Ddisplaytable-cell%E7%9A%84%E5%BA%94%E7%94%A8/)

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

## 多边框

### 方案1

- 嵌套 box，最直观。

<css-tricks-multiple-border-1/>

<foldable>

  <<< @/docs/.vuepress/components/css-tricks/multiple-border-1.vue
  
</foldable>

### 方案2

- 唯一 box，使用 伪元素。

<css-tricks-multiple-border-2/>

<foldable>

  <<< @/docs/.vuepress/components/css-tricks/multiple-border-2.vue
  
</foldable>

### 方案3

- 唯一 box，使用 outline。

<css-tricks-multiple-border-3/>

<foldable no-mask>

  <<< @/docs/.vuepress/components/css-tricks/multiple-border-3.vue
  
</foldable>

### 方案4

- 唯一 box，使用 box-shadow。

``` css
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
```

<css-tricks-multiple-border-4/>

<foldable no-mask>

  <<< @/docs/.vuepress/components/css-tricks/multiple-border-4.vue
  
</foldable>

## `text-indent`

不建议使用 `text-indent`!

因为在移动端效果显示很差，建议使用 `padding-left`。

## `input` 中的 `line-height`

在 input 中不要使用 line-height，设置高度和字体大小即可，input 会自动帮你垂直居中！

## `perspective`

TODO