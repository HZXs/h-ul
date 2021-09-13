import hTable from "./src/index.vue";

// 为组件提供 install 安装方法,供按需引入
hTable.install = Vue => {
  Vue.component(hTable.name, hTable);
};
//导出组件
export default hTable;