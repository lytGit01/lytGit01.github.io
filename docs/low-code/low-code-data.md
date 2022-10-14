---
title: 数据结构
date: 2022-09-28
categories:
- lowCode
tags:
- lowCode
---[[toc]]

### 1. 标题控件
```json lines
{
  type: "title", // 类型
  elementType: "标题控件", // 侧栏名称
  dataType: "title",
  index: 0, // 排序
  label: "标题控件", // 标题
  remark: '', // 描述
  name: "cust_title", // key值
  show: true // 显示组件
}
```
### 2. div控件
```json lines
 {
  type: "div", // 类型
  elementType: "div控件", // 侧栏名称
  dataType: "div", // 兼容多类型组件
  index: 1, // 排序
  label: "div控件", // 标题
  name: "cust_div", // 关联字段值
  remark: '', // 描述
  html: '<div>自定义标签</div>', // html
  show: true // 显示组件
}
```

#### 3. 单行文本控件
```json lines
 {
  type: "text", // 组件类型
  elementType: "多行文本", // 侧栏名称
  dataType: "textarea", // 兼容多类型组件
  autosize: {maxRows: 5, minRows: 2}, // 多行文本行数限制
  index: 3, // 排序
  label: "多行文本", // 标题
  maxLength: 500, // 最大长度限制
  name: "cust_textarea",// 关联字段值
  placeholder: "请输入", // 占位内容
  required: false, // 必填
  validation: '', // 正则
  value: '', // 默认值
  relation: [], // 关联关系
  remark: '', // 描述
  show: true // 显示组件
}
```

#### 4. 多行文本控件
```json lines
{
  type: "text", // 组件类型
  elementType: "多行文本", // 侧栏名称
  dataType: "textarea", // 兼容多类型组件
  autosize: {maxRows: 5, minRows: 2}, // 多行文本行数限制
  index: 3, // 排序
  label: "多行文本", // 标题
  maxLength: 500, // 最大长度限制
  name: "cust_textarea",// 关联字段值
  placeholder: "请输入", // 占位内容
  required: false, // 必填
  validation: '', // 正则
  value: '', // 默认值
  relation: [], // 关联关系
  remark: '', // 描述
  show: true // 显示组件
}
```

#### 5. 金额控件
```json lines
{
  type: "text", // 组件类型
  elementType: "金额控件", // 侧栏名称
  dataType: "decimal", // 兼容多类型组件
  index: 4, // 排序
  label: "金额控件",  // 标题
  maxLength: 500, // 最大长度限制
  name: "cust_decimal", // 关联字段值
  placeholder: "请输入金额", // 占位内容
  remark: '', // 描述
  decimalPlaceholder: '', // 金额描述
  maxDecimalTip: '不满足最大输入限制', // 最大金额限制提示
  minDecimalTip: '不满足最小输入限制', // 最小金额限制提示
  maxDecimal: 999999999999.99, // 最大金额
  minDecimal: 0, // 最小金额
  required: false, // 必填
  validation: '', // 正则
  value: '', // 默认值
  relation: [], // 关联关系
  show: true // 显示组件
}
```

#### 6. 下拉框控件
```json lines
{
  type: "select", // 组件类型
  elementType: "下拉框控件", // 侧栏名称
  dataType: "select", // 兼容多类型组件
  index: 5, // 排序
  placeholder: "请选择", // 占位内容
  label: "载体形式", // 标题
  codeType: "12014",
  codes: [
    {code: '1', name: '选项1'}
  ], // 下级选项
  value: '', // 默认值
  defaultVal: '', // 默认选项
  name: "ztxs", // 关联字段值
  required: false, // 必填
  multiple: false, // 多选
  relation: [], // 关联关系
  show: true // 显示组件
}
```

#### 7. 日期控件
```json lines
{
  type: "date_picker", // 组件类型
  elementType: "日期控件", // 侧栏名称
  dataType: 'date', // 兼容多类型组件
  placeholder: '请选择日期', // 占位内容
  errTip: '请选择日期', // 日期错误提示语
  index: 6, // 排序
  label: "日期",  // 标题
  name: "xwhfrq", // 关联字段值
  required: false, // 必填
  show: true // 显示组件
}
```

#### 8. 上传控件
```json lines
{
  type: "upload", // 组件类型
  elementType: "上传控件", // 侧栏名称
  fileType: "1", // 业务文件类型
  index: 7, // 排序
  label: "申请书", // 标题
  limit: 1, // 文件上传个数限制
  maxSize: 10, // 单文件上传大小限制
  name: "sqs", // 关联字段值
  required: false, // 必填
  scenesType: "1", // 不清楚作用
  remark: '', // 描述
  value: [], // 默认值 编辑组件使用 不提供可配置
  fileTypeFlag: false, // 是否开启问文件类型校验
  accept: '.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.jpg,.jpeg,.bmp,.png,.mp4', // 文件类型
  show: true // 显示组件
}
```

#### 9. 级联组件
```json lines
{
  type: "cascader", // 组件类型
  elementType: "级联控件", // 侧栏名称
  name: "sqs", // 关联字段值
  index: 7, // 排序
  label: "申请书", // 标题
  placeholder: '请选择', // 占位内容
  required: false, // 必填
  codes: [], // 数据结构暂时不清楚
  relation: [], // 关联关系
  value: '',
  remark: '', // 描述
  show: true // 显示组件
}
```