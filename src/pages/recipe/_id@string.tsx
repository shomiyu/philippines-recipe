import { apiClient } from '@/utils';
import type { GetStaticProps, NextPage } from 'next';
import { Recipe } from '@/api/recipe/types';
import { RecipePage } from '@/components/page/Recipe';

interface Props {
  recipe: Recipe;
}

const Recipe: NextPage<Props> = (props: Props) => {
  return (
    <>
      <RecipePage {...props} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: Props;
}> => {
  const paramsId = params?.id?.toString() ?? '';
  const recipe = await apiClient.recipe._contentId(paramsId).$get();

  return {
    props: {
      recipe: recipe,
    },
  };
};

export default Recipe;
