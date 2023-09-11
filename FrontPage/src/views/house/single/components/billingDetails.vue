<template>
  <div style="margin-left: -10px; margin-right: -10px;">
    <el-row class="bor-l">
      <el-col :span="6" style="padding-left: 10px;padding-right: 10px;">
        <div class="div-font-style fangwu">
          <span>账单预览</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="zhangdanyulan">
      <el-col :span="6">
        <div>品牌 : 与之城市青年之家</div>
      </el-col>
      <el-col :span="6">
        <div>门店 : 南浦店</div>
      </el-col>
      <el-col :span="6">
        <div>楼栋 : 碧桂园</div>
      </el-col>
      <el-col :span="6">
        <div>房间号 : 101</div>
      </el-col>
      <el-col :span="6">
        <div>面积 : 12㎡</div>
      </el-col>
      <el-col :span="6">
        <div>定价 : 2000</div>
      </el-col>
      <el-col :span="6">
        <div>地址 : 111</div>
      </el-col>
    </el-row>
    <el-form ref="form" :model="value">
      <el-row class="bor-l">
        <el-col :span="2" style="padding-left: 10px;padding-right: 10px; width: 10%">
          <div class="div-font-style">
            <span>租客信息</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="承租人" prop="lessee.realName"  class="demo-input-suffix">
            <el-input placeholder="请输入内容" readonly v-model="value.lessee.realName">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="lessee.phoneNumber" class="demo-input-suffix">
            <el-input placeholder="请输入内容" readonly v-model="value.lessee.phoneNumber">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="证件号码" prop="lessee.idNo" class="demo-input-suffix">
            <el-input placeholder="请输入内容" readonly v-model="value.lessee.idNo" style="width: 240px"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="bor-l">
        <el-col :span="2" style="padding-left: 10px;padding-right: 10px;width: 10%">
          <div class="div-font-style">
            <span>租赁信息</span>
          </div>
        </el-col>
        <el-col :span="8">
            长租
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="起租日期" prop="contract.contractStartDate" class="demo-input-suffix">
            <el-date-picker
              clearable
              readonly
              v-model="value.contract.contractStartDate"
              type="date"
              format="yyyy 年 MM 月 dd 日"
              placeholder="请选择起租日期"
              style="width: 240px">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="结束日期" prop="contract.contractEndDate" class="demo-input-suffix">
            <el-date-picker
              clearable
              readonly
              v-model="value.contract.contractEndDate"
              type="date"
              format="yyyy 年 MM 月 dd 日"
              placeholder="请选择结束日期"
              style="width: 240px">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="付款方式" prop="contract.payType" class="demo-input-suffix">
            <el-select v-model="value.contract.payType" disabled style="width: 240px">
              <el-option label="月付" :value="'1'" />
              <el-option label="两月付" :value="'2'" />
              <el-option label="季付" :value="'3'" />
              <el-option label="半年付" :value="'4'" />
              <el-option label="年付" :value="'5'" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="房屋租金" prop="contract.monthMoney" class="demo-input-suffix">
            <el-input placeholder="请输入房屋租金" readonly v-model="value.contract.monthMoney" style="width: 240px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="押金方式" prop="contract.pledgeY" class="demo-input-suffix">
            <div class="el-input el-input-group">
              <div class="el-input-group__prepend">押</div>
              <el-select v-model="value.contract.pledgeY" disabled style="width: 185px">
                <el-option
                  v-for="dict in contractOption"
                  :key="dict.value"
                  :label="dict.label"
                  :value="dict.value"/>
              </el-select>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="房屋押金" prop="contract.deposit" class="demo-input-suffix">
            <el-input placeholder="请输入房屋押金" readonly v-model="value.contract.deposit" style="width: 240px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计费方式" prop="contract.feeMethod" class="demo-input-suffix">
            <el-select v-model="value.contract.feeMethod" disabled style="width: 240px">
                <el-option label="按自然月" :value="'1'" />
                <el-option label="按周期" :value="'2'" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="月收租日" prop="contract.feeDay" class="demo-input-suffix">
            <el-input placeholder="请输入每月收租日" readonly v-model="value.contract.feeDay" class="input-with-select">
              <el-select v-model="value.contract.feeType" disabled slot="append" placeholder="请选择" style="width: 80px">
                <el-option label="固定" :value="'1'"></el-option>
                <el-option label="提前" :value="'2'"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="滞纳金" prop="contract.lateFeePer" class="demo-input-suffix">
            <el-input placeholder="请输入内容" readonly v-model="value.contract.lateFeePer">
              <span slot="append">%</span>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-form-item style="text-align: center;padding: 15px; border-top: 1px solid #eee;">
          <el-button type="primary" size="medium" @click="handlePrev">上一步</el-button>
          <el-button type="primary" size="medium" @click="handleNext">开始签约</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
  export default {
    components: {
    },
    name: "billingDetails",
    dicts: ['house_type','house_select_num','house_hire_status','house_deposit_num','sys_id_type'],
    props: {
      value: Object,
      isEdit: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        contractOption: [
          { label: '压一付三', value: '1'},
          { label: '压一付一', value: '2'},
          { label: '无押金', value: '3'},
        ],
      }
    },
    created() {
    },
    methods: {
      handleNext(){
        this.$emit('next');
      },
      handlePrev(){
        this.$emit('prev')
      }
    }
  }
</script>
<style lang = "scss" scoped>
</style>
