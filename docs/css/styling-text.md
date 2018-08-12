# CSS 文本样式

## 1 概览

- Fundamental text and font styling
  - font-size, unit：`px`、`em`、`rem`
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
  - All see [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
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

### 2.3 rem 与 em

TODO

### 2.4 vw 与 vh

TODO

### 2.5 如果自定义 font face？

```css
@font-face {
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	src: local("Lato Regular"), local("Lato-Regular"),
	url("../../../../../fonts/Lato-Regular.woff2") format("woff2"),
	url("../../../../../fonts/Lato-Regular.woff") format("woff"),
	url("../../../../../fonts/Lato-Regular.ttf") format("truetype");
}
```

其中各项的含义：

- **font-family**：字体的名称
- **src**：要导入的字体文件的路径（url），以及格式（format），format 可选，但其有助于浏览器更快的使用字体。解析顺序从上到下，浏览器将使用第一个支持的字体，因此推荐将最现代化的字体（woff2）放在最前面
- **font-style / font-weight**：当你需要导入同一字体的不同样式的时候可使用，可以避免使用不同的字体名称，参考一个更全面的[例子](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)

---

#### 参考

- [MDN > Styling_text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)
