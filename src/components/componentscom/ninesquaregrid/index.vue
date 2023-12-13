<template>
    <div class="ninesquaregrid">
        <van-grid :column-num="datas.count" :clickable="true">
            <van-grid-item v-for="(item,index) in datas.gridarr" :key="index" @click="handlegrid(index)">
                <van-image class="iconimg" :src="item.url" :style="{'width': datas.iconwidths+'px','height': datas.iconheights+'px'}"/>
                <div>{{ item.text }}</div>
            </van-grid-item>
        </van-grid>
        <slot name="deles" />
    </div>
</template>

<script>
export default {
  name: 'ninesquaregrid',
  props: {
    datas: Object,
  },
  data:{
    
  },
  methods:{
    handlegrid(index){
        console.log(index)
    }
  }
}
</script>

<style scoped lang="less">
.ninesquaregrid{
     /* 组件列表 */
    position: relative;
    .iconimg{
        object-fit: contain;
    }
}
</style>
