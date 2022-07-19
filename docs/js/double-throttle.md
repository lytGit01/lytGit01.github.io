---
title: 防抖、节流
date: 2022-07-11
categories:
- javaScript
tags:
- javaScript
---

### 手写防抖
```js
// 一般用于监听input变动请求数据，防止频繁请求接口
function double(fn, time = 500, firstFlag = false) {
    let timer = null
    const that = this
    if (timer) clearTimeout(timer)
    const newFn = () => {
        if (firstFlag) {
            if (!timer) {
                fn.apply(null)
            }
            timer = setTimeout(() => {
                timer = null 
            }, time)
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, time)
        }
    }
    return newFn
}
```

### 手写节流
```js
// 在约定时间内，只执行一次，用于屏幕变化
function throttle(fn, time = 500) {
    let beforeTime = new Date().getTime()
    const newFn = () => {
        const nowTime = new Date().getTime()
        if (noewTime > beforeTime) {
            fn.apply(this, arguments)
            beforeTime = nowTime
        }
    }
    return newFn
}
function throttle1(fn, time = 500) {
    let timer = null
    const newFn = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
    return newFn
}
```