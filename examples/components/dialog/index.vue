<template>
  <div id="dialog">
    <zy-button type="primary" @click="showDialog = true"> 测试 </zy-button>
    <zy-dialog
      title="测试"
      :show.sync="showDialog"
      :before-close="close"
      :model="false"
      :show-close="true"
      :close-on-click-modal="true"
    >
      <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
      <span slot="footer" style="display: block">
        <zy-button type="primary" @click="showDialog = false">取消</zy-button>
        <zy-button type="primary" @click="showDialog = false">确定</zy-button>
      </span>
    </zy-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDialog: false, //是否展示弹窗
    };
  },
  methods: {
    close(done) {
      console.log(done);
      done();
    },
  },
};
</script>
