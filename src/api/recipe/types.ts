import type { Category } from '@/api/category/types';
import type { MicroCMSContentId, MicroCMSImage } from 'microcms-js-sdk';

export interface MaterialList {
  fieldId: string;
  name: string;
  quantity: string;
}

export interface Step {
  fieldId: string;
  title?: string;
  text: string;
  thumbnail?: MicroCMSImage;
}

export type Recipe = {
  title: string;
  tagalog: string;
  thumbnail?: MicroCMSImage;
  category?: Category & MicroCMSContentId;
  time?: string;
  level: ['easy' | 'normal' | 'difficult'];
  overview?: string;
  introduction?: string;
  serving?: number;
  materialList?: MaterialList[];
  point?: string;
  step?: Step[];
  eating?: string;
  comment?: string;
};
