
module.exports = {
  "title": "南北笔记",
  "description": "2022-7-11使用vuePress重构",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      // {
      //   "text": "历史动态",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      // {
      //   "text": "文档",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/lytGit01",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "js基础"
    //   ],
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "valineConfig": {
      "appId": 'dAEh4qNi9vnPbrr5P5sxluC7-gzGzoHsz',// your appId
      "appKey": 'q7Gl90WG1kta7vVVonYqTXy8', // your appKey
    },
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "nanb",
    "authorAvatar": "/logo.jpg",
    "record": "xxxx",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}
