<template>
	<houselai-safe-area>
		<demo-block title="基础用法">
			<houselai-button @click="openMask">显示遮罩层</houselai-button>
			<houselai-overlay :show="overlay" @click="closeMask"></houselai-overlay>
		</demo-block>
	</houselai-safe-area>
</template>

<script>
	import demoBlock from '../../components/demo-block.vue'
	export default {
		components: {
			demoBlock
		},
		data() {
			return {
				overlay: false,
				popup: false
			}
		},
		methods: {
			openMask() {
				this.overlay = true
			},
			closeMask() {
				this.overlay = false
			}
		}
	}
</script>

<style lang="scss">
	.content-wrapper {
		height: 100%;
		@include flex-center-center
	}
	
	.content {
		height: 300rpx;
		@include flex-center-center
	}
</style>