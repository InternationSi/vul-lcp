/*
 * @Author: sfy
 * @Date: 2022-11-28 22:36:56
 * @LastEditors: sfy
 * @LastEditTime: 2022-11-29 23:22:13
 * @FilePath: /vulture/src/designer/material/index.type.ts
 * @Description: update here
 */
import {SetterType} from '@/designer/setter/components'

export interface MetaType {
  name: string,
  label: string,
  type: SetterType,
  initValue: any,
}