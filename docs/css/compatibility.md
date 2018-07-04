# CSS 积累

## 兼容性

1. `table` 上的 `min-height` 在 firefox 上不生效。

[参考](https://stackoverflow.com/questions/19521442/min-height-for-a-table-in-firefox-not-working)

2. 慎用：`position: fixed`，因为它会导致在移动端浏览器中一定会显示地址栏。

## 实践

1. 不建议使用 `text-indent`!

因为在移动端效果显示很差，建议使用 `padding-left`。

2. 在 input 中不要使用 line-height，设置高度和字体大小即可，input 会自动帮你垂直居中！

