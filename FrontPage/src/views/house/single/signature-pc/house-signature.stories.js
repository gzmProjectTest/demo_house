/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-31 15:24:13
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-31 15:26:41
 * @FilePath: /gzm_house/FrontPage/src/views/house/single/signature-pc/house-signature.stories.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import HouseSignature from './index.vue'

export default {
  title: 'Bussiness/HouseSignature',
  component: HouseSignature,
  parameters: {
    viewport: {
      defaultViewport: 'iphonex'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HouseSignature },
  template: '<house-signature :placeholder="placeholder"/>',
})

export const Basic = Template.bind({})

Basic.args = {
  placeholder: '点击此区域进行签名'
}