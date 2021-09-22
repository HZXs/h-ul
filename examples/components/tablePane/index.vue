<template>
  <div id="tablePane">
    <table-pane
      :dataSource="dataSource"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    ></table-pane>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log("页码", val);
    },
    handleSizeChange(val) {
      console.log("每页条数", val);
    },
  },
};
</script>
