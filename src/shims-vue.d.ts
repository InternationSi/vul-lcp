/*
 * @Author: sfy
 * @Date: 2022-10-13 11:46:06
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-01 22:25:39
 * @FilePath: /vulture/src/shims-vue.d.ts
 * @Description: update here
 */
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "vue-grid-layout";
declare module "rxjs/Rx";
declare module 'monaco-editor/esm/vs/editor/editor.main'

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

