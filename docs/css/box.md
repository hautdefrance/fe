# CSS 盒型

[[TOC]]

## 1 盒型

基本的盒子模型如下：

<card flex-center>

  ![](https://www.w3.org/TR/css-box-3/images/box.png)
  
</card>

::: warning 注意
有一个容易被遗忘的属性 `outline`。和 `padding`、`border` 不同的是，`outline` 不参与 `width` 的计算；和 `margin` 不同的是，`outline` 并不会占据额外的空间，而是覆盖在已有空间上（想到 `position: absolute` 有木有？）。
:::

实际上，盒型还分两种，我们可以通过 [`box-sizing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing) 来切换：

```css
.box {
  box-sizing: content-box; /* 默认值 */
  box-sizing: border-box;
}
```

这两种盒型究竟有何区别呢？请往下看。

### 1.1 content-box

- **示例**：

<card flex-center>
  <css-content-box/>
</card>

- **计算公式**：

> definedWidth = contentWidth

- **源码**：

<foldable no-mask>

<<< @/docs/.vuepress/components/css/content-box.vue

</foldable>

### 1.2 border-box

除此之外，还存在另外一种盒型，当你使用 `CSS` 对一个元素设置 `width`，其 `width` 将仅仅等于 `content` 的 `width` 加上 `padding` 和 `border`。

``` css
.box {
  `border-box`
}
```

- **示例**：

<card flex-center>
  <css-border-box/>
</card>

- **计算公式**：

> definedWidth = contentWidth + definedPadding + definedBorder

- **源码**：

<foldable no-mask>

<<< @/docs/.vuepress/components/css/border-box.vue

</foldable>


## 2 块状元素

块状元素总是新起一行，并且宽度默认为最大可用宽度。

::: tip 常见的块状元素

`<div>`、`<address>`、`<article>`、`<aside>`、`<blockquote>`、`<canvas>`、`<dd>`、`<div>`、`<dl>`、`<dt>`、`<fieldset>`、`<figcaption>`、`<figure>`、`<footer>`、`<form>`、`<h1>-<h6>`、`<header>`、`<hr>`、`<li>`、`<main>`、`<nav>`、`<noscript>`、`<ol>`、`<output>`、`<p>`、`<pre>`、`<section>`、`<table>`、`<tfoot>`、`<ul>`、`<video>`。

:::

## 3 内联元素

内联元素不会新起一行，且内联元素总是只占据本身内容所需要的宽度。

::: tip 常见的内联元素

`<a>`、`<abbr>`、`<acronym>`、`<b>`、`<bdo>`、`<big>`、`<br>`、`<button>`、`<cite>`、`<code>`、`<dfn>`、`<em>`、`<i>`、`<img>`、`<input>`、`<kbd>`、`<label>`、`<map>`、`<object>`、`<q>`、`<samp>`、`<script>`、`<select>`、`<small>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<textarea>`、`<time>`、`<tt>`、`<var>`。

:::

## 4 inline-block

`inline-block` 既具有内联元素的特征（不会新起一行、宽度不会为可用宽度的全部），也会拥有块状元素的特征（可设置宽高）。

## 5 replaced element 

CSS 里，可替换元素（`replaced element`）的展现不是由 CSS 来控制的。典型的可替换元素有 `<img>`、`<object>`、`<video>` 和 表单元素，如 `<textarea>`、`<input>` 。

---

#### 参考

- [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/)
- [CSS Box Model Module Level 3](https://www.w3.org/TR/css-box-3/)
- [MDN > Styling_boxes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes)
- [replaced element](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)
