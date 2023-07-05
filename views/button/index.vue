<template>
  <view class="container">
    <view>
      <view class="title">按钮类型</view>
      <view class="item">
        <view class="item-content">
          <houselai-button @click="handleClick($event, {count: 3})">测试</houselai-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    handleClick(e, val) {
      console.log('click', e)
      console.log('click', val)
    }
  },
  mounted() { },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.item {
  margin: 40rpx;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.title {
  margin: 20rpx;
}
.container {
  padding-bottom: 40rpx;
}
.item-content {
  margin: 20rpx;
}
</style>