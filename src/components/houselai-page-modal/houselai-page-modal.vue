<template>
  <houselai-overlay :show="show">
    <view class="page_modal flex-center-center">
      <view class="page_modal_container" @click="handleClick">
        <image
          class="page_modal_container--image"
          mode="scaleToFill"
          :src="mainImg"
        ></image>
      </view>
      <view class="page_modal_close" @click="handleClose">
        <image class="page_modal_close--image" mode="scaleToFill" :src="closeImg"></image>
      </view>
    </view>
  </houselai-overlay>
</template>

<script>
export default {
  name: "PageModal",
  props: {
    mainImg: {
      type: String,
    },
    closeImg: {
      type: String,
      default:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230619-64900654a44aa.webp",
    },
    show: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    handleClick() {
      this.$emit("handleClick");
    },
  },
  computed: {},
};
</script>

<style scoped>
.page_modal {
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
}

.page_modal_container {
  width: 630rpx;
  height: 63vh;
}

.page_modal_close {
  margin-top: 75rpx;
  width: 58rpx;
  height: 58rpx;
}

.page_modal_container--image,
.page_modal_close--image {
  width: 100%;
  height: 100%;
}
</style>
