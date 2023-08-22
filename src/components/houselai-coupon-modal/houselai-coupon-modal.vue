<template>
  <houselai-overlay :show="show">
    <view class="modal-r">
      <view class="modal-r-content" :style="{ background: modalBackground }">
        <image class="modal-r-t" :src="titleImg"> </image>
        <view class="modal-r-desc"
          >送你{{ parseFloat(followAmount) }}元专属优惠券
        </view>
        <scroll-view
          v-if="lifeCouponList.length !== 0"
          :scroll-y="true"
          class="coupon_list"
        >
          <view
            class="modal-thq-bg follow"
            :style="{ background: couponBackground }"
            v-for="(item, index) in lifeCouponList"
            :key="item.activity_id"
          >
            <view class="coupon-left_container" style="width: 146rpx; height: 130rpx">
              <view class="coupon-left">
                <text class="unit">¥</text>
                <text class="coupon-price">
                  {{ parseFloat(item.voucher_amount) }}
                </text>
              </view>
              <view class="coupon-type">
                {{ item.voucher_type_name }}
              </view>
            </view>
            <view style="margin-left: 30rpx">
              <view class="coupon-title"
                >满{{ parseFloat(item.floor_amount) }}可使用
              </view>
              <view class="coupon-desc"
                >仅限{{ useRange(item.activity_name, 8) }}使用</view
              >
              <view class="coupon-desc">有效期至 {{ item.end_time }}</view>
            </view>
          </view>
        </scroll-view>
        <!-- </view> -->
        <view>
          <image class="modal-btn follow" @click="handleClick" :src="buttonImg"> </image>
        </view>
        <view class="modal-info">领取后可在 「我的-优惠券」查看</view>
      </view>
      <view>
        <image class="modal-close" @click="handleClose" :src="closeImg"> </image>
      </view>
    </view>
  </houselai-overlay>
</template>

<script>
// import { computePrice } from "../../utils/price.js";
export default {
  name: "CouponModal",
  props: {
    show: {
      type: Boolean,
      require: true,
    },
    modalBackground: {
      type: String,
      default: "",
    },
    titleImg: {
      type: String,
      default: "",
    },
    couponBackground: {
      type: String,
      default: "",
    },
    buttonImg: {
      type: String,
      default: "",
    },
    closeImg: {
      type: String,
      default:
        "https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230619-64900654a44aa.webp",
    },
  },
  data() {
    return {
      followAmount: 100,
      lifeCouponList: [
        {
          activity_id: "2023061500826004126423172694",
          voucher_type: "FIX_VOUCHER",
          voucher_type_name: "满减券",
          voucher_amount: "1.00",
          floor_amount: "3.00",
          end_time: "2023-06-30 23:59:59",
          activity_name: "测试商家券3",
        },
        {
          activity_id: "2023061500826004126423172694",
          voucher_type: "FIX_VOUCHER",
          voucher_type_name: "满减券",
          voucher_amount: "1.00",
          floor_amount: "3.00",
          end_time: "2023-06-30 23:59:59",
          activity_name: "测试商家券3",
        },
        {
          activity_id: "2023061500826004126423172694",
          voucher_type: "FIX_VOUCHER",
          voucher_type_name: "满减券",
          voucher_amount: "1.00",
          floor_amount: "3.00",
          end_time: "2023-06-30 23:59:59",
          activity_name: "测试商家券3",
        },
      ],
    };
  },
  methods: {
    computePrice(price) {
      return parseFloat(+price);
    },
    handleClose() {
      this.$emit("handleClose");
    },
    handleClick() {
      this.$emit("handleClick");
    },
    useRange(str, maxLength) {
      if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
      }
      return str;
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.modal-btn {
  width: 396rpx;
  height: 108rpx;
  margin-top: 24rpx;
}

.modal-btn.follow {
  height: 102rpx;
}

.modal {
  background: url(https://hsl-opr-oss.cdn.houselai.cn/img/20230616-648c0addcc415.webp)
    no-repeat center/cover;
  width: 443rpx;
  height: 172rpx;
  position: fixed;
  z-index: 10;
}

.modal-content {
  position: relative;
  @include flex;
}

.modal-img {
  height: 126rpx;
  width: 116rpx;
  margin-top: 34rpx;
  margin-left: 12rpx;
}

.text-line {
  margin-top: 54rpx;
  margin-left: 7rpx;
  font-size: 32rpx;
  line-height: 134%;
  color: #ffffff;
}

.text-highlight {
  color: rgb(255, 255, 0);
  font-weight: bold;
  font-size: 34rpx;
}

.close {
  width: 42rpx;
  height: 42rpx;
  position: absolute;
  right: 16rpx;
  top: 38rpx;
}
.modal-r {
  width: 100vw;
  height: 100vh;
  position: relative;
  @include flex-column-center-center;
  z-index: 1000;
}

.modal-r-content {
  width: 590rpx;
  border-radius: 38rpx;
  @include flex-column-center-center;
  padding-bottom: 29rpx;
}

.modal-r-t {
  margin-top: 44rpx;
  width: 217rpx;
  height: 70rpx;
}

.modal-r-desc {
  color: #59230f;
  font-size: 36rpx;
  margin-top: 8rpx;
  line-height: 134%;
}

.coupon_list {
  max-height: 418rpx;
  margin-top: 24rpx;
  font-size: 26rpx;
}

.modal-thq-bg {
  background: url(https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230619-6490030bb695c.webp)
    no-repeat center/cover;
  width: 484rpx;
  height: 130rpx;
  color: #ffffff;
  display: flex;
  align-items: center;
}

.modal-thq-bg.follow {
  color: #cc3a33;
  background: url(https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230808-64d207574500c.webp)
    no-repeat center/cover;
}

.modal-thq-bg + .modal-thq-bg {
  margin-top: 14rpx;
}

.modal-info {
  font-weight: 400;
  font-size: 20rpx;
  margin-top: 22rpx;
  color: #903614;
}

.modal-close {
  margin-top: 80rpx;
  width: 58rpx;
  height: 58rpx;
}

.coupon-price {
  font-weight: 700;
  font-size: 62rpx;
  margin-left: 2rpx;
}

.unit {
  font-weight: 700;
  font-size: 32rpx;
}

.coupon-type {
  font-weight: 400;
  font-size: 18rpx;
}

.coupon-title {
  font-weight: 500;
  font-size: 30rpx;
  line-height: 46rpx;
}

.coupon-desc {
  font-weight: 400;
  font-size: 18rpx;
  line-height: 30rpx;
}

.coupon-left_container {
  @include flex-column-center-center;
}

.coupon-left {
  display: flex;
  align-items: center;
}

.follow_modal {
  background: linear-gradient(180deg, #f3fdce 0%, #fdf1ee 100%);
}
</style>
