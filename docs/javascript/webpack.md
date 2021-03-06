# _Webpack_

[Github](https://github.com/webpack/webpack) ~ [Docs](https://webpack.js.org/) ~ [中文Docs](https://doc.webpack-china.org/)

[how-to-write-a-plugin](https://doc.webpack-china.org/development/how-to-write-a-plugin/) ~ [how-to-write-a-plugin中文版](https://doc.webpack-china.org/development/how-to-write-a-plugin/)

[compiler](https://webpack.js.org/api/plugins/compiler) ~ [compiler中文](https://doc.webpack-china.org/api/plugins/compiler/)


## _Loader_

### 资源列表

- 官方 loader：[webpack-contrib](https://github.com/webpack-contrib)
- [Writing a Loader](https://webpack.js.org/contribute/writing-a-loader/)

```js
module.exports = {
    entry: '',
    output: '',
    module: {
        rules: [
            {
                test: /RegExp/,
                loader: '',
                exclude: '',
                query: {}
            }
        ]
    },
	resolve: {
        extensions: ['.js', '.jsx'],
    }
}
```

- **raw-loader** | [Github](https://github.com/webpack-contrib/raw-loader)
- **file-loader** | [Github](https://github.com/webpack-contrib/file-loader)
- **url-loader** | [Github](https://github.com/webpack-contrib/url-loader)
- **style-loader** | [Github](https://github.com/webpack-contrib/style-loader)
- **css-loader** | [Github](https://github.com/webpack-contrib/css-loader)
- **sass-loader** | [Github](https://github.com/webpack-contrib/sass-loader)
- **less-loader** | [Github](https://github.com/webpack-contrib/less-loader)
- **svg-inline-loader** | [Github](https://github.com/webpack-contrib/svg-inline-loader)


## _Plugins_


## _dev-server_

- **webpack-dev-server** | [Github](https://github.com/webpack/webpack-dev-server)
- **webpack-hot-middleware** | [Github](https://github.com/glenjamin/webpack-hot-middleware)


## _Worth Reading_

See: [JavaScript Articles > Webpack](./articles.md#webpack)
