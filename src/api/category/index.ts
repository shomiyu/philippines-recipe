import type { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import type { Category } from "./types";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Category>;
  };
};
