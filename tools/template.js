module.exports = {
  vueTemplate: (compoenntName) => {
    return `<template>
  <div class="${compoenntName}">
      ${compoenntName}组件
  </div>
</template>
<script>
export default {
  name: '${compoenntName}',
  components: {},
  props: {},
  data() {
    return {

    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.${compoenntName} {
};
</style>`;
  },
  entryTemplate: (compoenntName) => {
    return `import ${compoenntName} from './${compoenntName}';
${compoenntName}.install = (Vue) => {
  Vue.component(${compoenntName}.name, ${compoenntName});
};

//导出组件
export default ${compoenntName};
`;
  },
};
