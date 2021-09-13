# h-ui

#### **安装依赖**

```javascript
yarn install
```

#### **启动项目**

```javascript
yarn serve
```

#### **项目打包**

```javascript
yarn lib
```

#### 项目结构

```javascript
├─.vscode
│      settings.json //代码格式化配置
│
├─examples
│  │  App.vue
│  │  main.js //入口js文件
│  │
│  └─assets //静态资源
│          logo.png
│
├─lib //打包目录
│      demo.html
│      xui.common.js
│      xui.css
│      xui.umd.js
│      xui.umd.min.js
│
├─packages //组件目录
│  │  components.js //组件的列表js文件
│  │  index.js //组件的入口js文件
│  │
│  ├─button //组件文件
│  │  │  index.js //组件js
│  │  │
│  │  └─src
│  │          index.vue //组件页面
│  │
│
└─public
        favicon.ico
        index.html 入口页面
```

