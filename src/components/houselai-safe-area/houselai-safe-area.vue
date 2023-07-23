<template>
	<view class="houselai-safe-area" :class="{ 'flex-center-center': center, 'safe_area_page--disable-scroll': disableScroll }">
		<slot />
	</view>
</template>

<script>
	export default {
		name: 'houselai-safe-area',
		props: {
			center: {
				type: Boolean,
				default: false
			},
			disableScroll: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
	.houselai-safe-area {
		height: 100%;
		min-height: 100vh;
		padding: 20rpx 22rpx constant(safe-area-inset-bottom) 22rpx;
		padding: 20rpx 22rpx env(safe-area-inset-bottom) 22rpx;
		background-color: #f2f2f2;
		
		&--disable-scroll {
			position: fixed;
			z-index: 112;
		}
	}
</style>