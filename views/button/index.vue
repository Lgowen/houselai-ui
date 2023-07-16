<template>
	<view class="container">
		<view>
			<view class="title">按钮类型</view>
			<view class="item">
				<view class="item-content">
					<houselai-button>默认按钮</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="delete">删除按钮</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="main">主要按钮</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="confirm">确认按钮</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="danger">危险按钮</houselai-button>
				</view>
			</view>
		</view>

		<view>
			<view class="title">按钮大小</view>
			<view class="item">
				<view class="item-content">
					<houselai-button>默认按钮</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button size="mini">小号按钮</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button size="middle">中号按钮</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button size="large">大号按钮</houselai-button>
				</view>
			</view>
		</view>


		<view>
			<view class="title">业务示例</view>
			<view class="item">
				<view class="item-content">
					<houselai-button type="danger" size="mini">删除</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button>取消订单</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button>退款/售后</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button>撤销申请</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="delete">删除</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="main">保存</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="main">继续付款</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="main" size="large">完成</houselai-button>
				</view>
				<view class="item-content">
					<houselai-button type="main" size="large">下一步</houselai-button>
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
		mounted() {},
		onLoad() {},
		onShow() {},
		filters: {},
		computed: {},
		watch: {}
	}
</script>

<style lang="scss">
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