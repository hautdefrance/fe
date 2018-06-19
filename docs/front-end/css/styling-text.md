# CSS 文字

## 概览

- 基础
  - font-size, 单位：px、em、rem
  - font-style：`normal`/`italic`/ `oblique`
  - font-weight: `normal`/ `lighter` / `bolder` / `100-900`
  - text-transform: `none` / `uppercase` / `lowercase` / `capitalize` / `full-width`
  - text-decoration: `none` / `underline` / `overline` / `line-through`
  - text-shadow
  - text-align：`left` / `right` / `center` / `justify`
  - line-height (内容太多，待补充！)
  - letter-spacing
  - word-spacing
  - text-indent
  - text-overflow
  - white-space：如何处理元素内部的空格和换行符
  - word-break：指定是否在单词中换行
  - 全部请参见[这里](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- 列表
  - list-style
- 链接
  - :link
  - :visited
  - :hover
  - :focus
  - :focus
  - :active
- 字体
  - font-family
  - @font-face

## 案例

### 如何自定义字体？

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

- font-family：字体的名称
- src：要导入的字体文件的路径（url），以及格式（format），format可选，但其有助于浏览器更快的使用字体。解析顺序从上到下，浏览器将使用第一个支持的字体，因此推荐将最现代化的字体（woff2）放在最前面
- font-style / font-weight：当你需要导入同一字体的不同样式的时候可使用，可以避免使用不同的字体名称，参考一个更全面的[例子](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)

