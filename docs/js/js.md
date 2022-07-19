---
title: JavaScript
date: 2022-07-11
categories:
- javaScript
tags:
- javaScript
---
[[toc]]
### 浅谈变量提升
```js
// 变量提升
console.log(a) // undefined
var a=3;
// 函数提升 (与变量提升不同，函数提升不仅仅提升函数声明，而是提升函数整体)
function chifan(){
    console.log('我要吃米饭')
}
chifan()
function chifan(){
    console.log('我要吃面')
}
chifan() // 我要吃面
// 函数表达式的方式，所以并不存在函数整体提升
var game=function (){
    console.log('玩英雄联盟')
}
game() // 玩英雄联盟
var game=function (){
    console.log('玩CSGO')
}
game() // 玩CSGO

// 特殊情况
console.log(drink) // [function:drink]
function drink(){
    console.log('酒')
}
var drink='饮料'
console.log(drink) // 饮料
```
### 浅谈原型、原型链
```
原型
1. 每个函数都有 prototype 属性，代表该函数的原型，是一个普通对象
2. 每个对象都有 __proto__ 私有属性，代表该对象的原型，是一个普通对象

原型链：访问某个属性时，现在当前作用域寻找，找不到沿原型不断向上寻找，最终到null
```
### 箭头函数的特点
```
1. 箭头函数自身没有this指向，指向其定义时的this加，并且 call、apply、bind 不能改变this指向
2. 箭头函数是匿名函数
3. 箭头函数不能作为构造函数使用 new会报错
4. 不能使用 argument 使用 rest代替
```
### This
```js
function foo() {
	console.log(this.a)
}
var a = 1
foo() // 1

var obj = {
	a: 2,
	foo: foo
}
obj.foo() // 2

// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo()
c.a = 3
console.log(c.a) // 3

// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new
```
### async、await优缺点
### genereator原理
### ===、==区别，什么时候使用
```
1. === 比较值和类型
2. ==  只比较值
```
### 垃圾回收（新生代算法、老生代算法）
### 浅谈闭包
```js
function a() {
    const name = 'nanb'
    return function b () {
        const str =  `姓名: ${name}`
        return str
    }
}

/*
* 函数A返回函数B，函数B内引用函数A中的值
闭包优点
1. 能够访问内部的局部变量
2. 长期保留内部的局部变量
闭包缺点
1. 不能够浏览器垃圾回收机制检测，长期存储在内存中，滥用闭包还造成内存泄漏问题
 */
```
### 数组降维
### 深拷贝
### Promise（手写）