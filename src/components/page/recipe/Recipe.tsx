import type { Recipe } from '@/api/recipe/types';

interface Props {
  recipe: Recipe;
}

export const RecipeDetails = ({ recipe }: Props): JSX.Element => {
  return (
    <>
      <p>レシピ</p>
    </>
  );
};
