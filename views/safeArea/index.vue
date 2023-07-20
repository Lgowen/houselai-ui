<template>
	<houselai-safe-area>
		<view class="content flex-center-center">这里是有底部安全距离的区域</view>
	</houselai-safe-area>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: calc(100vh - constant(safe-area-inset-bottom));
		height: calc(100vh - env(safe-area-inset-bottom));
		background-color: antiquewhite;
	}
</style>