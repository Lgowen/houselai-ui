<template>
  <view>
    <!-- <houselai-button @handleClick="openStarModal = true" size="large"
      >收藏活动弹窗</houselai-button
    > -->
    <demo-block title="按钮类型">
      <view class="row flex-between-center">
        <houselai-button @click="openLifeModal" size="large"
          >关注生活号弹窗</houselai-button
        >
      </view>
    </demo-block>
    <!-- <houselai-coupon-modal
      :show="starModal"
      :modalBackground="modalBackground"
      :couponBackground="couponBackground"
      :buttonImg="buttonImg"
      :titleImg="titleImg"
    /> -->
    <houselai-coupon-modal
      :show="couponModal"
      :modalBackground="modalBackground"
      :couponBackground="couponBackground"
      :buttonImg="buttonImg"
      :titleImg="titleImg"
      @handleClick="couponModal = false"
      @handleClose="couponModal = false"
    />
  </view>
</template>

<script>
import demoBlock from "../../components/demo-block.vue";
export default {
  components: {
    demoBlock,
  },
  data() {
    return {
      starModal: false,
      couponModal: false,
      modalBackground: "linear-gradient(180deg, #f3fdce 0%, #fdf1ee 100%);",
      titleImg:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230808-64d204f838a75.webp",
      buttonImg:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230808-64d20864ec930.webp",
      couponBackground:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230808-64d207574500c.webp",
    };
  },
  methods: {
    openStarModal() {
      this.starModal = true;
    },
    openLifeModal() {
      this.couponModal = true;
    },
  },
};
</script>

<
<style scope lang="scss"></style>
