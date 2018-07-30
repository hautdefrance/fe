# CSS 居中

[[TOC]]

## 文字的居中

### 文字的水平居中

- **方案**: text-align: center;

<css-center-text-horizontal/>

<foldable>

<<< @/docs/.vuepress/components/css-center/text-horizontal.vue

</foldable>

### 文字的水平垂直居中（父元素定高）

<css-center-text-vertical-1/>

<foldable>

<<< @/docs/.vuepress/components/css-center/text-vertical-1.vue

</foldable>

- **方案1**：确保父元素的 `line-height` 等于其 `height`。
- **评估**：
  - 优点：简单。
  - 缺点：
     1. 父元素必须定高。由于百分比的 `line-height` 是相对于元素自身的字体大小，因为当 `height` 设置为百分比时，无法实现 `line-height` 等于 `height`；
     2. 只能是单行文字，一旦换行，将会非常难看；

- **方案2**：确保父元素的 `line-height` 等于其 `height`, 并将子元素设置成 `display: inline-block + vertical-align: center` 并借助 `font-size: 0` 消除"幽灵空白节点"。
- **评估**：
  - 优点：适用性广，块状元素也可以使用此方法，兼容性好（`IE7+`）
  - 缺点：除了拥有方案1的缺点之外，缺点还有：需要书写的代码更多，因为"幽灵空白节点"的存在，代码写的不够直观。

### 文字的水平垂直居中（父元素不定高）

<css-center-text-vertical-2/>

<foldable>

<<< @/docs/.vuepress/components/css-center/text-vertical-2.vue

</foldable>


- **方案1**：使用 `display: table` (对父元素) 和 `display: table-cell` (对子元素)。
- **评估**：
  - 优点：兼容性好。
  - 缺点：
    1. `display: table-cell` 会被一些其他属性破坏，如 `float`, `position:absolute`。
    2. 根据 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/margin): margin 不能应用在 `display` 为 `table-cell `的元素上，你需要使用 [border-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing) 来代替, 但这个属性又要求你的DOM必须长这个样子：
    
``` html
<div class="table">
    <div class="row">
        <div class="cell">123</div>
        <div class="cell">456</div>
        <div class="cell">879</div>
    </div>
</div>
```

``` css
.table { display:table; border-collapse:separate; border-spacing:5px; }
.row { display:table-row; }
.cell { display:table-cell; padding:5px; border:1px solid black; }
```

::: danger
综上，使用 table-cell 来实现文字的垂直居中缺点比较明显，请谨慎使用！
:::

- **方案2**：使用 `flexbox`，结合 `justify-content: center` 和 `align-items: center`。
- **评估**：
  - 优点：代码量少，在移动端设备和非IE浏览器上表现良好。
  - 缺点：兼容性一般，IE10/IE11 仅部分支持，且存在部分[bug](https://caniuse.com/#search=flexbox)！

### 多行文字的水平垂直居中

TODO

## 图片的居中

### img 的有趣之处

在 HTML 中，`img` 一直是一个比较有趣的元素。它并不是传统意义上的 inline 或者 block 元素，虽然根据 [MDN > Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements), `img` 是一个 inline 元素，但实际上，img 元素还支持宽高的设置。

根据 W3 的规范文档 [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/#glossary) 的描述：

> the content of the HTML `img` element is often replaced by the image that its src attribute designates. Replaced elements often have intrinsic dimensions: an intrinsic width, an intrinsic height, and an intrinsic ratio.

翻译过来就是：

> HTML 中 img 元素的内容经常被它的 src 属性指定的图像取代。替换的元素通常具有固有的尺寸、固有宽度、固有高度和固有比率。

在这种背景下，我们可以认为，img 的行为和 `display: inline-block` 的行为基本一致。

### 图片的垂直居中

<css-center-img/>

## 块的居中

### 块的水平居中

#### 方案1: 采用 `margin: auto`

<card bg>
  <css-center-block-horizontal-1/>
</card>

#### 方案2: 采用 `inline-block`

<card bg>
  <css-center-block-horizontal-2/>
</card>

### 块的垂直居中（父元素定高）

#### 方案1: 采用 `line-height` + `vertical-align`

<card bg>
  <css-center-block-vertical-1/>
</card>

### 块的垂直居中（父元素不定高）

### 块的水平垂直居中（父元素定高）

### 块的水平垂直居中（父元素不定高）
