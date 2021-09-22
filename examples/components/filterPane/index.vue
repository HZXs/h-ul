<template>
  <div id="filterPane">
    <filter-pane
      ref="filterPane"
      :filterData="filterData"
      labelWidth="auto"
      @filterMsg="filterMsg"
    ></filter-pane>
  </div>
</template>
<script>
export default {
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
        {
          size: "mini",
          isBut: true,
          option: [
            {
              size: "mini",
              type: "primary",
              name: "搜索",
              handleClick: (val) => {
                this.$refs.filterPane.listQuery = {};
                console.log(val);
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    filterMsg(data) {
      console.log("值", data);
    },
  },
};
</script>
