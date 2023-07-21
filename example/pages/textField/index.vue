<template>
	<houselai-safe-area>
		<demo-block title="基础用法">
			<houselai-text-field title="单元格" value="内容" border />
		</demo-block>
		
		<demo-block title="卡片风格">
			<houselai-text-field-group>
				<houselai-text-field title="收货人" value="碎冰蓝" border />
				<houselai-text-field title="手机号" value="15171541987" border />
				<houselai-text-field title="所在地区" value="广东省 深圳市 南山区 粤海街道" border />
				<houselai-text-field title="详细地址" value="广东省深圳市前湾1路前海嘉里商务中心T1 702/3楼下混果汁旁边" />
			</houselai-text-field-group>
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

<style>
</style>