<template>
	<view class="houselai-overlay" :class="{ 'houselai-overlay--show': show }" v-show="show" :style="{ zIndex }" @click.stop="onClick"></view>
</template>

<script>
	export default {
		name: "overlay",
		props: {
			show: Boolean,
			zIndex: {
				type: Number,
				default: 1
			}
		},
		methods: {
			onClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style scoped>
	.houselai-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>