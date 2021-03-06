# CSS 文本样式

[[TOC]]

## 1 概览

- Fundamental text and font styling
  - font-size, 单位：`px`、`em`、`rem`
  - font-style：`normal`/`italic`/ `oblique`
  - font-weight: `normal`/ `lighter` / `bolder` / `100-900`
  - text-transform: `none` / `uppercase` / `lowercase` / `capitalize` / `full-width`
  - text-decoration: `none` / `underline` / `overline` / `line-through`
  - text-shadow
  - text-align：`left` / `right` / `center` / `justify`
  - line-height ⚠️
  - letter-spacing
  - word-spacing
  - text-indent
  - text-overflow
  - white-space：Define how whitespace and associated line breaks inside the element are handled.
  - word-break：Specify whether to break lines within words.
  - 全部的属性请移步[这里](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- Styling lists
  - list-style
- Styling links
  - :link
  - :visited
  - :hover
  - :focus
  - :focus
  - :active
- Web fonts
  - font-family
  - @font-face

## 2 技巧

### 2.1 line-height

`line-height` 可以设置为具体的单位，如 `20px`，也可以设置为纯数字，如 `1`，这个 `1` 表示 `line-height` 和 `font-size` 的倍数关系。

::: warning 注意
当值为百分比时，`line-height` 是相对于当前元素的 `font-size`，而 `height` 是相对于父元素的 `height`。
:::

对于一个包含文字的 div，当 `height` 为 0 时，如果 `line-height` 不为 0，那么这个 div 会被撑开。因此，并不是文字撑开了 div，而是 `line-height`。 

我们可以通过 `line-height` 等于 `height` 来实现单行文字的垂直居中、`inline-block/图片` 的垂直居中。

### 2.2 white-space 

请看下面的 demo，相信已经很直观了：

<css-white-space/>

### 2.3 `rem` 和 `em`

在做响应式布局时，`rem` 和 `em` 是两个常见的选择，其中，`rem` 是相对于 `DOM` 根节点（即 `body`）的字体大小，而 `em` 是相对于父元素的字体大小。

在我看到的很多文章中，`em` 并不受待见，似乎所有人都认为 `rem` 才是王道。事实上，如果你细细体会，`em` 和 `rem` 的关系有如 `position: absolute` 和 `position: fixed`。因此，当你在实现一个子元素和父元素的字体成比例的页面时，`em` 也是很有用的。

::: danger 使用 rem 时，body 的 字体大小设置多少合适？
并没有统一的标准。通常来说，`10px`、`16px` 比较常见。以 [vuepress](https://github.com/vuejs/vuepress/blob/master/lib/default-theme/styles/theme.styl#L17) 为例，`vuepress` 中 `bod` 的 `font-size` 值为 `16px`。因此 `1rem` 等于 `16px`。
:::

### 2.4 `vw` 和 `vh`

`1vw` 等于浏览器 viewport 宽度的 `1%`，`1vh` 等于浏览器 viewport 高度的 1%。

::: warning 注意
在移动端，由于浏览器存在地址栏和工具栏，因此 `1vh` 并不等于屏幕高度的 1%，更关键的是，iOS Safari 和 Chrome 都有自动隐藏地址栏/工具栏的黑魔法，1vh 的值还会动态变化，因此请慎用 `vh`。
:::

### 2.5 @font-face

可以使用 `@font-face` 来使用自定义字体：

```css
@font-face {
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	src: local("Lato Regular"), local("Lato-Regular"),
	url("static/fonts/Lato-Regular.woff2") format("woff2"),
	url("static/fonts/Lato-Regular.woff") format("woff"),
	url("static/fonts/Lato-Regular.ttf") format("truetype");
}
```

其中各项的含义：

- **font-family**：字体的名称
- **src**：要导入的字体文件的路径（url），以及格式（format），format 可选，但其有助于浏览器更快的使用字体。解析顺序从上到下，浏览器将使用第一个支持的字体，因此推荐将最现代化的字体（woff2）放在最前面
- **font-style / font-weight**：当你需要导入同一字体的不同样式的时候可使用，可以避免使用不同的字体名称，参考一个更全面的[例子](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)

---

#### 参考

- [MDN > Styling_text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)
