/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-05-12 17:11:38
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-12 15:33:18
 * @FilePath: /gzm_house/FrontPage/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* import locale from 'element-ui/lib/locale/lang/en'*/ // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
// 自定义指令js
import directive from './directive' // directive
// 自定义插件js
import plugins from './plugins' // plugins
import '@/icons' // icon
import '@/permission' // permission control
// 公共js
import { dateTimeFormat,resetForm, handleTree,addDateRange, } from "@/utils/common";
// 字典标签组件
import DictTag from '@/components/DictTag'
// 字典数据组件
import DictData from '@/components/DictData'
DictData.install()
import { getDicts } from "@/api/sys/dictdata";
// 下载方法
import { download } from '@/utils/request'
// 引入avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import './index.css'

// 全局方法挂载
Vue.prototype.resetForm = resetForm
Vue.prototype.handleTree = handleTree
Vue.prototype.dateTimeFormat = dateTimeFormat
Vue.prototype.addDateRange = addDateRange
Vue.prototype.getDicts = getDicts
Vue.prototype.download = download

// 全局组件挂载
Vue.component('DictTag', DictTag)

Vue.use(directive)
Vue.use(plugins)

// set ElementUI lang to EN
Vue.use(ElementUI)
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(Avue);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
