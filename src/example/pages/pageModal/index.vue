<template>
   <view class="page">
    <houselai-page-modal
      :show="pageModal"
      :main-img="mainImg"
      @handleClick="clickPageModal"
      @handleClose="pageModal = false"
    />
   </view>
</template>

<script>
export default {
    data() {
        return {
            pageModal: true,
            mainImg: 'https://env-00jx4160lavv.normal.cloudstatic.cn/flower-mall/20230816-64dc8f39c118b.webp'
        }
    },
    methods: {
        clickPageModal() {
            uni.showModal({
                title: '点击了主图区域',
                content: '这是一个模态弹窗',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定');
                    } else if (res.cancel) {
                        console.log('用户点击取消');
                    }
                }
            });
        }
    }
}
</script>


<<style scope lang="scss">
    .page {
        width: 100vw;
        height: 100vh;
        background-color: #FFF;
    }
</style>