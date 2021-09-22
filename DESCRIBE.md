## zy-view

## ![](https://badge.fury.io/js/zy-view.svg)

### 目录文件夹及子文件夹结构

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
│      zy-ui.common.js
│      zy-ui.css
│      zy-ui.umd.js
│      zy-ui.umd.min.js
│
├─packages //组件目录
│  │  components.js //组件的列表js文件（所有的组件必须要引入该文件）
│  │  index.js //组件的入口js文件
│  │
│  ├─button //组件文件
│  │  │  index.js //组件js
│  │  │
│  │  └─src
│  │  │    index.vue //组件页面
│  │
│
└─public
│       favicon.ico
│       index.html //入口页面
│
└─tools //工具
│       template.js //组件模板
│       addComponent.js //快速构建组件目录
```

### 开发规范

#### 命名规范

- 命名方法：小驼峰命名法
- 命名规范
  - 命名必须是跟需求的内容相关的词，比如说我想申明一个变量，用来表示我的学校，那么我们可以这样定义 const mySchool = "我的学校"；
- 组件命名规范

  - 官方文档推荐及使用转训规则
  - filterPane (单词首字母大写命名)是最通用的声明约定
  - filter-pane(短横线分隔命名) 是最通用的使用约定
  - 组件名应该始终是多个单词的
  - 有意义的名词、简短、具有可读性
  - 命名遵循 filterPane 约定
  - 导入及注册组件时，遵循 filterPane 约定

  - 尽量是名词,且使用驼峰命名法

#### 结构化规范

##### 目录结构

新增的组件可在 packages 文件夹下创建，文件结构如下：

```JavaScript
│  ├─button //以组件命名的文件夹
│  │  │  index.js //组件js
│  │  │
│  │  └─src
│  │  │    index.vue //组件页面
```

目录下的 index.js 内容如下：

```javascript
import zyButton from "./src/index.vue"; //引入组件

// 为组件提供 install 安装方法,供按需引入
zyButton.install = (Vue) => {
  Vue.component(zyButton.name, zyButton);
};
//导出组件
export default zyButton;
```

##### vue 文件基本结构

```vue
<template>
  <div>
    <!--必须在div中编写页面-->
  </div>
</template>
<script>
    export default {
    name: "zyButton", //组件声明 (必须跟组件注册的name一样)
    components : {
    },
    data () {
        return {
        }
    },
    mounted() {
    }，
    methods: {
    }
}
</script>
<style lang="scss" scoped></style>
```

##### 组件生命周期顺序

```javascript
-components 
- props 
- data 
- computed 
- created 
- mounted 
- metods 
- watch;
```

#### git 使用规范

master 作为主分支，release 作为发布分支。之后所有的修改都在 master 的基础上进行。大家迁出的时候，都将 master 迁出到个人当前开发分支，开发完成后再合并到 release 上。release 版本如果有 bug，在 release 上迁出修改，无问题后，再合并到 master 主支。
大家都创建一个开发分支，名称为 dev\_姓名，例如 dev_hzx

提交代码的时候声明 开发了那些组件，须在 README.md 添加使用说明

### 启动项目

#### **安装依赖**

```javascript
yarn;
```

#### **启动项目**

```javascript
yarn serve
```

#### **组件打包**

```javascript
yarn lib
```

#### 更新版本号

```javascript
//更新版本号的时候注意，要先确定本地已经没有更改
npm version patch //表示修订号, 做了向下兼容的问题修正时需要更新
npm version minor //表示次版本号，做了向下兼容的功能性需求时需要更新
npm version major //表示主版本号，做了不兼容的API修改时需要更新
```

#### 发布到 npm

发布前需先在[npm 官网](https://www.npmjs.com/)注册账号

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

#### 快速构建组件

```javascript
yarn new:com
or
npm run new:com
```
