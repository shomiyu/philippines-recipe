import type { GetStaticProps, NextPage } from 'next';
import { apiClient } from '@/utils/apiClient';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { Category } from '@/api/category/types';
import type { Recipe } from '@/api/recipe/types';
import { TopPage } from '@/components/page/Top';

interface Props {
  category: MicroCMSListResponse<Category>;
  recipes: MicroCMSListResponse<Recipe>;
}

const Top: NextPage<Props> = (props: Props) => {
  return (
    <>
      <TopPage {...props} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const category = await apiClient.category.$get();
  const recipe = await apiClient.recipe.$get();

  return {
    props: {
      category: category,
      recipes: recipe,
    },
  };
};

export default Top;
