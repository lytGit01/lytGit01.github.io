(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{472:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"介绍-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍-fetch"}},[t._v("#")]),t._v(" 介绍 Fetch")]),t._v(" "),s("ul",[s("li",[t._v("fetch：是 http 的数据请求方式，是 XMLHttpRequest 的一种代替方案，没有使用到 XMLHttpRequest 这个类。fetch 不是 ajax，而是原生的 js。fetch() 使用 Promise，不使用回调函数。fetch 是 ES8 中新增的 api，兼容性不是很好，IE 完全不兼容 fetch 写法。")]),t._v(" "),s("li",[t._v("fetch() 采用模块化设计，API 分散在 Response 对象、Request 对象、Headers 对象上。")]),t._v(" "),s("li",[t._v("fetch() 通过数据流（Stream 对象）处理数据，对于请求大文件或者网速慢的场景相当有用。XMLHttpRequest 没有使用数据流，所有的请求都必须完成后才拿到")]),t._v(" "),s("li",[t._v("在默认情况下 fetch 不会接受或者发送 cookies")])]),t._v(" "),s("h2",{attrs:{id:"fetch-url-optionobj-基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-url-optionobj-基本使用"}},[t._v("#")]),t._v(" fetch(url, optionObj) 基本使用")]),t._v(" "),s("ul",[s("li",[t._v("接收第一个参数为请求的 url，默认的请求方式是 get。")]),t._v(" "),s("li",[t._v("第二个是可选参数 optionObj，可以控制不同配置的属性，比如 method：属性是字符串。headers: 一个对象，可以设定 http 的请求头。body: POST 请求的数据体，属性也是字符串。credentials 表示是否可以携带 cookie，includes 表示是否同源都包含 cookie。")]),t._v(" "),s("li",[t._v("fetch 参数没有同步的设定，因为 fetch 是基于 promise 封装的本身就是异步。")]),t._v(" "),s("li",[t._v("fetch 虽然使用的是 promise 封装的，但是 catch 函数不能直接的捕获到错误，需要在第一个 then 函数内做些操作。 fetch 发送 post 请求时，当发生的是跨域请求，fetch 会先发送一个 OPTIONS 请求，来确认服务器是否允许接受请求，这个请求主要是用来询问服务器是否允许修改 header 头等一些操作。服务器同意后返回 204，才会发送真正的请求。没有发生跨域的情况下不会产生两次请求。")])]),t._v(" "),s("blockquote",[s("p",[t._v("get 请求")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pro "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("post 请求")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://xxx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"Content-type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/x-www-form-urlencoded; charset=UTF-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id=12&name=小新'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("credentials")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'include'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pro "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h3",{attrs:{id:"fetch-的三个模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-的三个模块"}},[t._v("#")]),t._v(" fetch 的三个模块")]),t._v(" "),s("ul",[s("li",[t._v("Response 模块：fetch 请求发送后，会得到一个服务器的响应 response，这个响应对于着 http 的回应。")]),t._v(" "),s("li",[t._v("Request 模块：这是用于请求服务器的模块，上面提到的 data, header, method 都是 Request 模块的属性。")]),t._v(" "),s("li",[t._v("Headers，这是一个在 Response.headers 上的属性用于操控响应头的信息。")]),t._v(" "),s("li")]),t._v(" "),s("h3",{attrs:{id:"发送-post-2-次请求的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送-post-2-次请求的原因"}},[t._v("#")]),t._v(" 发送 post 2 次请求的原因")]),t._v(" "),s("ul",[s("li",[t._v("使用 fetch 发送 post 请求时如果是跨域，那么导致 fetch 第一次发送了一个Options 请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。")])]),t._v(" "),s("h3",{attrs:{id:"fetch-的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-的缺点"}},[t._v("#")]),t._v(" fetch 的缺点")]),t._v(" "),s("p",[t._v("fetch 的 get/head 请求不能设置 body 属性。\nfetch 请求后，服务器返回的状态码无论是多少包括(4xx, 5xx)，fetch 都不认为是失败的，也就是使用 catch 也不能直接捕捉到错误，需要再第一个 then 中做一些处理。")]),t._v(" "),s("h3",{attrs:{id:"实现一个-ajax-将原生的-ajax-封装成-promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个-ajax-将原生的-ajax-封装成-promise"}},[t._v("#")]),t._v(" 实现一个 Ajax (将原生的 ajax 封装成 promise)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myNewAjax")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h3",{attrs:{id:"fetch-vs-ajax-vs-axios-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-vs-ajax-vs-axios-区别"}},[t._v("#")]),t._v(" Fetch VS Ajax VS Axios 区别")]),t._v(" "),s("ul",[s("li",[t._v("传统的 ajax 利用的是 XMLHttpRequest 这个对象，和后端进行交互。JQuery ajax 是对原生 XHR 的封装，多请求间有嵌套的话就会出现回调地狱的问题。")]),t._v(" "),s("li",[t._v("axios 使用 promise 封装 xhr，解决了回调地狱问题")]),t._v(" "),s("li",[t._v("fetch 不是 XMLHttpRequest，fetch 是原生的 js，使用的是 promise。")])]),t._v(" "),s("h3",{attrs:{id:"fetch-和-ajax-比有什么优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-和-ajax-比有什么优点"}},[t._v("#")]),t._v(" Fetch 和 Ajax 比有什么优点？")]),t._v(" "),s("ul",[s("li",[t._v("fetch 使用的是 promise 方便使用异步，没有回调地狱的问题。")])]),t._v(" "),s("h3",{attrs:{id:"如何实现一个-ajax-请求-如果我想发出两个有顺序的-ajax-需要怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个-ajax-请求-如果我想发出两个有顺序的-ajax-需要怎么做"}},[t._v("#")]),t._v(" 如何实现一个 ajax 请求？如果我想发出两个有顺序的 ajax 需要怎么做？")]),t._v(" "),s("ul",[s("li",[t._v("实现 ajax 的请求就是上面的创建 ajax 的几个步骤。实现两个有顺序的 ajax 可以使用 promise.then()")])]),t._v(" "),s("h3",{attrs:{id:"ajax-怎么解决浏览器缓存问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax-怎么解决浏览器缓存问题"}},[t._v("#")]),t._v(" Ajax 怎么解决浏览器缓存问题")]),t._v(" "),s("ul",[s("li",[t._v('设置请求头，在 ajax 发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0") 或 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。')]),t._v(" "),s("li",[t._v('在 URL 后面加上一个随机数："fresh=" + Math.random()。 或在后面加上时间戳："nowtTime=" + new Date().getTime()。')]),t._v(" "),s("li",[t._v("如果是使用 jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有 ajax 都会执行这条语句就是不需要保存缓存记录。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);