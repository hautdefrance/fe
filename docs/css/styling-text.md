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

### 2.1 line-height 和 font-size

TODO

### 2.2 深入 white-space 

TODO

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
