<template>
  <div id="app">
    <h-button type="dashed">测试</h-button>
    <filter-pane :filterData="filterData" @filterMsg="filterMsg"></filter-pane>
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
          key: "create_time",
          name: "创建时间：",
          isTime: true,
          isRange: false,
          width: 300,
          placeholder: "请选择创建时间",
          startPlaceholder: "请选择开始时间",
          endPlaceholder: "请选择结束时间",
          pickerOptions: {},
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
