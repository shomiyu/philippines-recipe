import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { Category } from '@/api/category/types';
import type { Recipe } from '@/api/recipe/types';
import style from '@/components/page/Top/Top.module.scss';
import { Top } from '@/components/page/Top/Top';
import Footer from '@/components/common/Footer';

interface Props {
  category: MicroCMSListResponse<Category>;
  recipe: MicroCMSListResponse<Recipe>;
}

export const TopPage = (props: Props): JSX.Element => {
  return (
    <>
      <main>
        <Top {...props} />
      </main>
      <Footer />
    </>
  );
};
