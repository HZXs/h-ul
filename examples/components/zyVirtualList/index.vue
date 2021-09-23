<template>
  <div class="virtual-list">
    <zy-button type="primary" size="small" @click="btn()"
      >插入数据（{{ list.length }}）</zy-button
    >
    <zy-virtual-list
      :data="list"
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getData"
    >
      <template v-slot:content="{ row }">
        <div class="item">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F002UWGmply1guojkenpgrj60v912aahq02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634978403&t=ea6919d31a6a84e07033d63987ad3f67"
          />
          <p>
            <span>{{ row.name }}</span
            ><span>测试数据</span>
          </p>
        </div>
      </template>
    </zy-virtual-list>
  </div>
</template>
<script>
export default {
  name: "virtualList",
  data() {
    return {
      list: [],
      loading: false, //是否加载完毕
      finished: false, //是否加载完毕
    };
  },
  methods: {
    btn() {
      const total = 50000;
      let length = this.list.length;
      for (let i = 0; i < total; i++) {
        let index = i + length;
        let conent = { name: `item--(${parseInt(index)})` };
        this.list.push(Object.assign({}, conent));
      }
      console.log("列表数据", this.list);
    },
    getData() {
      this.loading = true;
      this.finished = false;
      this.btn();
      console.log("触底");
      setTimeout(() => {
        this.loading = false;
      }, 500);
      if (this.list.length >= 100000) {
        this.finished = true;
        console.log("没有数据了");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.virtual-list {
  .item {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #67c23a;
    color: #ffffff;
    border: 1px solid #e4e7ed;
    img {
      width: 100px;
      height: 60px;
      object-fit: fill;
    }
    p {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
