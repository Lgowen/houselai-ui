<template>
	<text :style="{ color: color, 'font-size': size + 'px' }" class="houselai-icons"
		@click="handleClick">{{icons[type] || ''}}</text>
</template>

<script>
	import icons from './houselai-icon.js';
	export default {
		name: 'houselai-icon',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
			},
			customIcons: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				icons: icons
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	@font-face {
		font-family: houselaiicon;
		src: url('./houselai-icon.ttf') format('truetype');
	}

	/* #endif */

	.houselai-icons {
		font-family: houselaiicon;
		text-decoration: none;
		text-align: center;
	}
</style>