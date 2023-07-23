<template>
	<houselai-safe-area>
		<demo-block title="基础用法">
			<houselai-card :cardList="cardList" />
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
				cardList: [{
						label: '订单编号',
						value: 'HSL2131284392492',
						copy: true
					},
					{
						label: '支付宝交易号',
						value: '2022041421312843924'
					},
					{
						label: '下单时间',
						value: '2022-04-14 16:23:00'
					},
					{
						label: '付款时间',
						value: '2022-04-14 17:23:00'
					},
					{
						label: '订单备注',
						value: '这是一段表达的话，只展示15个字啊啊啊啊啊嗷嗷啊',
					},
					{
						label: '遇到问题?',
						value: '拨打电话',
						valueIcon: true
					}
				]
			}
		}
	}
</script>