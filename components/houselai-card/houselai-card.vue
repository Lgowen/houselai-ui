<template>
	<view class="houselai-card custom-class">
		<view class="houselai-card--wrapper">
			<houselai-card-item v-for="cardItem in cardList" :label="cardItem.label" :value="cardItem.value"
				:copy="cardItem.copy" :valueIcon="cardItem.valueIcon" />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'houselai-card',
		externalClasses: ['custom-class'],
		options: {
			// #ifdef MP-WEIXIN
			"styleIsolation": "isolated",
			// #endif
			// #ifdef MP-ALIPAY
			externalClasses: true,
			"styleIsolation": "apply-shared",
			// #endif
		},
		data() {
			return {
			}
		},
		props: {
			cardList: {
				type: Array,
				default: () => []
			}
		},
		computed: {

		},
		methods: {

		},
	}
</script>

<style lang="scss">
	.houselai-card {
		&--wrapper {
			width: 706rpx;
			height: 454rpx;
			padding: 12rpx 30rpx 22rpx 24rpx;
			background-color: #FFF;
			border-radius: 18rpx;
		}
	}
</style>