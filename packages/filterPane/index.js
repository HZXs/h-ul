import filterPane from "./src/index.vue"

filterPane.install = Vue => {
  Vue.component(filterPane.name, filterPane);
}

export default filterPane