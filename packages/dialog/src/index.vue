<template>
  <transition name="dialog">
    <div class="zy-dialog" v-show="closed" :style="{ zIndex: zIndex }">
      <div
        class="dialog-mark"
        @click.self="closeMyself"
        :style="{ 'z-index': zIndex + 1 }"
      ></div>
      <div
        class="zy-dialog-sprite"
        :style="{
          width: width ? width : '30%',
          transformOrigin: `-10% ${width ? width : '30%'}`,
          'z-index': zIndex + 2,
        }"
      >
        <!-- 标题 -->
        <section v-if="title" class="header">{{ title }}</section>
        <!-- 关闭按钮 -->
        <button class="zy-modal-close" @click="handleClose">
          <span class="zy-modal-close-x">
            <i class="anticon">
              <svg
                viewBox="64 64 896 896"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                class=""
              >
                <path
                  d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                ></path>
              </svg>
            </i>
          </span>
        </button>
        <!-- 弹窗的主体内容 -->
        <section class="zy-dialog-body">
          <slot></slot>
        </section>
        <!-- 按钮 -->
        <section class="zy-dialog-footer">
          <slot name="footer"></slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "zyDialog",
  props: {
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String,
    },
    show: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      type: Function,
    },
  },
  data() {
    return {
      closed: false,
      zIndex: this.getZIndex(),
      bodyOverflow: null,
    };
  },
  mounted() {
    console.log(this.show);
  },
  methods: {
    // 禁止页面滚动
    forbidScroll() {
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    },
    //保证后续弹出的弹窗比之前的弹窗层级高
    getZIndex() {
      let zIndex = 1001;
      return zIndex++;
    },

    //关闭前的回调
    handleClose() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },

    //关闭弹窗
    hide(cancel) {
      if (cancel !== false) {
        console.log(this.$emit("update:show", false), this.$emit("close"));
        this.$emit("update:show", false);
        this.$emit("close");
        this.closed = false;
      }
    },

    //点击遮盖层关闭弹窗
    closeMyself() {
      this.hide();
      this.sloveBodyOverflow();
    },

    //恢复页面的滚动
    sloveBodyOverflow() {
      document.body.style.overflow = this.bodyOverflow;
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit("open");
        this.closed = true;
      } else {
        this.closeMyself();
        this.closed = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
// 弹窗动画
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.5s;
}

.dialog-enter,
.dialog-leave-to {
  opacity: 0;
}
// 最外层 设置position定位
// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
.zy-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  // 内容层 z-index要比遮罩大，否则会被遮盖
  .dialog-mark {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    // z-index: 9999;
  }
  .zy-dialog-sprite {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    top: 100px;
    width: auto;
    margin: 0 auto;
    // padding: 0 0 24px;
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 4px;
    .header {
      padding: 10px 24px;
      color: rgba(0, 0, 0, 0.65);
      background: #fff;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 4px 4px 0 0;
      font-weight: 700;
      font-size: 16px;
      word-wrap: break-word;
      display: flex;
    }
    .zy-modal-close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
      padding: 0;
      color: rgba(0, 0, 0, 0.45);
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      background: transparent;
      border: 0;
      outline: 0;
      cursor: pointer;
      transition: color 0.3s;
      .zy-modal-close-x {
        display: block;
        width: 45px;
        height: 40px;
        font-size: 16px;
        font-style: normal;
        line-height: 40px;
        text-align: center;
        text-transform: none;
        text-rendering: auto;
        .anticon {
          display: inline-block;
          color: inherit;
          font-style: normal;
          line-height: 0;
          text-align: center;
          text-transform: none;
          vertical-align: -0.125em;
          text-rendering: optimizeLegibility;
        }
      }
    }
    .zy-dialog-body {
      padding: 24px;
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .zy-dialog-footer {
      padding: 10px 16px;
      text-align: right;
      background: transparent;
      border-top: 1px solid #e8e8e8;
      border-radius: 0 0 4px 4px;
    }
  }
}
</style>
