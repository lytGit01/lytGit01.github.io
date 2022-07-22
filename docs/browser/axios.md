---
title: Axios
date: 2022-07-11
categories:
- browser
tags:
- browser
---

### axios为什么既能在浏览器环境运行又能在服务器(node)环境运行？
> 因为axios在浏览器端使用XMLHttpRequest 对象发送ajax请求；
> 在node环境使用  http 对象发送ajax请求。XMLHttpRequest 时一个API，
> 它为客户端提供了在客户端和服务器之间传输数据的功能；
> process对象是一个global(全局变量)，提供有关信息，控制当前的node.js进程。
> 通过判断XMLHttpRequest和process 这两个全局变量来判断程序的运行环境，
> 从而在不同的环境提供不同的http请求模块，实现客户端和服务端程序的兼容。

### axios的特点有哪些
* Axios是一个基于 promise 的HTTP库，支持promise所有的API
* 它可以拦截请求和响应
* 它可以转换请求数据和响应数据，并对响应回来的内容自动转换成JSON类型的数据
* 安全性更高，客户端支持防御XSRF

### axios 原理
> createInstance 底层根据默认设置 新建一个 Axios 对象，
> axios 中所有的请求[ axios，axios.get，axios.post等…] 
> 内部调用的都是Axios.prototype.request，将 Axios.prototype.request 的内部 this 绑定到新建的 Axios 对象上，
> 从而形成一个axios实例。新建一个Axios对象时，会有两个拦截器，request拦截器，response拦截器。

* 请求拦截器 axios.interceptors.request
* 请求拦截器的作用是在请求发送前进行一些操作，例如在每个请求体里加上token，统一做了处理如果以后要改也非常容易
```js
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么，例如加入token
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
```

* 响应拦截器 axios.interceptors.response
* 响应拦截器的作用是在接收到响应后进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页。
```js
axios.interceptors.response.use(function (response) {
    // 在接收响应做些什么，例如跳转到登录页
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

### axios 有哪些常用方法
* axios 有 get，post，put，patch，delete 等请求方式
* get、post 返回的实例都是 promise，所以可以使用 promise 的方法

> axios.all() 可以实现多个请求，且请求都需要在完成后才再去做某事。
> axios.all() 使用的是 promise.all() 实现的，来看看 axios 中的源码
```js
let requestArr = [
axios.get('apiURL/1'),
axios.get('apiURL/2'),
axios.post('apiURL/3', {id: 3})
]
axios.all(requestArr).then(res => {
console.log(res)
})
```

### axios相关配置
* url 是用于请求的服务器URL

* method 是创建请求时使用的方法，默认是 get

* baseURL 将自动加在 url 前面，除非 url 是一个绝对URL。它可以通过设置一个 baseURL 便于为 axios 实例的方法传递相对URL

* transformRequest 允许在向服务器发送前，修改请求数据，只能用在PUT，POST和PATCH这几个请求方法

* headers 是即将被发送的自定义请求头
```js
headers: {
'X-Requested-With':'XMLHttpRequest'
}
```

* params 是即将与请求一起发送的URL参数，必须是一个无格式对象(plainobject)或 URLSearchParams 对象
```js
params: {
    ID:12345
}
```
* auth 表示应该使用 HTTP 基础验证，并提供凭据
* 这将设置一个Authorization头，覆写掉现有的任意使用headers设置的自定义Authorization头
```js
auth:{
  username: 'janedoe',
  password: 's00pers3cret'
}
```
* proxy 定义代理服务器的主机名称和端口
* auth 表示 HTTP 基础验证应当用于连接代理，并提供凭据
* 这将会设置一个 Proxy-Authorization 头，覆写掉已有的通过使用 header 设置的自定义Proxy-Authorization头。

```js
proxy: {
  host: '127.0.0.1',
  port: 9000,
    auth: {
    username: 'mikeymike',
    password: 'rapunz3l'
  }
}
```

