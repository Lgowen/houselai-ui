<template>
	<view class="houselai-text-field-group">
		<slot />
	</view>
</template>

<script>
	export default {
		name: "houselai-text-field-group"
	}
</script>

<style lang="scss">
	.houselai-text-field-group {
		overflow: hidden;
		border-radius: 18rpx;
	}
</style>