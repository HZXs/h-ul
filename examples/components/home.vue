<template>
  <div id="home" class="home">
    <!-- 按钮 -->
    <Button v-if="!show"></Button>
    <!-- 筛选项 -->
    <filterPane v-if="show"></filterPane>
    <!-- 表格和分页 -->
    <tablePane v-if="show"></tablePane>
    <!-- 弹窗 -->
    <Dialog v-if="show"></Dialog>
  </div>
</template>
<script>
import Button from "./button";
import Dialog from "./dialog";
import filterPane from "./filterPane";
import tablePane from "./tablePane";
export default {
  name: "home",
  components: { Button, Dialog, filterPane, tablePane },
  data() {
    return {
      show: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#home {
  padding: 10px;
}
</style>
