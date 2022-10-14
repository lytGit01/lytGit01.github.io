---
title: 数据结构
date: 2022-09-28
categories:
- lowCode
tags:
- lowCode
---[[toc]]


### 表单数据
```json lines
{
list: [], // 子组件数据
config: {
  labelWidth: 100, // 标题宽度
  formName: '', // 表单名称
  labelPosition: 'left', // 对齐方式
  size: 'small', // 组件尺寸
  width: '100%' // 表单宽度
}
}

```

### 1. 标题控件
```json lines
{
  type: "title", // 类型
  elementType: "标题控件", // 侧栏名称
  iconName: "title", // icon名称
  index: 0, // 排序【待删除】
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
  iconName: "div", // icon名称
  index: 1, // 排序【待删除】
  label: "div控件", // 标题
  name: "cust_div", // 关联字段值
  remark: '', // 描述
  html: '<div>自定义标签</div>', // html
  show: true // 显示组件
}
```

### 3. 单行文本控件
```json lines
 {
  type: "text", // 组件类型
  elementType: "多行文本", // 侧栏名称
  dataType: "text", // 兼容多类型组件
  iconName: "text", // icon名称
  autosize: {maxRows: 5, minRows: 2}, // 多行文本行数限制
  index: 3,// 排序【待删除】
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

### 4. 多行文本控件
```json lines
{
  type: "text", // 组件类型
  elementType: "多行文本", // 侧栏名称
  dataType: "textarea", // 兼容多类型组件
  iconName: "textarea", // icon名称
  autosize: {maxRows: 5, minRows: 2}, // 多行文本行数限制
  index: 3, // 排序【待删除】
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

### 5. 金额控件
```json lines
{
  type: "text", // 组件类型
  elementType: "金额控件", // 侧栏名称
  dataType: "decimal", // 兼容多类型组件
  iconName: "decimal", // icon名称
  index: 4, // 排序【待删除】
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

### 6. 下拉框控件
```json lines
{
  type: "select", // 组件类型
  elementType: "下拉框控件", // 侧栏名称
  dataType: "select", // 兼容多类型组件
  iconName: "select", // icon名称
  index: 5, // 排序【待删除】
  placeholder: "请选择", // 占位内容
  label: "载体形式", // 标题
  codeType: "12014",
  codes: [
    {code: '1', name: '选项1'}
  ], // 下级选项
  multiple: false, // 多选
  value: '', // 默认值 单选为 String 多选为 Array
  defaultVal: '', // 默认选项
  name: "ztxs", // 关联字段值
  required: false, // 必填
  relation: [], // 关联关系
  show: true // 显示组件
}
```

### 7. 下拉框搜索控件
```json lines
{
  type: "auto_select", // 组件类型
  elementType: "下拉搜索控件", // 侧栏名称
  dataType: "auto_select", // 兼容多类型组件
  iconName: "auto_select", // icon名称
  placeholder: "请选择", // 占位内容
  label: "载体形式", // 标题
  index: 6, // 排序【待删除】
  codes: [], // 下级选项
  value: '', // 默认值
  enumCode: '', // 其他类型的选项，用户可以自己自定义填写选项
  name: "ztxs", // 关联字段值
  required: false, // 必填
  relation: [], // 关联关系
  multiple: false, // 多选
  show: true // 显示组件
}
```

### 8. 日期控件
```json lines
{
  type: "date_picker", // 组件类型
  elementType: "日期控件", // 侧栏名称
  dataType: 'date', // 兼容多类型组件
  iconName: "date_picker", // icon名称
  placeholder: '请选择日期', // 占位内容
  errTip: '请选择日期', // 日期错误提示语
  index: 7, // 排序【待删除】
  label: "日期",  // 标题
  name: "xwhfrq", // 关联字段值
  required: false, // 必填
  show: true // 显示组件
}
```

### 9. 上传控件
```json lines
{
  type: "upload", // 组件类型
  elementType: "上传控件", // 侧栏名称
  iconName: "upload", // icon名称
  fileType: "1", // 业务文件类型
  index: 8, // 排序【待删除】
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

### 10. 级联组件
```json lines
  {
  type: "cascader", // 组件类型
  elementType: "级联选择器控件", // 侧栏名称
  dataType: "cascader", // 兼容多类型组件
  iconName: "cascader", // icon名称
  label: "级联选择器",  // 标题
  index: 9, // 排序【待删除】
  name: "cascader", // 关联字段值
  value: '', // 默认值
  required: false, // 必填
  relation: [], // 关联关系
  placeholder: '请选择', // 占位内容
  show: true // 显示组件
}
```