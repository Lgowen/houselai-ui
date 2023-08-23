<template>
  <houselai-safe-area>
    <demo-block title="按钮类型">
      <view class="row flex-between-center">
        <view style="margin-bottom: 20rpx">
          <houselai-button @click="openStarModal" size="large"
            >收藏活动弹窗</houselai-button
          >
        </view>
        <houselai-button @click="openLifeModal" size="large"
          >关注生活号弹窗</houselai-button
        >
      </view>
    </demo-block>
    <houselai-coupon-modal
      :show="couponModal"
      :modalBackground="modalBackground"
      :couponBackground="couponBackground"
      :buttonImg="buttonImg"
      :titleImg="titleImg"
      @handleClick="handleClick"
      @handleClose="couponModal = false"
    />
    <houselai-coupon-modal
      :show="starModal"
      :modalBackground="starModalBackground"
      :couponBackground="starCouponBackground"
      :buttonImg="starButtonImg"
      :titleImg="starTitleImg"
      @handleClick="handleClick"
      @handleClose="starModal = false"
    />
  </houselai-safe-area>
</template>

<script>
import demoBlock from "../../components/demo-block.vue";
import { showToast } from "../../../utils/common.js";
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
      starModalBackground: "linear-gradient(180deg, #FEF9F6 0%, #FDF1EE 100%);",
      starTitleImg:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230718-64b63f23c3e38.webp",
      starButtonImg:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230718-64b63ae61c04c.webp",
      starCouponBackground:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230619-6490030bb695c.webp",
    };
  },
  methods: {
    openStarModal() {
      this.starModal = true;
    },
    openLifeModal() {
      this.couponModal = true;
    },
    handleClick() {
      showToast({
        title: "领取成功",
      });
      this.couponModal = false;
    },
  },
};
</script>

<
<style scope lang="scss"></style>
