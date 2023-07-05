<template>
	<button class="houselai-button" :class="[`houselai-button--${type}`, `houselai-button--${size}`]" :style="{ marginLeft: `${marginLeft}rpx`, marginRight: `${marginRight}rpx` }" @click="handleClick">
		<view class="houselai-button__text flex-center-center">
			<icon v-if="icon" class="houselai-button__icon" :style="{ backgroundImage: `url(${iconUrl})`}"/>
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
			},
			marginLeft: {
				type: Number,
				default: 0
			},
			marginRight: {
				type: Number,
				default: 0
			},
			icon: {
				type: Boolean,
				default: false
			},
			iconUrl: {
				type: String,
				default: '../../static/images/add.png'
			}
		},
		methods: {
			handleClick() {
				// console.log(111)
				this.$emit('handleClick')
			}
		}
	}
</script>

<style scoped>
	.houselai-button {
		/* 	width: 168rpx;
		height: 66rpx;
		font-size: 28rpx; */
		border-radius: 100rpx;
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