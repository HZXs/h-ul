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
        <template v-if="item.isTime">
          <el-time-picker
            :size="item.size ? item.size : 'small'"
            :is-range="item.isRange"
            arrow-control
            v-model="listQuery[item.key]"
            :style="{ width: item.width ? item.width + 'px' : '200px' }"
            :placeholder="item.placeholder"
            :range-separator="item.separator ? item.separator : '至'"
            :start-placeholder="item.startPlaceholder"
            :end-placeholder="item.endPlaceholder"
            :picker-options="item.pickerOptions ? item.pickerOptions : {}"
          ></el-time-picker>
        </template>
        <!-- 日期选择器 -->
        <template v-if="item.isDate">
          <el-date-picker
            :type="item.isRange ? 'daterange' : 'date'"
            :size="item.size ? item.size : 'small'"
            v-model="listQuery[item.key]"
            :style="{ width: item.width ? item.width + 'px' : '200px' }"
            :placeholder="item.placeholder"
            :range-separator="item.separator ? item.separator : '至'"
            :start-placeholder="item.startPlaceholder"
            :end-placeholder="item.endPlaceholder"
            :picker-options="item.pickerOptions ? item.pickerOptions : {}"
          ></el-date-picker>
        </template>
        <!-- 日期时间选择器 -->
        <template v-if="item.isDateTime">
          <el-date-picker
            :type="item.isRange ? 'datetimerange' : 'datetime'"
            :size="item.size ? item.size : 'small'"
            v-model="listQuery[item.key]"
            :style="{ width: item.width ? item.width + 'px' : '200px' }"
            :placeholder="item.placeholder"
            :range-separator="item.separator ? item.separator : '至'"
            :start-placeholder="item.startPlaceholder"
            :end-placeholder="item.endPlaceholder"
            :picker-options="item.pickerOptions ? item.pickerOptions : {}"
          ></el-date-picker>
        </template>
        <template v-if="item.isBut">
          <el-button
            v-for="(i, keys) in item.option"
            :size="item.size ? item.size : 'small'"
            :type="item.type"
            :key="keys"
            @click="i['click']"
            >{i.name}}</el-button
          >
        </template>
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
  watch: {
    filterData: {
      handler(newValue) {
        if (newValue.length > 0) {
          newValue.map((x) => {
            this.listQuery[x.key] = "";
          });
        }
      },
      deep: true,
    },
    listQuery: {
      handler(newValue) {
        this.$emit("filterMsg", newValue);
      },
      deep: true,
    },
  },
};
</script>
