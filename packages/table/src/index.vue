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
    <div
      class="pagination-flex"
      :style="{ justifyContent: dataSource.pageData.isCenter ? 'center' : '' }"
    >
      <!-- 分页 -->
      <template v-if="dataSource.pageData">
        <el-pagination
          :background="dataSource.pageData.isBackground"
          layout="prev, pager, next"
          :total="dataSource.pageData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="dataSource.pageData.pageNum"
          :page-size="dataSource.pageData.pageSize"
          v-if="!dataSource.pageData.isAll"
        >
        </el-pagination>
        <el-pagination
          :background="dataSource.pageData.isBackground"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataSource.pageData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="dataSource.pageData.pageNum"
          :page-size="dataSource.pageData.pageSize"
          :page-sizes="dataSource.pageData.pageSizes"
          v-if="dataSource.pageData.isAll"
        >
        </el-pagination>
      </template>
    </div>
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
  methods: {
    //切换每页条数
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    //切换页码
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination-flex {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
</style>
