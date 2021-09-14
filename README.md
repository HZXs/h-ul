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

#### 组件库使用

在main.js中写入以下内容：

```javascript
import hui from "vue-assembly";
import "vue-assembly/lib/hui.css";
Vue.use(hui);
```

#### filterPane 搜索组件

搜索层一般包括日期选择器、输入框、select下拉选择器等+搜索功能、重置功能

##### 传入数据结构整理

```JavaScript
      filterData: [
        {
          size: "mini", //组件大小 可选size small 
          key: "name", //字段名
          name: "用户名：", //提示语
          isInput: true, //是否为输入框
          width: 200, //宽度
          placeholder: "请输入用户名", //placeholder提示语
        },
        {
          size: "mini",
          key: "role",
          name: "用户角色",
          isSelect: true, //是否select下拉选择器
          width: 200,
          placeholder: "请选择角色",
          props: { label: "label", value: "value" }, //设置option的label和value绑定字段
          option: [ //选项数组
            { label: "管理员", value: 1 },
            { label: "超级管理员", value: 2 },
          ],
        },
        {
          size: "mini",
          key: "create_time",
          name: "创建时间：",
          isTime: true, //是否为时间组件
          isRange: true, //是否开启区间选择
          width: 300,
          valueFormat: "HH:mm:ss", //绑定值的日期格式  
          placeholder: "请选择创建时间", //placeholder提示语
          startPlaceholder: "请选择开始时间", //范围选择时开始日期的占位内容 (只要为区间选择器才有效)
          endPlaceholder: "请选择结束时间",//范围选择时结束日期的占位内容 (只要为区间选择器才有效)
          pickerOptions: {}, //当前时间日期选择器特有的选项 参考element的Time Picker 组件
        },
        {
          size: "mini",
          key: "start_time",
          name: "生效时间：",
          isDate: true, //是否为日期选择器
          isYear:true, //是否为年选择器 （周，月，年只能存在一个）
          isWeek:true, // 是否为周选择器 （周，月，年只能存在一个）
          isMonth:true, //是否为月选择器 （周，月，年只能存在一个）  
          isRange: true, //是否为区间选择器
          width: 300,
          valueFormat: "yyyy-MM-dd HH:mm:ss", //绑定值的日期格式            
          placeholder: "请选择生效时间",
          startPlaceholder: "请选择开始时间",
          endPlaceholder: "请选择结束时间",
          pickerOptions: {},//当前时间日期选择器特有的选项 参考element的DatePicker 组件
        },
        {
          size: "mini",
          key: "end_time",
          name: "创建时间：",
          isDateTime: true, //是否为日期时间选择器
          isRange: true,
          width: 300,
          valueFormat: "yyyy-MM-dd HH:mm:ss", //绑定值的日期格式            
          placeholder: "请选择创建时间",
          startPlaceholder: "请选择开始时间",
          endPlaceholder: "请选择结束时间",
          pickerOptions: {},//当前时间日期选择器特有的选项 参考element的DateTimePicker 组件
        },
      ],
```

