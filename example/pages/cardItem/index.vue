<template>
	<view class="container">
		<view>
			<view class="title">常规使用</view>
			<view class="item">
				<view class="item-content">
					<houselai-card-item label="标题" value="值" />
				</view>
			</view>
		</view>
		
		<view>
			<view class="title">带icon</view>
			<view class="item">
				<view class="item-content">
					<houselai-card-item label="标题" value="值" labelIcon />
				</view>
				
				<view class="item-content">
					<houselai-card-item label="标题" value="值" valueIcon />
				</view>
			</view>
		</view>
		
		<view>
			<view class="title">业务展示</view>
			<view class="item">
				<view class="item-content">
					<houselai-card-item label="订单编号" value="HSL2131284392492" copy />
				</view>
				
				<view class="item-content">
					<houselai-card-item label="遇到问题?" value="拨打电话" valueIcon />
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
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