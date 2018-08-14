# CSS 布局

[[TOC]]

## 1 浮动

`float` 属性的初衷是用于在成块的文本内浮动图像。但今天它的应用远不止此。

### 1.1 图文混排

下面是一个简单的图文混排的例子，其中，`img` 被设置成了 `float: left`, 可见，`float` 元素只会占用自身大小的面积，并把区域内原有的元素"挤"出这个区域。

<card shadow>
  <css-layout-float-1/>
</card>

### 1.2 多栏布局

<card>
  <css-layout-float-2/>
</card>

实际上，使用 `float` 来实现`多栏布局`实际上是较为繁琐的，很多情况下，你需要手动计算 `width` 和 `margin`。如上述的三栏布局，实际上是一个 `2x + 3y = 100` 的求解问题。实际上，[flexbox](#flexbox) 才是实现`多栏布局`的更好方案。

### 1.3 清除浮动

::: danger #
为什么要清楚浮动 ？
:::

当一个内层元素是浮动的时候，如果没有关闭浮动，其父元素也就不会再包含这个浮动的内层元素，因为此时浮动元素已经脱离了文档流——这将导致外层元素不能被撑开，从而可能导致视图塌陷。

#### 1.3.1 不清除浮动演示

  - **示例**：

<css-clear-floats/>
<br>
<br>
<br>
<br>

  - **源码**：
  
  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css/clear-floats.vue

  </foldable>

#### 1.3.2 不清除浮动演示

  - **示例**：

<css-clear-floats-fixed/>
<br>
<br>

  - **源码**：
  
  <foldable no-mask>
  
  <<< @/docs/.vuepress/components/css/clear-floats-fixed.vue

  </foldable>

  - **参考:**
  
    - [BootStrap > Clearfix](https://getbootstrap.com/docs/4.0/utilities/clearfix/)

## 2 定位

和定位有关的 CSS 属性：

- `position: fixed` 
- `position: relative` 
- `position: absolute` 
- `position: sticky ` (检查[兼容性](https://caniuse.com/#search=position%3A%20sticky))

关于定位的知识，这里不多展开，后面会在 css 的一些 showcase 中提及。

## 3 Flexbox

### 3.1 两栏布局

<card>
  <css-flexbox-two-columns/>
</card>

<details>
<summary><b>Source</b></summary>

<<< @/docs/.vuepress/components/css/flexbox-two-columns.vue

</details>

### 3.2 N栏布局(Grid布局)

<card>
  <css-flexbox-grid/>
</card>

<details>
<summary><b>Source</b></summary>

<<< @/docs/.vuepress/components/css/flexbox-grid.vue

</details>

### 3.3 圣杯布局(Holy Grail Layout)

<card>
  <css-flexbox-holy-grail/>
</card>

<details>
<summary><b>Source</b></summary>

<<< @/docs/.vuepress/components/css/flexbox-holy-grail.vue

</details>

**参考:**

- [Holy Grail Layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

---

#### 参考

- [MDN > CSS_layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
