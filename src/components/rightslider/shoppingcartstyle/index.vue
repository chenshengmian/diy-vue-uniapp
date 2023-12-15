<template>
    <div class="shoppingcartstyle">
      <!-- 标题 -->
      <h2>{{ datas.text }}</h2>

      <p style="color: #323233; font-size: 14px">商品图片</p>
        <div style="height: 10px"></div>
        <p style="color: #969799; font-size: 12px">
          建议尺寸：800x800 像素，尺寸不匹配时，图片将被压缩或拉伸以铺满画面
        </p>

        <div style="height: 10px"></div>
        <!-- 背景图 -->
        <div class="backgroundImg" @click="uploadI('bakcgroundImg')">
          <img
            draggable="false"
            v-if="!datas.bakcgroundImg"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
            alt=""
          />
          <img draggable="false" v-else :src="datas.bakcgroundImg" alt="" />
          <p>更换图片</p>
        </div>

      <div
      style="margin: 20px 0; height: 1px; background: rgb(235, 237, 240)"
    ></div>


      <el-form label-width="80px" :model="datas" size="small" :rules="rules">
        <!-- 标题内容 -->
        <el-form-item label="选择模板" class="lef"> </el-form-item>

        <!-- 商品样式选择 -->
        <el-radio-group v-model="datas.rubiksCubeType" class="select-sp">
          <el-radio
            style="margin-top: 10px; margin-right: 10px"
            :label="item.type"
            v-for="(item, index) in rubiksCubeTypes"
            :key="index"
            >{{ item.content }}</el-radio
          >
        </el-radio-group>

        <div style="height: 30px"></div>
        <!-- 商品标题 -->
          <el-form-item label="商品标题" class="lef" prop="name">
            <el-input
              v-model="datas.name"
              placeholder="请填写商品标题"
              maxlength="20"
            ></el-input>
          </el-form-item>

          <!-- 描述信息 -->
          <el-form-item label="描述信息" class="lef">
            <el-input
              v-model="datas.Discount"
              placeholder="请填写描述信息也可不填"
              maxlength="45"
            ></el-input>
          </el-form-item>

          <!-- 商品价格 -->
          <el-form-item label="商品价格" class="lef">
            <el-input
              v-model="datas.price"
              placeholder="请填写商品价格"
              maxlength="45"
            ></el-input>
          </el-form-item>

           <!-- 商品原价 -->
          <section v-if="datas.rubiksCubeType==1">
            <el-form-item label="商品原价" class="lef">
            <el-input
              v-model="datas.Originalprice"
              placeholder="请填写商品价格"
              maxlength="45"
            ></el-input>
          </el-form-item>

          <el-form-item label="商品属性" class="lef">
            <el-input
              v-model="datas.type"
              placeholder="请填写商品属性"
              maxlength="45"
            ></el-input>
          </el-form-item>
          </section>

          <section v-if="datas.rubiksCubeType==2">
            <el-form-item label="商品属性" class="lef">
              <el-tag
                :key="tag"
                v-for="tag in datas.dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
          </section>
          

           <!-- 商品数量 -->
           <el-form-item label="商品数量" class="lef">
            <el-input-number 
              v-model="datas.num"
              :min="1"
              controls-position="right"
              maxlength="45"
            ></el-input-number >
          </el-form-item>
      </el-form>
       <!-- 上传图片 -->
    <uploadimg ref="upload" @uploadInformation="uploadInformation" />
    </div>
  </template>
  
  <script>
  import uploadimg from '../../uploadImg' //图片上传
  export default {
    name: 'shoppingcartstyle',
    props: {
      datas: Object,
    },
    data(){
      return{
        danqian: '', //当前选中的是背景还是头像
        rubiksCubeTypes: [
          {
            type: 0,
            content: '样式一',
          },
          {
            type: 1,
            content: '样式二',
          },
          {
            type: 2,
            content: '样式三',
          }
        ],
        inputVisible: false,
        inputValue: ''
      }
    },
    created() {
  
    },
    methods: {
      uploadI(res) {
        this.danqian = res
        this.$refs.upload.showUpload()
      },
       // 提交
      uploadInformation(res) {
        this.datas[this.danqian] = res
      },
      handleClose(tag) {
        this.datas.dynamicTags.splice(this.datas.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.datas.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
    components: { uploadimg },
  }
  </script>
  
  <style scoped lang="less">
      .shoppingcartstyle{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding: 0 10px 20px;
        box-sizing: border-box;
           /* 标题 */
        h2 {
            padding: 24px 16px 24px 0;
            margin-bottom: 15px;
            border-bottom: 1px solid #f2f4f6;
            font-size: 18px;
            font-weight: 600;
            color: #323233;
        }
        .select-sp {
          display: flex;
          flex-wrap: wrap;
        }
        .backgroundImg {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          width: 60px;
          height: 60px;
          position: relative;
          background: #f2f4f6;

          img {
            width: 100%;
            height: auto;
          }

          p {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 20px;
            font-size: 12px;
            color: #fff;
            background: rgba(0, 0, 0, 0.5);
            text-align: center;
            line-height: 20px;
          }
        }
        .el-tag + .el-tag {
          margin-left: 10px;
        }
        .button-new-tag {
          margin-left: 10px;
          height: 32px;
          line-height: 30px;
          padding-top: 0px;
          margin-top: 10px;
          padding-bottom: 0;
        }
        .input-new-tag {
          width: 90px;
          margin-left: 0px;
          vertical-align: bottom;
        }
      }
  </style>
  