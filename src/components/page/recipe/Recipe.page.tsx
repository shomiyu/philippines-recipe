import type { Recipe } from '@/api/recipe/types';
import { Footer } from '@/components/common/footer/Footer';
import { RecipeDetails } from '@/components/page/Recipe/Recipe';

interface Props {
  recipe: Recipe;
}

export const RecipePage = (props: Props): JSX.Element => {
  return (
    <>
      <RecipeDetails {...props} />
      <Footer />
    </>
  );
};
