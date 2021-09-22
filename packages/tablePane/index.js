import tablePane from "./src/index.vue";

// 为组件提供 install 安装方法,供按需引入
tablePane.install = (Vue) => {
  Vue.component(tablePane.name, tablePane);
};
//导出组件
export default tablePane;
