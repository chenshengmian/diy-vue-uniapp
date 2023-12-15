<template>
    <div class="actionbarstyle">
      <!-- 标题 -->
      <h2>{{ datas.text }}</h2>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'actionbarstyle',
    props: {
      datas: Object,
    },
    created() {
  
    },
    methods: {


    },
  }
  </script>
  
  <style scoped lang="less">
      .actionbarstyle{
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          padding: 0 10px 20px;
          box-sizing: border-box;
        
      }
  </style>
  