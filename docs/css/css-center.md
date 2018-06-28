# CSS 居中

## 文字的居中

### 文字的水平居中

- **方案**: text-align: center;

<css-center-text-horizontal/>

<<< @/docs/.vuepress/components/css-center/text-horizontal.vue

### 文字的垂直居中（父元素定高）

- **方案1**：确保父元素的 `line-height` 等于其 `height`。
- **方案1评估**：
  - 优点：简单
  - 缺点：
     1. 父元素必须定高。由于百分比的 `line-height` 是相对于元素自身的字体大小，因为当 `height` 设置为百分比时，无法实现 `line-height` 等于 `height`；
     2. 只能是单行文字，一旦换行，将会非常难看；

- **方案2**：确保父元素的 `line-height` 等于其 `height`, 并将子元素设置成 `display: inline-block + vertical-align: center` 并借助 `font-size: 0` 消除"幽灵空白节点"。
- **方案2评估**：
  - 优点：适用性广，块状元素也可以使用此方法，兼容性好（`IE7+`）
  - 缺点：除了拥有方案1的缺点之外，缺点还有：需要书写的代码更多，因为"幽灵空白节点"的存在，代码写的不够直观。


<css-center-text-vertical-1/>

<<< @/docs/.vuepress/components/css-center/text-vertical-1.vue

### 文字的垂直居中（父元素不定高）

<css-center-text-vertical-2/>

<<< @/docs/.vuepress/components/css-center/text-vertical-2.vue

### 文字的水平垂直居中（单行文字）

### 文字的水平垂直居中（多行文字）

### 文字的水平居中

## 块的居中

### 块的水平居中

### 块的垂直居中（父元素定高）

### 块的垂直居中（父元素不定高）

### 块的水平垂直居中（父元素定高）

### 块的水平垂直居中（父元素不定高）
