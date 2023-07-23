<template>
	<view v-if="displayRules" class="houselai-card-item custom-class flex-between-center"
		:class="[{ 'card_item--border': border }, customClass]">
		<view class="houselai-card-item__label flex-center-center">
			<icon class="houselai-icon houselai-icon--label background-image" v-if="labelIcon"
				:style="{ backgroundImage: `url(${labelIconUrl})` }" />
			<view class="houselai-card-item__label--text" :class="labelClass">{{label || ''}}</view>
		</view>
		<view class="form_content">
			<view class="houselai-card-item__value flex-center-center" :class="valueClass">
				<!-- 		<icon v-if="icon" class="form_value--icon background-image"
						:style="{ backgroundImage: `url(${imageUrl})` }"></icon> -->
				<view class="flex">
					<text @click="handleClick" :class="{ 'houselai-card-item__value--text-inline': valueIcon }"
						class="houselai-card-item__value--text single-line-text-overflow-hidden">
						<icon v-if="valueIcon" class="houselai-icon houselai-icon--value background-image"
							:style="{ backgroundImage: `url(${valueIconUrl})` }"></icon>
						{{ value || ''}}
					</text>
				</view>
				<text v-if="copy" style="color: #438EF7; margin-left: 14rpx;" @click="handleCopy">复制</text>
			</view>
			<!-- <view class="form_value--copy">
					复制
				</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'houselai-card-item',
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
		props: {
			label: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: ''
			},
			customClass: String,
			labelClass: String,
			valueClass: String,
			labelIcon: {
				type: Boolean,
				default: false
			},
			labelIconUrl: {
				type: String,
				default: '../../static/coupon.png'
			},
			valueIcon: {
				type: Boolean,
				default: false
			},
			valueIconUrl: {
				type: String,
				default: "../../static/phone.png"
			},
			// arrow: {
			// 	type: Boolean,
			// 	default: true
			// },
			copy: {
				type: Boolean,
				default: false
			},
			displayRules: {
				type: Boolean,
				default: true
			},
			border: {
				type: Boolean,
				default: false
			},
			clickFunction: Function
		},
		methods: {
			handleClick() {
				this.$emit('click')
			},
			handleCopy() {
				uni.setClipboardData({
					data: this.value,
					success() {
						uni.showToast({
							title: '复制成功'
						})
					}
				})
			}
		},
	}
</script>

<style lang="scss">
	.houselai-card-item {
		height: 70rpx;
		line-height: 46rpx;
		font-size: 26rpx;
		background-color: #FFF;
		// border-radius: 100rpx;
		// box-sizing: border-box;

		&__label {
			&--text {
				color: $subtitle;
				letter-spacing: 1px;
			}
		}

		&__value {
			&--text {
				color: $text-third-color;
				display: inline-block;
				width: 450rpx;
				text-align: right;

				&-inline {
					display: inline-flex;
					justify-content: flex-end;
					align-items: center;
				}
			}
		}
	}

	.houselai-icon {
		width: 38rpx;
		height: 38rpx;

		&--label {
			margin-right: 8rpx;
		}

		&--value {
			width: 32rpx;
			width: 32rpx;
			margin-right: 8rpx;
		}
	}
</style>