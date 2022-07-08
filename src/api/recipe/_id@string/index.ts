import type { MicroCMSObjectContent, MicroCMSQueries } from 'microcms-js-sdk';
import type { Recipe } from '../types';

export interface Methods {
  get: {
    query?: MicroCMSQueries;
    resBody: Recipe & MicroCMSObjectContent;
  };
}
