<template>
  <div class="squaregridstyle">
    <!-- 标题 -->
    <h2>{{ datas.text }}</h2>
    <el-form label-width="100px" :model="datas" size="small">
        <el-form-item class="lef" label="显示个数">
            <el-slider
                v-model="datas.count"
                :max="5"
                :min="0"
                input-size="mini"
                show-input
                >
            </el-slider>
        </el-form-item>
        <el-form-item
            label="图标宽度"
            prop="wordSize"
            :hide-required-asterisk="true"
        >
            <el-input
                type="number"
                v-model.number="datas.iconwidths"
                placeholder="请输入图标宽度"
                :maxlength="2"
            />
        </el-form-item>
        <el-form-item
            label="图标长度"
            prop="wordSize"
            :hide-required-asterisk="true"
        >
            <el-input
                type="number"
                v-model.number="datas.iconheights"
                placeholder="请输入图标宽度"
                :maxlength="2"
            />
        </el-form-item>
        <el-form-item class="lef" label="宫图"> </el-form-item>
        <vuedraggable v-model="datas.gridarr" v-bind="dragOptions">
        <transition-group>
          <section
            class="imgBanner"
            v-for="(item, index) in datas.gridarr"
            :key="item + index"
          >
            <i class="el-icon-circle-close" @click="deleteimg(index)" />
            <!-- 图片 -->
            <div>
              <div
                class="imagBox"
                v-for="replaceIconIndex in 1"
                :key="replaceIconIndex"
                @click="replaceIcon(replaceIconIndex, index)"
              >
                <img
                  class="imag"
                  :src="replaceIconIndex == 1 ? item.url : item.inactive"
                  draggable="false"
                />
                <div>
                  {{ replaceIconIndex == 1 ? '点击切换' : '未选中时' }}
                </div>
              </div>
            </div>
            <!-- 标题和链接 -->
            <div class="imgText">
              <div class="imgText-top">
                <el-input
                  v-model="item.text"
                  placeholder="导航名称"
                  size="mini"
                />
                <!-- <div class="imgText-top-r">
                  <span>小圆点</span>
                  <el-checkbox v-model="item.isDot"></el-checkbox>
                </div> -->
              </div>
              <!-- 标题和链接 -->
              <div class="imgTextChild">
                <!-- 选择类型 -->
                <el-select
                  v-model="item.linktype"
                  placeholder="请选择跳转类型"
                  size="mini"
                >
                  <el-option
                    v-for="iteml in optionsType"
                    :key="iteml.name"
                    :label="iteml.name"
                    :value="iteml.type"
                  >
                  </el-option>
                </el-select>

                <!-- 输入链接 -->
                <el-input
                  size="mini"
                  placeholder="请输入链接，输入前确保可以访问"
                 
                >
                </el-input>
              </div>
            </div>
          </section>
        </transition-group>
      </vuedraggable>
        <el-button
          @click="$refs.upload.showUpload()"
          class="uploadImg"
          type="primary"
          plain
        >
          <i class="el-icon-plus" />点击添加宫格
        </el-button>
       
    </el-form>
     <!-- 上传图片 -->
        <uploadimg
            ref="upload"
            @uploadInformation="uploadInformation"
            @handleClose="handleClose"
        />
  </div>
</template>

<script>
import uploadimg from '../../uploadImg' //图片上传
import vuedraggable from 'vuedraggable' //拖拽组件

export default {
  name: 'squaregridstyle',
  props: {
    datas: Object,
  },
  data() {
    return {
        replaceIconIndex: null,
        replaceIndex: null,
        dragOptions: {
          animation: 200,
        },
        optionsType: [
        {
          type: '10',
          name: '内部链接',
        },
        {
          type: '11',
          name: '外部链接',
        },
      ], // 选择跳转类型
    }
  },
  components: {
    uploadimg,
    vuedraggable
  },
  created() {

  },
  methods: {
    // 提交
    uploadInformation(res) {
      console.log(res)
      if (this.replaceIconIndex == 1) {
        this.datas.gridarr[this.replaceIndex].url = res
        this.replaceIconIndex = null
        return
      }
      if (this.replaceIconIndex == 2) {
        this.datas.gridarr[this.replaceIndex].inactive = res
        this.replaceIconIndex = null
        return
      }
      this.datas.gridarr.push({
        /** 图标名称文字 */
        text: '',
        /** 图标图片 */
        url: res,
        inactive: res,
        /** 是否显示小圆点 */
        isDot: false,
        /** 跳转类型 */
        linktype: '10',
        /** 跳转参数 */
        http: {},
      })
    },
    /* 取消上传 */
    handleClose() {
      this.replaceIconIndex = null
    },
    /* 删除图片 */
    deleteimg(index) {
      this.datas.gridarr.splice(index, 1)
    },
    /* 点击图片 */
    replaceIcon(replaceIconIndex, replaceIndex) {
      this.replaceIconIndex = replaceIconIndex
      this.replaceIndex = replaceIndex
      console.log(replaceIconIndex, replaceIndex)
      this.$refs.upload.showUpload()
    },
  },
}
</script>

<style scoped lang="less">
    .squaregridstyle{
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
        /* 上传图片按钮 */
        .uploadImg {
            width: 345px;
            height: 40px;
            margin-top: 20px;
        }
        .imgBanner {
            padding: 6px 12px;
            margin: 16px 7px;
            border-radius: 2px;
            background-color: #fff;
            box-shadow: 0 0 4px 0 rgba(10, 42, 97, 0.2);
            display: flex;
            position: relative;

            /* 删除图标 */
            .el-icon-circle-close {
            position: absolute;
            right: -10px;
            top: -10px;
            cursor: pointer;
            font-size: 19px;
            }

            /* 图片 */
            .imagBox {
            position: relative;
            border-radius: 5px;
            overflow: hidden;
            cursor: pointer;
            .imag {
                width: 60px;
                height: 60px;
            }
            div {
                position: absolute;
                top: 0;
                width: 60px;
                line-height: 60px;
                border-radius: 5px;
                text-align: center;
                font-size: 12px;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.3);
            }
            }

            /* 图片字 */
            .imgText {
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            justify-content: space-around;
            /* 图片字 */
            .imgTextChild {
                width: 100%;
                display: flex;
                box-sizing: border-box;
                justify-content: space-between;
                .fir-sele.el-select {
                width: 40%;
                }
            }
            .imgText-top {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .imgText-top-r {
                flex: 1;
                text-align: center;
                span {
                    margin-right: 10px;
                }
                }
                /deep/.el-input,
                .el-input--mini {
                flex: 1;
                }
            }
            }
        }
        .icon-tip {
            font-size: 12px;
            color: red;
        }
    }
</style>
