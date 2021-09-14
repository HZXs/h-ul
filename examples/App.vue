<template>
  <div id="app">
    <h-button type="dashed">测试</h-button>
    <filter-pane
      :filterData="filterData"
      labelWidth="auto"
      @filterMsg="filterMsg"
    ></filter-pane>
    <table-pane :dataSource="dataSource"></table-pane>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      filterData: [
        {
          size: "mini",
          key: "name",
          name: "用户名：",
          isInput: true,
          width: 200,
          placeholder: "请输入用户名",
        },
        {
          size: "mini",
          key: "role",
          name: "用户角色",
          isSelect: true,
          width: 200,
          placeholder: "请选择角色",
          props: { label: "label", value: "value" },
          option: [
            { label: "管理员", value: 1 },
            { label: "超级管理员", value: 2 },
          ],
        },
        {
          size: "mini",
          key: "status",
          name: "是否启用",
          isSelect: true,
          width: 200,
          placeholder: "请选择启用状态",
          props: { label: "label", value: "value" },
          option: [
            { label: "已启用", value: 1 },
            { label: "已禁用", value: 2 },
          ],
        },
        {
          size: "mini",
          key: "create_time",
          name: "创建时间：",
          isTime: true,
          isRange: true,
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          width: 300,
          placeholder: "请选择创建时间",
          startPlaceholder: "请选择开始时间",
          endPlaceholder: "请选择结束时间",
          pickerOptions: {},
        },
        {
          size: "mini",
          key: "start_time",
          name: "生效时间：",
          isDate: true,
          isRange: true,
          isYear: true, //是否为年选择器 （周，月，年只能存在一个）
          isWeek: true, // 是否为周选择器 （周，月，年只能存在一个）
          isMonth: true, //是否为月选择器 （周，月，年只能存在一个）
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          width: 300,
          placeholder: "请选择生效时间",
          startPlaceholder: "请选择开始时间",
          endPlaceholder: "请选择结束时间",
          pickerOptions: {},
        },
        {
          size: "mini",
          key: "end_time",
          name: "创建时间：",
          isDateTime: true,
          isRange: true,
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          width: 300,
          placeholder: "请选择创建时间",
          startPlaceholder: "请选择开始时间",
          endPlaceholder: "请选择结束时间",
          pickerOptions: {},
        },
      ],
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
            isEdit: true, //是否要权限
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
      },
    };
  },
  methods: {
    filterMsg(data) {
      console.log("值", data);
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
