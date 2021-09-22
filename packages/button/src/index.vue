<template>
  <button
    class="zy-button"
    :class="[
      type ? `zy-button-${type}` : '',
      size ? `zy-button-${size}` : '',
      round ? 'zy-button-circle' : '',
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "zyButton",
  props: {
    type: String,
    size: String,
    disabled: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
<style lang="scss" scoped>
.zy-button {
  color: #fff;
  background-color: #40a9ff;
  border-color: #40a9ff;
  margin-right: 8px;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 2.25rem;
  line-height: 2.25rem;
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
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }
}
.zy-button-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
  &:active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
  }
  &:focus,
  &:hover {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
}
.zy-button-dashed {
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
.zy-button-danger {
  color: #fff;
  background-color: #ff4d4f;
  border-color: #ff4d4f;
  text-shadow: 0 -1px 0 rgba(156, 152, 152, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875;
  }
  &:active {
    color: #fff;
    background-color: #d9363e;
    border-color: #d9363e;
  }
}
.zy-button-text {
  color: #1890ff;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  &:active,
  &:focus,
  &:hover {
    color: #40a9ff;
    background-color: transparent;
    border-color: transparent;
  }
}
.zy-button-large {
  height: 2.5rem;
  line-height: 2.5rem;
}
.zy-button-small {
  height: 2rem;
  line-height: 2rem;
}
.zy-button-mini {
  height: 1.75rem;
  line-height: 1.75rem;
}
.zy-button-circle {
  border-radius: 20px;
  padding: 0px 15px;
}
.zy-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
