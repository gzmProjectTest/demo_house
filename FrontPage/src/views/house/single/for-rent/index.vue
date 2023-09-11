<template>
  <el-card shadow="never">
    <el-row class="bor-l">
      <el-col :span="6" style="padding-left: 10px;padding-right: 10px;">
        <div class="div-font-style fangwu">
          <span>房屋信息</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="fangwuxinxi">
      <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" label-width="68px">
        <el-form-item label="品牌" prop="brandId">
          <el-select v-model="queryParams.brandId" placeholder="全部品牌">
            <el-option v-for="item in brands"
                        :key="item.brandId"
                        :label="item.brandName"
                        :value="item.brandId"/>
          </el-select>
        </el-form-item>
        <el-form-item label="项目" prop="projectId">
          <el-select v-model="queryParams.projectId" placeholder="全部项目">
            <el-option v-for="item in projects"
                        :key="item.classifyId"
                        :label="item.classifyName"
                        :value="item.classifyId"/>
          </el-select>
        </el-form-item>
        <el-form-item label="公寓" prop="apartmentId">
          <el-select v-model="queryParams.apartmentId" placeholder="全部公寓">
            <el-option v-for="item in apartments"
                        :key="item.apartmentId"
                        :label="item.apartmentName"
                        :value="item.apartmentId"/>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-select v-model="queryParams.state" placeholder="全部状态" clearable>
            <el-option
              v-for="dict in dictTypeHouseState"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="queryParams.address" class="input-width" placeholder="请输入地址" clearable></el-input>
        </el-form-item>
        <el-form-item label="门店" prop="store">
          <el-input v-model="queryParams.store" class="input-width" placeholder="请输入门店" clearable></el-input>
        </el-form-item>
        <el-form-item label="房间号" prop="houseNo">
          <el-input v-model="queryParams.houseNo" class="input-width" placeholder="请输入房间号" clearable></el-input>
        </el-form-item>
        <el-form-item label="面积" prop="area">
          <el-input v-model="queryParams.area" class="input-width" placeholder="请输入面积" clearable></el-input>
        </el-form-item>
        <el-form-item label="定价" prop="fixPrice">
          <el-input v-model="queryParams.fixPrice" class="input-width" placeholder="请输入定价" clearable></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-form ref="form" :model="value" :rules="rules" :inline="true">
      <el-form-item label="房东名称" prop="lessee.realName"  class="demo-input-suffix">
        <el-input placeholder="请输入内容" v-model="value.lessee.realName">
        </el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="lessee.phoneNumber" class="demo-input-suffix">
        <el-input placeholder="请输入内容" v-model="value.lessee.phoneNumber">
        </el-input>
      </el-form-item>
      <el-form-item label="证件类型" prop="lessee.idType" class="demo-input-suffix">
        <el-select v-model="value.lessee.idType" style="width: 240px">
          <el-option
            v-for="dict in idTypeOption"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码" prop="lessee.idNo" class="demo-input-suffix">
        <el-input placeholder="请输入内容" v-model="value.lessee.idNo" style="width: 240px"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" prop="lessee.birthday" class="demo-input-suffix">
        <el-date-picker clearable
                        v-model="value.lessee.birthday"
                        type="date"
                        format="yyyy 年 MM 月 dd 日"
                        placeholder="请选择出生日期" style="width: 240px">
        </el-date-picker>
      </el-form-item>
      <el-row class="bor-l">
        <el-col :span="2" style="padding-left: 10px;padding-right: 10px;width: 10%">
          <div class="div-font-style">
            <span>租赁信息</span>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="起租日期" prop="contract.contractStartDate" class="demo-input-suffix">
        <el-date-picker clearable
                        v-model="value.contract.contractStartDate"
                        type="date"
                        format="yyyy 年 MM 月 dd 日"
                        placeholder="请选择起租日期" style="width: 240px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期" prop="contract.contractEndDate" class="demo-input-suffix">
        <el-date-picker clearable
                        v-model="value.contract.contractEndDate"
                        type="date"
                        format="yyyy 年 MM 月 dd 日"
                        placeholder="请选择结束日期" style="width: 240px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="付款方式" prop="contract.payType" class="demo-input-suffix">
        <el-select v-model="value.contract.payType" style="width: 240px">
          <el-option label="月付" :value="'1'" />
          <el-option label="两月付" :value="'2'" />
          <el-option label="季付" :value="'3'" />
          <el-option label="半年付" :value="'4'" />
          <el-option label="年付" :value="'5'" />
        </el-select>
      </el-form-item>
      <el-form-item label="房屋租金" prop="contract.monthMoney" class="demo-input-suffix">
        <el-input placeholder="请输入房屋租金" v-model="value.contract.monthMoney" style="width: 240px"></el-input>
      </el-form-item>
      <el-form-item label="押金方式" prop="contract.pledgeY" class="demo-input-suffix">
        <div class="el-input el-input-group">
          <div class="el-input-group__prepend">押</div>
          <el-select v-model="value.contract.pledgeY" style="width: 185px">
            <el-option
              v-for="dict in contractOption"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"/>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="房屋押金" prop="contract.deposit" class="demo-input-suffix">
        <el-input placeholder="请输入房屋押金" v-model="value.contract.deposit" style="width: 240px"></el-input>
      </el-form-item>
      <el-form-item label="计费方式" prop="contract.feeMethod" class="demo-input-suffix">
        <el-select v-model="value.contract.feeMethod" style="width: 240px">
            <el-option label="按自然月" :value="'1'" />
            <el-option label="按周期" :value="'2'" />
        </el-select>
      </el-form-item>
      <el-form-item label="月收租日" prop="contract.feeDay" class="demo-input-suffix">
        <el-input placeholder="请输入每月收租日" v-model="value.contract.feeDay" class="input-with-select">
          <el-select v-model="value.contract.feeType" slot="append" placeholder="请选择" style="width: 80px">
            <el-option label="固定" :value="'1'"></el-option>
            <el-option label="提前" :value="'2'"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="滞纳金" prop="contract.lateFeePer" class="demo-input-suffix">
        <el-input placeholder="请输入内容" v-model="value.contract.lateFeePer">
          <span slot="append">%</span>
        </el-input>
      </el-form-item>
      <el-form-item label="超应收日" prop="contract.lateFeeDay" class="demo-input-suffix">
        <el-input placeholder="请输入超过应收日" v-model="value.contract.lateFeeDay">
          <span slot="append">开始计算</span>
        </el-input>
      </el-form-item>
      <el-row>
        <el-form-item style="float: right;">
          <el-button size="medium" type="primary" @click="handleSave">保存</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </el-card>
</template>
<script>
  import { getUserProjectList,getUserApartmentList } from "@/api/house/apartment";
  export default {
    name: "for-rent",
    data() {
      return {
        value: {
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
        },
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          store: '', // 门店
        },
        idTypeOption: [
          {
            label: '居民身份证',
            value: '1'
          },
          {
            label: '港澳通行证',
            value: '2'
          },
          {
            label: '军人身份证',
            value: '3'
          },
          {
            label: '台湾通行证',
            value: '4'
          },
          {
            label: '护照',
            value: '5'
          }
        ],
        dictTypeHouseState: [
          { label: '空置', value: '1'},
          { label: '已租', value: '2'},
          { label: '预定', value: '3'},
        ],
        contractOption: [
          { label: '压一付三', value: '1'},
          { label: '压一付一', value: '2'},
          { label: '无押金', value: '3'},
        ],
        isAddContact: false,
        isAddCohabit: false,
        isAddIdImg: false,
        rules: {
          'lessee.realName': [{required: true, message: '请输入承租人', trigger: 'blur'}],
          'lessee.phoneNumber': [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {pattern: /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/, message: "请输入正确的手机号码", trigger: "blur"}
          ],
          'lessee.idType': [{required: true, message: '请选择证件类型', trigger: 'blur'}],
          'lessee.idNo': [{required: true, message: '请填写证件号码', trigger: 'blur'}],
          'lessee.sex': [{required: true, message: '请选择性别', trigger: 'blur'}],
          'lessee.birthday': [{required: true, message: '请填写出生日期', trigger: 'blur'}],
          'lessee.nationName': [{required: true, message: '请选择民族', trigger: 'blur'}],
          'lessee.punterType': [{required: true, message: '请选择客户类型', trigger: 'blur'}],
          'lessee.sourceType': [{required: true, message: '请选择来源渠道', trigger: 'blur'}],
          'contract.contractStartDate': [{required: true, message: '请填写起租日期', trigger: 'blur'}],
          'contract.contractEndDate': [{required: true, message: '请填写结束日期', trigger: 'blur'}],
          'contract.payType': [{required: true, message: '请选择付款方式', trigger: 'blur'}],
          'contract.monthMoney': [{required: true, message: '请填写房屋租金', trigger: 'blur'}],
          'contract.pledgeY': [{required: true, message: '请选择押金方式', trigger: 'blur'}],
          'contract.deposit': [{required: true, message: '请填写房屋押金', trigger: 'blur'}],
          'contract.feeMethod': [{required: true, message: '请选择计费方式', trigger: 'blur'}],
          'contract.feeDay': [{required: true, message: '请填写收租日', trigger: 'blur'}],
          'contract.lateFeePer': [{required: true, message: '请填写滞纳金', trigger: 'blur'}],
          'contract.lateFeeDay': [{required: true, message: '请填写超过应收日', trigger: 'blur'}],
        },
        brands: [],
        projects: [],
        apartments: [],
      }
    },
    created() {
      this.getUserProjectList();
      this.getUserApartmentList();
    },
    methods: {
      /** 获得项目列表 */
      getUserProjectList() {
        getUserProjectList().then(response => {
          this.brands = response.data.brands;
          this.projects = response.data.projects;
        })
      },
      /** 获得公寓列表 */
      getUserApartmentList() {
        getUserApartmentList().then(response => {
          this.apartments = response.data
        })
      },
      getCurrentDate() {
        const date = new Date();
        return date;
      },
      handleSave(){
        console.log('value', this.value)
        console.log('queryParams', this.queryParams)
        const that = this
        this.$confirm('是否要提交该房源', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          setTimeout(() => {
            this.$router.push({
              path: 'houseSearch',
              query: {
                add: '1'
              }
            })
          }, 200)
          that.$message.success('房屋信息录入成功!');
        })
      },
     
    }
  }
</script>
<style lang = "scss" scoped>
  ::v-deep .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    width: 90px;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    font-weight:normal
  }
</style>
