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
    <css-css-selector-1/>
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

### 2.2 选择器的级联

什么是 CSS 级联呢？假设


### 2.3 BEM 与 CSS级联

用一个例子来说明 CSS 选择器级联的最佳实践。假设有一个 Vue 组件 `<A/>` 如下：

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

相比较之下，我个人更喜欢 CSS 级联，由于能够清晰地反映 HTML 的结构，它的可维护性也相当高，也基本上不会因为 CSS 优先级的问题出岔子。


### attr

TODO, ref: https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr

### `nth-child(n)` 的生效条件

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