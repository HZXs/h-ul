import zyVirtualList from './zyVirtualList';
zyVirtualList.install = (Vue) => {
  Vue.component(zyVirtualList.name, zyVirtualList);
};

//导出组件
export default zyVirtualList;
