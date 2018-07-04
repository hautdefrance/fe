# JavaScript Base

## Online Learning

- **MDN**: [en-US](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · [zh-CN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

## Books

- **You-Dont-Know-JS** | [Github](https://github.com/getify/You-Dont-Know-JS) | [Website](https://www.kickstarter.com/projects/getify/you-dont-know-js-book-series)
- **modern-js-cheatsheet** | [Github](https://github.com/mbeaudru/modern-js-cheatsheet)

## Tricks

## 常见问题

### decodeURI 与 decodeURIComponent

`decodeURI()` 函数可对 `encodeURI()` 函数编码过的 `URI` 进行解码，而 `decodeURIComponent()` 函数可对 `encodeURIComponent()` 函数编码过的 `URI` 进行解码. 

`encodeURI` 和 `encodeURIComponent` 的主要区别在于：

- encodeURI 适用于完整的 URI。
- encodeURIComponent 适用于处理位于分隔符 (; / ? : @ & = + $ , #) 两侧 的任意字符。

使用一个简单的示例：

``` js
encodeURI('http://a/b c.html#hash')
// "http://a/b%20c.html#hash"

encodeURIComponent('http://a/b c.html#hash')
// "http%3A%2F%2Fa%2Fb%20c.html%23hash"
```

可见，encodeURI 对一个完整的 URI 只会 encode 空格，但是 encodeURIComponent 还会 encode `:`, `/` 和 `#`。
