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
  width: '100%', // 表单宽度
  theme: "default" // ['default', 'zqsb']
}
}

```

### 1. 标题控件
```json lines
 {
  type: "title", // 类型
  name: '', // 组件key值唯一
  elementType: "标题控件", // 侧栏名称
  iconName: "title", // icon名称
  dataType: "title",
  label: "标题控件", // 标题
  remark: '', // 描述
  isDetail: false, // 是否关闭背景样式
  calssName: '', // 自定义class
  show: true // 显示组件
}
```
### 2. div控件
```json lines
 {
  type: "div", // 类型
  name: '', // 组件key值唯一
  elementType: "html控件", // 侧栏名称
  iconName: "div", // icon名称
  label: "div控件", // 标题
  remark: '', // 描述
  remarkPosition: 'top', // 描述位置
  html: '<div>自定义标签</div>', // html
  show: true // 显示组件
}
```

### 3. 单行文本控件
```json lines
 {
  type: "text", // 组件类型
  name: '', // 组件key值唯一
  elementType: "单行文本", // 侧栏名称
  dataType: "text", // 兼容多类型组件
  iconName: "text", // icon名称
  label: "单行文本", // 标题
  maxLength: 50, // 最大长度限制
  placeholder: "请输入", // 占位内容
  required: false, // 必填
  validation: '', // 正则
  relation: [], // 关联关系
  remark: '', // 描述
  remarkPosition: 'top', // 描述位置
  value: '', // 默认值
  viewAndEdit: false, // 预览可编辑
  ext:  {}, // 服务特有字段
  show: true, // 显示组件
  notValueHide: false // 预览无值隐藏
}
```

### 4. 多行文本控件
```json lines
{
  type: "text", // 组件类型
  name: '', // 组件key值唯一
  elementType: "多行文本", // 侧栏名称
  dataType: "textarea", // 兼容多类型组件
  iconName: "textarea", // icon名称
  autosize: {maxRows: 5, minRows: 2}, // 多行文本行数限制
  label: "多行文本", // 标题
  maxLength: 500, // 最大长度限制
  placeholder: "请输入", // 占位内容
  required: false, // 必填
  validation: '', // 正则
  value: '', // 默认值
  relation: [], // 关联关系
  remark: '', // 描述
  remarkPosition: 'top', // 描述位置
  viewAndEdit: false, // 预览可编辑
  ext:  {}, // 服务特有字段
  show: true, // 显示组件
  notValueHide: false // 预览无值隐藏
}
```

### 5. 金额控件
```json lines
{
  type: "text", // 组件类型
  name: '', // 组件key值唯一
  elementType: "金额控件", // 侧栏名称
  dataType: "decimal", // 兼容多类型组件
  iconName: "decimal", // icon名称
  label: "金额控件",  // 标题
  maxLength: 500, // 最大长度限制
  placeholder: "请输入金额", // 占位内容
  remark: '', // 描述
  remarkPosition: 'top', // 描述位置
  decimalPlaceholder: '', // 金额描述
  maxDecimalTip: '不满足最大输入限制', // 最大金额限制提示
  minDecimalTip: '不满足最小输入限制', // 最小金额限制提示
  maxDecimal: 999999999999.99, // 最大金额
  minDecimal: 0, // 最小金额
  required: false, // 必填
  validation: '', // 正则
  value: '', // 默认值
  relation: [], // 关联关系
  viewAndEdit: false, // 预览可编辑
  ext:  {}, // 服务特有字段
  show: true, // 显示组件
  notValueHide: false // 预览无值隐藏
}
```

### 6. 下拉框控件
```json lines
{
  type: "select", // 组件类型
  name: '', // 组件key值唯一
  elementType: "下拉框控件", // 侧栏名称
  dataType: "select", // 兼容多类型组件
  iconName:  "select", // icon名称
  placeholder: "请选择", // 占位内容
  label: "下拉控件", // 标题
  codes: [
    {
      "name": "新选项",
      "code": "1",
      "enable": true
    }
  ], // 下级选项
  codeDataType: '1', // 数据类型
  value: '', // 默认值
  defaultVal: '', // 默认选项
  required: false, // 必填
  relation: [], // 关联关系
  multiple: false, // 多选
  filterable: false, // 搜索
  viewAndEdit: false, // 预览可编辑
  ext:  {}, // 服务特有字段
  show: true, // 显示组件
  notValueHide: false // 预览无值隐藏
}
```

### 7. 下拉框搜索控件
```json lines
{
  type: "auto_select", // 组件类型
  name: '', // 组件key值唯一
  elementType: "下拉搜索控件", // 侧栏名称
  dataType: "auto_select", // 兼容多类型组件
  iconName: "auto_select", // icon名称
  placeholder: "请选择", // 占位内容
  label: "下拉搜索控件", // 标题
  codes: [], // 下级选项
  value: {}, // 默认值
  enumCode: '', // 其他类型的选项，用户可以自己自定义填写选项
  required: false, // 必填
  relation: [], // 关联关系
  multiple: false, // 多选
  ext:  {}, // 服务特有字段
  show: true, // 显示组件
  notValueHide: false // 预览无值隐藏
}
```

### 8. 日期控件
```json lines
{
  type: "date_picker", // 组件类型
  name: '', // 组件key值唯一
  elementType: "日期控件", // 侧栏名称
  dataType: 'date', // 兼容多类型组件
  iconName: "date_picker", // icon名称
  placeholder: '请选择日期', // 占位内容
  errTip: '请选择日期', // 日期错误提示语
  label: "日期",  // 标题
  value: [], // 日期值
  required: false, // 必填
  viewAndEdit: false, // 预览可编辑
  ext:  {}, // 服务特有字段
  show: true, // 显示组件
  notValueHide: false // 预览无值隐藏
}
```

### 9. 按钮
```json lines
{
  type: "button", // 组件类型
  name: '', // 组件key值唯一
  elementType: "按钮控件", // 侧栏名称
  iconName: "anniu", // icon名称
  label: "提交",  // 标题
  show: true, // 显示组件
  ext:  {}, // 服务特有字段
}
```

### 10. 上传控件
```json lines
{
  type: "upload",
  name: '', // 组件key值唯一
  elementType: "上传控件",
  iconName: "upload", // icon名称
  label: "申请书", // 标题
  limit: 1, // 文件个数限制
  maxSize: 10, // 单文件大小限制
  required: false, // 必填
  remark: '', // 描述
  remarkPosition: 'top', // 描述位置
  fileTypeFlag: false, // 是否开启问文件类型校验
  accept: '.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.jpg,.jpeg,.bmp,.png,.mp4', // 文件上传类型
  viewAndEdit: false, // 预览可编辑
  ext:  {}, // 服务特有字段
  show: true, // 是否显示
  notValueHide: false // 预览无值隐藏
}
```

### 11. 级联组件
```json lines
{
  type: "cascader", // 组件类型
  name: '', // 组件key值唯一
  elementType: "级联选择控件", // 侧栏名称
  iconName: "cascader", // icon名称
  codeDataType: '1', // 数据类型
  dataType: "cascader", // 兼容多类型组件
  label: "级联选择器",  // 标题
  value: '', // 默认值
  required: false, // 必填
  relation: [], // 关联关系
  placeholder: '请选择', // 占位内容
  codes: [], // 下级选项
  viewAndEdit: false, // 预览可编辑
  ext:  {}, // 服务特有字段
  show: true, // 显示组件
  notValueHide: false // 预览无值隐藏
}
```
