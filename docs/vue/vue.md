---
title: Vue
date: 2022-07-11
categories:
- vue
tags:
- vue
---

[[toc]]
### vue 生命周期
* beforeCreate （创建前）vue实例的挂载元素$el和数据对象 data都是undefined, 还未初始化
* created (创建后) 完成了 data数据初始化, el还未初始化
* beforeMount (载入前) vue实例的$el和data都初始化了, 相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。
* mounted (载入后) 在el 被新创建的 vm.$el替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互
* beforeUpdate (更新前) 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
* updated （更新后） 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
* beforeDestroy  (销毁前） 在实例销毁之前调用。实例仍然完全可用。
* destroyed (销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用
*　activated：keep-alive是在被包裹组件被激活的状态下使用的生命周期钩子
* deactivated：keep-alive在被包裹组件停止使用时调用

### vue子组件和父组件执行的顺序
```
// 创建过程
父 beforeCreate
父 create
父 beforeMount
子 beforeCreate
子 create
子 beforeMount
子 mounted
父 mounted

// 更新过程
父 beforeUpdate
子 beforeUpdate
子 updated
父 updated

// 销毁过程
父 beforeDestory
子 beforeDestory
子 destoryd
父 destoryd
```

### Vue的双向数据绑定原理是什么
> vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
具体实现步骤，感兴趣的可以看看:

* 当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 都加上 setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
* 在自身实例化时往属性订阅器(dep)里面添加自己
* 自身必须有一个update()方法
* 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
* MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果

### Proxy 相比于 defineProperty 的优势
> Object.defineProperty() 的问题主要有三个：
* 不能监听数组的变化
* 必须遍历对象的每个属性
* 必须深层遍历嵌套的对象

> Proxy 在 ES2015 规范中被正式加入，它有以下几个特点：
* 针对对象：针对整个对象，而不是对象的某个属性，所以也就不需要对 keys 进行遍历。这解决了上述 Object.defineProperty() 第二个问题
* 支持数组：Proxy 不需要对数组的方法进行重载，省去了众多 hack，减少代码量等于减少了维护成本，而且标准的就是最好的。

> 除了上述两点之外，Proxy 还拥有以下优势：
* Proxy 的第二个参数可以有 13 种拦截方法，这比起 Object.defineProperty() 要更加丰富
* Proxy 作为新标准受到浏览器厂商的重点关注和性能优化，相比之下 Object.defineProperty() 是一个已有的老方法。

> 13中拦截方式
* get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']
* set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值
* has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值
* deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值
* ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性
* getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
* defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值
* preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值
* getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象
* isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值
* setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截
* apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
* construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)


### vue-router 有哪几种导航守卫?
* 全局守卫
* 路由独享守卫
* 路由组件内的守卫

> 1.全局守卫 (vue-router全局有三个守卫)


router.beforeEach 全局前置守卫 进入路由之前
router.beforeResolve 全局解析守卫(2.5.0+) 在beforeRouteEnter调用之后调用
router.afterEach 全局后置钩子 进入路由之后

使用方法:
```js
// main.js 入口文件
import router from './router'; // 引入路由
router.beforeEach((to, from, next) => {
next();
});
router.beforeResolve((to, from, next) => {
next();
});
router.afterEach((to, from) => {
console.log('afterEach 全局后置钩子');
});
```
> 2.路由独享守卫 (如果你不想全局配置守卫的话，你可以为某些路由单独配置守卫：)
```js
const router = new VueRouter({
routes: [
{
path: '/foo',
component: Foo,
beforeEnter: (to, from, next) => {
// 参数用法什么的都一样,调用顺序在全局前置守卫后面，所以不会被全局守卫覆盖
// ...
}
}
]
})
```
> 3.路由组件内的守卫

beforeRouteEnter 进入路由前, 在路由独享守卫后调用 不能 获取组件实例 this，组件实例还没被创建
beforeRouteUpdate (2.2) 路由复用同一个组件时, 在当前路由改变，但是该组件被复用时调用 可以访问组件实例 this
beforeRouteLeave 离开当前路由时, 导航离开该组件的对应路由时调用，可以访问组件实例 this

### Vue的路由实现:hash模式 和 history模式
> hash 模式
* 工作原理: 监听网页的hash值变化 —> onhashchange事件, 获取location.hash
* 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
* 会给用户好像跳转了网页一样的感觉, 但是实际上没有跳转
主要用在单页面应用(SPA)
```js
// 模拟原理
// 监听页面hash值变化
window.onhashchange = function(){
    // 获取当前url的哈希值 
    const _hash = location.hash
    // 根据不同的哈希值显示不同的内容
    switch(_hash) {
         case '/#a':
            document.querySelector('#app').innerHTML = '<h1>我是页面1内容</h1>'
            break;
         case '/#b':
            document.querySelector('#app').innerHTML = '<h1>我是页面2内容</h1>'
            break;
         case '/#c':
            document.querySelector('#app').innerHTML = '<h1>我是页面3内容</h1>'
            break;
    } 
}
```

> history 模式
* 工作原理: 主要利用 history.pushState() API 来改变URL, 而不刷新页面.
* 其实一共有五种模式可以实现改变URL, 而不刷新页面.
history.pushState()
history.replaceState()
history.go()
history.back() --> 等价于 history.go(-1)
history.forward() --> 等价于 history.go(1)

>需要后台配置支持, 如果输入一个并不存在的url, 需要后端配置做 “兜底配置”, 不是粗暴的返回404, 而是返回首页


### vue路由传参
```
// 1. 页面刷新数据不会丢失
methods：{
insurance(id) {
    //直接调用$router.push 实现携带参数的跳转
    this.$router.push({
        path: `/particulars/${id}`,
    })
}
// 需要对应路由配置如下
route = {
    path: '/particulars/:id',
    name: 'particulars',
    component: particulars
}
// 2. 页面刷新数据会丢失   
methods：{
insurance(id) {
    this.$router.push({
        name: 'particulars',
        params: {
        id: id
        }
    })
}
//  子组件中: 这样来获取参数
his.$route.params.id
// 3. 使用path来匹配路由，然后通过query来传递参数
methods：{
insurance(id) {
    this.$router.push({
        path: '/particulars',
        query: {
        id: id
        }
    })
}
// 子组件中: 这样来获取参数
this.$route.query.id
```
### 组件之间的传值通信
> 父-子通信
* v-bind、props
* 父组件.$parent
* $attrs、$listeners多层透传

> 子-父通信
* 子组件.$child
* $emit

> 兄弟组件通信
> Bus($off、$emit、$on、$once)

> 孙子组件通信
* provide、inject

> 全局传递
> vuex、浏览器缓存

### nextTick的原理
> nextTick 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。
> 在 Vue 2.4 之前都是使用的 microtasks，但是 microtasks 的优先级过高，在某些情况下可能会出现比事件冒泡更快的情况，但如果都使用 macrotasks 又可能会出现渲染的性能问题。所以在新版本中，会默认使用 microtasks，但在特殊情况下会使用 macrotasks，比如 v-on。
> 对于实现 macrotasks ，会先判断是否能使用 setImmediate ，不能的话降级为 MessageChannel ，以上都不行的话就使用 setTimeout
```js
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else if (
  typeof MessageChannel !== 'undefined' &&
  (isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === '[object MessageChannelConstructor]')
) {
  const channel = new MessageChannel()
  const port = channel.port2
  channel.port1.onmessage = flushCallbacks
  macroTimerFunc = () => {
    port.postMessage(1)
  }
} else {
  /* istanbul ignore next */
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```

### v-model
* v-model底层原理实际上是分别利用了v-bind用来绑定value的值，用v-on去绑定input标准事件，这是事件用来监听当输入域内容发生变化的时候来执行一些事情。
* 具体做的事情就是通过$event这个事件对象获取到最新的输入域的值，然后把最新的值赋值给旧的值，从而进行数据的更新。这样的话就完成了双向数据绑定。

> v-model用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：
1、v-bind绑定一个value属性；
2、v-on指令给当前元素绑定input事件。


### watch 和 computed 的区别和运用的场景

* 前者是计算属性，依赖其他属性计算值。并且 computer 的值有缓存，只有当计算值变化才变化触发渲染。后者监听到值得变化就会执行回调
computer 就是简单计算一下，适用于渲染页面。watch 适合做一些复杂业务逻辑
* 前者有依赖两个 watcher，computer watcher 和渲染 watcher。判断计算出的值变化后渲染 watcher 派发更新触发渲染

### VNODE
> 其实 VNode 是对真实 DOM 的一种抽象描述，它的核心定义无非就几个关键属性，标签名、数据、子节点、键值等，其它属性都是用来扩展 VNode 的灵活性以及实现一些特殊 feature 的。由于 VNode 只是用来映射到真实 DOM 的渲染，不需要包含操作 DOM 的方法，因此它是非常轻量和简单的。

> Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。那么在 Vue.js 中，VNode 的 create 是通过之前提到的 createElement 方法创建的，我们接下来分析这部分的实现。

```
export default class VNode {
  tag: string | void;
  data: VNodeData | void;
  children: ?Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  fnScopeId: ?string; // functional scope id support

  constructor (
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    this.ns = undefined
    this.context = context
    this.fnContext = undefined
    this.fnOptions = undefined
    this.fnScopeId = undefined
    this.key = data && data.key
    this.componentOptions = componentOptions
    this.componentInstance = undefined
    this.parent = undefined
    this.raw = false
    this.isStatic = false
    this.isRootInsert = true
    this.isComment = false
    this.isCloned = false
    this.isOnce = false
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  get child (): Component | void {
    return this.componentInstance
  }
}
```


