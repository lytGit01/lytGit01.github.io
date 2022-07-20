---
title: setTimeout倒计时误差
date: 2022-07-11
categories:
- browser
tags:
- browser
---

```js
const start = new Date().getTime()
const intval = 1000
let offset = 0
let time = intval - offset
let cont = 0

function loop() {
    cont++
    offset = new Date().getTime() - (start + cont * intval)
    time = intval - offset
    setTimeout(loop, time > 0 ? time : 0)
}
setTimeout(loop, time)
```