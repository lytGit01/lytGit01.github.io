---
title: Browser
date: 2022-07-11
categories:
- browser
tags:
- browser
---
> 众所周知 JS 是⻔⾮阻塞单线程语⾔，因为在最初 JS 就是为了和浏览器交互⽽ 诞⽣的。
> 如果 JS 是⻔多线程的语⾔话，我们在多个线程中处理 DOM 就可能会发⽣问题
>（⼀个线程中新加节点，另⼀个线程中删除节点），当然可以引⼊ 读写锁解决这个问题

1. 执行全局 Script 代码，这些代码中有同步语句或异步语句，遇到同步语句直接执行，异步语句放入宏任务或微任务的队列。
2. 全局 Script 代码执行完毕后，调用栈 Stack 会清空
3. 从微任务中取出位于队首的回调任务，放入调用栈 Stack 中执行，执行完成后 微任务队列长度减一
4. 继续取出位于队首的任务，放入调用栈 Stack 中执行，以此类推，直到把 微任务队列 中的所有任务都执行完毕。注意，如果在执行微任务过程中，又产生了新的微任务，那么会加入到微任务队列的尾部，也会在这个周期被执行
5. 当 微任务队列 中的所有任务都执行完毕后，此时 微任务队列 为空，调用栈 Stack 也会空
6. 取出宏任务中的队首的任务放入 Stack 中执行
7. 执行完毕后，调用栈Stack为空
8. 重复第3-7个步骤

### 两个重点
> 宏任务一次只从队列中取一个任务执行，执行完后就去执行微任务队列中的任务；
> 微任务队列中所有的任务都会被依次取出来执行，直到 微任务队列 为空；

#### 把 Event Loop 当做一个游乐场的游戏，宏任务队列 中的小朋友(任务)，玩过一次游戏后，需要重新到队尾排队才能再玩，而 微任务队列 中的小朋友(任务)，可以插队继续玩

### 宏观任务
> script、 setTimeout、setInterval、setImmediate、I/O、UI rendering、requestAnimationFrame、MessageChannel
### 微观任务
> process.nextTick、promise、Object.observe、MutationObserver
```
┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<──connections───     │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
└───────────────────────┘
```
#### timer
timers 阶段会执行 setTimeout 和 setInterval
#### I/O
I/O 阶段会执行除了 close 事件，定时器和 setImmediate 的回调
#### idle, prepare
阶段内部实现
#### poll
poll 阶段很重要，这一阶段中，系统会做两件事情
1. 执行到点的定时器
2. 执行 poll 队列中的事件

并且当 poll 中没有定时器的情况下，会发现以下两件事情

1. 如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者系统限制
2. 如果 poll 队列为空，会有两件事发生 
   1. 如果有 setImmediate 需要执行，poll 阶段会停止并且进入到 check 阶段执行 setImmediate 
   2. 如果没有 setImmediate 需要执行，会等待回调被加入到队列中并立即执行回调
   如果有别的定时器需要被执行，会回到 timer 阶段执行回调。
#### check
check 阶段执行 setImmediate
#### close callbacks
close callbacks 阶段执行 close 事件

### 并且在 Node 中，有些情况下的定时器执行顺序是随机的
```js
setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
    console.log('setImmediate');
})
// 这里可能会输出 setTimeout，setImmediate
// 可能也会相反的输出，这取决于性能
// 因为可能进入 event loop 用了不到 1 毫秒，这时候会执行 setImmediate
// 否则会执行 setTimeout
```
### 上面介绍的都是 macrotask 的执行情况，microtask 会在以上每个阶段完成后立即执行。
```js
setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')

    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

// 以上代码在浏览器和 node 中打印情况是不同的
// 浏览器中一定打印 timer1, promise1, timer2, promise2
// node 中可能打印 timer1, timer2, promise1, promise2
// 也可能打印 timer1, promise1, timer2, promise2
```

### Node 中的 process.nextTick 会先于其他 microtask 执行。
```js
setTimeout(() => {
  console.log("timer1");

  Promise.resolve().then(function() {
    console.log("promise1");
  });
}, 0);

process.nextTick(() => {
  console.log("nextTick");
});
// nextTick, timer1, promise1

```