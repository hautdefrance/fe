# CSS 

## 跳坑

1. `table` 上的 `min-height` 在 `firefox` 上不生效。

[参考](https://stackoverflow.com/questions/19521442/min-height-for-a-table-in-firefox-not-working)

2. 慎用：`position: fixed`，因为它会导致在移动端浏览器中一定会显示地址栏。

3. `overflow-x` 必须设置 `width`。

4. 在 `stylus` 中的 `calc` 使用变量。

```stylus
max-width "calc(100% - %s)" % ($navbar-horizontal-padding*2)
```

## 实践


