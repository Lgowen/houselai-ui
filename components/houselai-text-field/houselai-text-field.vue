<template>
	<view class="houselai-text-field" :class="[{ 'houselai-text-field--borderless': !border }, contentClass]" @click="handleClick">
		<view class="houselai-text-field__title">
			<houselai-icon v-if="labelIcon"/>
			<text :class="labelClass">{{ title }}</text>
		</view>
		<view class="houselai-text-field__value">
			<text :class="valueClass">{{ value }}</text>
			<!-- <view v-else class="form_placeholder" :class="placeholderClass">{{placeholder}}</view> -->
			<houselai-icon v-if="arrow"/>
		</view>
	</view>
</template>

<script>
	export default {
		name: "houselai-text-field",
		props: {
			title: {
				type: String,
				required: true
			},
			placeholder: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: ''
			},
			contentClass: {
				type: String,
				default: ''
			},
			labelClass: {
				type: String,
				default: ''
			},
			valueClass: {
				type: String,
				default: ''
			},
			arrow: {
				type: Boolean,
				default: true
			},
			clickable: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {};
		},
		computed: {
			formValue() {
				return this.value
			}
		},
		methods: {
			handleClick() {
				this.$emit('handleClick')
			}
		}
	}
</script>

<style lang="scss">
	.houselai-text-field {
		/* height: 94rpx; */
		width: 100%;
		padding: 24rpx 30rpx 24rpx 24rpx;
		line-height: 46rpx;
		position: relative;
		color: #1E1E1E;
		font-size: 26rpx;
		background-color: #FFF;
		@include flex;
		
		// &--border {
			
		// }
		
		&::after {
		  border-bottom: 1px solid #F2F2F2;
		  bottom: 0;
		  box-sizing: border-box;
		  content: '';
		  left: 24rpx;
		  pointer-events: none;
		  position: absolute;
		  right: 24rpx;
		  transform: scaleY(0.5);
		  transform-origin: center;
		}
		
		&--borderless:after {
		  display: none;
		}
		
		
		&__title {
			flex: 1;
			// @include flex-start-center;
			font-weight: bold;
		}
		
		&__value {
			// flex: 1;
			width: 412rpx;
			// @include flex-start-center;
			text-align: right;
		}
	}
	
	.houselai-text-field--border {
		padding-bottom: 24rpx;
		border-bottom: 1px solid #F2F2F2;
	}
/* 
	.form_arrow {
		margin-left: 14rpx;
	}

	.form_arrow::after {
		content: '';
		display: block;
		width: 24rpx;
		height: 24rpx;
		background-image: url('../../static/images/arrow.png');
		background-repeat: no-repeat;
		background-size: contain;
	} */
/* 
	.label_icon {
		margin-right: 8rpx;
		background-size: contain;
		background-repeat: no-repeat;
	} */

	.label_icon::before {
	/* 	content: '';
		display: block;
		width: 38rpx;
		height: 38rpx; */
		/* 	background-size: contain;
		background-repeat: no-repeat; */
	}

/* 	.form_label--fs32 {
		font-size: 32rpx
	} */

	/* .form_content {
		line-height: 46rpx;
	} */

	.form_value {
		width: 420rpx;
		text-align: right;
		color: #438EF7;
		/* font-weight: 500; */
	}
	
	.form_value.normal {
		color: #1E1E1E;
	}
	
	.form_value.coupon {
		font-size: 26rpx;
		color: rgba(30, 30, 30, 0.50);
	}

	.form_placeholder {
		color: rgba(30, 30, 30, 0.3);
	}

	.form_placeholder--mind {
		font-size: 26rpx;
		color: #F66C9E;
	}

	.form_placeholder--coupon {
		font-size: 32rpx;
		font-weight: bold;
		color: #FE4C26
	}
	
	.form_placeholder--coupon-none {
		font-size: 26rpx;
		color: rgba(30, 30, 30, 0.50);
	}
	
</style>