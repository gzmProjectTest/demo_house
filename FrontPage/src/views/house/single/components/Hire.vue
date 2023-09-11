<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-05-12 17:11:38
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-31 15:41:00
 * @FilePath: /gzm_house/FrontPage/src/views/house/single/components/Hire.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <el-drawer :visible.sync="dialog" :with-header=false style="position: absolute"direction="rtl" :size="'80%'" >
      <div class="modal">
        <div class="modal-body">
          <el-row>
            <el-steps :active="active" process-status="finish" finish-status="success" simple>
              <el-step title="信息录入" />
              <el-step title="账单预览" />
              <el-step title="发起签约" />
            </el-steps>
          </el-row>

          <hire-info
            v-show="active == 0" 
            v-model="hireInfo"
            @prev="prev"
            @next="next"/>

          <BillingDetails
            v-show="active == 1"
            v-model="hireInfo"
            @prev="prev"
            @next="next"
          >
          </BillingDetails>

          <house-signature
            v-show="active == 2"
            ref="signature"
            :placeholder="'点击此区域进行签名'"
            @change="saveSignature"
            @signatureShow="handleConfirm"
            @signatureClear="signatureClear"
            :containerStyle="containerStyle"
            @confirmSigning="confirmSigning"
          ></house-signature>
        </div>

      </div>
    </el-drawer>
</template>
<script>
  import HireInfo from "./HireInfo"
  import BillingDetails from './billingDetails'
  import HouseSignature from '../signature-pc/index.vue'
  export default {
    components: {
      HireInfo,
      BillingDetails,
      HouseSignature
    },
    data() {
      return {
        dialog: false,
        active: 0,
        isEdit: false,
        containerStyle: {
          height: '340px'
        },
        hireInfo: {
          // 承租人信息
          lessee: {
            lesseeType: 'gr',
          },
          // 租约信息
          contract: {
            lesseeType: 'cz',
            feeType: '1',
            feeDay: 1,
            payType: '1',
            lateFeePer: 0,
            lateFeeDay: 0,
            feeMethod: '1',
            contractStartDate: this.getCurrentDate(),
          }
        }
      }
    },
    created(){
      console.log('Hire-page', this.hireInfo)
    },
    methods: {
      show(val){
        this.dialog = true;
        this.hireInfo.contract.monthMoney = val.money;
        this.hireInfo.contract.deposit = val.deposit;
      },
      getCurrentDate() {
        const date = new Date();
        return date;
      },
      prev() {
        if (this.active > 0 && this.active < 3) {
          this.active--;
        }
      },
      next(value) {
        if (this.active < 3) {
          this.active++;
        }
      },
      finishCommit() {
        this.$confirm('是否要提交该房源', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        })
      },
      handleConfirm(val) {
        console.log('117', val)
				// this.$emit('confirm', this.item.type, val)
			},
			saveSignature(val) {
        console.log(121, val);
        this.signatureSrc = val
			},
      signatureClear() {
        console.log('清空')
      },
      confirmSigning() {
        this.dialog = false;
      }
    }
  }
</script>
