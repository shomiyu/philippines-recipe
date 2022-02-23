import { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import { Recipe } from "../types";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Recipe>;
  };
};
