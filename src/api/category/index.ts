import { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import { Category } from "./types";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Category>;
  };
};
