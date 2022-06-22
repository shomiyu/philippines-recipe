import { apiClient } from '@/utils';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
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

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await apiClient.recipe.$get({
    query: { offset: 0, limit: 9999 },
  });

  // paths: 事前ビルドするパスを指定
  // fallback: 事前ビルドしたパス以外にアクセスしたときの表示
  return {
    paths: recipes.contents.map((c) => `/recipe/${c.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: Props;
}> => {
  const paramsId = params?.id?.toString() ?? '';
  const recipes = await apiClient.recipe._contentId(paramsId).$get();

  return {
    props: {
      recipe: recipes,
    },
  };
};

export default Recipe;
