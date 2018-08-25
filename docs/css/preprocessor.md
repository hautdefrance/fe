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

## Less

TODO

## PostCSS

TODO

---

#### 参考

- [stylus](http://stylus-lang.com/)

