<template>
  <houselai-safe-area>
    <demo-block title="基础使用">
      <houselai-button @click="openAddressSelect">选择省市区</houselai-button>
    </demo-block>
    <houselai-address-select :show.sync="isShow" :value="value" :provinces="provinces" :cities="cities" :districts="districts" @confirm="handleConfirm"/>
  </houselai-safe-area>
</template>

<script>
import demoBlock from "../../components/demo-block.vue";
import { showToast } from "../../../utils/common.js"
export default {
  components: {
    demoBlock,
  },
  data() {
    return {
      isShow: false,
	  value: [0, 0, 0],
      provinces: [
        {
          area_id: "1",
          area_name: "北京市",
        },
        {
          area_id: "2",
          area_name: "上海市",
        },
        {
          area_id: "3",
          area_name: "成都市",
        },
        {
          area_id: "4",
          area_name: "南京市",
        },
      ],
      cities: [
        {
          area_id: "1",
          area_name: "北京市",
        },
        {
          area_id: "2",
          area_name: "上海市",
        },
        {
          area_id: "3",
          area_name: "成都市",
        },
        {
          area_id: "4",
          area_name: "南京市",
        },
      ],
      districts: [
        {
          area_id: "1",
          area_name: "北京市",
        },
        {
          area_id: "2",
          area_name: "上海市",
        },
        {
          area_id: "3",
          area_name: "成都市",
        },
        {
          area_id: "4",
          area_name: "南京市",
        },
      ],
	  confirmValue: ''
    };
  },
  methods: {
	openAddressSelect() {
		this.isShow = true
	},
	handleConfirm(confirmValue) {
		const { value, confirmArea } = confirmValue
		this.value = value
		this.confirmValue = confirmArea.map(item => item.area_name).join(' ')
    showToast({
      title: `选择的地址为:${this.confirmValue}`
    })
		this.isShow = false
	}
  }
};
</script>

<style></style>
