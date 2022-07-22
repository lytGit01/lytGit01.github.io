---
title: Fetch
date: 2022-07-11
categories:
- browser
tags:
- browser
---

### 介绍 Fetch
* fetch：是 http 的数据请求方式，是 XMLHttpRequest 的一种代替方案，没有使用到 XMLHttpRequest 这个类。fetch 不是 ajax，而是原生的 js。fetch() 使用 Promise，不使用回调函数。fetch 是 ES8 中新增的 api，兼容性不是很好，IE 完全不兼容 fetch 写法。
* fetch() 采用模块化设计，API 分散在 Response 对象、Request 对象、Headers 对象上。
* fetch() 通过数据流（Stream 对象）处理数据，对于请求大文件或者网速慢的场景相当有用。XMLHttpRequest 没有使用数据流，所有的请求都必须完成后才拿到
* 在默认情况下 fetch 不会接受或者发送 cookies

## fetch(url, optionObj) 基本使用
* 接收第一个参数为请求的 url，默认的请求方式是 get。
* 第二个是可选参数 optionObj，可以控制不同配置的属性，比如 method：属性是字符串。headers: 一个对象，可以设定 http 的请求头。body: POST 请求的数据体，属性也是字符串。credentials 表示是否可以携带 cookie，includes 表示是否同源都包含 cookie。
* fetch 参数没有同步的设定，因为 fetch 是基于 promise 封装的本身就是异步。
* fetch 虽然使用的是 promise 封装的，但是 catch 函数不能直接的捕获到错误，需要在第一个 then 函数内做些操作。 fetch 发送 post 请求时，当发生的是跨域请求，fetch 会先发送一个 OPTIONS 请求，来确认服务器是否允许接受请求，这个请求主要是用来询问服务器是否允许修改 header 头等一些操作。服务器同意后返回 204，才会发送真正的请求。没有发生跨域的情况下不会产生两次请求。

> get 请求
```js
const pro = fetch('https://xxx')
pro.then( response =>
    response.json()
).catch( err => {
    console.log(err)
})
```
> post 请求
```js
const URL =  'https://xxx'
const init = {
    method: 'POST',
    header: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    data: 'id=12&name=小新',
    credentials: 'include'
}
const pro = fetch(URL, init)
    pro.then( response =>
    response.json()
).catch( err => {
    console.log(err)
})
```

### fetch 的三个模块
* Response 模块：fetch 请求发送后，会得到一个服务器的响应 response，这个响应对于着 http 的回应。
* Request 模块：这是用于请求服务器的模块，上面提到的 data, header, method 都是 Request 模块的属性。
* Headers，这是一个在 Response.headers 上的属性用于操控响应头的信息。
* 
### 发送 post 2 次请求的原因
* 使用 fetch 发送 post 请求时如果是跨域，那么导致 fetch 第一次发送了一个Options 请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。

### fetch 的缺点
fetch 的 get/head 请求不能设置 body 属性。
fetch 请求后，服务器返回的状态码无论是多少包括(4xx, 5xx)，fetch 都不认为是失败的，也就是使用 catch 也不能直接捕捉到错误，需要再第一个 then 中做一些处理。

### 实现一个 Ajax (将原生的 ajax 封装成 promise)
```js
var myNewAjax = function (url) {
return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.send(data);
    xhr.onreadystatechange = function () {
    if (xhr.status == 200 && readyState == 4) {
    var json = JSON.parse(xhr.responseText);
        resolve(json)
    } else if (xhr.readyState == 4 && xhr.status != 200) {
        reject('error');
    }
    }
})
}
```

### Fetch VS Ajax VS Axios 区别
* 传统的 ajax 利用的是 XMLHttpRequest 这个对象，和后端进行交互。JQuery ajax 是对原生 XHR 的封装，多请求间有嵌套的话就会出现回调地狱的问题。
* axios 使用 promise 封装 xhr，解决了回调地狱问题
* fetch 不是 XMLHttpRequest，fetch 是原生的 js，使用的是 promise。

### Fetch 和 Ajax 比有什么优点？
* fetch 使用的是 promise 方便使用异步，没有回调地狱的问题。

### 如何实现一个 ajax 请求？如果我想发出两个有顺序的 ajax 需要怎么做？
* 实现 ajax 的请求就是上面的创建 ajax 的几个步骤。实现两个有顺序的 ajax 可以使用 promise.then()

### Ajax 怎么解决浏览器缓存问题
* 设置请求头，在 ajax 发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0") 或 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
* 在 URL 后面加上一个随机数："fresh=" + Math.random()。 或在后面加上时间戳："nowtTime=" + new Date().getTime()。
* 如果是使用 jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有 ajax 都会执行这条语句就是不需要保存缓存记录。
