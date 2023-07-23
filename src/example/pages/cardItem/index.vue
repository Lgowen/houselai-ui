<template>
	<houselai-safe-area>
		<demo-block title="基础使用">
			<houselai-card-item label="标题" value="值" />
		</demo-block>

		<demo-block title="带icon">
			<houselai-card-item label="标题" value="值" labelIcon />
			<houselai-card-item label="标题" value="值" valueIcon />
		</demo-block>


		<demo-block title="业务展示">
			<houselai-card-item label="订单编号" value="HSL2131284392492" copy />
			<houselai-card-item label="遇到问题?" value="拨打电话" valueIcon />
		</demo-block>
		
	</houselai-safe-area>
</template>

<script>
	import demoBlock from '../../components/demo-block.vue'
	export default {
		components: {
			demoBlock
		}
	}
</script>