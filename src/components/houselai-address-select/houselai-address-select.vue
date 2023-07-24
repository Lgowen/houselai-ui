<template>
		<houselai-popup :show="show" @close="handleClose">
			<view class="picker-view_title flex-end" @click="handleConfirm">
				确定
			</view>
			<view class="picker-view_container">
				<picker-view :value="ownValue" @change="handleChange" class="picker-view">
					<picker-view-column class="picker-view-column">
						<view class="item" v-for="item in provinces" :key="item.area_id">{{ item.area_name }}</view>
					</picker-view-column>
					<picker-view-column class="picker-view-column">
						<view class="item" v-for="item in cities" :key="item.area_id">{{ item.area_name }}</view>
					</picker-view-column>
					<picker-view-column class="picker-view-column">
						<view class="item" v-for="item in districts" :key="item.area_id">{{ item.area_name }}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</houselai-popup>
</template>

<script>
	export default {
		name: 'AddressPopup',
		props: {
			show: Boolean,
			provinces: {
				type: Array,
				default: () => []
			},
			cities: {
				type: Array,
				default: () => []
			},
			districts: {
				type: Array,
				default: () => []
			},
			value: {
				type: Array,
				default: () => []
			},
			address: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				ownValue: [0, 0, 0],
			}
		},
		methods: {
			handleClose() {
				this.$emit('update:show', false)
			},
			handleChange(e) {
				const { value } = e.detail
				this.$emit('change', {newVal: value, oldVal: this.ownValue})
				const [newProvince, newCity, newDistrict] = value
				const [province, city, district] = this.ownValue
				if (newProvince !== province) {
					this.ownValue = [newProvince, 0, 0]
				} else if (newCity !== city) {
					this.ownValue = [newProvince, newCity, 0]
				} else {
					this.ownValue = value
				}
			},
			handleConfirm() {
				const [provinceIndex, cityIndex, districtIndex] = this.ownValue
				const confirmArea = [
					this.provinces[provinceIndex],
					this.cities[cityIndex]
				]
				if (this.districts.length) {
					confirmArea.push(this.districts[cityIndex])
				} else {
					this.ownValue = [provinceIndex, cityIndex, -1]
				}
				this.$emit('confirm', {value: this.ownValue, confirmArea})
			}
		},
		created() {
			// this.ownValue = this.value
			// this.ownValue = this.value
		},
		watch: {
			value(newVal) {
				console.log(newVal,' newValnewVal')
				this.ownValue = newVal
				console.log(this.ownValue, 'ownValueownValueownValue')
				// if (newVal) {
				// 	this.ownValue = this.newVal
				// 	// this.ownAddress = this.address
				// }
			},
			show(appear) {
				if (appear) {
					this.ownValue = this.value
				}
			}
		}
	}
</script>

<style scoped>
	
	.picker-view_title {
		width: 100%;
		padding-top: 24rpx;
		padding-right: 24rpx;
		color: #576b95;
		font-size: 30rpx;
	}
	.flex-end {
		display: flex;
		justify-content: flex-end;
	}
	.picker-view {
		display: flex;
	}

	.picker-view-column {
		flex: 1;
	}
</style>