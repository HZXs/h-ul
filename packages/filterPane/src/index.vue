<template>
  <div>
    <el-form inline>
      <el-form-item
        v-for="(item, index) in filterData"
        :key="index"
        :label="item.name"
      >
        <!-- 输入框 -->
        <template v-if="item.isInput">
          <el-input
            :size="item.size ? item.size : 'small'"
            v-model="listQuery[item.key]"
            :placeholder="item.placeholder"
            :style="{ width: item.width ? item.width + 'px' : '200px' }"
          ></el-input>
        </template>
        <!-- 选择器 -->
        <template v-if="item.isSelect">
          <el-select
            :size="item.size ? item.size : 'small'"
            v-model="listQuery[item.key]"
            :placeholder="item.placeholder"
            clearable
            :multiple="item.multiple"
            :style="{ width: item.width ? item.width + 'px' : '200px' }"
          >
            <el-option
              v-for="i in item.option"
              :key="item.props['value'] ? i[item.props['value']] : i.value"
              :label="item.props['label'] ? i[item.props['label']] : i.label"
              :value="item.props['value'] ? i[item.props['value']] : i.label"
            ></el-option>
          </el-select>
        </template>
        <!-- 时间选择器 -->
        <template v-if="item.timeSelect"></template>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "filterPane",
  props: {
    filterData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      //表单的数据
      listQuery: {},
    };
  },
};
</script>
