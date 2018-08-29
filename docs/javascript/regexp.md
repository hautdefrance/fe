# 正则

## 将 CommonJS 转换成 ES6

```
(const|let|var)\s+([^\/]+)\s+=\s+require\((.*)\)

import $1 from $2
```