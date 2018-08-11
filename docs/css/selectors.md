# CSS 选择器

[[TOC]]

## 1 概览

- ID选择器：`#id`
- 类选择器：`.class`
- 元素选择器：`div`
- 通用选择器：`*`
- 属性选择器：
  - `[attr]`
  - `[attr=value]`
  - `[attr|=value]`：`[attr=value]`的超集，可以完全相等，也可以后面紧接连字符`-`
  - `[attr^=value]`：以`value`作为前缀
  - `[attr$=value]`：以`value`作为后缀
  - `[attr*=value]`：包含一个或多个`value`
  - `[attr operator value i/I]`：增加`i`将导致比较`value`时不区分大小写（case-insensitively）
- 子元素选择器：
  - `>`：直接子元素
  - ` `：通用子元素
- 兄弟元素选择器
  - `+`：相邻的兄弟元素
  - `~`：通用的兄弟元素
- 伪类选择器：
  - `:active`
  - `:first-child`
  - `:last-child`
  - `:nth-child([even/odd/n])`
  - 全部请参见[这里](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- 伪元素：
  - `::after`
  - `::before`
  - `::selection`
  - 全部请参见[这里](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

## 2 技巧

### 2.1 选择器的优先级

CSS 属于一种描述性语言，对于同一个元素（如 `.container`），我们可以这样写样式：

``` css
.container { font-size: 14px; }
```

也可以重复多次：

``` css
.container { font-size: 14px; } 
.container { font-size: 12px; } /* 优先级更高 */
```

这是一个最简单的选择器优先级讨论问题，也就是说，相同的选择器，越晚被解析的优先级越高。请尝试在控制台中查看以下文字的样式：

  <card bg padding>
    <css-selector-1/>
  </card>
  
那么，对于不同类型的选择器，优先级是如何计算的呢？  

#### 2.1.1 选择器类型

下面列表中，选择器类型的优先级是递增的：

| 选择器类型 | 例子 | 权重 |
|---|---|---|
| 元素（类型）选择器，伪元素 | `h1`, `::before` | 1 |
| class 选择器 | `.app` | 10 |
| id 选择器 | `#app` | 100 |
| 内联样式 | `style="font-size: 12px"` | 1000 |

::: tip #
请留意这些权重，它将用于在级联的 CSS 选择器中计算权重。
:::

#### 2.1.2 `!important`

当在一个样式声明中使用一个 `!important` 规则时，此声明将覆盖任何其他声明。但是，请[慎用 `!important`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity##%E4%BE%8B%E5%A4%96%E7%9A%84_!important_%E8%A7%84%E5%88%99)。

#### 2.1.3 级联

CSS 的全名叫做 `Cascading Style Sheets`，译为层叠样式表（也可叫级联样式表)。

::: tip #
层叠，可以简单的理解为“冲突”的解决方案。
:::

在前文我们已经提到，当出现两个完全相同的 CSS 选择器时，浏览器处理这种“冲突”的机制是“后来者居上”，但对于处理不同选择器之间的冲突呢？如：

``` css
.content .text {}
.context .text.hide {}
```

此时，你还记得选择器表中的权重吧，让我们来打个分，第一个是20分，第二个是30分，所以真正生效的是第二个。

::: tip # 提示
事实上，以我几年的经验来看，在大部分场景中，真正需要用到打分的少之又少。当真地需要打分才能判断优先级的时候，请考虑你的选择器是否嵌套过深，是否滥用了id选择器，是否混用了选择器导致优先级不明。
:::

#### 2.1.4 继承

TODO

### 2.2 通用子元素选择器

通用子元素选择器应该是我们日常开发中用得最多一个 CSS 选择器之一了：

```css
div p { }
.content .text { }
```

值得注意的，通用子元素选择的是所有子代。

### 2.3 BEM风格 与 嵌套式风格

用一个例子来说明。假设有一个 Vue 组件 `<A/>` 如下：

``` vue
<div class="block">
  <span 
    class="element" 
    :class="{ 
      'hide': hide,
      'active': active
    }"
  >Lorem ipsum</div>
</div>
```

为了避免污染全局 CSS，一般情况下，我们会有两种实践，第一种是业界比较流行的 [BEM](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)：

``` css
.block { line-height: 30px; } 
.block__element { color: gray; }
.block__element_hide { display: none; }
.block__element_active { color: red; }
```

第二种就是 CSS 级联了：

``` css
.block { line-height: 30px; }
.block .element { color: red; }
.block .element.hide { display: none; }
.block .element.active { color: red; }
```

用预处理类语言来表达就是：

``` stylus
.block {
  line-height: 30px;
  .element {
    color: red;
    &.hide {
      display: none;
    }
    &.active {
      color: red;
    }
  }
}
```

相比较之下，我个人更喜欢 CSS 级联，由于能够清晰地反映 HTML 的结构，它的可维护性也相当高，也基本上不会因为 CSS 优先级的问题出岔子。但是，这种方式的问题也很明显：

::: warning 嵌套式写法的缺陷
1. 当 DOM 嵌套过深时，如果盲目地追求 CSS 跟 DOM 结构一致，那么 CSS 也会嵌套过深，从而导致浏览器解析的性能下降，一般来说，选择器不建议嵌套超过 3 层。
2. 当一个可复用组件拥有嵌套过深的选择器，那么它在复用时，override 它的默认样式也会相当困难。
:::

相比之下，BEM 的写法，由于嵌套较少，所以性能也很好，其语义化也相当好。BEM 中单一的选择器在结合 vue-loader 的 scoped CSS 特性也能彻底避免 CSS 的污染问题。同时，虽然 BEM 命名会使得 class 类名变长，但由于存在大量的重复，而 gzip 压缩算法对此有一定优化，因此经过 gzip 后这个体积的增加基本可以忽略不计。

### 2.4 attr

`attr` 是一个相当酷的 CSS 特性，它可以让你在 CSS 中访问 DOM。下面是一个简单的例子：

``` vue
<template>
  <div class="css-selector-2" data-text="I am the text from attr."></div>
</template>

<style lang="stylus">
  .css-selector-2::before {
    content: attr(data-text)
  }
</style>
```

结果如下：

<card bg padding>
  <css-selector-2/>
</card>

是不是很酷？详细的文档可参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr#)。

::: tip #
一个不错的 CSS tooltip 库 [hint.css](https://github.com/chinchang/hint.css) 便大量使用了这一特性。
:::

### 2.5 `nth-child(n)` 的生效条件

```css
p:nth-child(2){ ... }
```

生效条件：

- `P`是一个子元素
- `p`是父元素的第`2`个子元素

---

#### 参考

- [MDN > CSS_Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [MDN > 优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)