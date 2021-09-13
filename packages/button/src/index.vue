<template>
  <div
    class="h-button"
    :class="type == 'primary' ? 'h-button-primary' : 'h-button-dashed'"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "hButton",
  props: { type: String },
};
</script>
<style lang="scss" scoped>
.h-button {
  color: #fff;
  background-color: #40a9ff;
  border-color: #40a9ff;
  margin-right: 8px;
  margin-bottom: 12px;
  // line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  // box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  line-height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
}
.h-button-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  // text-shadow: 0 -1px 0 rgba(0, 0, 0, 1.2);
  // box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
}
.h-button-dashed {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
  &:active,
  &:focus,
  &:hover {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
  }
}
</style>
