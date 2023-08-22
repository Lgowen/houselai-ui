<template>
  <houselai-safe-area>
    <demo-block title="基础使用">
      <houselai-button @click="openAddressSelect">选择省市区</houselai-button>
    </demo-block>
    <houselai-address-select
      :show.sync="isShow"
      :value="value"
      :provinces="provinces"
      :cities="cities"
      :districts="districts"
      @confirm="handleConfirm"
      @change="handleChange"
    />
  </houselai-safe-area>
</template>

<script>
import demoBlock from "../../components/demo-block.vue";
import { showToast } from "../../../utils/common.js";
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
          area_name: "天津市",
        },
      ],
      cities: [
        {
          area_id: "1",
          area_name: "北京市",
        },
      ],
      districts: [
        {
          area_id: "11",
          area_name: "东城区",
        },
        {
          area_id: "12",
          area_name: "西城区",
        },
        {
          area_id: "13",
          area_name: "朝阳区",
        },
        {
          area_id: "14",
          area_name: "丰台区",
        },
      ],
      confirmValue: "",
    };
  },
  methods: {
    openAddressSelect() {
      this.isShow = true;
    },
    handleConfirm(confirmValue) {
      const { value, confirmArea } = confirmValue;
      this.value = value;
      this.confirmValue = confirmArea.map((item) => item.area_name).join(" ");
      showToast({
        title: `选择的地址为:${this.confirmValue}`,
      });
      this.isShow = false;
    },
    handleChange(value) {
      const { newVal, oldVal } = value
      const [newProvince, newCity, newDistrict] = newVal;
      const [oldProvince, oldCity, oldDistrict] = oldVal;
      if (newProvince !== oldProvince) {
        if (this.provinces[newProvince].area_id === "1") {
          this.cities = [
            {
              area_id: "1",
              area_name: "北京市",
            },
          ];
          this.districts = [
            {
              area_id: "11",
              area_name: "东城区",
            },
            {
              area_id: "12",
              area_name: "西城区",
            },
            {
              area_id: "13",
              area_name: "朝阳区",
            },
            {
              area_id: "14",
              area_name: "丰台区",
            },
          ];
        } else {
          this.cities = [
            {
              area_id: "2",
              area_name: "天津市",
            },
          ];
          this.districts = [
            {
              area_id: "21",
              area_name: "和平区",
            },
            {
              area_id: "22",
              area_name: "河东区",
            },
            {
              area_id: "23",
              area_name: "河西区",
            },
            {
              area_id: "23",
              area_name: "南开区",
            },
          ];
        }
      } else if (newCity !== oldCity) {
      } else {
      }
    },
  },
};
</script>

<style></style>
