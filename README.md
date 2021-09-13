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

#### 更新版本号

```javascript
npm version patch //表示修订号, 做了向下兼容的问题修正时需要更新
npm version minor //表示次版本号，做了向下兼容的功能性需求时需要更新
npm version major //表示主版本号，做了不兼容的API修改时需要更新
```

#### 发布到npm

```javascript
// 本地编译组件库代码
yarn lib
// 登录
 npm login
 // 发布
 npm publish
 // 如果发布失败提示权限问题,请执行以下命令
 npm publish --access public
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
│      hui.common.js
│      hui.css
│      hui.umd.js
│      hui.umd.min.js
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
