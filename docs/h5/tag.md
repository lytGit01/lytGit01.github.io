---
title: 标签
date: 2022-07-11
categories:
- h5
tags:
- h5
---

### 语义化标签
| 标签	         | 描述                  |
|-------------|---------------------|
| hrader	     | 定义了文档的头部区域          |
| footer	     | 定义了文档的尾部区域          |
| nav	        | 定义文档的导航             |
| section	    | 定义页面独立的内容区域         |
| article	    | 定义页面独立的内容区域         |
| aside	      | 定义页面的侧边栏内容          |
| summary	    | 标签包含 details 元素的标题  |
| detailes	   | 用于描述文档或文档某个部分的细节    |
| dialog	     | 定义对话框，比如提示框         |
| main	       | 主要的                 |
| data	       | 数据                  |
| time	       | 时间                  |
| mark	       | 作记号                 |
| figure	     | 图形                  |
| figcaption	 | 是与其相关联的图片的说明/标题     |
| output	     | 输出                  |
| output	     | 输出                  |
| progress	进度 |
| meter	      | 元素用来显示已知范围的标量值或者分数值 |

###  新的表单 Input 输入类型
| 输入类型            | 	描述              |
|-----------------|------------------|
| color	          | 主要用于选取颜色         |
| date	           | 从一个日期选择器选择一个日期   |
| datetime	       | 选择一个日期（UTC 时间    |
| datetime-local	 | 选择一个日期和时间 (无时区)  |
| email	          | 包含 e-mail 地址的输入域 |
| month	          | 选择一个月份           |
| number	         | 数值的输入域           |
| tel	            | 定义输入电话号码字段       |
| time	           | 选择一个时间           |
| url	            | URL 地址的输入域       |
| week	           | 选择周和年            |

### 表单元素
| 表单元素	     | 描述                              |
|-----------|---------------------------------|
| datalist	 | 元素规定输入域的选项列表                    |
| 使用 input  | 元素的 list 属性与 datalist 元素的 id 绑定 |
| keygen	   | 提供一种验证用户的可靠方标签规定用于表单的密钥对生成器字段   |
| output	   | 用于不同类型的输出比如计算或脚本输出              |

### HTML5 新增的表单属性
> placehoder 属性，简短的提示在用户输入值前会显示在输入域上。即我们常 见的输入框默认提示，在用户输入后消失。
> required  属性，是一个 boolean 属性。要求填写的输入域不能为空
> pattern 属性，描述了一个正则表达式用于验证 input 元素的值。
> min 和 max 属性，设置元素最小值与最大值。
> step 属性，为输入域规定合法的数字间隔。
> height 和 width 属性，用于 image 类型的 input 标签的图像高度和宽度。
> autofocus 属性，是一个 boolean 属性。规定在页面加载时，域自动地获得焦点。
> multiple 属性 ，是一个 boolean 属性。规定 input 元素中可选择多个值。

### 音频
```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
    您的浏览器不支持 audio 元素。
</audio>
/* 
* control 属性供添加播放、暂停和音量控件。
* 在<audio> 与 </audio> 之间你需要插入浏览器不支持的<audio>元素的提示文本 。 * <audio> 元素允许使用多个 <source> 元素. <source> 元素可以链接不同的音频文件，浏览器将使用第一个支持的音频文 * 目前, <audio>元素支持三种音频格式文件: MP3, Wav, 和 Ogg
*/
```

### 视频
```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持Video标签。
</video>
/*
* control 提供了 播放、暂停和音量控件来控制视频。也可以使用dom操作来控制视频的播放暂停，如 play() 和 pause() 方法。
* 同时 video 元素也提供了 width 和 height 属性控制视频的尺寸.如果设置的高度和宽度，所需的视频空间会在页面加载时保留。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。
* 与 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。
* video 元素支持多个source 元素. 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式（ MP4, WebM, 和 Ogg）
*/
```

####　iframe
> 使用 sandbox， seamless， 和 srcdoc 属性，作者们现在可以精确控制 iframe 元素的安全级别以及期望的渲染。