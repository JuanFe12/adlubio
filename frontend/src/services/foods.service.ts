import callFetch, { CallFetchInterface } from "./config.service";
import { FoodInterface } from "../interfaces/food.interface";

export const getFoodService = (): Promise<any> => {
  const rsp = callFetch({
    url: "foods",
    method: "GET",
  })
    .then((result) => {
      const data = result.data;
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return rsp;
  console.log(rsp);
};
