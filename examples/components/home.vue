<template>
  <div id="home" class="home">
    <!-- 按钮 -->
    <Button v-if="show"></Button>
    <!-- 筛选项 -->
    <filterPane v-if="show"></filterPane>
    <!-- 表格和分页 -->
    <tablePane v-if="show"></tablePane>
    <!-- 弹窗 -->
    <Dialog v-if="show"></Dialog>
    <zyVirtualList v-if="!show"></zyVirtualList>
  </div>
</template>
<script>
import Button from "./button";
import Dialog from "./dialog";
import filterPane from "./filterPane";
import tablePane from "./tablePane";
import zyVirtualList from "./zyVirtualList";
export default {
  name: "home",
  components: { Button, Dialog, filterPane, tablePane, zyVirtualList },
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
  height: 100vh;
}
</style>
