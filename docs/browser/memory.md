---
title: 浏览器存储
date: 2022-07-11
categories:
- browser
tags:
- browser
---

| 特性     | cookie          | localStrong    | sessionStrong   | indexDB     |
|--------|-----------------|----------------|-----------------|-------------|
| 声明周期   | 可以一直存在、可以设置过期时间 | 一直存在           | 页面关闭后清除         | 一直存在        |
| 存储大小   | 5k              | 5mb            | 5mb | 无限          |
| 数据通信   | 默认携带在head中      | 不参与 | 不参与 | 不参与 |

### cookie

| 属性   | 作用                       |
|------|--------------------------|
| name | cookie属性名称               |
| value | cookie属性值，加密处理，防止安全问题    |
| http-only | 不能通过js访问cookie，减少安全问题    |
| secure | 只能在https中携带              |
| same-site | 不在跨语请求中携带cookie，减少CSRF攻击 |

###  怎么判断⻚⾯是否加载完成

| 属性               | 作用                |
|------------------|-------------------|
| load             | html、css、js全部加载完成 |
| DOMContentLoaded | html加载完成          |


### 如何解决跨域
```js
// JSONP 
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script> 
<script>
    function jsonp(data) {
        console.log(data) 
    }
</script>
// 在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要⾃⼰封装⼀ 个 JSONP ，以下是简单实现
function jsonp(url, jsonpCallback, success) {
    let script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.type = "text/javascript";
    window[jsonpCallback] = function(data) {
        success && success(data);
    };
    document.body.appendChild(script); }
jsonp(
    "http://xxx",
    "callback",
    function(value) {
        console.log(value);
    } )
```

### CORS
> ORS 需要浏览器和后端同时⽀持。 IE 8 和 9 需要通过 XDomainRequest 来实现。 
> 浏览器会⾃动进⾏ CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS ，就实现了跨域。 
> 服务端设置 Access-Control-Allow-Origin 就可以开启 CORS 。
> 该属性表示哪些域名 可以访问资源，如果设置通配符则表示所有⽹站都可以访问资源。

### document.domain
> 该⽅式只能⽤于⼆级域名相同的情况下，⽐如 a.test.com 和 b.test.com 适⽤于该⽅式。
> 只需要给⻚⾯添加 document.domain = 'test.com' 表示⼆级域名都相同就可以实现跨域


### postMessage
```js
window.parent.postMessage('message', 'http://test.com');
// 接收消息端
var mc = new MessageChannel();
mc.addEventListener('message', (event) => {
     var origin = event.origin || event.originalEvent.origin;
     if (origin === 'http://test.com') {
        console.log('验证通过')
     } 
});
```
