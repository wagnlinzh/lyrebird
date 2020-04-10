(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{298:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"插件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件开发"}},[t._v("#")]),t._v(" 插件开发")]),t._v(" "),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("p",[t._v("安装好Lyrebird后，可通过Lyrebird命令行工具生成插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 在指定路径创建插件工程\nlyrebird gen /your/workspace/path\n\n# 创建过程中会要求输入插件名（用作包名\\显示名称\\插件项目目录名）\n>Please input your project name:\n\n# 例如输入demo_project\n# 您将会在 /your/workspace/path/demo_project得到一个插件工程\n")])])]),a("h2",{attrs:{id:"结构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构说明"}},[t._v("#")]),t._v(" 结构说明")]),t._v(" "),a("p",[t._v("工程结构如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├── MANIFEST.in\n├── README.md\n├── frontend\n│   ├── README.md\n│   ├── babel.config.js\n│   ├── package-lock.json\n│   ├── package.json\n│   ├── public\n│   │   ├── favicon.ico\n│   │   └── index.html\n│   ├── src\n│   │   ├── App.vue\n│   │   ├── apis\n│   │   │   └── index.js\n│   │   ├── assets\n│   │   │   └── logo.png\n│   │   ├── components\n│   │   │   └── HelloWorld.vue\n│   │   ├── main.js\n│   │   └── store\n│   │       └── index.js\n│   └── vue.config.js\n├── plugin_demo\n│   ├── __init__.py\n│   ├── handler.py\n│   ├── manifest.py\n│   └── version.py\n├── requirements.txt\n└── setup.py\n\n")])])]),a("h2",{attrs:{id:"构建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建项目"}},[t._v("#")]),t._v(" 构建项目")]),t._v(" "),a("p",[t._v("插件工程分前端和插件本身两部分。 构建时需要"),a("strong",[t._v("依次")]),t._v("构建前端、插件本身")]),t._v(" "),a("h3",{attrs:{id:"构建前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建前端"}},[t._v("#")]),t._v(" 构建前端")]),t._v(" "),a("p",[t._v("前端工程存储于frontend目录下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd frontend\nnpm install\nnpm run build\ncd -\n")])])]),a("h3",{attrs:{id:"构建插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建插件"}},[t._v("#")]),t._v(" 构建插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 setup.py sdist\n")])])]),a("h2",{attrs:{id:"开发调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发调试"}},[t._v("#")]),t._v(" 开发调试")]),t._v(" "),a("h3",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd frontend\nnpm run serve\n")])])]),a("p",[t._v("推荐使用"),a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("VUE devtools"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 在项目目录下通过Lyrebird拉起插件\nlyrebird --plugin .\n")])])]),a("p",[t._v("以VSCODE为例，添加下面的启动方式即可开始调试")]),t._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lyrebird"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);