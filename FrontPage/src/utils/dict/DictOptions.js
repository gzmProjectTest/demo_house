/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-05-12 17:11:38
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-26 16:13:43
 * @FilePath: /gzm_house/FrontPage/src/utils/dict/DictOptions.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mergeRecursive } from "@/utils/common";
import dictConverter from './DictConverter'

export const options = {
  metas: {
    '*': {
      /**
       * 字典请求，方法签名为function(dictMeta: DictMeta): Promise
       */
      request: (dictMeta) => {
        console.log(`load dict ${dictMeta.type}`)
        return Promise.resolve([])
      },
      /**
       * 字典响应数据转换器，方法签名为function(response: Object, dictMeta: DictMeta): DictData
       */
      responseConverter,
      labelField: 'label',
      valueField: 'value',
    },
  },
  /**
   * 默认标签字段
   */
  DEFAULT_LABEL_FIELDS: ['label', 'name', 'title'],
  /**
   * 默认值字段
   */
  DEFAULT_VALUE_FIELDS: ['value', 'id', 'uid', 'key'],
}

/**
 * 映射字典
 * @param {Object} response 字典数据
 * @param {DictMeta} dictMeta 字典元数据
 * @returns {DictData}
 */
function responseConverter(response, dictMeta) {
  const dicts = response.content instanceof Array ? response.content : response
  if (dicts === undefined) {
    console.warn(`no dict data of "${dictMeta.type}" found in the response`)
    return []
  }
  return Array.isArray(dicts) && dicts.length > 0 && dicts.map(d => dictConverter(d, dictMeta))
}

export function mergeOptions(src) {
  mergeRecursive(options, src)
}

export default options
