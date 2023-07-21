<template>
	<houselai-safe-area>
		<demo-block title="基础用法">
			<houselai-button @click="this.overlay = true">显示遮罩层</houselai-button>
			<houselai-overlay :show="overlay" @click="this.overlay = false"></houselai-overlay>
		</demo-block>
		
		
		<demo-block title="基础用法">
			<houselai-button @click="this.popup = true">显示底部Popup</houselai-button>
			<houselai-popup :show.sync="popup">
				<view class="content-wrapper">
					<view class="content">
						我是弹出的内容
					</view>
				</view>
			</houselai-popup>
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