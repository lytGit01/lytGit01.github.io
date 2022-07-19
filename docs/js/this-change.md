---
title: call、apply、bind
date: 2022-07-11
categories:
- javaScript
tags:
- javaScript
---

### 手写call
```
function myCall(content) {
    const that = content || windows
    const args = [...arguments].slice(1)
    that.fn = this
    const reslut = that.fn(...args)
    delete that.fn
    return reslut
}
```

### 手写apply
```
function myApply(content) {
    const that = content || windows
    const args = arguments[1]
    that.fn = this
    let reslut
    if (args) {
        reslut = that.fn(...args)
    } else {
        reslut = that.fn()
    }
    delete that.fn
    return reslut
}
```

### 手写bind
```
function myBind(content) {
    const that = this
    const args = [...arguments].slice(1)
    const fn = function F() {
        const args1 = [...args, ...arguments]
        return that.apply(that.prototype.isPrototypeOf(F) ? this : content, args1)
    }
    rerutn fn
}