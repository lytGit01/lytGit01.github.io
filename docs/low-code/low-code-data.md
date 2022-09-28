---
title: 数据结构
date: 2022-09-28
categories:
- lowCode
  tags:
- lowCode
---

```js
const basicComponents = [
  {
    elementType: "标题控件",
    index: 0,
    label: "标题控件",
    metadataId: 4,
    name: "ccsq001tysqbdtxnr",
    placeholder: "注：1.上传文件格式支持pdf或图片(jpg/jpeg/bmp/png)； 2.如果要上传的材料页数较多，可扫描整理为一个PDF文件",
    scenesType: "1",
    type: "title"
  },
  {
    elementType: "单行文本",
    index: 7,
    label: "单行文本",
    maxLength: 50,
    metadataId: 1,
    name: "sddz",
    placeholder: "如果选择邮寄或电子邮件接收，请录入收件地址或电子邮箱",
    required: false,
    scenesType: "1",
    type: "text",
    validation: '',
  },
  {
    autosize: {maxRows: 5, minRows: 2},
    dataType: "textarea",
    elementType: "多行文本",
    index: 1,
    label: "多行文本",
    maxLength: 500,
    metadataId: 1,
    name: "hfbz",
    placeholder: "请输入多行文本",
    required: false,
    scenesType: "2",
    type: "text",
    validation: '',
  },
  {
    autosize: {maxRows: 5, minRows: 1},
    dataType: "decimal",
    elementType: "金额控件",
    index: 1,
    label: "金额控件",
    maxLength: 500,
    metadataId: 1,
    name: "hfbz",
    placeholder: "请输入金额",
    required: false,
    scenesType: "2",
    type: "text",
    validation: '',
  },
  {
    elementType: "日期控件",
    dataType: 'date',
    placeholder: '年/月/日',
    fileType: "4",
    index: 4,
    label: "日期",
    name: "xwhfrq",
    required: false,
    type: "date_picker"
  },
  {
    codeType: "12014",
    codes: [
      {code: 1, name: '纸质'},
      {code: 2, name: '电子'}
    ],
    elementType: "下拉框控件",
    index: 5,
    label: "载体形式",
    metadataId: 3,
    name: "ztxs",
    required: false,
    scenesType: "1",
    type: "select"
  }
]

const advanceComponents = [
  {
    elementType: "上传控件",
    fileType: "1",
    index: 1,
    label: "申请书",
    limit: 1,
    maxSize: "50",
    metadataId: 6,
    name: "sqs",
    required: false,
    scenesType: "1",
    type: "upload",
  }
]
```
