<template>
	<view>
		<houselai-overlay :show="show" @click="onClickOverlay"/>
		<view class="houselai-popup popup-leave-to houselai-popup--bottom houselai-popup--round popup-enter-active"
			:style="{ zIndex }" :class="{ 'popup-enter-to': show, 'popup-leave-active': show, 'houselai--safe-area-inset-bottom': safeArea }">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Popup",
		props: {
			show: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: Number,
				default: 1010
			},
			safeArea: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
			}
		},
		watch: {
		},
		methods: {
			onClickOverlay() {
				this.$emit('close')
			}
		},
		computed: {

		},
	}
</script>

<style scoped lang="scss">
	.houselai-popup {
		position: fixed;
		/* min-height: 20rpx; */
		max-height: 100%;
		overflow-y: auto;
		background-color: #fff;
		transition: height 0.3s ease-out;
		
		&--bottom {
			bottom: 0;
			left: 0;
			width: 100%;
			
			&.houselai-popup--round {
				border-radius: 16px 16px 0 0
			}
		}
	}

	.popup-enter-active {
		transition: transform 0.3s ease-out;
	}

	.popup-leave-active {
		transition: transform 0.3s ease-in
	}

	.popup-leave-to {
		transform: translate3d(0, 100%, 0);
	}
	
	.popup-enter-to {
		transform: translate3d(0, 0, 0);
	}
</style>