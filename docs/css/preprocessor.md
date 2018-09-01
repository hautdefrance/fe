# CSS 预处理器

[[TOC]]

## 1. Stylus

### 1.1 Playground

<br>

<playground-wrapper>
  <iframe height='265' scrolling='no' title='Stylus Playground  | FE' src='//codepen.io/ulivz/embed/ZMzxpZ/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ulivz/pen/ZMzxpZ/'>Stylus Playground  | FE</a> by ULIVZ (<a href='https://codepen.io/ulivz'>@ulivz</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>
</playground-wrapper>

同时，推荐官方的在线 [playground](http://stylus-lang.com/try.html)。

### 1.2 概览

传统的 CSS 写法

```css
body {
  color: #fff;
}
```

在 Stylus 中，可以使用风格类似于 [pug](https://pugjs.org/api/getting-started.html) 的纯缩进语法改写为：

```stylus
body
  color white
```

::: tip
Stylus 也是兼容纯粹的 CSS 语法的。
:::

### 1.3 变量

```stylus
font-size = 14px
$font-size = 14px // 个人倾向于带上 $
```

### 1.4 Mixins 与 插值

结合官网一个很好的示例来说明 Mixins 和插值在 Stylus 中的作用：

```stylus
// mixins
vendor(prop, args)
  -webkit-{prop} args
  -moz-{prop} args
  {prop} args

// mixins
border-radius()
  vendor('border-radius', arguments)

// 使用 mixins
button
  // mixins 的调用和写普通 CSS 一样
  border-radius 1px 2px / 3px 4px
```

输出为：

```stylus
button {
  -webkit-border-radius: 1px 2px / 3px 4px;
  -moz-border-radius: 1px 2px / 3px 4px;
  border-radius: 1px 2px / 3px 4px;
}
```

### 1.5 Functions

函数和 Mixins 类似，但是函数还能够返回值。

- **参考:**

  - [Stylus > Functions](http://stylus-lang.com/docs/functions.html)

### 1.6 Placeholders

在 Stylus 中，你可以使用 extend 来 "继承" 一个选择器、多个选择器，也可以用来继承一个 **Placeholder 选择器**。placeholder 是一个比较有价值的特性，Stylus 也是在项目发布一年后才[引入这个特性](https://github.com/stylus/stylus/issues/617)的。结合一个例子来说明 Mixins 和 Placeholders 的异同。

现有一个 Mixin 如下：

```stylus
clearfix()
  &::after
    content "."
    display block
    clear both
```

现有两处用到这个 Mixin：

```stylus
.wrapp-1 {
  clearfix()
}

.wrapp-2 {
  clearfix()
}
```

输出结果是：

```css
.wrapp-1::after {
  content: ".";
  display: block;
  clear: both;
}
.wrapp-2::after {
  content: ".";
  display: block;
  clear: both;
}
```

很明显，这段静态的 CSS 样式被生成了两次，这是不够优雅的。有没有一种机制，可以让这两种合并起来呢？没错，Placeholders 要出场了。将刚刚的 Mixin 改写成 Placeholder 如下：

```stylus
// Placeholder 选择器需要以 $ 开头
$clearfix
  &::after
    content "."
    display block
    clear both
```

使用：

```stylus
.wrapp-1 {
  @extend $clearfix
}

.wrapp-2 {
  @extend $clearfix
}
```

输出如下：

```css
.wrapp-1::after,
.wrapp-2::after {
  content: ".";
  display: block;
  clear: both;
}
```

非常完美有木有！总的来说，我们应该在 `样式是静态样式` 的场景下使用 Placeholders 呢？而对于动态的样式，才交给 Mixins 来做。

::: warning 注意
请注意，Placeholders 选择器不应该在 `@media` 包裹的块中使用。在 Stylus 中，尽管它不报错，但是还是存在问题的。假如我将上述的使用方式更改为：

```stylus
.wrapp-1 {
  @extend $clearfix
}

.wrapp-2 {
    @media (max-width: 719px) {
      @extend $clearfix
    }
}
```

输出结果为：

```stylus
.wrapp-1::after,
.wrapp-2::after {
  content: ".";
  display: block;
  clear: both;
}
```

`@media` 居然不见了！很明显这不是我们想要的。

:::

## 2 SCSS

### 2.1 Playground

<br>

<playground-wrapper>
  <iframe height='265' scrolling='no' title='SCSS / SASS Playground | FE' src='//codepen.io/ulivz/embed/OoRBPX/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ulivz/pen/OoRBPX/'>SCSS / SASS Playground | FE</a> by ULIVZ (<a href='https://codepen.io/ulivz'>@ulivz</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>
</playground-wrapper>

### 2.2 概览

SCSS 作为 CSS 预处理器级语言的元老，自然是支持以下几大特性：

1. 变量的定义，需要以 `$` 开头；
2. 嵌套；
3. Partials, 以 `_` 开头的 scss 将会被认为是局部的样式，该文件不会被生成为独立的样式文件，而是生成在 `import` 它的样式文件中；
4. Import
5. Mixins
6. Extend
7. Operators

## 3. Less

### 变量

变量名需要以 `@` 开头，变量名和变量值需要用 `:` 隔开；

```less
@base: #f938ab;
```

变量值也支持使用使用表达式：

```less
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111; // 5B83AD + 111111 = 6C94BE
```

变量值也支持一个变量名：

```less
@fnord:  "I am fnord.";
@var:    "fnord";

.a::after {
  content: @@var; // "I am fnord.";
}
```

### 变量的插值

- 对于 `import`：

```less
// Variables
@themes: "../../src/themes";

// Usage
@import "@{themes}/tidal-wave.less";
```

- 对于 `URLs`：

```less
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}
```

对于属性：

```less
@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
```

### 混入

你可以直接混入一个 `class`:

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered;
}

.post a {
  color: red;
  .bordered;
}
```

### 3.4 嵌套规则

Less 给予你结合级联使用嵌套的能力。假设有有以下 CSS：

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

你可以这样写：

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

一种常见的实践，就是将伪元素也打包到你的选择器中：

```css
.clearfix {
  display: block;
  zoom: 1;
}

.clearfix ::after{
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  clear: both;
  visibility: hidden;
}
```

写成 less 则是：

```less
.clearfix {
  display: block;
  zoom: 1;
  // & 代表当前选择器(::after)的父元素(.clearfix)
  &::after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

事实上，嵌套规则在所有的 css 预处理器中都是一样的。

### 嵌套的指令和冒泡

有一些 CSS 原生的指令，如：`@media`、`@keyframe` 可以按照上述类似的规则被嵌套。指令放置在顶部，相对于同一规则集内的其他元素的相对顺序保持不变。这叫 `冒泡`。

如：

```less
.screen-color {
  @media screen {
    color: green;
    @media (min-width: 768px) {
      color: red;
    }
  }
  @media tv {
    color: black;
  }
}
```

输出则是：

```css
@media screen {
  .screen-color {
    color: green;
  }
}
@media screen and (min-width: 768px) {
  .screen-color {
    color: red;
  }
}
@media tv {
  .screen-color {
    color: black;
  }
}
```

### 运算

支持的操作符：`+`, `-`, `*`, `/`：

```less
// 数字被转换到同一单位
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is 1.5cm

// 当存在不能转换的单位时
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// 在定义变量是进行变量运算
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%
```

### 函数

Less 提供了大量的用于转换颜色、操作字符串以及做数学运算的函数。

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

### 命名空间和访问器

有时，你可能想要将你的 mixins 分组，或者只是想做一些封装。

- 格式：

```less
#Namespace {
  // styles
}
```

- 例子：

```less
#bundle {
  .button { ... }
  .tab { ... }
  .citation { ... }
}
```

使用：

```less
#header a {
  color: orange;
  #bundle > .button;
}
```

::: warning 注意
声明在命名空间内的`变量`只能在该命名空间内使用。
:::



### 含参的混入

```less
.border-radius(@radius) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
          border-radius: @radius;
}

#header {
  .border-radius(4px);
}
.button {
  .border-radius(6px);
}
```

### 多参的混入

1. 参数可以以 `;` 或者 `,` 分开，但是推荐用 `;`;
2. 支持用 `:` 指定默认值；

## PostCSS

TODO

---

#### 参考

- [stylus](http://stylus-lang.com/)
- [scss 中文网](http://sass.bootcss.com/)
- [less 中文网](http://lesscss.cn/)

