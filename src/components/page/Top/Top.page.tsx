import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { Category } from '@/api/category/types';
import type { Recipe } from '@/api/recipe/types';
import { Top } from '@/components/page/Top/Top';
import { Footer } from '@/components/common/footer/Footer';

interface Props {
  category: MicroCMSListResponse<Category>;
  recipes: MicroCMSListResponse<Recipe>;
}

export const TopPage = (props: Props): JSX.Element => {
  return (
    <>
      <Top {...props} />
      <Footer />
    </>
  );
};
