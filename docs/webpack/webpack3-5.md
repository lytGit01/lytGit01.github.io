---
title: Webpack3升级webpack5方案
date: 2023-02-09
categories:
- webpack
tags:
- webpack
---

[[toc]]
### 1. webpack目录结构
```
|-- build                            // webpack开发生产配置目录
    |-- build.js                     // webpack的打包文件，通过配置package.json中的script来执行脚本
    |-- check-versions.js            // 检查node+npm的版本 在build.js里面使用
    |-- utils.js                     // 处理css的文件
    |-- vue-loader.conf.js           // 处理.vue文件的配置文件
    |-- webpack.base.conf.js         // 基础webpack配置（公共配置）
    |-- webpack.dev.conf.js          // 开发webpack配置
    |-- webpack.prod.conf.js         // 生产webpack配置
|-- config                           // 生产、开发环境参数配置
    |-- dev.env.js                   // 配置开发环境打包环境
    |-- index.js                     // 生产、开发环境参数配置
    |-- prod.env.js                  // 配置生产环境打包环境
```

### 2. webpack5环境要求
::: tip
- Webpack 5 对 Node.js 的版本要求至少是 10.13.0 (部分依赖需要node14.2+版本，建议选择14.2.0+ 版本)
:::

### 3. 升级步骤
#### 3.1 升级webpack 相关插件（webpack webpack-dev-server webpack-cli）
::: tip
- npm i webpack@latest
- npm install -D webpack-dev-server@latest webpack-cli@latest
:::

#### 3.2 升级其他依赖
::: tip
- npm install -g npm-check-updates
- npm-check-updates // 升级全部插件
:::

#### 3.3 更改启动命令
```
"scripts": {
  ---   "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  +++   "dev": "npx webpack serve --config build/webpack.dev.conf.js --color --progress",
  "start": "npm run dev",
  "build": "node build/build.js",
}
```
### 4. 属性变更
- 4.1 devServer.clientLogLevel: 'warning' ==>  v4 移动到了client下面 改名devServer.client.loggingL: 'warn' 【允许在浏览器中设置日志级别，例如在重载之前，在一个错误之前或者 热模块替换 启用时。】
- 4.2 devServer.contentBase: falsel ==> v4移动到了devServer.static.directory下面 【告诉服务器从哪里提供内容】
- 4.3 devServer.overlay ==> v4移动到了client下面 【当出现编译错误或警告时，在浏览器中显示全屏覆盖。】
- 4.4 devServer.publicPath ==> v4移动到了static下面 【告诉服务器在哪个 URL 上提供 static.directory 的内容】
- 4.5 devServer.watchOptions.poll ==> v4移动到了static下面的watch 【文件更改将触发整个页面重新加载】
- 4.6 devServer.disableHostCheck ==> v4移除了该选项 【配置项用于配置是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查】

### 5. 更新webpack相关插件
- 5.1 NamedModulesPlugin ，在开发模式已经默认安装，去除配置 【热加载时直接返回更新文件名】
- 5.2 extract-text-webpack-plugin 已被移除，由mini-css-extract-plugin插件替代 【从js中抽离css】

```js
/* 5.2.1 webpack.prod.conf.js 修改 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // js中的css文件提取出来，生成单独的文件
//...
const webpackConfig = merge(baseWebpackConfig, {
plugins: [
//...
    new MiniCssExtractPlugin({
        filename: utils.assetsPath('css/[name].[contenthash].css'),
        chunkFilename: utils.assetsPath('css/[name].[contenthash].css')
    })
    ]
})
/* 5.2.1 webpack.prod.conf.js 修改 */

/* 5.2.2 utils.js修改 */
if (options.extract) {
    return [{loader: MiniCssExtractPlugin.loader}].concat(loaders)
    // -- return ExtractTextPlugin.extract({
    // --  use: loaders,
    // --  fallback: 'vue-style-loader'
    // })
} else {
    return [{loader: 'vue-style-loader'}].concat(loaders)
    // return ['vue-style-loader'].concat(loaders)
}
/* 5.2.2 utils.js修改 */
```
- 5.3 optimize-css-assets-webpack-plugin移除 代替方案 (css-minimizer-webpack-plugin) 【css压缩】
```js
 optimization: {
    minimize: true,
    minimizer: [
        new TerserWebpackPlugin(), // Webpack5自带了开箱即用的代码压缩插件，官方推荐
        new CssMinimizerWebpackPlugin(), // 压缩css代码
    ]
}
```
- 5.4 UglifyJsPlugin写法变动 【压缩js】
```js
 optimization: {
    minimizer: [
        new TerserWebpackPlugin(), // Webpack5自带了开箱即用的代码压缩js，官方推荐 替代 UglifyJsPlugin
        new UglifyJsPlugin({
        // 新版的丑化代码插件写在minimizer里
        uglifyOptions: {
            compress: {}
        },
        chunkFilter: (chunk) => chunk.name !== 'vendors',
        sourceMap: config.build.productionSourceMap,
        parallel: true,
    }),
]
}
```

- 5.5 之前采用new webpack.optimize.CommonsChunkPlugin拆分，现在webpack5能更智能拆分代码，通过配置optimization.splitChunks属性来实现功能，同时也可以拆分样式
```js
 optimization: {
    splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        automaticNameDelimiter: '~',
        cacheGroups: {
            vendors: {
                name: 'vendors',
                test({resource}) {
                    return /[\\/]node_modules[\\/]/.test(resource);
                },
                priority: 10,
            },
            styles: {
                name: "styles",
                test: /\.(le|c)ss$/,
                type: "css/mini-extract",
                chunks: "all",
                enforce: true,
            },
        },
    }
}
```

- 5.6 将webpack.base.conf.js中node属性中的设置改到resolve的fallback中

- 5.7 webpack-merge 修改文件(webpack.dev.conf.js，webpack.prod.conf.js，config/dev.env.js)
```
---    const merge = require('webpack-merge')
+++    const { merge }= require('webpack-merge')
```

- 5.8 copy-webpack-plugin 【将项目中的某单个文件或整个文件夹在打包的时候复制一份到打包后的文件夹中】
```js
/* 去除 */
// new CopyWebpackPlugin([
//     {
//     from: path.resolve(__dirname, '../static'),
//     to: config.build.assetsSubDirectory,
//     ignore: ['.*']
//     }
// ])
/* 去除 */

/* 新增 */
new CopyWebpackPlugin({
  patterns: [{
    from: path.resolve(__dirname, '../static'),
    to: config.dev.assetsSubDirectory,
    globOptions: {
      dot: true,
      gitignore: false,
      ignore: ['.*'],
    }
  }]
})
/* 新增 */
```

- 5.9 HtmlWebpackPlugin中的chunksSortMode现在只有’none’ | ‘auto’ | 'manual’三种配置，目前配置成auto即可
```text
1. 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文
2. 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
```

- 5.10 vue-loader@15.*之后必须带有VueLoaderPlugin，webpack.dev.conf.js
```
{
   test: /\.vue$/,
   loader: 'vue-loader',
--- options: vueLoaderConfig
},
+++    const VueLoaderPlugin = require('vue-loader/lib/plugin')
+++    plugins: [new VueLoaderPlugin()]
```

- 5.11 Webpack 5中，默认情况下不再提供polyfill 需要下载 npm install node-polyfill-webpack-plugin
```js
 plugins: [
    new NodePolyfillPlugin()
  ]
```

### 6. 总结
::: tip
- 以上是 Webpack3 升级至 Webpack5 常见问题，完成后需要运行控制台看看是否存在版本不匹配，API弃用、变换问题
  :::

###  参考及相关链接
- [链接1](https://www.codetd.com/article/14520236)
- [链接2](https://www.imooc.com/article/317726)
