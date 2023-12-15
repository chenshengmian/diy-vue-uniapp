<template>
    <div class="actionbar">
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="cart-o" text="购物车" />
            <van-action-bar-icon icon="shop-o" text="店铺" />
            <van-action-bar-button type="danger" text="立即购买"  />
        </van-action-bar>


        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" dot />
            <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
            <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
            <van-action-bar-button type="warning" text="加入购物车" />
            <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>

        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-action-bar-icon icon="cart-o" text="购物车" />
            <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
            <van-action-bar-button type="warning" text="加入购物车" />
            <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>

        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="shop-o" text="店铺" />
            <van-action-bar-button color="#be99ff" type="warning" text="加入购物车" />
            <van-action-bar-button color="#7232dd" type="danger" text="立即购买" />
        </van-action-bar>


        <slot name="deles" />
    </div>
</template>

<script>
export default {
  name: 'actionbar',
  props: {
    datas: Object,
  },
  methods:{
   
  }
}
</script>

<style scoped lang="less">
.actionbar{
     /* 组件列表 */
    position: relative;
    
}
</style>
