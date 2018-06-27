# CSS Selectors

## Overview

- ID选择器：`#id`
- 类选择器：`.class`
- 元素选择器：`element`
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

## Example

### Effective conditions of `nth-child(n)`

```css
p:nth-child(2){ ... }
```

生效条件：

- `P`是一个子元素
- `p`是父元素的第`2`个子元素

