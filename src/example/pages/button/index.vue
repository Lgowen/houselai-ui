<template>
	<houselai-safe-area>
		<demo-block title="按钮类型">
			<view class="row flex-between-center">
				<houselai-button>默认按钮</houselai-button>
				<houselai-button type="delete">删除按钮</houselai-button>
				<houselai-button type="main">主要按钮</houselai-button>
			</view>
			<view class="row flex-between-center">
				<houselai-button type="confirm">确认按钮</houselai-button>
				<houselai-button type="danger">危险按钮</houselai-button>
				<houselai-button type="delivery">配送按钮</houselai-button>
			</view>
		</demo-block>

		<demo-block title="按钮大小">
			<view class="row flex-between-center">
				<houselai-button size="mini">小号按钮</houselai-button>
				<houselai-button>默认按钮</houselai-button>
				<houselai-button size="middle">中号按钮</houselai-button>
			</view>
			<houselai-button size="large">大号按钮</houselai-button>
		</demo-block>


		<demo-block title="业务示例">
			<view class="row">
				<houselai-button type="danger" size="mini">删除</houselai-button>
			</view>
			<view class="row flex-between-center">
				<houselai-button>取消订单</houselai-button>
				<houselai-button>退款/售后</houselai-button>
				<houselai-button>撤销申请</houselai-button>
			</view>
			<view class="row">
				<houselai-button type="delete">删除</houselai-button>
			</view>
			<view class="row flex-between-center">
				<houselai-button type="main">保存</houselai-button>
				<houselai-button type="main">继续付款</houselai-button>
			</view>
			<view class="row">
				<houselai-button type="main" size="large">完成</houselai-button>
			</view>
			<houselai-button type="main" size="large">下一步</houselai-button>
		</demo-block>
	</houselai-safe-area>
</template>

<script>
	import demoBlock from '../../components/demo-block.vue'
	export default {
		components: {
			demoBlock
		}
	}
</script>

<style lang="scss">
	.row {
	  height: 44px;
	  margin-bottom: 15px
	}
</style>