---
title: JavaScript 数据类型
date: 2022-07-11
categories:
- javaScript
tags:
- javaScript
---

### 数据类型分为 基本数据类型和引用数据类型
#### 基本数据类型
* String、Boolean、Number、Symbol、Undefined、Null、BigInt
#### 引用数据类型
* Object、Function、Array、Date


### 基本类型与引用类型的区别
```
内存分配不同
1. 基本类型-有序分配在栈内存中
2. 引用类型-无序分配在堆内存中
赋值机制不同
1. 基本类型-重新在栈内存中分配存储空间
2. 引用类型-指向堆中的引用地址
```
### 栈堆区别
```
栈
1. 有序、先进先出
2. 在栈空间内开辟空间
堆
1. 无序
2. 堆中存储的是该数据指向栈空间的地址
```

### typeof、instanceof
```
typeof
1. 用于判断数据的类型
2. typeof null --- Object   typeof array --- Object
3. typeof 无法准确判断 null array Date
instanceof
1. 用于判断某变量是否在属于某个对象的实例
2. array instanceof Array --- true  array instanceof Object --- true 
3. 无法准确判断数据类型
```
### 手写 instanceof
```js
function myInstanceof(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while(true) {
        if (left === null) {
            return false
        } else if (prototype === left) {
            return true
        }
        left = left.__proto__
    }
}
```

### 封装 类型判断
```js
const myTypeof = (data) => {
    return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(myTypeof([1]))
console.log(myTypeof(1))
console.log(myTypeof('456'))
console.log(myTypeof(Symbol(1)))
console.log(myTypeof(new Date()))
```