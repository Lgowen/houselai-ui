<template>
	<houselai-safe-area>
		<demo-block title="基础用法">
			<houselai-button @click="this.popup = true" size="middle">底部弹出</houselai-button>
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