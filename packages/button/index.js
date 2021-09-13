import hButton from './src/index.vue';

// 为组件提供 install 安装方法,供按需引入
hButton.install = Vue => {
  Vue.component(hButton.name, hButton);
};
//导出组件
export default hButton;