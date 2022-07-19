---
title: promise、async wait
date: 2022-07-11
categories:
- javaScript
  tags:
- javaScript
---

### 手写promise
```js
class MyPromise {
    state = 'padding' // fulfilled、rejected、padding
    value = ''
    fulfilledCbs = []
    rejectedCbs = []
    
    constructor(callBck) {
        try{
          callBck(this.reslove.bind(this), this.reject.bind(this))
        }catch (e) {
          reject(e)
        }
    }
    reslove(val) {
        if (this.state !== 'padding') return
        this.state = 'fulfilled'
        this.value = val
        while(this.fulfilledCbs.length) {
            this.fulfilledCbs.shift()()
        }
    }
    reject(val) {
        if (this.state !== 'padding') return
        this.state = 'rejected'
        this.value = val
        while(this.fulfilledCbs.length) {
          this.rejectedCbs.shift()()
        }
    }
    then(onFulfilledFn, onRejecctFn) {
        onFulfilledFn = typeof onFulfilledFn === 'function' ? onFulfilledFn : val => val;
        onRejecctFn = typeof onRejecctFn === 'function' ? onRejecctFnn : err => { throw err};
        const newPromise = new MyPromise((reslove, reject) => {
            const rerutnPromise = (cb) => {
                try {
                  queueMicrotask(() => {
                    const x = cd(this.value)
                    if (x === newPromise) {
                      throw new Error('不能返回自身...')
                    }
                    if (x instanceof MyPromise) {
                      x.then(reslove, reject)
                    } else {
                      resove(x)
                    }
                  })
                } catch (e) {
                    reject(e)
                }
                
            }
          if (this.state === 'padding') {
            this.rejectedCbs.push(rerutnPromise.bind(this, onFulfilledFn))
            this.rejectedCbs.push(rerutnPromise.bind(this, onRejecctFn))
          } else if (this.state === 'rejected') {
            rerutnPromise(onFulfilledFn)
          } else if (this.state === 'fulfilled') {
            rerutnPromise(onRejecctFn)
          }
        })
      return newPromise
    }
    
}
const fn = new Promise((reslove, reject) => {
    reslove()
})
fn.then(reslove => {
    
}, reject => {})
```