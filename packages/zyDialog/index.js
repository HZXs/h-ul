import zyDialog from "./src/index.vue";

zyDialog.install = (Vue) => {
  Vue.component(zyDialog.name, zyDialog);
};

export default zyDialog;
