<template>
    <div class="squaregrid">
        <van-grid :column-num="datas.count" :clickable="true">
            <van-grid-item v-for="(item,index) in datas.gridarr" :key="index">
                <van-image class="iconimg" :src="item.url" :style="{'width': datas.iconwidths+'px','height': datas.iconheights+'px'}"/>
                <div>{{ item.text }}</div>
            </van-grid-item>
        </van-grid>
        <slot name="deles" />
    </div>
</template>

<script>
export default {
  name: 'squaregrid',
  props: {
    datas: Object,
  },
  data(){
    return{
        
    }
  },
  methods:{
    
  }
}
</script>

<style scoped lang="less">
.squaregrid{
     /* 组件列表 */
    position: relative;
    .iconimg{
        object-fit: contain;
    }
}
</style>
