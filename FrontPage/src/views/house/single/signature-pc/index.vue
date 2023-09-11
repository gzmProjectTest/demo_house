<template>
  <div class="house-signature">
    <div ref="containerRef" class="house-signature-container" :style="containerStyle" @click="show">
      <span v-show="!imgSrc" class="placeholder">{{ placeholder }}</span>
      <div v-show="imgSrc" class="signature-img" :style="imgStyle">
        <img :src="imgSrc" alt="签名">
      </div>
    </div>
    <el-dialog title="签名" class="house-signature-popup" width="540px" :visible="visible" :append-to-body="true" :show-close="false">
      <div class="signature-container">
        <vue-signature ref="vueSignature" :customStyle="customStyle"></vue-signature>
        <div class="btns">
          <div class="btn-group1">
            <el-button color="#ff8000" round size="mini" @click="save">保存</el-button>
            <el-button color="#ccc" round size="mini" @click="cancel">取消</el-button>
          </div>
          <div class="btn-group2">
            <el-button color="#f56c6c" round size="mini" @click="clear">清空</el-button>
            <el-button color="#FF8000" round size="mini" @click="undo">回退</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <div style="text-align: center;padding: 15px;">
      <el-button type="primary" size="medium" @click="confirmSigning">确定签约</el-button>
    </div>
  </div>
</template>

<script>
import VueSignature from './vue-signature'
import { Dialog, Button } from 'element-ui'

export default {
  name: 'house-signature',
  props: {
    placeholder: {
      type: String,
      default: '点击进行签名'
    },
    containerStyle: {
      type: Object,
      default: {
        height: '125px'
      }
    }
  },
  data() {
    return {
      visible: false,
      imgSrc: '',
      imgStyle: {
        width: '100%',
        heigth: '160px'
      },
      customStyle: {
        width: '478px',
        height: '300px'
      }
    }
  },
  components: {
    [VueSignature.name]: VueSignature,
    [Dialog.name]: Dialog,
		[Button.name]: Button
  },
  created() {
  },
  mounted() {

  },
  methods: {
    show() {
      if(this.imgSrc) {
        this.$refs.vueSignature.fromDataURL(this.imgSrc)
      }
      this.visible = true
      this.$emit('signatureShow')
    },
    save() {
      if(this.$refs.vueSignature) {
        let { isEmpty, data } = this.$refs.vueSignature.saveSignature()
        if(!isEmpty) {
          this.imgSrc = data
        }
        this.visible = false
        this.$emit('change', this.imgSrc)
      }
    },
    clear() {
      this.imgSrc = ''
      this.$refs.vueSignature && this.$refs.vueSignature.clearSignature()
      this.$emit('signatureClear')
    },
    initClear() {
      this.imgSrc = ''
      this.$refs.vueSignature && this.$refs.vueSignature.clearSignature()
    },
    undo() {
      this.$refs.vueSignature && this.$refs.vueSignature.undoSignature()
    },
    cancel() {
      this.visible = false
      this.$refs.vueSignature && this.$refs.vueSignature.clearSignature()
      this.$emit('signatureCancel')
    },
    confirmSigning() {
      this.$emit('confirmSigning', )
    }
  }
}

</script>

<style lang="scss">
.house-signature {
  &-container {
    width: 100%;
    height: 205px;
    margin: 10px auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    position: relative;
    .placeholder {
      font-size: 13px;
      color: #969799;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .signature-img {
      transform: rotate(0deg);
      height: 100%;
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
.house-signature-popup {
  .signature-container {
    position: relative;
    width: 96%;
    height: 96%;
    margin: 2%;
    border: 1px solid #ccc;
    .btns {
      position: absolute;
      right: 0;
      bottom: 10px;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row nowrap;
      touch-action: none;
      user-select: none;
      .btn-group1 {
        .van-button {
          margin-left: 10px;
        }
      }
      .btn-group2 {
        .van-button {
          margin-right: 10px;
        }
      }
      .van-button {
        transform: rotate(0deg);
      }
      .btn {
        display: inline-block;
        margin-right: 20px;
        > .iconfont:before {
          font-size: 35px;
          display: inline-block;
          transform: rotate(0deg)
        }
      }
    }
  }
}

</style>