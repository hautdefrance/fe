# CSS 选择器

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

### 选择器的优先级

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
  
那么，对于不同的选择器，优先级是如何计算的呢？  

TODO, ref: https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity

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