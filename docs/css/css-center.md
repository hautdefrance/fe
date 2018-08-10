# CSS 居中

[[TOC]]

## 1 文字的居中

### 1.1 文字的水平居中

#### 1.1.1 方案1

  - **策略**：`text-align: center`。
  - **示例**：

  <card shadow>
    <css-center-text-horizontal/>
  </card>

  - **源码**：

  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/text-horizontal.vue
  
  </foldable>

### 1.2 文字的水平垂直居中（父元素定高）

#### 1.2.1 方案1

  - **策略**：确保父元素的 `line-height` 等于其 `height`，并结合 `text-align: center`。
  - **优点**：简单。
  - **缺点**：
     1. 父元素必须定高。由于百分比的 `line-height` 是相对于元素自身的字体大小，因为当 `height` 设置为百分比时，无法实现 `line-height` 等于 `height`；
     2. 只能是单行文字，一旦换行，将会非常难看。
  - **示例**：

  <card shadow>
    <css-center-text-vertical-1/>
  </card>

  - **源码**：

  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/text-vertical-1.vue
  
  </foldable>

#### 1.2.2 方案2

  - **策略**：确保父元素的 `line-height` 等于其 `height`, 并将子元素设置 `display: inline-block`、`vertical-align: center`，并借助 `font-size: 0` 消除`幽灵空白节点`。
  - **优点**：适用性广，块状元素也可以使用此方法，兼容性好（`IE7+`）
  - **缺点**：除了拥有**方案1**的缺点之外，缺点还有：需要书写的代码更多，因为`幽灵空白节点`的存在，代码写的不够直观。
  - **示例**：

  <card shadow>
    <css-center-text-vertical-2/>
  </card>

  - **源码**：

  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/text-vertical-2.vue
  
  </foldable>

### 1.3 文字的水平垂直居中（父元素不定高）

#### 1.3.1 方案1

  - **策略**：使用 `display: table` (对父元素) 和 `display: table-cell` (对子元素)。
  - **优点**：兼容性好。
  - **缺点**：
    1. `display: table-cell` 会被一些其他属性破坏，如 `float`, `position:absolute`。
    2. 根据 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/margin): `margin` 不能应用在 `display` 为 `table-cell `的元素上，你需要使用 [border-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing) 来代替, 但这个属性又要求你的 `DOM` 必须长这个样子：
    
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
    
  - **示例**：

  <card shadow>
    <css-center-text-vertical-3/>
  </card>
   
  - **源码**：
  
  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/text-vertical-3.vue
  
  </foldable>


::: danger
综上，使用 `table-cell` 来实现文字的垂直居中缺点比较明显，请谨慎使用！
:::

#### 1.3.1 方案2

  - **策略**：使用 `flexbox`，结合 `justify-content: center` 和 `align-items: center`。
  - **优点**：代码量少，在移动端设备和非IE浏览器上表现良好。
  - **缺点**：兼容性一般，`IE10/IE11` 仅部分支持，且存在部分[bug](https://caniuse.com/#search=flexbox)。
  - **示例**：

  <card shadow>
    <css-center-text-vertical-4/>
  </card>
   
  - **源码**：
  
  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/text-vertical-4.vue
  
  </foldable>


### 1.4 多行文字的水平垂直居中 

经过前文的讲解，对于多行文字的垂直居中，不可在父容器上使用 `line-height` 等于 `height`, 合适的居中方法应该是将多行文字当成一个整体来布局，对于多行文字，其高度极有可能是未知的，因此，其行为和对**图片**的居中是基本类似的，请参考[图片的垂直居中](#图片的垂直居中)。


## 2 图片的居中

### 2.1 img 标签的的有趣之处

在 HTML 中，`img` 一直是一个比较有趣的元素。它并不是传统意义上的 inline 或者 block 元素，虽然根据 [MDN > Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements), `img` 是一个 inline 元素，但实际上，img 元素还支持宽高的设置。

根据 W3 的规范文档 [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/#glossary) 的描述：

> the content of the HTML `img` element is often replaced by the image that its src attribute designates. Replaced elements often have intrinsic dimensions: an intrinsic width, an intrinsic height, and an intrinsic ratio.

翻译过来就是：

> HTML 中 img 元素的内容经常被它的 src 属性指定的图像取代。替换的元素通常具有固有的尺寸、固有宽度、固有高度和固有比率。

在这种背景下，我们可以认为，`<img>` 的行为和 `inline-block` 的行为基本一致。

### 2.2 图片的垂直居中

#### 2.2.1 方案1

  - **策略**：使用 `table-cell`。
  - **示例**：

  <card shadow>
    <css-center-img-1/>
  </card>
   
  - **源码**：
  
  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/img-1.vue
  
  </foldable>
  
#### 2.2.2 方案2

  - **策略**：使用 `flexbox`。
  - **示例**：

  <card shadow>
    <css-center-img-2/>
  </card>
   
  - **源码**：
  
  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/img-2.vue
  
  </foldable>

## 3 块的居中

### 3.1 块的水平居中

#### 3.1.1 方案1

  - **策略**：采用 `margin: auto`。
  - **示例**：

  <card bg>
    <css-center-block-horizontal-1/>
  </card>

  - **源码**：

  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/block-horizontal-1.vue
  
  </foldable>

#### 3.1.2 方案2

  - **策略**：采用 `inline-block`。
  - **示例**：

  <card bg>
    <css-center-block-horizontal-2/>
  </card>

  - **源码**：

  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/block-horizontal-2.vue
  
  </foldable>

### 3.2 块的垂直居中（父元素定高和子元素均定高）

#### 3.2.1 方案1

  - **策略**：通过设置父元素的 padding 来实现。
  - **示例**：

  <card bg>
    <css-center-block-vertical-1/>
  </card>

  - **源码**：

  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/block-vertical-1.vue
  
  </foldable>

### 3.3 块的垂直居中（父元素不定高，子元素定高）

#### 3.3.1 方案1

  - **策略**：最暴力的居中解决方式, `postion: absolute`, 结合 `margin: auto`。

  ``` css
  .absolute-center-box {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  ```
  
  - **示例**：

  <card bg>
    <css-center-block-vertical-2/>
  </card>

  - **源码**：
  
  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css-center/block-vertical-2.vue
  
  </foldable>

#### 3.3.2 方案2

  - **策略**：flexbox。

  ```css
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```
  
  请参考图片的垂直居中。

### 3.4 块的垂直居中（父元素定高，子元素不定高）

#### 3.4.1 方案1

  - **策略**：采用 `flexbox`，略，请参考图片的垂直居中。

#### 3.4.2 方案2

  - **策略**：采用 `table-cell`，略，请参考图片的垂直居中。

### 3.5 块的垂直居中（父元素不定高，子元素不定高）

#### 3.5.1 flexbox。

  - **策略**：采用 `flexbox`，略，请参考图片的垂直居中。

