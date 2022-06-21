import type { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import type { Recipe } from './types';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Recipe>;
  };
};
