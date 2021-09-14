<template>
  <div>
    <el-table
      ref="table"
      :size="dataSource.size ? dataSource.size : 'mini'"
      :data="dataSource.tableData"
      :border="dataSource.isBorder"
      :stripe="dataSource.isStripe"
      style="width: 100%"
    >
      <el-table-column
        v-for="item in dataSource.cols"
        :label="item.label"
        :prop="item.prop"
        :key="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template slot-scope="scope">
          <span v-if="!item.format">{{ scope.row[item.prop] }}</span>
          <span v-if="item.format" v-html="item.format(scope.row)"></span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        :fixed="dataSource.operationFixed"
        :width="dataSource.operationWidth"
        align="center"
      >
        <template slot-scope="scope">
          <span v-for="item in dataSource.operation" :key="item.label">
            <el-button
              :size="item.size"
              :type="item.type"
              :class="item.class"
              :style="item.style"
              :disabled="!item.isEdit"
              v-if="item.isShow ? item.isShow(scope.row) : true"
              @click="item.handleClick(scope.row)"
              >{{ item.label }}</el-button
            >
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "tablePane",
  props: {
    dataSource: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>
