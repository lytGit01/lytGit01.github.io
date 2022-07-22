---
title: Ajax
date: 2022-07-11
categories:
- browser
tags:
- browser
---

### 创建 Ajax
> 1. 创建 Ajax实例：let xhr = new XMLHttpRequest()，注意：IE6 不兼容这种写法
> 2. 打开请求，配置请求前的配置项：共 5个参数 xhr.open([http method], [url], [async], [userName], [userPass])
* http methods 有常用的请求方式有：post，get，delete，put，head，options，trace，connect。
* url：是想服务器请求的 api。
* async：代表异步，默认是 true 异步，false 是同步。
* userName、userPass：代表用户名和密码
> 3. http methods 细分：
* delete：删除服务器端的某些数据，一般是文件。
* put：向服务器上存放某些内容，一般是文件。
* head：只是获取从服务器端返回的请求头信息，不要响应主体的内容。
* options：一般用于向服务器发送探测性请求，看是否连接成功。
> 3. 事件监听 readystatechange，一般监听 ajax 状态码发生改变的事件，这个事件可以获取服务器返回的响应主和请求头。xhr.onreadystatechange = function (){}，对于同步执行的 Ajax 请求代码步骤三要放在send的前面，否则没有意义。

> 4. 发送 ajax 请求，ajax 任务开始执行。xhr.send([])，XMLHttpRequest.send() 方法中如果 Ajax 请求是异步的则这个方法发送请求后就会返回，如果Ajax请求是同步的，那么请求必须知道响应后才会返回。 第五步算上的话，就是读取返回的数据 xhr.responseText 。

```js
// 1. 创建 XMLHttpRequest 实例
let xhr = XMLHttpRequest()
// 2. 打开和服务器的连接
xhr.open('get', 'URL')
// 3.发送
xhr.send()
// 4. 接收变化。
xhr.onreadystatechange = () => {
if(xhr.readyState == 4 && xhr.status == 200){   // readyState: ajax 状态，status：http 请求状态
console.log(xhr.responseText);   //响应主体
}
}
```

### Ajax 状态和 HTTP 状态码
> Ajax 状态一共有 5 种 xhr.readyState，分别是 0, 1, 2, 3, 4
* 状态 0：unsent，刚创建的 XMLHttpRequest 实例，还没有发送。
* 状态 1：（载入）已调用 send() 方法，正在发送请求。
* 状态 2：（载入完成）send() 方法执行完成，已经接收到全部响应内容
* 状态 3：loading（交互）正在解析响应内容
* 状态 4：done 表示响应的主体内容解析完成，可以在客户端调用了

> HTTP 常见的状态码
* 1xx：信息，服务器收到请求，需要请求者继续执行操作。
* 2xx：表示请求已经被服务器接收，理解，请接受。常见的有，200 表示ok，表示服务能够返回信息。204 No Content 无内容。服务器成功处理，但未返回内容。
* 3xx：重定向，需要进一步的操作以完成请求。一类重要的高频考点：301：表示永久转移，返回旧域名会跳转到心域名。302：临时转移。一般用于服务器负载均衡，但服务器的并发数达到最大时，服务器会将后续访问的用户转移到其他服务器上去。307：表示临时重定向。304：表示不设置缓存，对于不经常更新的文件，例如css/js/html文件，服务器会结合客户端设置304状态，加载过的资源下次请求时会在客户端中获取。
* 4xx：客户端错误，请求包含语法错误或无法完成请求，无法被服务器端理解。400：表示请求的参数错误。401：表示无权限访问。404：表示请求的资源不存在。413：表示和服务器的交互过大。
* 5xx：服务器端出错，服务器在处理请求的过程中发生了错误。500：表示服务器端出现未知的错误。503：服务器超负荷。

### Ajax 中常用的属性和方法
* onabort：表示请求中断后要处理的事，和 xhr.abort() 一起使用。
* ontimeout：表示请求的超时，执行的方法，和 timeout 设定的事件一起使用。
* response：响应的主体内容。
* responseText：响应的具体内容是字符串，一般是 json 字符串。
* responseXML：响应的具体内容是文档。
* status：http 的状态码。
* statusText：状态码描述。
* withCredentials：表示是否允许跨域。
* getAllResponseHeaders：获取所有响应头信息。
* xhr.open()：打开URL请求。
* xhr.send()：表示发送 ajax。
* setRequestHeader()：设置请求头。这个属性在必须在 xhr.open() 后面。

### 思考：post 和 get 有什么区别
> http 的所有请求方法中都可以从服务端获取数据和传递内容。get：主要是从服务器获取数据。post 主要发送数据给服务器。 GET 和 POST 本质上就是 TCP 链接，并无差别，但是由于HTTP的规定和浏览器/服务器的限制具体由如下的区别：
* 从缓存的角度上说，get 请求会被浏览器默认缓存下来，而 post 请求默认不会。
* 从参数来说，get 请求的参数一般放在 url 中，post 请求是放在请求主体中，因此 post 请求更安全一些。
* 从 TCP 上来说，get 产生一个 TCP 数据包；post 产生两个 TCP 数据包。对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应200（返回数据）；而对于 POST，浏览器先发送 header，服务器响应 100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。虽然 post 请求需要发送两次，但是时间上是基本差别不大的。还有并不是所有浏览器都会在 POST 中发送两次包，Firefox 就只发送一次。
