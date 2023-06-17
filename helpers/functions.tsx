import { DataInstance } from "@/config/config";
import { SV_CATEGORIES, SV_FOODS, SV_RECIPES } from "@/constants/endpoints";

export const fetchData = (Url: string) => {
  return DataInstance.get(Url);
};

export const fetchDataWithPayload = (
  Url: string,
  id: number
) => {
  return DataInstance.get(`${Url}/${id}`);
};

export const postData = (
  Url: string,
  data: Record<string, string> | object
) => {
  return DataInstance.post(Url, data);
};

export const editData = (url: string, id: number, data: any) => {
  return DataInstance.put(`${url}/${id}`, data);
};

export const deleteData = (url: string, id: number) => {
  return DataInstance.delete(`${url}/${id}`);
};

export const determiner = (item: string) => {
  switch (item) {
    case "categories":
      return SV_CATEGORIES;
    case "foods":
      return SV_FOODS;
    case "recipes":
      return SV_RECIPES;
    case "abouts":
      return "";
    default:
      return "";
  }
};

export const convertLines = (obj: string) => {
  let tempObj: Record<string, string> = JSON.parse(obj);
  return Object.entries(tempObj).map(([key, value]) => (
    <div key={key}>
      <strong>{value}</strong>
    </div>
  ));
};
