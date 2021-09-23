<template>
  <div
    class="zy-virtual-list"
    id="zyVirtualList"
    @scroll="scrollEvent($event)"
    :style="{ height: `${screenHeight}px` }"
  >
    <div
      class="virtual-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="virtual-list-item" :style="{ transform: getTransform }">
      <div
        class="virtual-list-content"
        v-for="(item, index) in visibleData"
        :key="index"
      >
        <slot name="content" :row="item"></slot>
      </div>
      <div class="virtual-list-finished" v-if="finished">
        {{ finishedText || "已经到底了" }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zyVirtualList",
  components: {},
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    loading: Boolean,
    finished: Boolean,
    finishedText: String,
  },
  data() {
    return {
      //数据总列表
      dataList: [],
      //可视区域高度
      screenHeight: 0,
      //起始索引
      start: 0,
      //结束索引
      end: 0,
      //每项高度
      itemSize: 200,
      //偏移量
      startOffset: 0,
      //缓冲区比例
      bufferScale: 1,
      //定时器
      time: null,
    };
  },
  computed: {
    //列表总高度
    listHeight() {
      return this.data.length * this.itemSize;
    },
    //可显示的列表项数
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },
    //偏移量对应的style
    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`;
    },
    //获取真实显示列表数据
    visibleData() {
      let start = this.start - this.aboveCount;
      let end = this.end + this.belowCount;
      console.log("可视区域", this.aboveCount, this.belowCount);
      return this.data.slice(start, end);
    },
    //可视区上方渲染条数
    aboveCount() {
      return Math.min(this.start, this.bufferScale * this.visibleCount);
    },
    //可视区下方渲染条数
    belowCount() {
      return Math.min(
        this.data.length - this.end,
        this.bufferScale * this.visibleCount
      );
    },
  },
  created() {},
  mounted() {
    this.start = 0;
    this.getScreenHeight();
  },
  methods: {
    //列表滚动
    scrollEvent(e) {
      // console.log("当前滚动位置", e);
      let event = e.target || e.scrollEvent;
      //当前滚动位置
      let scrollTop = event.scrollTop;
      //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize);
      //此时的结束索引
      this.end = this.start + this.visibleCount;
      //此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
      if (
        this.listHeight - this.startOffset === 0 &&
        !this.loading &&
        !this.finished
      ) {
        this.$emit("load");
      }
    },
    //获取可视区域高度
    getScreenHeight() {
      this.$nextTick(() => {
        this.screenHeight =
          document.body.clientHeight -
          document.querySelector("#zyVirtualList").offsetTop;
        if (document.querySelector(".virtual-list-content")) {
          this.itemSize = document.querySelector(
            ".virtual-list-content"
          ).clientHeight;
        }
        this.end = this.start + this.visibleCount;
      });
    },
  },
  watch: {},
  updated() {
    this.getScreenHeight();
  },
};
</script>
<style lang="scss" scoped>
.zy-virtual-list {
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  .virtual-list-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .virtual-list-item {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    text-align: center;
  }
  .virtual-list-finished {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
