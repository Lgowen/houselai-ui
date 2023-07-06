<template>
	<button class="houselai-button" :class="[`${typeClass}`, `${sizeClass}`, { 'houselai-button-disabled': disabled }]"
		:style="{ marginLeft: `${marginLeft}rpx`, marginRight: `${marginRight}rpx` }" @click="handleClick">
		<view class="houselai-button__text flex-center-center">
			<icon v-if="icon" class="houselai-button__icon" :style="{ backgroundImage: `url(${iconUrl})`}" />
			<slot></slot>
		</view>
	</button>
</template>

<script>
	export default {
		name: 'houselai-button',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: {
				type: String,
				default: 'normal'
			}
		},
		compute: {
			// 按钮类型
			typeClass() {
				if (this.type) return `houselai-button-${this.type}`
				else return ''
			},
			// 尺寸
			sizeClass() {
				if (this.size) return `houselai-button-${this.size}`
				else return ''
			},
		}
		methods: {
			handleClick() {
				// console.log(111)
				this.$emit('handleClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.houselai-button {
		/* 	width: 168rpx;
		height: 66rpx;
		font-size: 28rpx; */
		border-radius: 100rpx;
		
		&-default {
			color: #1E1E1E;
			border: 1px solid rgba(0, 0, 0, 0.3);
		}
		
		&-delete {
			color: rgba(30, 30, 30, 0.5);
			border: 1rpx solid rgba(0, 0, 0, 0.3);
		}
		
		&-main {
			color: #FFF;
			background: linear-gradient(273.19deg, #EB5045 10.44%, #EF8933 85.91%);
		}
		
		&-confirm {
			border: 1px solid #FE4C26;
			color: #FE4C26
		}
	}

	.houselai-button__text {
		width: 100%;
		height: 100%;
	}

	.houselai-button__icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 12rpx;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.houselai-button--default {
		color: #1E1E1E;
		border: 1rpx solid rgba(0, 0, 0, 0.3);
	}

	.houselai-button--delete {
		color: rgba(30, 30, 30, 0.5);
		border: 1rpx solid rgba(0, 0, 0, 0.3);
	}

	.houselai-button--main {
		color: #FFF;
		background: linear-gradient(273.19deg, #EB5045 10.44%, #EF8933 85.91%);
	}

	.houselai-button--confirm {
		border: 1rpx solid #FE4C26;
		color: #FE4C26
	}

	.houselai-button--normal {
		width: 168rpx;
		height: 66rpx;
		font-size: 28rpx;
	}

	.houselai-button--middle {
		width: 212rpx;
		height: 78rpx;
		font-size: 32rpx;
	}

	.houselai-button--large {
		width: 686rpx;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 32rpx;
		font-weight: 500;
	}
</style>