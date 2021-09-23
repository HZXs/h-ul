## vue-assembly

## ![](https://badge.fury.io/js/vue-assembly.svg)

### UI 组件使用

ui 组件都封装到了 vue-assembly,下载 UI

```javascript
npm install vue-assembly
```

在 main.js 中写入以下内容：

```javascript
import zyUI from "vue-assembly";
import "vue-assembly/lib/zy-ui.css";
Vue.use(zyUI);
```

#### 1、filterPane 搜索组件

搜索层一般包括日期选择器、输入框、select 下拉选择器等+搜索功能、重置功能

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
         {
          size: "mini",
          isBut: true, //开启按钮
          option: [ //按钮数组
            {
              size: "mini",
              type: "primary", //按钮样式
              name: "搜索", //按钮文案
              handleClick: (val) => {
                this.$refs.filterPane.listQuery = {};
                console.log(val);
              },
            },
          ],
        },
      ],
```

##### 使用

```javascript
    <filter-pane
      ref="filterPane"
      :filterData="filterData"
      labelWidth="auto"
      @filterMsg="filterMsg"
    ></filter-pane>

    filterMsg(data) {
      console.log("值", data);
    },
```

#### 2、tablePane 表格组件

tablePane 组件，可快速构建带分页的表格

##### 传入数据结构整理

```JavaScript
      dataSource: {
        size: "mini", //表格的尺寸
        isBorder: true, //表格是否带有纵向边框
        isStripe: true, //表格是否为斑马纹
        //表头
        cols: [
          {
            label: "ID", // 列名
            prop: "id", //字段名称
            align: "center", //对齐方式
            width: "", //宽度 不设置则默认为auto
            format: (val) => {
              //过滤器
              console.log(val);
              return `<P>${val.id}</P>`;
            },
          },
          {
            label: "用户名",
            prop: "name",
            align: "center",
          },
        ],
        //表格数据
        tableData: [{ id: 1, name: "测试" }],
        operationFixed: "right", //操作栏固定方向 为空则不固定
        operationWidth: "350", //操作栏的宽度，为空则自适应
        //操作栏
        operation: [
          {
            size: "mini", //按钮尺寸
            type: "text", //按钮类型
            label: "编辑", //按钮的名称
            class: "", //按钮新增的class（可选）
            style: "", //按钮的样式 （可选）
            isEdit: true, //是否有权限
            isShow: (val) => {
              //可选
              //是否显示按钮
              console.log(val);
              return true; //返回true则显示，false则不显示
            },
            handleClick: (val) => {
              //自定义事件
              console.log(val);
            },
          },
        ],
        //分页
        pageData: {
          total: 10, // 总条数
          pageSize: 10, // 每页数量
          pageNum: 1, // 页码
          isBackground: true, //是否开启背景色
          isAll: true, //是否使用完整功能
          isCenter: true, //分页是否居中
          pageSizes: [5, 10, 15, 20], // 每页数量数组（可选，isAll为true时必须设置）
        },
      },
```

##### 使用

```javascript
    <table-pane
      :dataSource="dataSource"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    ></table-pane>

    handleCurrentChange(val) {
      console.log("页码", val);
    },
    handleSizeChange(val) {
      console.log("每页条数", val);
    },
```

#### 3、dialog 弹窗

```javascript
    <zy-dialog
      title="测试"
      :show.sync="showDialog"
      :before-close="close"
      :model="false"
      :show-close="true"
      :close-on-click-modal="true"
    >
      <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
      <span slot="footer" style="display: block">
        <zy-button type="primary">测试</zy-button>
        <zy-button type="primary">测试</zy-button>
      </span>
    </zy-dialog>
```

属性

| 参数                 | 描述                           | 类型                               | 可选值 | 默认值 |
| -------------------- | ------------------------------ | ---------------------------------- | ------ | ------ |
| title                | 标题                           | string                             | -      | -      |
| show                 | 控制弹窗的状态                 | boolean                            | -      | false  |
| width                | 弹窗的宽度                     | string                             | -      | 30%    |
| before-close         | 关闭前的回调，会暂停弹窗的关闭 | function(done)，done 用于关闭 弹窗 | -      | -      |
| modal                | 是否需要遮盖层                 | boolean                            | false  | true   |
| custom-class         | 弹窗自定义 class 名            | string                             | -      | -      |
| close-on-click-modal | 是否可通过点击遮盖层关闭弹窗   | boolean                            | false  | true   |
| show-close           | 是否现在关闭按钮               | boolean                            | false  | true   |

Slot

| name   | 描述                 |
| ------ | -------------------- |
| footer | 弹窗按钮操作区域内容 |

#### 4、按钮

```javascript
    <zy-button size="large"> 默认 </zy-button>
    <zy-button type="primary" size="small">主按钮</zy-button>
    <zy-button type="dashed" :disabled="true" size="mini">虚线按钮</zy-button>
    <zy-button type="danger" :disabled="true" :round="true"> 危险 </zy-button>
    <zy-button type="text">链接按钮</zy-button>
```

| 参数     | 描述           | 类型    | 可选值                                                 | 默认值 |
| -------- | -------------- | ------- | ------------------------------------------------------ | ------ |
| size     | 按钮尺寸       | string  | small（小型）/large（大型）/mini（迷你）               | -      |
| type     | 按钮类型       | string  | primary(主要按钮)/dashed(虚线)/danger(危险)/text(链接) | -      |
| disabled | 禁用状态       | boolean | -                                                      | false  |
| round    | 是否为圆形按钮 | boolean | -                                                      | false  |

#### 5、无限加载列表（带下拉）

滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项，理论流畅展示数据为10w条。

```javascript
    <zy-virtual-list
      :data="list"
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getData"
    > 
         <!-- 展示的内容放置区域 row为循环列表的数据 !-->
      <template v-slot:content="{ row }">
        <div class="item">
            {{row.name}}
        </div>
      </template>
    </zy-virtual-list>
```

| 参数          | 描述                                         | 类型    | 可选值 | 默认值     |
| ------------- | -------------------------------------------- | ------- | ------ | ---------- |
| data          | 显示的数据                                   | array   | -      | -          |
| loading       | 是否处于加载状态，加载过程中不触发`load`事件 | boolean | -      | false      |
| finished      | 是否已经加载状态                             | boolean | -      | false      |
| finished-text | 加载完成之后的文本描述                       | string  | -      | 已经到底了 |

events

| 事件 | 描述             | 回调参数 |
| ---- | ---------------- | -------- |
| load | 滚动条触底时触发 | -        |



