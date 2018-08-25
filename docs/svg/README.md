# 概览

## 什么是 SVG

以下，是来自 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 的官方介绍:

> SVG(Scalable Vector Graphics, 、即可缩放矢量图形)，是 [W3C XML](https://www.w3.org/TR/xml/) 的分支语言之一，用于标记可缩放的矢量图形。

听起来太抽象了，我用通俗的句子来解释一波： 

> SVG 就是用来画 `矢量图` 的一种语言。而 Canvas 则可以用来画 `位图`。

相信熟知 Photoshop 和 illustrator 的同学会对这两个概念很熟悉。简单来说：

> 一副 `矢量图` 可以分解为一系列由点、线、面等组成的子图，它记录的是对象的几何形状、线条粗细和色彩。而对于 `像素图`，它纯粹由像素点堆叠而成。

那么两者最直观的区别在哪里呢？

> `像素图` 放大会失真，而 `矢量图` 放大不会失真。

好的，概念就介绍到这里，后文会结合具体的例子来解释。

## 推荐阅读

### 网站

- [SVG 1.1 Specification](https://www.w3.org/TR/SVG11/)
- [SVG 2 Specification](https://www.w3.org/TR/SVG2/)
- [SVG 教程 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)