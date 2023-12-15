<template>
    <div class="shoppingcart">
        <section  v-show="datas.rubiksCubeType === 0">
            <van-card
                :num="datas.num"
                :price="datas.price+'.00'"
                :desc="datas.Discount"
                :title="datas.name"
                :thumb="datas.bakcgroundImg ? datas.bakcgroundImg : 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'"
            />

        </section>
        

        <section  v-show="datas.rubiksCubeType === 1">
            <van-card
            :num="datas.num"
            :tag="datas.type"
            :price="datas.price+'.00'"
            :desc="datas.Discount"
            :title="datas.name"
            :thumb="datas.bakcgroundImg ? datas.bakcgroundImg : 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'"
            :origin-price="datas.Originalprice+'.00'"
        />

        </section>
       

        <section  v-show="datas.rubiksCubeType === 2">
            <van-card
            :num="datas.num"
            :price="datas.price+'.00'"
            :desc="datas.Discount"
            :title="datas.name"
            :thumb="datas.bakcgroundImg ? datas.bakcgroundImg : 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'"
            >
            <template #tags>
                <block v-for="(item,index) in datas.dynamicTags" :key="index">
                    <van-tag plain type="primary">{{item}}</van-tag>
                </block>
            </template>
            <template #footer>
                <van-button size="mini">详情</van-button>
                <van-button size="mini">删除</van-button>
        </template>
        </van-card>

        </section>
       


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
