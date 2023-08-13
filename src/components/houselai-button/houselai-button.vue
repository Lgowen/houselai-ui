<template>
	<button class="houselai-button custom-class" :class="[`${typeClass}`, `${sizeClass}`, { 'houselai-button--disabled': disabled }]"
		 @click="onClick">
		<view class="houselai-button__text flex-center-center">
			<houselai-icon v-if="icon" class="houselai-button__icon" :color="iconColor" :type="icon" :size="iconSize" />
			<slot></slot>
		</view>
	</button>
</template>

<script>
	export default {
		name: 'houselai-button',
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
			type: {
				type: String,
				default: 'default'
			},
			size: {
				type: String,
				default: 'normal'
			},
			icon: String,
			disabled: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			// 按钮类型
			typeClass() {
				return `houselai-button--${this.type}`
			},
			// 尺寸
			sizeClass() {
				return `houselai-button--${this.size}`
			},
			// 图标大小
			iconSize() {
			  if (this.size === 'large') {
			    return 28
			  } else if (this.size === '') {
			    return 24
			  } else if (this.size === 'small') {
			    return 20
			  } else {
			    return 16
			  }
			},
			// 图标颜色
			iconColor() {
			  if (this.type) {
			    if (!this.plain) return '#fff'
			    else {
			      let item = colorList.find(item => item.type === this.type)
			      return item && item.color
			    }
			  } else {
			    return '#000'
			  }
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
	}
</script>

<style lang="scss">
	.houselai-button {
		border-radius: 100rpx;
		// box-sizing: border-box;
		
		&--default {
			color: #1E1E1E;
			border: 1px solid rgba(0, 0, 0, 0.3);
		}

		&--delete {
			color: rgba(30, 30, 30, 0.5);
			border: 1px solid rgba(0, 0, 0, 0.3);
		}

		&--main {
			color: #FFF;
			background: linear-gradient(273.19deg, #EB5045 10.44%, #EF8933 85.91%);
		}

		&--confirm {
			border: 1px solid $primary;
			color: $primary
		}

		&--delivery {
			border: 1px solid $delivery;
		    color: $delivery;
		}
		
		&--danger {
			background-color: #F63720;
			color: #FFF;
		}

		&--normal {
			width: 168rpx;
			height: 66rpx;
			font-size: 28rpx;
		}
		
		&--mini {
			width: 136rpx;
			height: 64rpx;
			font-size: 26rpx
		}

		&--middle {
			width: 212rpx;
			height: 78rpx;
			font-size: 32rpx;
		}

		&--large {
			width: 686rpx;
			height: 88rpx;
			line-height: 88rpx;
			font-size: 32rpx;
			font-weight: 500;
		}
		
		&__text {
			width: 100%;
			height: inherit
		}
		
		&__icon {
			width: 48rpx;
			height: 48rpx;
			margin-right: 12rpx;
			background-size: contain;
			background-repeat: no-repeat;
		}
	}
</style>