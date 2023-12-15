<template>
    <div class="shoppingcart">
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        />

        <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
            origin-price="10.00"
        />

        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
            >
            <template #tags>
                <van-tag plain type="primary">标签</van-tag>
                <van-tag plain type="primary">标签</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
        </template>
        </van-card>


        <slot name="deles" />
    </div>
</template>

<script>
export default {
  name: 'shoppingcart',
  props: {
    datas: Object,
  },
  methods:{
   
  }
}
</script>

<style scoped lang="less">
.shoppingcart{
     /* 组件列表 */
    position: relative;
    
}
</style>
