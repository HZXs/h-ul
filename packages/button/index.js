import zyButton from "./src/index.vue";

// 为组件提供 install 安装方法,供按需引入
zyButton.install = (Vue) => {
  Vue.component(zyButton.name, zyButton);
};
//导出组件
export default zyButton;
