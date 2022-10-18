/*
 * @Author: sfy
 * @Date: 2022-10-17 22:03:19
 * @LastEditors: sfy
 * @LastEditTime: 2022-10-18 22:40:38
 * @FilePath: /vulture/packages/vul-admin/src/request/record.ts
 * @Description: update here
 */
import Api from "@/api";
import { API_URL } from "@/api/env";
import type { SaveRecordType } from "@/components/vulTable/type/record.type";

export const recordCreate = async (params: SaveRecordType) => {
  const res = await Api.request({
    method: "post",
    url: `${API_URL}/module/{moduleName}/record`,
    data: params,
  });
  return res;
};
export const recordListFind = async (moduleName: string) => {
  const res = await Api.request({
    method: "get",
    url: `${API_URL}/module/${moduleName}/record`,
  });
  return res;
};