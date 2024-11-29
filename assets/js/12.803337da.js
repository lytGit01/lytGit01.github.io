(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{458:function(t,a,_){t.exports=_.p+"assets/img/3.d6aba08b.jpg"},459:function(t,a,_){t.exports=_.p+"assets/img/5.8562c60a.png"},489:function(t,a,_){"use strict";_.r(a);var s=_(2),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-背景"}},[t._v("1. 背景")])]),a("li",[a("a",{attrs:{href:"#_2-uniapp-官网推荐构建sdk能力"}},[t._v("2. uniApp 官网推荐构建SDK能力")])]),a("li",[a("a",{attrs:{href:"#_3-npm-包方式构建sdk-及-在uniapp中-如何引入"}},[t._v("3. npm 包方式构建SDK 及 在uniApp中 如何引入")])]),a("li",[a("a",{attrs:{href:"#_4-uniapp插件市场、仓库库特点介绍"}},[t._v("4. uniApp插件市场、仓库库特点介绍")])]),a("li",[a("a",{attrs:{href:"#_5-uniapp-自定义组件v3-0-api-介绍"}},[t._v("5. uniApp-自定义组件V3.0 API 介绍")])]),a("li",[a("a",{attrs:{href:"#_6-自定义组件复杂功能设计思路"}},[t._v("6. 自定义组件复杂功能设计思路")])]),a("li",[a("a",{attrs:{href:"#_7-后续计划"}},[t._v("7. 后续计划")])])])]),a("p"),t._v(" "),a("h3",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("ul",[a("li",[t._v("自定义组件在不断推广、应用中项目实际场景中，pc端兼容h5无法满足更多场景")]),t._v(" "),a("li",[t._v("需采用类似 uniApp 一套代码 生成多端项目的框架来实现 以此解决小程序、客户端等多平台应用问题")]),t._v(" "),a("li",[t._v("本篇 将以uniAPP构建自定义组件V3 SDK 方案 开讲解其 知识点")])])]),a("h3",{attrs:{id:"_2-uniapp-官网推荐构建sdk能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-uniapp-官网推荐构建sdk能力"}},[t._v("#")]),t._v(" 2. uniApp 官网推荐构建SDK能力")]),t._v(" "),a("h4",{attrs:{id:"_2-1-使用官网推荐编辑器-hbuilderx-编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-使用官网推荐编辑器-hbuilderx-编辑器"}},[t._v("#")]),t._v(" 2.1 使用官网推荐编辑器 HBuilderX 编辑器")]),t._v(" "),a("h4",{attrs:{id:"_2-2-官方文档插件介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-官方文档插件介绍"}},[t._v("#")]),t._v(" 2.2 "),a("a",{attrs:{href:"https://uniapp.dcloud.net.cn/plugin/uni_modules.html#%E5%BC%80%E5%8F%91-uni-modules-%E6%8F%92%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档插件介绍"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_2-3-插件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-插件管理"}},[t._v("#")]),t._v(" 2.3 "),a("a",{attrs:{href:"https://dev.dcloud.net.cn/pages/app/list",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件管理"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:_(458),alt:"An image"}})]),t._v(" "),a("h3",{attrs:{id:"_3-npm-包方式构建sdk-及-在uniapp中-如何引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-npm-包方式构建sdk-及-在uniapp中-如何引入"}},[t._v("#")]),t._v(" 3. npm 包方式构建SDK 及 在uniApp中 如何引入")]),t._v(" "),a("h4",{attrs:{id:"_3-1-构建sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-构建sdk"}},[t._v("#")]),t._v(" 3.1 构建SDK")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. cd /进入当前层级目录\n2. 登录公司组件库地址 npm adduser --**\n3. 发布组件 npm publish --registry **\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"_3-2-在uniapp中引入npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-在uniapp中引入npm"}},[t._v("#")]),t._v(" 3.2 在uniApp中引入npm")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 打开uniapp项目，在终端中输入命令npm init，创建一个package.json文件。\n2. 在终端中输入命令npm install **\n3. 在需要使用npm包的页面中，使用import语句引入所需的npm包。\n4. 在引入npm包后，即可在页面中使用该npm包提供的功能。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_4-uniapp插件市场、仓库库特点介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-uniapp插件市场、仓库库特点介绍"}},[t._v("#")]),t._v(" 4. uniApp插件市场、仓库库特点介绍")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("特点介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("uniApp插件市场")]),t._v(" "),a("td",[t._v("1. uniApp 官网推荐方案 "),a("br"),t._v(" 2. 与HBuilder编辑器结合使用可视化发布引入插件 "),a("br"),t._v(" 3. 开源可提升开发团队知名度")])]),t._v(" "),a("tr",[a("td",[t._v("公司npm仓库")]),t._v(" "),a("td",[t._v("1. 统一管理维护npm包 "),a("br"),t._v(" 2. 更适用于团队uniApp脚手架 "),a("br"),t._v(" 3. 防止源码泄露")])])])]),t._v(" "),a("h3",{attrs:{id:"_5-uniapp-自定义组件v3-0-api-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-uniapp-自定义组件v3-0-api-介绍"}},[t._v("#")]),t._v(" 5. uniApp-自定义组件V3.0 API 介绍")]),t._v(" "),a("h4",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("add 可选 add、viewEdit")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("表单类型")])]),t._v(" "),a("tr",[a("td",[t._v("isProcessForm")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("流程表单")])]),t._v(" "),a("tr",[a("td",[t._v("elements")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("表单模版")])]),t._v(" "),a("tr",[a("td",[t._v("elementDataList")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("{}")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("表单数据")])]),t._v(" "),a("tr",[a("td",[t._v("hookFunctionObject")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("{}")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("组件钩子下方详细介绍")])]),t._v(" "),a("tr",[a("td",[t._v("textAline")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("ct-right")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("不传默认右对齐，传 ct-left 或其他字符 左对齐")])])])]),t._v(" "),a("h4",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("createParams")]),t._v(" "),a("td",[t._v("获取表单数据")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("{initFinished: true【初始化完成】,valid: allValid【检验结果】,value: this.submitData【提交数据】}")])])])]),t._v(" "),a("h3",{attrs:{id:"_6-自定义组件复杂功能设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-自定义组件复杂功能设计思路"}},[t._v("#")]),t._v(" 6. 自定义组件复杂功能设计思路")]),t._v(" "),a("h4",{attrs:{id:"_6-1-注册公式设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-注册公式设计思路"}},[t._v("#")]),t._v(" 6.1 注册公式设计思路")]),t._v(" "),a("p",[a("img",{attrs:{src:_(459),alt:"An image"}})]),t._v(" "),a("h4",{attrs:{id:"_6-2-控制显隐、必填设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-控制显隐、必填设计思路"}},[t._v("#")]),t._v(" 6.2 控制显隐、必填设计思路")]),t._v(" "),a("h3",{attrs:{id:"_7-后续计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-后续计划"}},[t._v("#")]),t._v(" 7. 后续计划")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("ol",[a("li",[t._v("新增标题、利率、锚点(只实现PC)组件")]),t._v(" "),a("li",[t._v("扩展公式计算种类")]),t._v(" "),a("li",[t._v("配置组件动作(考虑js安全性问题)")]),t._v(" "),a("li",[t._v("优化包体积")]),t._v(" "),a("li",[t._v("终极目标: 一套Schema对应多个DSL(vue、uniApp) 解析生成页面源码")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);