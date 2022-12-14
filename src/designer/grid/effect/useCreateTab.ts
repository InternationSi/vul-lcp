/*
 * @Author: sfy
 * @Date: 2022-11-01 23:02:29
 * @LastEditors: sfy
 * @LastEditTime: 2022-11-16 22:57:56
 * @FilePath: /vulture/src/designer/grid/effect/useCreateTab.ts
 * @Description: update here
 */
import { ref, onMounted, onUnmounted } from "vue";
import type { TabType } from './useTabOptions'
import {TABCOMPONENTS} from './consts'
interface useCreateTabPropsType {
  schemaValue:any[]
  addTab: (info:any) => void
}

interface useCreateTabType {
  (o: useCreateTabPropsType): void
}

const useCreateTab:useCreateTabType = ({schemaValue, addTab}) => {
  schemaValue.forEach(item => {
    // 如果为tab容器，则需要判断是否需要初始化
    if(TABCOMPONENTS.includes(item.type)) {
      const info =  {
        title: "tab-容器",
        name: item.i,
        type: item.type,
        tabKeys: item.config?.tabList?.map((tab:any) => {
          const initLayout = tab.gridInfo.length == 0 ? [{ x: 0, y: 0, w: 2, h: 3, i: "0" }] : tab.gridInfo

          return {
            name: tab.name,
            tabLayout:initLayout
          }
        })
      } as TabType
      addTab(info)
    }
  })
}

export default useCreateTab