<template>
	<view class="custom-class demo-block houselai-clearfix" :class="padding ? 'demo-block--padding' : ''">
		<view v-if="title" class="demo-block__title">{{ title }}</view>
		<view class="demo-block__card" v-if="card">
			<slot />
		</view>
		<slot v-else />
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			padding: Boolean,
			card: Boolean,
		},

		externalClasses: ['custom-class'],
	}
</script>

<style lang="scss">
	.demo-block {
		&__title {
			margin: 0;
			padding: 20px 15px 15px;
			color: rgba(69, 90, 100, 0.6);
			font-weight: 400;
			font-size: 14px;
		}
		
		&__card {
			overflow: hidden;
			border-radius: 8px;
		}
		
		&--padding {
			padding: 0 15px;
			
		}
		
		.demo-block__title {
		  padding-left: 0;
		}
	}
	
	.houselai-clearfix:after {
	  clear: both;
	  content: "";
	  display: table
	}
</style>