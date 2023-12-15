<template>
  <div class="RealTimeView">
    <el-dialog :visible.sync="datas.show" width="414px" top="8vh">
      <img src="@/assets/images/phoneTop.png" style="width: 375px" />
      <iframe
        v-if="datas.show"
        ref="iframe"
        class="screen"
        :scrolling="false"
        :src="'http://localhost:8081/#/?type=iframe'"
        @load="load"
      ></iframe>
      <van-loading v-if="loading" size="24px" vertical>加载中</van-loading>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'RealTimeView',
  props: {
    datas: {
      show: false,
    },
    val:Object
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    load() {
      this.loading = false
      console.log(this.val)
      this.$refs["iframe"].contentWindow.postMessage(this.val, "http://localhost:8081/#/");
    },
  },
}
</script>

<style lang="less" scoped>
.RealTimeView {
  .screen {
    width: 375px /*no*/;
    height: 667px /*no*/;
    border: 0;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>
